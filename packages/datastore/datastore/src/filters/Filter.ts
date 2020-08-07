import { TypeOperatorMap } from "./Operators";

type Test = {
    eq: string
}

export type Filter<T = any> = {
    [P in keyof Partial<T>]: T[P] | { [K in keyof Partial<TypeOperatorMap<T[P]>>]: T[P] }
} & {
    or?: Filter<T>;
    and?: Filter<T>;
    not?: Filter<T>;
};
