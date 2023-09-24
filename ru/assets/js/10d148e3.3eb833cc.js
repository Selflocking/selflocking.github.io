"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,y=u["".concat(d,".").concat(m)]||u[m]||c[m]||p;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const p={title:"Stripe",description:"Add Stripe payment provider to your application",keywords:["Stripe","payment"],authors:["Chinoholo0807"]},i=void 0,o={unversionedId:"provider/payment/stripe",id:"provider/payment/stripe",title:"Stripe",description:"Add Stripe payment provider to your application",source:"@site/docs/provider/payment/stripe.md",sourceDirName:"provider/payment",slug:"/provider/payment/stripe",permalink:"/ru/docs/provider/payment/stripe",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/payment/stripe.md",tags:[],version:"current",frontMatter:{title:"Stripe",description:"Add Stripe payment provider to your application",keywords:["Stripe","payment"],authors:["Chinoholo0807"]},sidebar:"tutorialSidebar",previous:{title:"PayPal",permalink:"/ru/docs/provider/payment/paypal"},next:{title:"Alipay",permalink:"/ru/docs/provider/payment/Alipay"}},d={},l=[{value:"Step 1. Get Publishable Key and Secret Key",id:"step-1-get-publishable-key-and-secret-key",level:2},{value:"Step 2. Create a Stripe Payment provider",id:"step-2-create-a-stripe-payment-provider",level:2},{value:"Step 3. Add the Stripe Payment provider for your product",id:"step-3-add-the-stripe-payment-provider-for-your-product",level:2}],s={toc:l};function c(e){let{components:t,...p}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is an example of how to configure a ",(0,a.kt)("strong",{parentName:"p"},"Stripe")," payment provider.")),(0,a.kt)("h2",{id:"step-1-get-publishable-key-and-secret-key"},"Step 1. Get Publishable Key and Secret Key"),(0,a.kt)("p",null,"First, you need to have an account at ",(0,a.kt)("a",{parentName:"p",href:"https://www.stripe.com/"},"Stripe"),".\nAfter creating a Stripe account, log in to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.stripe.com/test/apikeys"},"Developer Dashboard")," using your account credentials.\nYou can find the ",(0,a.kt)("inlineCode",{parentName:"p"},"Publishable key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret key")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"API keys")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Stripe API keys",src:r(92947).Z,width:"2402",height:"1120"})),(0,a.kt)("h2",{id:"step-2-create-a-stripe-payment-provider"},"Step 2. Create a Stripe Payment provider"),(0,a.kt)("p",null,"Next, create a Stripe Payment provider in Casdoor by filling in the necessary information."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Name in Stripe"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Category"),(0,a.kt)("td",{parentName:"tr",align:null},"choose ",(0,a.kt)("inlineCode",{parentName:"td"},"Payment"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Type"),(0,a.kt)("td",{parentName:"tr",align:null},"choose ",(0,a.kt)("inlineCode",{parentName:"td"},"Stripe"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Publishable key")," obtained from Step 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client secret"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Secret key")," obtained from Step 1")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Stripe provider",src:r(1260).Z,width:"1340",height:"670"})),(0,a.kt)("h2",{id:"step-3-add-the-stripe-payment-provider-for-your-product"},"Step 3. Add the Stripe Payment provider for your product"),(0,a.kt)("p",null,"Finally, add the Stripe Payment provider for your product so that users can purchase the product using Stripe."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Stripe payment provider for product",src:r(84675).Z,width:"2266",height:"1152"})),(0,a.kt)("video",{src:"/video/provider/payment/use_stripe_buy_product.mp4",controls:"controls",width:"100%"}))}c.isMDXComponent=!0},92947:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/stripe_api_keys-3608dfaa0566c75c68cc6ed84018f577.png"},84675:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/stripe_product-d239353a1a22f7d1960ac15c3ff18c27.png"},1260:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/stripe_provider-ec7738974ba5344d0d17604fe3696b01.png"}}]);