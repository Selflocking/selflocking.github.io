"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),g=n,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Geetest",description:"Add Geetest Captcha to your application",keywords:["Geetest"],authors:["leoil"]},i=void 0,p={unversionedId:"provider/captcha/geetest",id:"provider/captcha/geetest",title:"Geetest",description:"Add Geetest Captcha to your application",source:"@site/docs/provider/captcha/geetest.md",sourceDirName:"provider/captcha",slug:"/provider/captcha/geetest",permalink:"/ru/docs/provider/captcha/geetest",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/captcha/geetest.md",tags:[],version:"current",frontMatter:{title:"Geetest",description:"Add Geetest Captcha to your application",keywords:["Geetest"],authors:["leoil"]},sidebar:"tutorialSidebar",previous:{title:"Alibaba Cloud Captcha",permalink:"/ru/docs/provider/captcha/aliyunCaptcha"},next:{title:"Web3",permalink:"/ru/docs/category/web3"}},c={},s=[{value:"Configure Geetest",id:"configure-geetest",level:2},{value:"Configure Casdoor",id:"configure-casdoor",level:2},{value:"Apply in your application",id:"apply-in-your-application",level:2}],l={toc:s};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"configure-geetest"},"Configure Geetest"),(0,n.kt)("p",null,"To configure Geetest and obtain the public and secret key, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the Geetest ",(0,n.kt)("strong",{parentName:"p"},"CAPTCHA V4")," section on the ",(0,n.kt)("a",{parentName:"p",href:"https://auth.geetest.com/product"},"Geetest product page"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Configure Geetest product",src:r(89995).Z,width:"1081",height:"450"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an application by entering the name and address for your application."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Geetest application",src:r(15453).Z,width:"2120",height:"1256"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Add events and choose "web" for the device.'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Geetest event",src:r(49518).Z,width:"2115",height:"1236"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Retrieve the ",(0,n.kt)("inlineCode",{parentName:"p"},"ID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Key"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Configure Geetest key",src:r(17448).Z,width:"2030",height:"952"})))),(0,n.kt)("h2",{id:"configure-casdoor"},"Configure Casdoor"),(0,n.kt)("p",null,"Follow these steps to configure Casdoor:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new provider in Casdoor."),(0,n.kt)("p",{parentName:"li"},"Set the category as ",(0,n.kt)("strong",{parentName:"p"},"Captcha")," and the type as ",(0,n.kt)("strong",{parentName:"p"},"Geetest"),".\nFill in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Site key")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Secret key")," with the ID and Key obtained from Geetest.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the Preview button to preview the style of this captcha."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Configure app provider",src:r(33267).Z,width:"2872",height:"1800"})))),(0,n.kt)("h2",{id:"apply-in-your-application"},"Apply in your application"),(0,n.kt)("p",null,"To apply the Geetest configuration in your application:"),(0,n.kt)("p",null,"Edit the ",(0,n.kt)("strong",{parentName:"p"},"application")," you want to configure in Casdoor. Select the provider you just added and click the Save button."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Configure app provider",src:r(66130).Z,width:"2096",height:"180"})))}d.isMDXComponent=!0},49518:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/geetest_add_events-eefe85c50bf04b1fbcc2ab1549f08f13.png"},66130:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/geetest_app_provider-bdb2aceb7e1495861e5beec0ab21a060.png"},33267:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/geetest_casdoor_configure-cba91fa08cf3398b78b22af0af3270d6.gif"},15453:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/geetest_create_application-4d2e78e1432fac0f08cded498e6add32.png"},17448:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/geetest_key-a332c50f5a0a178ef3cf873e8b113d7e.png"},89995:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/geetest_product-3046419e1997b3c0ad89a9c8ee6988e8.png"}}]);