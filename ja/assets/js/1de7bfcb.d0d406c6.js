"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[709],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(a),y=n,s=h["".concat(c,".").concat(y)]||h[y]||m[y]||p;return a?r.createElement(s,i(i({ref:t},d),{},{components:a})):r.createElement(s,i({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const p={title:"WeChat Pay",description:"Add WeChat Pay payment provider to your application",keywords:["WeChat Pay","payment"],authors:["Wrapping-2000","Chinoholo0807"]},i=void 0,o={unversionedId:"provider/payment/WeChatPay",id:"provider/payment/WeChatPay",title:"WeChat Pay",description:"Add WeChat Pay payment provider to your application",source:"@site/docs/provider/payment/WeChatPay.md",sourceDirName:"provider/payment",slug:"/provider/payment/WeChatPay",permalink:"/ja/docs/provider/payment/WeChatPay",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/payment/WeChatPay.md",tags:[],version:"current",frontMatter:{title:"WeChat Pay",description:"Add WeChat Pay payment provider to your application",keywords:["WeChat Pay","payment"],authors:["Wrapping-2000","Chinoholo0807"]},sidebar:"tutorialSidebar",previous:{title:"Alipay",permalink:"/ja/docs/provider/payment/Alipay"},next:{title:"Captcha",permalink:"/ja/docs/category/captcha"}},c={},l=[{value:"Step 1. Preparation",id:"step-1-preparation",level:2},{value:"1.1 Get API Key v3",id:"11-get-api-key-v3",level:3},{value:"1.2 Get Merchant Certificate",id:"12-get-merchant-certificate",level:3},{value:"1.3 Get Merchant ID and App ID",id:"13-get-merchant-id-and-app-id",level:3},{value:"Step 2.  Create a WeChat Pay Payment provider",id:"step-2--create-a-wechat-pay-payment-provider",level:2},{value:"Step 3. Add the WeChat Pay Payment provider for your product",id:"step-3-add-the-wechat-pay-payment-provider-for-your-product",level:2}],d={toc:l};function m(e){let{components:t,...p}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"step-1-preparation"},"Step 1. Preparation"),(0,n.kt)("p",null,"First, you need to have a merchant account at ",(0,n.kt)("a",{parentName:"p",href:"https://pay.weixin.qq.com/index.php/public/wechatpay_en"},"WeChat Merchant Platform"),"."),(0,n.kt)("p",null,"Before accessing the WeChat Pay, there are some preparations that need to be done."),(0,n.kt)("p",null,"You can refer to the documentation ",(0,n.kt)("a",{parentName:"p",href:"https://pay.weixin.qq.com/docs/merchant/products/native-payment/preparation.html"},"preparation before access")," for more information."),(0,n.kt)("h3",{id:"11-get-api-key-v3"},"1.1 Get API Key v3"),(0,n.kt)("p",null,"Log in to WeChat Merchant Platform, select ",(0,n.kt)("inlineCode",{parentName:"p"},"Account Settings > API Security >Set APIv3 Secret"),", and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Set APIv3 secret")," to get the ",(0,n.kt)("inlineCode",{parentName:"p"},"API Key v3"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"wechat api key v3",src:a(60734).Z,width:"2400",height:"1430"})),(0,n.kt)("p",null,"How to get ",(0,n.kt)("inlineCode",{parentName:"p"},"API Key v3")," : ",(0,n.kt)("a",{parentName:"p",href:"https://kf.qq.com/faq/180830E36vyQ180830AZFZvu.html"},"APIv3 Key Settings")),(0,n.kt)("h3",{id:"12-get-merchant-certificate"},"1.2 Get Merchant Certificate"),(0,n.kt)("p",null,"You can log in to WeChat Merchant Platform, and select ",(0,n.kt)("inlineCode",{parentName:"p"},"Account Settings > API Security > API Certificate")," to download the certificate."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"wechat merchant certificate",src:a(12753).Z,width:"2426",height:"1506"})),(0,n.kt)("p",null,"After download the certificate, get the ",(0,n.kt)("inlineCode",{parentName:"p"},"Certificate Serial Number")," according to ",(0,n.kt)("a",{parentName:"p",href:"https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay7_0.shtml#part-5"},"How to view the Certificate Serial Number")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Private Key")," according to ",(0,n.kt)("a",{parentName:"p",href:"https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay3_1.shtml"},"How to get Private Key of Certificate"),"."),(0,n.kt)("p",null,"Then, create a ",(0,n.kt)("inlineCode",{parentName:"p"},"Cert")," at Casdoor and fill the necessary information."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"wechat_cert",src:a(77548).Z,width:"3301",height:"1631"})),(0,n.kt)("h3",{id:"13-get-merchant-id-and-app-id"},"1.3 Get Merchant ID and App ID"),(0,n.kt)("p",null,"How to get ",(0,n.kt)("inlineCode",{parentName:"p"},"Merchant ID")," : ",(0,n.kt)("a",{parentName:"p",href:"https://kf.qq.com/faq/200729EZ7fEj200729aumYR7.html"},"WeChat Pay Merchant ID Query Guide")),(0,n.kt)("p",null,"How to get ",(0,n.kt)("inlineCode",{parentName:"p"},"App ID")," : ",(0,n.kt)("a",{parentName:"p",href:"https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml"},"WeChat Pay APPID Query Guide")),(0,n.kt)("h2",{id:"step-2--create-a-wechat-pay-payment-provider"},"Step 2.  Create a WeChat Pay Payment provider"),(0,n.kt)("p",null,"Next, create a WeChat Pay Payment provider in Casdoor by filling in the necessary information."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Name in WeChat Pay"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Category"),(0,n.kt)("td",{parentName:"tr",align:null},"choose ",(0,n.kt)("inlineCode",{parentName:"td"},"Payment"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Type"),(0,n.kt)("td",{parentName:"tr",align:null},"choose ",(0,n.kt)("inlineCode",{parentName:"td"},"WeChat Pay"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Merchant ID")," obtained from Step 1.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client secret"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"API Key v3")," obtained from Step 1.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"App ID"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"App ID")," obtained from Step 1.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cert"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Cert")," configured at Step 1.2")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"wechat pay provider",src:a(80288).Z,width:"1513",height:"1032"})),(0,n.kt)("h2",{id:"step-3-add-the-wechat-pay-payment-provider-for-your-product"},"Step 3. Add the WeChat Pay Payment provider for your product"),(0,n.kt)("p",null,"Finally, add the WeChat Pay Payment provider for your product so that users can purchase the product using WeChat Pay."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add wechat pay payment provider for product",src:a(37307).Z,width:"3377",height:"1534"})),(0,n.kt)("video",{src:"/video/provider/payment/use_wechatpay_buy_product.mp4",controls:"controls",width:"100%"}))}m.isMDXComponent=!0},60734:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wechat_apikey_v3-c95a86dcc7ab4dd7bbca9df233f0167f.png"},77548:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wechat_cert-a4e0caadc44c30564ff97d9bc60d2499.png"},12753:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wechat_mch_cert-84e41b42ce7a3931f69bf07bb5376a9f.png"},80288:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wechat_payment_provider-a0467c48adc3d33665c6ad4013ad9184.png"},37307:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wechat_product-01ff65aff94711e2e1b53fa2e9593c8b.png"}}]);