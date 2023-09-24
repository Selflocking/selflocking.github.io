"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={title:"Casdoor Public API",description:"Casdoor Public API",keywords:["Casdoor Public API"],authors:["hsluoyz"]},i=void 0,c={unversionedId:"basic/public-api",id:"basic/public-api",title:"Casdoor Public API",description:"Casdoor Public API",source:"@site/docs/basic/public-api.md",sourceDirName:"basic",slug:"/basic/public-api",permalink:"/ru/docs/basic/public-api",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/basic/public-api.md",tags:[],version:"current",frontMatter:{title:"Casdoor Public API",description:"Casdoor Public API",keywords:["Casdoor Public API"],authors:["hsluoyz"]},sidebar:"tutorialSidebar",previous:{title:"(Optional) Try with Docker",permalink:"/ru/docs/basic/try-with-docker"},next:{title:"Tutorials",permalink:"/ru/docs/basic/tutorials"}},s={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Casdoor is developed using a frontend and backend separated approach, as opposed to JSP or PHP. The Go backend exposes its functionalities solely through a RESTful API. The React frontend code consumes this API to render the web UI and perform various actions. This RESTful API is referred to as the ",(0,n.kt)("inlineCode",{parentName:"p"},"Casdoor Public API"),". The API can be utilized by the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Casdoor's frontend"),(0,n.kt)("li",{parentName:"ul"},"Casdoor client SDKs"),(0,n.kt)("li",{parentName:"ul"},"Any other customized code from the application side")),(0,n.kt)("p",null,"The full reference for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Casdoor Public API")," can be found on Swagger: ",(0,n.kt)("a",{parentName:"p",href:"https://door.casdoor.com/swagger"},(0,n.kt)("strong",{parentName:"a"},"https://door.casdoor.com/swagger")),". These Swagger docs are automatically generated using Beego's Bee tool."))}p.isMDXComponent=!0}}]);