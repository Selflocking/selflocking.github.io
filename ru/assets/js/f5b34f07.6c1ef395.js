"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4495],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,h=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Default",description:"Using Casdoor's default captcha in your application",keywords:["captcha"],authors:["Resulte"]},o=void 0,l={unversionedId:"provider/captcha/default",id:"provider/captcha/default",title:"Default",description:"Using Casdoor's default captcha in your application",source:"@site/docs/provider/captcha/default.md",sourceDirName:"provider/captcha",slug:"/provider/captcha/default",permalink:"/ru/docs/provider/captcha/default",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/captcha/default.md",tags:[],version:"current",frontMatter:{title:"Default",description:"Using Casdoor's default captcha in your application",keywords:["captcha"],authors:["Resulte"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/ru/docs/provider/captcha/overview"},next:{title:"Cloudflare Turnstile",permalink:"/ru/docs/provider/captcha/cloudflareTurnstile"}},p={},c=[{value:"Configuring in Casdoor",id:"configuring-in-casdoor",level:2},{value:"Applying in your application",id:"applying-in-your-application",level:2}],u={toc:c};function s(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The default captcha implementation generates and verifies an image. In the default captcha image, a sequence of digits 0-9 is used with a defined length of 5."),(0,n.kt)("h2",{id:"configuring-in-casdoor"},"Configuring in Casdoor"),(0,n.kt)("p",null,"To configure the default captcha in Casdoor, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new provider in Casdoor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the category as ",(0,n.kt)("strong",{parentName:"p"},"Captcha"),", and the type as ",(0,n.kt)("strong",{parentName:"p"},"Default"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Default provider",src:r(94672).Z,width:"3811",height:"1736"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Preview")," button to preview the style of this captcha."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Default preview",src:r(46085).Z,width:"3830",height:"1730"})))),(0,n.kt)("h2",{id:"applying-in-your-application"},"Applying in your application"),(0,n.kt)("p",null,"To apply the default captcha in your application, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Edit the application you want to configure in Casdoor."),(0,n.kt)("li",{parentName:"ol"},"Select the provider that you just added. There are three types of rules available:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Always"),": Always requires human-machine verification during login."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"None"),": Never requires human-machine verification. The account will be blocked if it attempts to login with the wrong password for the 5th time within 15 minutes. The block will be lifted after 15 minutes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Dynamic"),": After 5 failed login attempts, human-machine verification will be required but the account will not be blocked.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Default provider app",src:r(42482).Z,width:"1807",height:"276"})),(0,n.kt)("p",null,"We also provide a demo video to demonstrate the differences in rules, which we hope will be helpful to you."),(0,n.kt)("video",{src:"/video/provider/default_provider_app.mp4",controls:"controls",width:"100%"}))}s.isMDXComponent=!0},46085:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/default_preview-bc684745b74f5c7711708683f912fba4.png"},94672:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/default_provider-c3f7b7fb409032d01625a590c2f101cd.png"},42482:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/default_provider_app-5c242148b0b555c9ceed3235fa3c1997.png"}}]);