"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Cloudflare Turnstile",description:"Add Cloudflare Turnstile to your application",keywords:["Cloudflare Turnstile"],authors:["YiNNx"]},i=void 0,l={unversionedId:"provider/captcha/cloudflareTurnstile",id:"provider/captcha/cloudflareTurnstile",title:"Cloudflare Turnstile",description:"Add Cloudflare Turnstile to your application",source:"@site/docs/provider/captcha/cloudflareTurnstile.md",sourceDirName:"provider/captcha",slug:"/provider/captcha/cloudflareTurnstile",permalink:"/ko/docs/provider/captcha/cloudflareTurnstile",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/captcha/cloudflareTurnstile.md",tags:[],version:"current",frontMatter:{title:"Cloudflare Turnstile",description:"Add Cloudflare Turnstile to your application",keywords:["Cloudflare Turnstile"],authors:["YiNNx"]},sidebar:"tutorialSidebar",previous:{title:"Default",permalink:"/ko/docs/provider/captcha/default"},next:{title:"reCAPTCHA",permalink:"/ko/docs/provider/captcha/recaptcha"}},c={},p=[{value:"Create an API key pair",id:"create-an-api-key-pair",level:2},{value:"Configure in Casdoor",id:"configure-in-casdoor",level:2},{value:"Application Integration",id:"application-integration",level:2}],s={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cloudflare Turnstile is a CAPTCHA service provided by Cloudflare, which is a user-friendly, privacy-preserving alternative to CAPTCHA. You can find more details in the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/turnstile/"},"Turnstile Docs"),"."),(0,n.kt)("h2",{id:"create-an-api-key-pair"},"Create an API key pair"),(0,n.kt)("p",null,"To start using Cloudflare Turnstile, you need to ",(0,n.kt)("a",{parentName:"p",href:"https://dash.cloudflare.com/?to=/:account/turnstile"},"create a Cloudflare account"),", navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Turnstile")," tab on the navigation bar, and obtain the Site Key and Secret Key."),(0,n.kt)("p",null,"First, add a name for the widget to identify it in the future and enter your website's hostname. Then choose the widget type. It is recommended to choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Managed"),". Finally, click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cloudflare Turnstile preview",src:r(4400).Z,width:"2880",height:"1800"})),(0,n.kt)("p",null,"You will then be able to obtain a site key and a secret key."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cloudflare Turnstile preview",src:r(25019).Z,width:"2880",height:"1800"})),(0,n.kt)("h2",{id:"configure-in-casdoor"},"Configure in Casdoor"),(0,n.kt)("p",null,"Create a new provider in Casdoor."),(0,n.kt)("p",null,"Select the category as ",(0,n.kt)("strong",{parentName:"p"},"Captcha")," and the type as ",(0,n.kt)("strong",{parentName:"p"},"Cloudflare Turnstile"),". Fill in the site key and the secret key that you obtained in the previous step."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cloudflare Turnstile provider",src:r(77673).Z,width:"2880",height:"1800"})),(0,n.kt)("p",null,"You can click the ",(0,n.kt)("strong",{parentName:"p"},"Preview")," button to see a preview of the style of this CAPTCHA."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cloudflare Turnstile preview",src:r(44344).Z,width:"2880",height:"1800"})),(0,n.kt)("h2",{id:"application-integration"},"Application Integration"),(0,n.kt)("p",null,"Edit the application you want to configure in Casdoor. Select the provider that you just added and click the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cloudflare Turnstile provider app",src:r(39852).Z,width:"2756",height:"293"})))}d.isMDXComponent=!0},4400:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/captcha_cloudflare1-3bd99a5c3c1b0ff3d7d196f163c24e64.png"},25019:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/captcha_cloudflare2-970fa21752e187abc3de4bff83acf6f7.png"},77673:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/captcha_cloudflare3-7cf829dba1f4de5313065e0ecf712990.png"},44344:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/captcha_cloudflare4-b026e07a34adf4d50bd4af994d5d6504.png"},39852:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/captcha_cloudflare5-f67d0623be4ce1de56258e3ed92d0806.png"}}]);