(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return o}));var a=r(3),n=r(7),b=(r(0),r(116)),l={id:"queries",title:"Queries",sidebar_label:"Queries"},c={unversionedId:"queries",id:"version-datastore-0.5.0/queries",isDocsHomePage:!1,title:"Queries",description:"The DataStore Models provides two functions for executing queries.",source:"@site/versioned_docs/version-datastore-0.5.0/queries.md",slug:"/queries",permalink:"/docs/queries",editUrl:"https://github.com/aerogear/offix/edit/master/website/versioned_docs/version-datastore-0.5.0/queries.md",version:"datastore-0.5.0",sidebar_label:"Queries",sidebar:"version-datastore-0.5.0/docs",previous:{title:"Offix Datastore Concepts",permalink:"/docs/concepts"},next:{title:"Edits",permalink:"/docs/edits"}},i=[{value:"query()",id:"query",children:[{value:"Operators",id:"operators",children:[]},{value:"Operator support:",id:"operator-support",children:[]},{value:"Examples:",id:"examples",children:[]}]},{value:"queryById()",id:"querybyid",children:[]}],p={toc:i};function o(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The DataStore Models provides two functions for executing queries."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"#query"},"query()"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"#operators"},"Operators")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"#querybyid"},"queryById()"))),Object(b.b)("h2",{id:"query"},"query()"),Object(b.b)("p",null,"Here we can fetch all documents for a Model or a selection\nof the documents using filters."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-typescript"},"TaskModel.query().then((data) => {}) // Retrieves all tasks\n")),Object(b.b)("p",null,"In the code snippet above, we fetch all tasks. To fetch a\nselection of the documents we can use filters.\nWe filter using expressions and operators."),Object(b.b)("h3",{id:"operators"},"Operators"),Object(b.b)("p",null,"All supported operators:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Operator"),Object(b.b)("th",{parentName:"tr",align:null},"Value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ne"),Object(b.b)("td",{parentName:"tr",align:null},"Input not equal to value")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"eq"),Object(b.b)("td",{parentName:"tr",align:null},"Input equal to value")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"le"),Object(b.b)("td",{parentName:"tr",align:null},"Input less than or equal to value")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"lt"),Object(b.b)("td",{parentName:"tr",align:null},"Input less than (strict) value")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ge"),Object(b.b)("td",{parentName:"tr",align:null},"Input greater than or equal to value")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"gt"),Object(b.b)("td",{parentName:"tr",align:null},"Input greater than (strict) value")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"in"),Object(b.b)("td",{parentName:"tr",align:null},"Input array or string contained in value")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"contains"),Object(b.b)("td",{parentName:"tr",align:null},"Value starts with input")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"startsWith"),Object(b.b)("td",{parentName:"tr",align:null},"Value starts with input")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"endsWith"),Object(b.b)("td",{parentName:"tr",align:null},"Value ends with input")))),Object(b.b)("h3",{id:"operator-support"},"Operator support:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Operator"),Object(b.b)("th",{parentName:"tr",align:"center"},"Mathematical"),Object(b.b)("th",{parentName:"tr",align:"center"},"String"),Object(b.b)("th",{parentName:"tr",align:"center"},"Date"),Object(b.b)("th",{parentName:"tr",align:"center"},"Array"),Object(b.b)("th",{parentName:"tr",align:"center"},"Boolean"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ne"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"eq"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"le"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"lt"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ge"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"gt"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"in"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"contains"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"startsWith"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"endsWith"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2716\ufe0f")))),Object(b.b)("h3",{id:"examples"},"Examples:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-typescript"},"TaskModel.query({ title: \"test\" }); // Fetch all tasks where title = 'test' \n\nTaskModel.query({\n    title: { ne: 'test' }\n}); // Fetch all tasks where title != 'test'\n\nTaskModel.query({\n    numberOfDaysLeft: {\n        ge: 5, lt: 20\n    }\n}); // Fetch all tasks where numberOfDaysLeft >= 5 and < 20\n\nTaskModel.query({\n    title: 'test',\n    numberOfDaysLeft: { gt: 5 }\n}); // Fetch all tasks where title = 'test' and numberOfDaysLeft > 5\n")),Object(b.b)("p",null,"You can also create expressions with the following logical operators:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"AND"),Object(b.b)("li",{parentName:"ul"},"OR"),Object(b.b)("li",{parentName:"ul"},"NOT")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-typescript"},"TaskModel.query({\n  or: {\n    title: \"test\",\n    not: { numberOfDaysLeft: { gt: 5 } }\n  }\n}); // Fetch all tasks where (title = 'test') or (numberOfDaysLeft is not > 5)\n")),Object(b.b)("h2",{id:"querybyid"},"queryById()"),Object(b.b)("p",null,"Here we fetch documents using their primary key.\nQuering by Id is faster because DataStore index documents by their primary key."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-typescript"},"const task = await TaskModel.queryById(documentId);\n")))}o.isMDXComponent=!0},116:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(r),s=a,O=d["".concat(l,".").concat(s)]||d[s]||u[s]||b;return r?n.a.createElement(O,c(c({ref:t},p),{},{components:r})):n.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,l=new Array(b);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<b;p++)l[p]=r[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);