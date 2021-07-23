(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[252],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(n),g=s,d=h["".concat(l,".").concat(g)]||h[g]||c[g]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98775:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(22122),s=n(19756),a=(n(67294),n(3905)),o={id:"herbs2gql",title:"Herbs2gql",sidebar_label:"Herbs2gql",slug:"/glues/herbs2gql"},i=void 0,l={unversionedId:"glues/herbs2gql",id:"glues/herbs2gql",isDocsHomePage:!1,title:"Herbs2gql",description:"herbs2gql creates GraphQL types based on herbs entities (gotu) and usecases (buchu), based on Apollo GraphQL.",source:"@site/docs/glues/herbs2gql.md",sourceDirName:"glues",slug:"/glues/herbs2gql",permalink:"/docs/glues/herbs2gql",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/glues/herbs2gql.md",version:"current",frontMatter:{id:"herbs2gql",title:"Herbs2gql",sidebar_label:"Herbs2gql",slug:"/glues/herbs2gql"},sidebar:"sidebar",previous:{title:"What's glues",permalink:"/docs/glues"},next:{title:"Herbs2Rest",permalink:"/docs/glues/herbs2rest"}},u=[{value:"Getting started",id:"getting-started",children:[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]}]},{value:"Features",id:"features",children:[{value:"GraphQL Type",id:"graphql-type",children:[]},{value:"GraphQL Input",id:"graphql-input",children:[]},{value:"GraphQL Query",id:"graphql-query",children:[]},{value:"GraphQL Mutation",id:"graphql-mutation",children:[]},{value:"GraphQL Subscription",id:"graphql-subscription",children:[]},{value:"Custom Names or Conventions",id:"custom-names-or-conventions",children:[]}]},{value:"Contribute",id:"contribute",children:[]},{value:"License",id:"license",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"herbs2gql creates GraphQL types based on herbs entities (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu"},"gotu"),") and usecases (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/buchu"},"buchu"),"), based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/"},"Apollo")," GraphQL."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"installing"},"Installing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ npm install @herbsjs/herbs2gql\n")),(0,a.kt)("h3",{id:"using"},"Using"),(0,a.kt)("p",null,"All methods returns a string in GraphQL format representing the type based (",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/api/apollo-server/#gql"},"gql"),") and a ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/data/resolvers/"},"resolver")," (when expected)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { entity, field } = require('@herbsjs/herbs')\nconst { entity2type } = require('@herbsjs/herbs2gql')\n\nconst user = entity('User', {\n    id: field(String),\n    name: field(String),\n    document: field(String),\n    age: field(Number),\n    active: field(Boolean),\n})\n\nconst gql = entity2type(user)\nconsole.log(gql)\n/* Result\ntype User {\n    id: String\n    name: String\n    document: String\n    age: Float\n    active: Boolean\n}\n*/\n")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"graphql-type"},"GraphQL Type"),(0,a.kt)("p",null,"To convert a Herbs Entity to GraphQL Type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const entity = entity('User', {\n    id: field(String),\n    name: field(String),\n    document: field(String),\n    age: field(Number),\n    active: field(Boolean),\n})\n\nconst gql = entity2type(entity)\n")),(0,a.kt)("h3",{id:"graphql-input"},"GraphQL Input"),(0,a.kt)("p",null,"To convert a Herbs Entity to GraphQL Input:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const entity = entity('UserFilter', {    \n    name: field(String),    \n    age: field(Number),    \n})\n\nconst gql = entity2input(entity)\n")),(0,a.kt)("h3",{id:"graphql-query"},"GraphQL Query"),(0,a.kt)("p",null,"To convert a Herbs Use Case to GraphQL Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const usecase = usecase('Get User', {\n    request: {\n        id: Number,\n        document: String\n    },\n\n    response: User\n})\n\nconst resolverFunc = (parent, args, context, info) => { }\n\nconst [gql, resolver] = usecase2query(usecase, resolverFunc)\n")),(0,a.kt)("h3",{id:"graphql-mutation"},"GraphQL Mutation"),(0,a.kt)("p",null,"To convert a Herbs Use Case to GraphQL Mutation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const usecase = usecase('Update User', {\n    request: {\n        id: Number,\n        name: String,\n        age: Number,\n        active: Boolean\n    },\n\n    response: User\n})\n\nconst resolverFunc = (parent, args, context, info) => { }\n\nconst [gql, resolver] = usecase2mutation(usecase, resolverFunc)\n")),(0,a.kt)("h3",{id:"graphql-subscription"},"GraphQL Subscription"),(0,a.kt)("p",null,"To convert a Herbs Use Case to GraphQL Subscription:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const usecase = usecase('New User Notification', {\n    request: {\n        id: Number,        \n    },\n\n    response: UserMessage\n})\n\nconst resolverFunc = () => { }\n\nconst [gql, resolver] = usecase2subscription(usecase, resolverFunc)\n")),(0,a.kt)("h3",{id:"custom-names-or-conventions"},"Custom Names or Conventions"),(0,a.kt)("p",null,"In Herbs it is possible to include personalized names for queries, mutations, inputs and types\ncustom names are always prioritized"),(0,a.kt)("h4",{id:"custom-names"},"Custom Names"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = { inputName: 'An-Entity' }\n\n// for entity2input\nconst gql = entity2input(givenAnInput, options)\n\n// for entity2type\nconst gql = entity2type(givenAnEntity, options)\n\n//for mutation, query or subscription example using mutation\nconst [gql, resolver] = usecase2mutation(givenAnUseCase, resolverFunc, options)\n")),(0,a.kt)("h4",{id:"conventions"},"Conventions"),(0,a.kt)("p",null,"At the convention, a function must be sent, it must return a text formatted according to the sended convention"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = { convention: { inputNameRule: (str) => `snake_case_returned` }}\n\n// for entity2input\nconst gql = entity2input(givenAnInput, options)\n\n// for entity2type\nconst gql = entity2type(givenAnEntity, options)\n\n//for mutation, query or subscription example using mutation\nconst [gql, resolver] = usecase2mutation(givenAnUseCase, resolverFunc, options)\n")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,"Additionally you can view a simple demo application of this library in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/todolist-on-herbs"},"todolist-on-herbs"),"."),(0,a.kt)("h2",{id:"contribute"},"Contribute"),(0,a.kt)("p",null,"Come with us to make an awesome ",(0,a.kt)("em",{parentName:"p"},"herbs2gql"),"."),(0,a.kt)("p",null,"Now, if you do not have the technical knowledge and also have intended to help us, do not feel shy, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs2gql/issues"},"click here")," to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)"),(0,a.kt)("p",null,"If you would like to help contribute to this repository, please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs2gql/blob/main/.github/CONTRIBUTING.md"},"CONTRIBUTING")),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"herbsshelf")," is released under the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs2gql/blob/main/LICENSE.md"},"MIT license")))}c.isMDXComponent=!0}}]);