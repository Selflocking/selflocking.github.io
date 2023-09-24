"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(r),k=n,m=s["".concat(l,".").concat(k)]||s[k]||u[k]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},29083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Lark",description:"Add Lark OAuth provider to your application",keywords:["Lark","OAuth"],authors:["Chinoholo0807"]},i=void 0,p={unversionedId:"provider/oauth/lark",id:"provider/oauth/lark",title:"Lark",description:"Add Lark OAuth provider to your application",source:"@site/docs/provider/oauth/lark.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/lark",permalink:"/ko/docs/provider/oauth/lark",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/lark.md",tags:[],version:"current",frontMatter:{title:"Lark",description:"Add Lark OAuth provider to your application",keywords:["Lark","OAuth"],authors:["Chinoholo0807"]},sidebar:"tutorialSidebar",previous:{title:"Okta",permalink:"/ko/docs/provider/oauth/okta"},next:{title:"Email",permalink:"/ko/docs/category/email"}},l={},c=[{value:"Step 1: Create a Lark application",id:"step-1-create-a-lark-application",level:3},{value:"Step 2: Create a Lark OAuth provider",id:"step-2-create-a-lark-oauth-provider",level:3}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This is an example of how to configure a ",(0,n.kt)("strong",{parentName:"p"},"Lark")," OAuth provider.")),(0,n.kt)("h3",{id:"step-1-create-a-lark-application"},"Step 1: Create a Lark application"),(0,n.kt)("p",null,"First, you need to create a new application on the ",(0,n.kt)("a",{parentName:"p",href:"https://open.feishu.cn/"},"Lark Open Platform")," and enable it.\nYou can find the ",(0,n.kt)("inlineCode",{parentName:"p"},"App ID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"App Secret")," in the basic information of your application."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create a new app",src:r(21128).Z,width:"3438",height:"1840"})),(0,n.kt)("p",null,"Next, add the redirect URL ",(0,n.kt)("inlineCode",{parentName:"p"},"<your-casdoor-domain>/callback")," (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:7001/callback"),") in the security settings of your application."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add redirect URL",src:r(27875).Z,width:"3831",height:"1843"})),(0,n.kt)("h3",{id:"step-2-create-a-lark-oauth-provider"},"Step 2: Create a Lark OAuth provider"),(0,n.kt)("p",null,"Now create a Lark OAuth provider in Casdoor. Fill in the necessary information."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Name in Lark"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Category"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose ",(0,n.kt)("inlineCode",{parentName:"td"},"OAuth"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose ",(0,n.kt)("inlineCode",{parentName:"td"},"Lark"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"App ID")," obtained from Step 1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client secret"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"App Secret")," obtained from Step 1")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create a Lark OAuth provider",src:r(14731).Z,width:"5434",height:"2068"})),(0,n.kt)("p",null,"Now you can use Lark as the third-party service to complete authentication."))}u.isMDXComponent=!0},21128:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/lark_create_app-f4c271d1d2e1859a684dc493d1e00f2e.png"},14731:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/lark_provider_conf_detail-cd70c08c73cce44d38b56168640c7449.png"},27875:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/lark_redirect_url-2339ff3a12839062ccdfdf35cb37e963.png"}}]);