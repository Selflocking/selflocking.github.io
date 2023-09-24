"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[9811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Tags",description:"Configure your application tags",keywords:["tags","tag","application"],authors:["Chinoholo0807"]},i=void 0,p={unversionedId:"application/tags",id:"application/tags",title:"Tags",description:"Configure your application tags",source:"@site/docs/application/tags.md",sourceDirName:"application",slug:"/application/tags",permalink:"/ru/docs/application/tags",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/application/tags.md",tags:[],version:"current",frontMatter:{title:"Tags",description:"Configure your application tags",keywords:["tags","tag","application"],authors:["Chinoholo0807"]},sidebar:"tutorialSidebar",previous:{title:"Specify Login Organization",permalink:"/ru/docs/application/specify-login-organization"},next:{title:"Application Invitation Code",permalink:"/ru/docs/application/invitation-code"}},c={},l=[],s={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The application tags are used to restrict user access to the application. Specifically, only users with tags listed in the application tags are allowed to log in. For example, the application ",(0,r.kt)("inlineCode",{parentName:"p"},"dev_app")," has tags ",(0,r.kt)("inlineCode",{parentName:"p"},"dev, prd"),". Only users with the tag ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"prd")," can log in to ",(0,r.kt)("inlineCode",{parentName:"p"},"dev_app"),". Please note that admin and global admin users are not affected by application tags."),(0,r.kt)("p",null,"On the application edit page, you can find the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tags")," configuration section where you can add tags."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"configure_tags",src:n(1236).Z,width:"1930",height:"1305"})),(0,r.kt)("p",null,"Here is a video demonstrating how application tags work:"),(0,r.kt)("video",{src:"/video/application/application_tags.mp4",controls:"controls",width:"100%"}))}u.isMDXComponent=!0},1236:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/configure_app_tags-412a74643a453e98ae5e901880910385.png"}}]);