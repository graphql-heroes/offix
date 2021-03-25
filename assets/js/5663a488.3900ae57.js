(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(116)),o={id:"cli",title:"Datastore CLI",sidebar_label:"Datastore CLI"},l={unversionedId:"cli",id:"version-datastore-0.5.0/cli",isDocsHomePage:!1,title:"Datastore CLI",description:"The Datastore CLI tool will generate JSON Schema files and types for your data models.",source:"@site/versioned_docs/version-datastore-0.5.0/cli.md",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/aerogear/offix/edit/master/website/versioned_docs/version-datastore-0.5.0/cli.md",version:"datastore-0.5.0",sidebar_label:"Datastore CLI",sidebar:"version-datastore-0.5.0/docs",previous:{title:"React Native - using Datastore for Mobile",permalink:"/docs/react-native"}},c=[{value:"Installing the CLI tool",id:"installing-the-cli-tool",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Running the Datastore CLI",id:"running-the-datastore-cli",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Datastore CLI tool will generate JSON Schema files and types for your data models."),Object(i.b)("h2",{id:"installing-the-cli-tool"},"Installing the CLI tool"),Object(i.b)("p",null,"You can install ",Object(i.b)("inlineCode",{parentName:"p"},"@offix/cli")," npm:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm install --save-dev @offix/cli")),Object(i.b)("p",null,"or with yarn:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"yarn add --dev @offix/cli")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"You need a graphql schema containing your data models. We will use this sample graphql schema ",Object(i.b)("inlineCode",{parentName:"p"},"model.graphql"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-graphql"},'scalar GraphQLObjectID\n\n"""\n  @model\n  @datasync\n"""\ntype Task {\n    _id: GraphQLObjectID!\n    title: String\n    description: String\n    numberOfDaysLeft: Number\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@model")," indicates that ",Object(i.b)("inlineCode",{parentName:"p"},"Task")," is a data model. ",Object(i.b)("inlineCode",{parentName:"p"},"@datasync")," indicates that ",Object(i.b)("inlineCode",{parentName:"p"},"Task")," has ",Object(i.b)("inlineCode",{parentName:"p"},"datasync")," enabled.\nThe scalar ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLObjectID")," is the id type. ",Object(i.b)("inlineCode",{parentName:"p"},"_id")," will be used as the primary key in your local database."),Object(i.b)("h2",{id:"running-the-datastore-cli"},"Running the Datastore CLI"),Object(i.b)("p",null,"With yarn:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"yarn offix generate ./path/to/models ./path/to/output/dir")),Object(i.b)("p",null,"or with npx:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npx offix generate ./path/to/models ./path/to/output/dir")),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"@offix/cli")," assumes your models are in ",Object(i.b)("inlineCode",{parentName:"p"},"./src/models")," and\ngenerates the output files in ",Object(i.b)("inlineCode",{parentName:"p"},"./src/datasync/generated"),"."))}s.isMDXComponent=!0}}]);