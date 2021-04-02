(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{107:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(r),p=n,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return r?a.a.createElement(m,s(s({ref:t},u),{},{components:r})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(107)),i={id:"ecosystem",title:"Ecosystem",slug:"/introduction/ecosystem"},s={unversionedId:"introduction/ecosystem",id:"introduction/ecosystem",isDocsHomePage:!1,title:"Ecosystem",description:"There are three primitive herbs libraries that are at Herbs' core, helping modeling your domain and preparing it to expose metadata. To consume these metadata and bring value to your domain there are glue libraries. They create bridges between Herbs core and other libraries already consolidated in the node.js community.",source:"@site/docs/introduction/ecosystem.md",slug:"/introduction/ecosystem",permalink:"/docs/introduction/ecosystem",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/introduction/ecosystem.md",version:"current",sidebar:"sidebar",previous:{title:"Architecture guides",permalink:"/docs/introduction/architecture-guidelines"},next:{title:"What's a use case?",permalink:"/docs/usecase"}},c=[{value:"Herbs Core",id:"herbs-core",children:[]},{value:"Glues",id:"glues",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are three primitive herbs libraries that are at Herbs' core, helping modeling your domain and preparing it to expose metadata. To consume these metadata and bring value to your domain there are ",Object(o.b)("a",{parentName:"p",href:"docs/glues"},"glue")," libraries. They create bridges between Herbs core and other libraries already consolidated in the node.js community."),Object(o.b)("h2",{id:"herbs-core"},"Herbs Core"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu"},Object(o.b)("strong",{parentName:"a"},"Gotu")),": Model your business ",Object(o.b)("a",{parentName:"p",href:"/docs/entity"},"entities")," with validation and business rules."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/herbsjs/buchu"},Object(o.b)("strong",{parentName:"a"},"Buchu")),": Model your ",Object(o.b)("a",{parentName:"p",href:"/docs/usecase"},"use cases")," to be readable, auditable and secure."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/herbsjs/suma"},Object(o.b)("strong",{parentName:"a"},"Suma")),": It is the base library for value validation used internally by Gotu and Buchu."),Object(o.b)("h2",{id:"glues"},"Glues"),Object(o.b)("p",null,"Glues are libraries that consume your domain's metadata and dynamically generate for you a significant part of the infrastructure code, such as REST controllers, resolvers and types for GraphQL, specialized repositories, as well as documentation and other applications that we haven't even imagined yet."),Object(o.b)("p",null,"It is the Glues that elevate your domain and bring value to the effort of decorating your domain with metadata."),Object(o.b)("p",null,"There are some Glues maintained directly by the Herbs core developers, but we believe that the ecosystem is still in its infancy, so we encourage the creation of other Glues and thus help more developers to unlock their domains."),Object(o.b)("p",null,"You can find some glues ",Object(o.b)("a",{parentName:"p",href:"/docs/glues"},"here"),"."))}l.isMDXComponent=!0}}]);