"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5027],{3905:(t,e,i)=>{i.d(e,{Zo:()=>l,kt:()=>v});var n=i(67294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var p=n.createContext({}),s=function(t){var e=n.useContext(p),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},l=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var i=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=s(i),v=o,f=u["".concat(p,".").concat(v)]||u[v]||d[v]||a;return i?n.createElement(f,r(r({ref:e},l),{},{components:i})):n.createElement(f,r({ref:e},l))}));function v(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=i.length,r=new Array(a);r[0]=u;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,r[1]=c;for(var s=2;s<a;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},18583:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=i(87462),o=(i(67294),i(3905));const a={title:"Application Invitation Code",description:"Restrict application sign up with invitation codes",keywords:["application","signup","invitation code"],authors:["leo220yuyaodog"]},r=void 0,c={unversionedId:"application/invitation-code",id:"application/invitation-code",title:"Application Invitation Code",description:"Restrict application sign up with invitation codes",source:"@site/docs/application/invitation-code.md",sourceDirName:"application",slug:"/application/invitation-code",permalink:"/docs/application/invitation-code",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/application/invitation-code.md",tags:[],version:"current",frontMatter:{title:"Application Invitation Code",description:"Restrict application sign up with invitation codes",keywords:["application","signup","invitation code"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Tags",permalink:"/docs/application/tags"},next:{title:"Permissions",permalink:"/docs/category/permissions"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2}],l={toc:s};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"If you want to restrict application sign up, you can use invitation codes. An invitation code is a string that can be\nused to sign up for the application. It is generated by the administrator and can be used multiple times. An application\ncan have multiple invitation codes."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'First, add the "Invitation code" signup item to the signup item table.'),(0,o.kt)("li",{parentName:"ol"},"Then, add the invitation code on the application configuration page.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"invitation code",src:i(90305).Z,width:"1873",height:"724"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'Once the application has invitation codes, users can only sign up for the application with a valid invitation code. Regardless of whether the "Invitation code" signup item is visible or not, users must provide the invitation code during sign up. So, if you want to use invitation codes, you need to add the "Invitation code" signup item to the signup item table.')),(0,o.kt)("p",null,"Here is a demo video that shows how to configure and use the invitation code:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"invitation code demo",src:i(45634).Z,width:"948",height:"480"})))}d.isMDXComponent=!0},90305:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/invitation_code_config-d0a48e698880045937880fb278285579.png"},45634:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/invitation_demo-f140286f2e0be3532c3da4acab72196a.gif"}}]);