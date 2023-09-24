"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6484],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=o.createContext({}),l=function(t){var e=o.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),g=l(a),m=r,d=g["".concat(c,".").concat(m)]||g[m]||u[m]||n;return a?o.createElement(d,i(i({ref:e},p),{},{components:a})):o.createElement(d,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=g;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1026:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=a(87462),r=(a(67294),a(3905));const n={slug:"welcome",title:"Welcome",author:"ErikQQY",authorTitle:"Casbin Member",authorURL:"https://github.com/ErikQQY",authorImageURL:"https://avatars.githubusercontent.com/u/52615090?s=120&v=4",tags:["Casdoor","SSO","Authentication","OAuth2.0","Casbin"]},i=void 0,s={permalink:"/ko/blog/welcome",editUrl:"https://github.com/casdoor/casdoor-website/edit/master/blog/2021-08-24.mdx",source:"@site/blog/2021-08-24.mdx",title:"Welcome",description:"Welcome to Casdoor official website!\ud83d\udc4b",date:"2021-08-24T00:00:00.000Z",formattedDate:"2021\ub144 8\uc6d4 24\uc77c",tags:[{label:"Casdoor",permalink:"/ko/blog/tags/casdoor"},{label:"SSO",permalink:"/ko/blog/tags/sso"},{label:"Authentication",permalink:"/ko/blog/tags/authentication"},{label:"OAuth2.0",permalink:"/ko/blog/tags/o-auth-2-0"},{label:"Casbin",permalink:"/ko/blog/tags/casbin"}],readingTime:.97,hasTruncateMarker:!1,authors:[{name:"ErikQQY",title:"Casbin Member",url:"https://github.com/ErikQQY",imageURL:"https://avatars.githubusercontent.com/u/52615090?s=120&v=4"}],frontMatter:{slug:"welcome",title:"Welcome",author:"ErikQQY",authorTitle:"Casbin Member",authorURL:"https://github.com/ErikQQY",authorImageURL:"https://avatars.githubusercontent.com/u/52615090?s=120&v=4",tags:["Casdoor","SSO","Authentication","OAuth2.0","Casbin"]}},c={authorsImageUrls:[void 0]},l=[{value:"What is Casdoor?",id:"what-is-casdoor",level:2},{value:"Why use Casdoor?",id:"why-use-casdoor",level:2},{value:"How to use Casdoor?",id:"how-to-use-casdoor",level:2}],p={toc:l};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to Casdoor official website!\ud83d\udc4b"),(0,r.kt)("h2",{id:"what-is-casdoor"},"What is Casdoor?"),(0,r.kt)("p",null,"Casdoor is a UI-first ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Identity_management"},"Identity Access Management (IAM)")," / ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single_sign-on"},"Single-Sign-On (SSO)")," platform based on OAuth 2.0, OIDC, SAML and CAS."),(0,r.kt)("p",null,"Casdoor is developed by ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org"},"Casbin")," using Golang and React."),(0,r.kt)("p",null,"Casdoor aims at providing a powerful authentication platform to handle the user management."),(0,r.kt)("h2",{id:"why-use-casdoor"},"Why use Casdoor?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u26a1\ufe0f Powerful feature and simple config. With support for  ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_google.png",width:"30"})," ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_github.png",width:"30"})," ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_facebook.png",width:"30"})," ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_twitter.png",width:"30"})," ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_linkedin.png",width:"30"})," ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_weibo.png",width:"30"})," ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_wechat.png",width:"30"})," ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_qq.png",width:"30"})," ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_dingtalk.png",width:"30"}),"   ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_gitee.png",width:"30"}),"  ",(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_wecom.png",width:"30"}),(0,r.kt)("img",{src:"https://cdn.casbin.org/img/social_gitlab.png",width:"30"})," sign in and traditional username/password sign in, Casdoor helps you implement your users management system just in a few steps.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud83d\udca5 Front-end back-end separation architecture. Casdoor provides maneuverable web UI and supporting high concurrency.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud83e\udd42 Active open source community. Casdoor is open source and actively maintained.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud83c\udf10 Multi-language support. Casdoor supports multiple languages, including Chinese, English, French, and many more."))),(0,r.kt)("h2",{id:"how-to-use-casdoor"},"How to use Casdoor?"),(0,r.kt)("p",null,"You can follow the detailed document to learn about ",(0,r.kt)("a",{parentName:"p",href:"https://door.casdoor.com/swagger/"},"Casdoor API")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"setup your own Casdoor"),". Or use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/how-to-connect/sdk"},"Casdoor SDKs")," to implement your own application."))}u.isMDXComponent=!0}}]);