"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),v=o,m=u["".concat(l,".").concat(v)]||u[v]||c[v]||i;return r?a.createElement(m,n(n({ref:t},d),{},{components:r})):a.createElement(m,n({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,n[1]=p;for(var s=2;s<i;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const i={title:"Overview",description:"Add third-party services to your application",keywords:["provider","OAuth","SMS","Storage","Email","Payment","Captcha"],authors:["kininaru"]},n=void 0,p={unversionedId:"provider/overview",id:"provider/overview",title:"Overview",description:"Add third-party services to your application",source:"@site/docs/provider/overview.md",sourceDirName:"provider",slug:"/provider/overview",permalink:"/docs/provider/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Add third-party services to your application",keywords:["provider","OAuth","SMS","Storage","Email","Payment","Captcha"],authors:["kininaru"]},sidebar:"tutorialSidebar",previous:{title:"Providers",permalink:"/docs/category/providers"},next:{title:"OAuth",permalink:"/docs/category/oauth"}},l={},s=[{value:"What We Have",id:"what-we-have",level:2},{value:"How to Configure and Use",id:"how-to-configure-and-use",level:2},{value:"Scope",id:"scope",level:3},{value:"Add to Application",id:"add-to-application",level:3}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casdoor utilizes providers to offer third-party services for the platform. In this chapter, you will learn how to add providers to Casdoor."),(0,o.kt)("h2",{id:"what-we-have"},"What We Have"),(0,o.kt)("p",null,"Currently, we have six types of providers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"OAuth Providers")),(0,o.kt)("p",{parentName:"li"},"Casdoor allows users to sign in through other OAuth applications. You can add GitHub, Google, QQ, and many other OAuth applications to Casdoor. For more details, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/provider/oauth/overview"},"OAuth")," section.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"SMS Providers")),(0,o.kt)("p",{parentName:"li"},"Casdoor sends SMS to users when they want to verify their phone numbers. SMS providers are used to send SMS in Casdoor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Email Providers")),(0,o.kt)("p",{parentName:"li"},"Email providers are similar to SMS providers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Storage Providers")),(0,o.kt)("p",{parentName:"li"},"Casdoor allows users to store files using the local file system or cloud OSS services.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Payment Providers")),(0,o.kt)("p",{parentName:"li"},"Casdoor can add payment providers, which will be used to add payment methods to products on the product page. Currently, the supported payment providers include Alipay, WeChat Pay, PayPal, and GC.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Captcha Providers")),(0,o.kt)("p",{parentName:"li"},"Casdoor supports configurable captcha in user flows. Currently, the supported captcha providers include Default Captcha, reCAPTCHA, hCaptcha, Aliyun Captcha, and Cloudflare Turnstile."))),(0,o.kt)("h2",{id:"how-to-configure-and-use"},"How to Configure and Use"),(0,o.kt)("h3",{id:"scope"},"Scope"),(0,o.kt)("p",null,"Providers have different scopes, which are determined by the creator. Only Administrators have the permission to add and configure providers. There are two types of Administrators in Casdoor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Global Administrator"),": All users under the ",(0,o.kt)("inlineCode",{parentName:"p"},"built-in")," organization and the users who enable ",(0,o.kt)("inlineCode",{parentName:"p"},"IsGlobalAdmin"),". The providers created by the Global Administrator can be used by all applications.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Organization Administrator"),": Users who enable ",(0,o.kt)("inlineCode",{parentName:"p"},"IsAdmin"),". The providers created by the Organization Administrator can ",(0,o.kt)("strong",{parentName:"p"},"only")," be used by the applications under the organization (under development...)."))),(0,o.kt)("h3",{id:"add-to-application"},"Add to Application"),(0,o.kt)("p",null,"Follow the steps below to add providers to your application. Note that you cannot use the provider in your application until you have added it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the application edit page and add a new provider row."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"provider_overview_add",src:r(1561).Z,width:"976",height:"430"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a provider that you want to add to the application. You will see all the providers that the application can use."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"provider_overview_select",src:r(69570).Z,width:"1063",height:"731"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For ",(0,o.kt)("strong",{parentName:"p"},"OAuth")," and ",(0,o.kt)("strong",{parentName:"p"},"Captcha")," providers, you can configure their usage. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/provider/oauth/overview/#applied-in-application"},"OAuth")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/provider/captcha/default#applied-in-application"},"Captcha")," for more information."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"provider_overview_config",src:r(55177).Z,width:"857",height:"320"})))),(0,o.kt)("p",null,"Finally, ",(0,o.kt)("strong",{parentName:"p"},"save")," the configuration. You can now try using the provider in your application."))}c.isMDXComponent=!0},1561:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/provider_overview_add-ba59d1e4ab6087953e02b31a221d05e3.png"},55177:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/provider_overview_config-a12e853edbd4a13e9dcfe7a619a7a056.png"},69570:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/provider_overview_select-a8cf7e9370e27e1ef97a0789e7cad636.png"}}]);