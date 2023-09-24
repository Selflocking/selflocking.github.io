"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},y=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,k=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(k,c(c({ref:t},y),{},{components:r})):n.createElement(k,c({ref:t},y))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Keycloak",description:"Using Keycloak Syncer to synchronize Keycloak",keywords:["Keycloak","Syncer"],authors:["Marvelousp4"]},c=void 0,i={unversionedId:"syncer/Keycloak",id:"syncer/Keycloak",title:"Keycloak",description:"Using Keycloak Syncer to synchronize Keycloak",source:"@site/docs/syncer/Keycloak.md",sourceDirName:"syncer",slug:"/syncer/Keycloak",permalink:"/ko/docs/syncer/Keycloak",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/syncer/Keycloak.md",tags:[],version:"current",frontMatter:{title:"Keycloak",description:"Using Keycloak Syncer to synchronize Keycloak",keywords:["Keycloak","Syncer"],authors:["Marvelousp4"]},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/ko/docs/syncer/Database"},next:{title:"Tokens",permalink:"/ko/docs/category/tokens"}},l={},s=[{value:"Keycloak Syncer",id:"keycloak-syncer",level:2}],y={toc:s};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"keycloak-syncer"},"Keycloak Syncer"),(0,o.kt)("p",null,"The Keycloak syncer is essentially the same as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/syncer/Database"},"database syncer"),", with the added functionality of automatic configuration for Keycloak ",(0,o.kt)("inlineCode",{parentName:"p"},"Tables")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Table columns"),"."),(0,o.kt)("p",null,"Furthermore, the Keycloak syncer will fetch data from the ",(0,o.kt)("inlineCode",{parentName:"p"},"credential")," table, ",(0,o.kt)("inlineCode",{parentName:"p"},"keycloak_group")," table, and ",(0,o.kt)("inlineCode",{parentName:"p"},"user_group_membership")," table, as user information in Keycloak is stored across multiple tables."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"edit",src:r(18712).Z,width:"2458",height:"1337"})))}p.isMDXComponent=!0},18712:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/syncer_keycloak_edit-1c742f45dd5b384d9c086cda272428c8.png"}}]);