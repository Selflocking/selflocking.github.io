"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||n;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={title:"reCAPTCHA",description:"Add reCAPTCHA to your application",keywords:["reCAPTCHA"],authors:["Resulte"]},i=void 0,p={unversionedId:"provider/captcha/recaptcha",id:"provider/captcha/recaptcha",title:"reCAPTCHA",description:"Add reCAPTCHA to your application",source:"@site/docs/provider/captcha/recaptcha.md",sourceDirName:"provider/captcha",slug:"/provider/captcha/recaptcha",permalink:"/ru/docs/provider/captcha/recaptcha",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/captcha/recaptcha.md",tags:[],version:"current",frontMatter:{title:"reCAPTCHA",description:"Add reCAPTCHA to your application",keywords:["reCAPTCHA"],authors:["Resulte"]},sidebar:"tutorialSidebar",previous:{title:"Cloudflare Turnstile",permalink:"/ru/docs/provider/captcha/cloudflareTurnstile"},next:{title:"hCaptcha",permalink:"/ru/docs/provider/captcha/hcaptcha"}},c={},s=[{value:"Create an API key pair",id:"create-an-api-key-pair",level:2},{value:"Configure in Casdoor",id:"configure-in-casdoor",level:2},{value:"Apply in the application",id:"apply-in-the-application",level:2}],l={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"reCAPTCHA is provided by Google, and we use reCAPTCHA v2 Checkbox. You can find more details about it at this ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/recaptcha"},"link"),"."),(0,o.kt)("h2",{id:"create-an-api-key-pair"},"Create an API key pair"),(0,o.kt)("p",null,"To start using reCAPTCHA, you need to ",(0,o.kt)("a",{parentName:"p",href:"http://www.google.com/recaptcha/admin"},"sign up for an API key pair")," for your site. The key pair consists of a site key and secret key. The site key is used to invoke the reCAPTCHA service on your site or mobile application. The secret key authorizes communication between your application backend and the reCAPTCHA server to ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/recaptcha/docs/verify"},"verify the user's response"),"."),(0,o.kt)("p",null,"First, choose the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/recaptcha/docs/versions"},"type of reCAPTCHA")," and then fill in the authorized domains or ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/manifest/manifest-element#package"},"package names"),". After you have accepted the terms of service, click ",(0,o.kt)("strong",{parentName:"p"},"Register")," to obtain a new API key pair."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"reCAPTCHA create apiKey",src:r(29336).Z,width:"3696",height:"1884"})),(0,o.kt)("p",null,"You will then receive a site key and a secret key."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"reCAPTCHA apiKey",src:r(11423).Z,width:"3710",height:"1308"})),(0,o.kt)("h2",{id:"configure-in-casdoor"},"Configure in Casdoor"),(0,o.kt)("p",null,"Create a new provider in Casdoor."),(0,o.kt)("p",null,"Select the category as ",(0,o.kt)("strong",{parentName:"p"},"Captcha")," and the type as ",(0,o.kt)("strong",{parentName:"p"},"reCAPTCHA"),". You need to provide the site key and secret key created in the previous step."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"reCAPTCHA provider",src:r(899).Z,width:"3832",height:"1492"})),(0,o.kt)("p",null,"You can click the ",(0,o.kt)("strong",{parentName:"p"},"Preview")," button to see the style of this captcha."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"reCAPTCHA preview",src:r(45287).Z,width:"3838",height:"1552"})),(0,o.kt)("h2",{id:"apply-in-the-application"},"Apply in the application"),(0,o.kt)("p",null,"Edit the application you want to configure in Casdoor. Select the provider you just added and click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"reCAPTCHA provider app",src:r(30190).Z,width:"3678",height:"274"})))}d.isMDXComponent=!0},11423:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/recaptcha_apikey-ce2e342ba1d77e3da147a9be35a3be7e.png"},29336:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/recaptcha_create_apiKey-eee343edab46f47f1e6cc080a78795af.png"},45287:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/recaptcha_preview-6b730f68c62914eec32e86c1fa301190.png"},899:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/recaptcha_provider-497815d1498093baec278606a55fbca9.png"},30190:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/recaptcha_provider_app-6df19166c4eba6e096795b70dffe587c.png"}}]);