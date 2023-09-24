"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6347],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(r),s=n,h=u["".concat(l,".").concat(s)]||u[s]||m[s]||a;return r?o.createElement(h,i(i({ref:t},d),{},{components:r})):o.createElement(h,i({ref:t},d))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"WeCom",description:"Add WeCom OAuth provider to your application",keywords:["WeCom","OAuth"],authors:["leo220yuyaodog"]},i=void 0,p={unversionedId:"provider/oauth/weCom",id:"provider/oauth/weCom",title:"WeCom",description:"Add WeCom OAuth provider to your application",source:"@site/docs/provider/oauth/weCom.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/weCom",permalink:"/ko/docs/provider/oauth/weCom",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/weCom.md",tags:[],version:"current",frontMatter:{title:"WeCom",description:"Add WeCom OAuth provider to your application",keywords:["WeCom","OAuth"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"WeChat",permalink:"/ko/docs/provider/oauth/Wechat"},next:{title:"Tencent QQ",permalink:"/ko/docs/provider/oauth/Tencent"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"More Information",id:"more-information",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"WeCom provides an authorized login method using OAuth, which allows you to obtain members' identity information directly from the webpage opened by the WeCom terminal, eliminating the need for a login process."),(0,n.kt)("p",null,"There are two types of applications: ",(0,n.kt)("strong",{parentName:"p"},"internal")," applications and ",(0,n.kt)("strong",{parentName:"p"},"third-party")," applications."),(0,n.kt)("h2",{id:"basic-configuration"},"Basic Configuration"),(0,n.kt)("p",null,"To configure a WeCom provider, you need to provide the following parameters:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameter Description"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Sub type"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Internal or Third-party")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Method"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Silent or Normal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Client ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The enterprise CorpID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Client secret"),(0,n.kt)("td",{parentName:"tr",align:"center"},"The enterprise CorpSecret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Agent ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Application agentid")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"WeCom supports two authorization methods: ",(0,n.kt)("strong",{parentName:"p"},"Silent")," authorization and ",(0,n.kt)("strong",{parentName:"p"},"normal")," authorization."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Silent authorization"),": After the user clicks the link, the page is redirected to ",(0,n.kt)("inlineCode",{parentName:"p"},"redirect_URI? code=CODE&state=STATE")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Normal authorization"),": After the user clicks the link, a middle page is displayed for the user to choose whether to authorize or not. After the user confirms the authorization, they are redirected to ",(0,n.kt)("inlineCode",{parentName:"p"},"redirect_uri?code=CODE&state=STATE")),(0,n.kt)("p",{parentName:"admonition"},"For more details, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.work.weixin.qq.com/document/path/91119"},"official documentation"),".")),(0,n.kt)("h2",{id:"more-information"},"More Information"),(0,n.kt)("p",null,"For more information about internal applications, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.work.weixin.qq.com/document/path/91022"},"Internal Application")," documentation."),(0,n.kt)("p",null,"For information about third-party applications, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.work.weixin.qq.com/document/path/91120"},"Third-Party Application")," documentation."))}m.isMDXComponent=!0}}]);