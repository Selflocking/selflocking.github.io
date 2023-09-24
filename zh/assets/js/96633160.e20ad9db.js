"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(v,a(a({ref:t},c),{},{components:r})):n.createElement(v,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Overview",description:"Using SMS for authentication",keywords:["SMS"],authors:["kininaru"]},a=void 0,s={unversionedId:"provider/sms/overview",id:"provider/sms/overview",title:"Overview",description:"Using SMS for authentication",source:"@site/docs/provider/sms/overview.md",sourceDirName:"provider/sms",slug:"/provider/sms/overview",permalink:"/zh/docs/provider/sms/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/sms/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Using SMS for authentication",keywords:["SMS"],authors:["kininaru"]},sidebar:"tutorialSidebar",previous:{title:"SMS",permalink:"/zh/docs/category/sms"},next:{title:"Twilio",permalink:"/zh/docs/provider/sms/twilio"}},p={},l=[{value:"Adding an SMS provider",id:"adding-an-sms-provider",level:2}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/go-sms-sender"},"casdoor/go-sms-sender")," to send SMS for Casdoor. The ",(0,o.kt)("inlineCode",{parentName:"p"},"go-sms-sender")," library currently supports Twilio, Submail, SmsBao, Alibaba Cloud, Tencent Cloud, Huawei Cloud, and Volc SMS APIs. If you want to add support for other SMS providers, you can either raise an issue or submit a pull request."),(0,o.kt)("h2",{id:"adding-an-sms-provider"},"Adding an SMS provider"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add")," to add a new provider.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"SMS")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Category")," section."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Select Category",src:r(1316).Z,width:"1906",height:"564"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the type of your provider."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Select Type",src:r(82449).Z,width:"2032",height:"600"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Retrieve the necessary information from your SMS provider and fill out the corresponding fields."))))}d.isMDXComponent=!0},1316:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/selectCategory-c2f6c1e904896d84ba681c5e7a7e486a.png"},82449:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/selecttype-025ca420f0938381b9eede57e2d25f80.png"}}]);