"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[9134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={title:"Alibaba Cloud",description:"Using Alibaba Cloud as an SMS provider for Casdoor",keywords:["Alibaba Cloud","SMS","provider"],authors:["UsherFall"]},l=void 0,o={unversionedId:"provider/sms/alibabaCloud",id:"provider/sms/alibabaCloud",title:"Alibaba Cloud",description:"Using Alibaba Cloud as an SMS provider for Casdoor",source:"@site/docs/provider/sms/alibabaCloud.md",sourceDirName:"provider/sms",slug:"/provider/sms/alibabaCloud",permalink:"/ko/docs/provider/sms/alibabaCloud",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/sms/alibabaCloud.md",tags:[],version:"current",frontMatter:{title:"Alibaba Cloud",description:"Using Alibaba Cloud as an SMS provider for Casdoor",keywords:["Alibaba Cloud","SMS","provider"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Twilio",permalink:"/ko/docs/provider/sms/twilio"},next:{title:"Amazon SNS",permalink:"/ko/docs/provider/sms/amazonSns"}},s={},d=[{value:"Fill in the necessary information in Casdoor",id:"fill-in-the-necessary-information-in-casdoor",level:2},{value:"Alibaba information",id:"alibaba-information",level:3},{value:"Configure Casdoor provider",id:"configure-casdoor-provider",level:3}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"fill-in-the-necessary-information-in-casdoor"},"Fill in the necessary information in Casdoor"),(0,n.kt)("p",null,"There are four required fields: ",(0,n.kt)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Client secret"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Sign Name"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"Template code"),". The corresponding relationship with the Alibaba Cloud account is as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Name in Alibaba"),(0,n.kt)("th",{parentName:"tr",align:null},"is required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,n.kt)("td",{parentName:"tr",align:null},"AccessKey ID"),(0,n.kt)("td",{parentName:"tr",align:null},"required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client secret"),(0,n.kt)("td",{parentName:"tr",align:null},"AccessKey Secret"),(0,n.kt)("td",{parentName:"tr",align:null},"required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sign Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Signature"),(0,n.kt)("td",{parentName:"tr",align:null},"required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Template code"),(0,n.kt)("td",{parentName:"tr",align:null},"Template code"),(0,n.kt)("td",{parentName:"tr",align:null},"required")))),(0,n.kt)("h3",{id:"alibaba-information"},"Alibaba information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AccessKey ID and AccessKey Secret")),(0,n.kt)("p",null,'After logging into my Aliyun workbench, I click on "AccessKey" to create an ID and Secret.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alibaba Cloud workbench",src:r(99545).Z,width:"1685",height:"703"})),(0,n.kt)("p",null,"By creating an AccessKey, I obtain my AccessKey ID and AccessKey Secret:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AccessKey",src:r(25561).Z,width:"1702",height:"388"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Signature")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alibaba Signature",src:r(54394).Z,width:"2766",height:"946"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Template code")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alibaba Template Code",src:r(20936).Z,width:"2290",height:"1172"})),(0,n.kt)("h3",{id:"configure-casdoor-provider"},"Configure Casdoor provider"),(0,n.kt)("p",null,"Enter your phone number in the ",(0,n.kt)("inlineCode",{parentName:"p"},"SMS Test")," field to test."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alibaba Provider Configuration",src:r(6650).Z,width:"2026",height:"1098"})))}p.isMDXComponent=!0},25561:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/accesskey-a217021a29d7c6d9d202dd2b94d1e719.png"},20936:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/alibabaCode-161773ad997eb5130b787bb3847752bb.png"},6650:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/alibabaProvider-a32a67fff931621ee5c638724aa0c34b.png"},54394:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/alibabaSign-cc994c907839ea636af5f6a213bcc1f6.png"},99545:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/aliyunsms-d6468fd65dc2702a78eb6ff9f7ecacd3.png"}}]);