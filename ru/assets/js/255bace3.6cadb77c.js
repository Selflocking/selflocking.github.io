"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2410],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Azure ACS",description:"Using Azure ACS as the email provider",keywords:["email","Azure ACS"],authors:["UsherFall"]},o=void 0,l={unversionedId:"provider/email/azureACS",id:"provider/email/azureACS",title:"Azure ACS",description:"Using Azure ACS as the email provider",source:"@site/docs/provider/email/azureACS.md",sourceDirName:"provider/email",slug:"/provider/email/azureACS",permalink:"/ru/docs/provider/email/azureACS",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/email/azureACS.md",tags:[],version:"current",frontMatter:{title:"Azure ACS",description:"Using Azure ACS as the email provider",keywords:["email","Azure ACS"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Brevo",permalink:"/ru/docs/provider/email/brevo"},next:{title:"Sendgrid",permalink:"/ru/docs/provider/email/sendgrid"}},s={},c=[{value:"Step 1: Config ACS",id:"step-1-config-acs",level:3},{value:"Step 2: Configure Casdoor email Provider",id:"step-2-configure-casdoor-email-provider",level:3}],u={toc:c};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this guide, we will be using ACS as the Email Provider."),(0,n.kt)("h3",{id:"step-1-config-acs"},"Step 1: Config ACS"),(0,n.kt)("p",null,"Follow the documentation below, complete configuration."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/email/create-email-communication-resource"},"Create and manage Email Communication Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/email/add-azure-managed-domains"},"Get a free Azure managed domain")," or ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/email/add-custom-verified-domains"},"Add a custom domain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/email/connect-email-communication-resource?pivots=azure-portal"},"Connect domain"))),(0,n.kt)("p",null,"Copy your ",(0,n.kt)("inlineCode",{parentName:"p"},"Endpoint")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Private Key")," for usage"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"azureACS_info",src:r(522).Z,width:"1766",height:"826"})),(0,n.kt)("h3",{id:"step-2-configure-casdoor-email-provider"},"Step 2: Configure Casdoor email Provider"),(0,n.kt)("p",null,"Now create an email provider in Casdoor, fill in the necessary information. The relationship between the fields and Azure ACS is as follows:"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"From Address")," must be a verified email domain.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Name in Azure ACS"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"From Address"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Secret key"),(0,n.kt)("td",{parentName:"tr",align:null},"Private Key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host"),(0,n.kt)("td",{parentName:"tr",align:null},"Endpoint")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"azureACS_provider",src:r(65630).Z,width:"1353",height:"693"})),(0,n.kt)("video",{src:"/video/provider/email/use_azureACS_as_email_provider.mp4",controls:"controls",width:"100%"}))}m.isMDXComponent=!0},522:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azureACS_info-696bb6108703cfe34feebccd2256253f.png"},65630:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azureACS_provider-3b1bf1121e2cd87d7e7d2c693493d9ad.png"}}]);