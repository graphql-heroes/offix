/**
 * @jest-environment jsdom
 */

import "fake-indexeddb/auto";
import { MutationsReplicationQueue } from "../src/replication/mutations/MutationsQueue";
import { LocalStorage, CRUDEvents } from "../src/storage";
import { IndexedDBStorageAdapter } from "../src/storage/adapters/IndexedDBStorageAdapter";
import { WebNetworkStatus } from "../src/network/WebNetworkStatus";
import { MUTATION_QUEUE } from "../src/replication";
import { CombinedError } from "urql";

const DB_NAME = "test";
const STORE_NAME = "test";
const adapter = new IndexedDBStorageAdapter();
const storage = new LocalStorage(adapter);
const model = { getStoreName: () => STORE_NAME } as any;

const windowEvents: any = {};
window.addEventListener = jest.fn((event, cb) => {
    windowEvents[event] = cb;
});
const networkStatus = new WebNetworkStatus();
networkStatus.isOnline = jest.fn();

const fireNetworkOnline = () => {
    (networkStatus.isOnline as jest.Mock).mockResolvedValue(true);
    windowEvents.online();
};
const fireNetworkOffline = () => {
    (networkStatus.isOnline as jest.Mock).mockResolvedValue(false);
    windowEvents.offline();
};

const mockClienWithResponse = (response: Promise<any>, onMutation?: Function): any => {
    return {
        mutation: (...args: any[]) => {
            if (onMutation) onMutation(...args);
            return {
                toPromise: async () => {
                    if (await networkStatus.isOnline()) return response;
                    return Promise.reject(new CombinedError({
                        networkError: Error('something went wrong!'),
                    }));
                }
            }
        }
    };
};
const buildQueue = (client: any) => {
    return new MutationsReplicationQueue({
        storage,
        model,
        client,
        networkStatus,
    });
};
const dummyRequest = {
    eventType: CRUDEvents.ADD,
    version: 1,
    variables: { id: "2" },
    storeName: STORE_NAME,
    mutation: {} as any
};


beforeAll(async () => {
    adapter.addStore({ name: MUTATION_QUEUE });
    adapter.addStore({ name: STORE_NAME });
    await adapter.createStores(DB_NAME, 1);
});

beforeEach(() => storage.remove(STORE_NAME));

test("Queue works when online", (done) => {
    const client = mockClienWithResponse(Promise.resolve({}), () => {
        networkStatus.isOnline().then((isOnline) => {
            expect(isOnline).toBe(true);
            done();
        });
    });
    const queue = buildQueue(client);

    queue.init().then(() => {
        fireNetworkOffline();
        queue.addMutationRequest(dummyRequest);
        fireNetworkOnline();
    });
});

test.skip("Update id after suscess response", (done) => {
    const client = mockClienWithResponse(
        Promise.resolve({ test: { id: 'server_id', name: 'test' } })
    );
    const queue = buildQueue(client);

    storage.save(STORE_NAME, { id: "client_id", name: "test" })
        .then((data) => {
            queue.init().then(() => {
                fireNetworkOnline();
                queue.addMutationRequest({
                    ...dummyRequest,
                    eventType: CRUDEvents.ADD,
                    variables: data
                });
            });
        });

    // TODO do this inside success event listener
    // const result = await storage.query(STORE_NAME);
    // expect(result[0].id).toEqual('server_id');
});
