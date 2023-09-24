"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1002],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,y=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return a?r.createElement(y,c(c({ref:t},s),{},{components:a})):r.createElement(y,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"hCaptcha",description:"Add hCaptcha to your application",keywords:["hCaptcha"],authors:["Resulte"]},c=void 0,p={unversionedId:"provider/captcha/hcaptcha",id:"provider/captcha/hcaptcha",title:"hCaptcha",description:"Add hCaptcha to your application",source:"@site/docs/provider/captcha/hcaptcha.md",sourceDirName:"provider/captcha",slug:"/provider/captcha/hcaptcha",permalink:"/de/docs/provider/captcha/hcaptcha",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/captcha/hcaptcha.md",tags:[],version:"current",frontMatter:{title:"hCaptcha",description:"Add hCaptcha to your application",keywords:["hCaptcha"],authors:["Resulte"]},sidebar:"tutorialSidebar",previous:{title:"reCAPTCHA",permalink:"/de/docs/provider/captcha/recaptcha"},next:{title:"Alibaba Cloud Captcha",permalink:"/de/docs/provider/captcha/aliyunCaptcha"}},i={},l=[{value:"Create an API key pair",id:"create-an-api-key-pair",level:2},{value:"Configure in Casdoor",id:"configure-in-casdoor",level:2},{value:"Apply in your application",id:"apply-in-your-application",level:2}],s={toc:l};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"hCaptcha is a captcha service provider, similar to reCAPTCHA. You can find more details about hCaptcha ",(0,n.kt)("a",{parentName:"p",href:"https://www.hcaptcha.com/"},"here"),"."),(0,n.kt)("h2",{id:"create-an-api-key-pair"},"Create an API key pair"),(0,n.kt)("p",null,"To start using hCaptcha, you need to sign up for an API key pair for your site. You can obtain your site key on your ",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.hcaptcha.com/settings"},"profile page"),"."),(0,n.kt)("p",null,"Once you have signed up, you will receive a site key and a secret key."),(0,n.kt)("h2",{id:"configure-in-casdoor"},"Configure in Casdoor"),(0,n.kt)("p",null,"To configure hCaptcha in Casdoor, create a new provider."),(0,n.kt)("p",null,"Select the category as ",(0,n.kt)("strong",{parentName:"p"},"Captcha")," and the type as ",(0,n.kt)("strong",{parentName:"p"},"hCaptcha"),". Fill in the site key and secret key obtained in the previous step."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hCaptcha provider",src:a(40266).Z,width:"3834",height:"1380"})),(0,n.kt)("p",null,"You can click the ",(0,n.kt)("strong",{parentName:"p"},"Preview")," button to see how the captcha style will look."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hCaptcha preview",src:a(79635).Z,width:"3836",height:"1490"})),(0,n.kt)("h2",{id:"apply-in-your-application"},"Apply in your application"),(0,n.kt)("p",null,"Go to the application you want to configure in Casdoor. Select the provider you just added and click the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hCaptcha provider app",src:a(7301).Z,width:"3678",height:"258"})))}h.isMDXComponent=!0},79635:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hcaptcha_preview-3fc7b93acabf0901b4b4fce7f396f24e.png"},40266:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hcaptcha_provider-7686497329c9939995c11a1b311f3b14.png"},7301:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hcaptcha_provider_app-227cc12b6b17b0fad6eba0826798660b.png"}}]);