"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),v=n,f=d["".concat(c,".").concat(v)]||d[v]||p[v]||i;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={title:"Overview",description:"Adding Webhooks in Casdoor",keywords:["webhook"],authors:["huang-yilong"]},a=void 0,s={unversionedId:"webhooks/overview",id:"webhooks/overview",title:"Overview",description:"Adding Webhooks in Casdoor",source:"@site/docs/webhooks/overview.md",sourceDirName:"webhooks",slug:"/webhooks/overview",permalink:"/zh/docs/webhooks/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/webhooks/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Adding Webhooks in Casdoor",keywords:["webhook"],authors:["huang-yilong"]},sidebar:"tutorialSidebar",previous:{title:"Webhooks",permalink:"/zh/docs/category/webhooks"},next:{title:"Deploy",permalink:"/zh/docs/category/deploy"}},c={},l=[{value:"Overview",id:"overview",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Event systems enable you to create integrations that subscribe to specific events in Casdoor. When one of these events is triggered, a JSON payload will be sent to the configured URL via a POST request. The application will parse the JSON payload and execute the specified function. Events include signup, login, logout, and user updates, all of which are stored in the action field of the record. Event systems can be used to update an external issue from users."))}p.isMDXComponent=!0}}]);