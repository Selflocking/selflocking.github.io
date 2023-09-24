"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3654],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},92941:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={title:"FireZone",description:"Using the OIDC protocol as the IDP to connect various applications, such as FireZone",keywords:["OIDC","FireZone","IDP"],authors:["dingchenzy"]},i=void 0,l={unversionedId:"integration/java/firezone",id:"integration/java/firezone",title:"FireZone",description:"Using the OIDC protocol as the IDP to connect various applications, such as FireZone",source:"@site/docs/integration/java/firezone.md",sourceDirName:"integration/java",slug:"/integration/java/firezone",permalink:"/ru/docs/integration/java/firezone",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/firezone.md",tags:[],version:"current",frontMatter:{title:"FireZone",description:"Using the OIDC protocol as the IDP to connect various applications, such as FireZone",keywords:["OIDC","FireZone","IDP"],authors:["dingchenzy"]},sidebar:"tutorialSidebar",previous:{title:"Apache DolphinScheduler",permalink:"/ru/docs/integration/java/dolphinscheduler"},next:{title:"Cloud Foundry",permalink:"/ru/docs/integration/java/CloudFoundry"}},p={},s=[{value:"Step 1: Deploy Casdoor and FireZone",id:"step-1-deploy-casdoor-and-firezone",level:2},{value:"Step 2: Configure Casdoor application",id:"step-2-configure-casdoor-application",level:2},{value:"Log out of FireZone and test SSO",id:"log-out-of-firezone-and-test-sso",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," can use the OIDC protocol as the IDP to connect various applications. Here, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.firezone.dev/deploy/"},"FireZone")," as an example to show you how to use OIDC to connect to your applications."),(0,r.kt)("h2",{id:"step-1-deploy-casdoor-and-firezone"},"Step 1: Deploy Casdoor and FireZone"),(0,r.kt)("p",null,"Firstly, Casdoor and FireZone should be deployed."),(0,r.kt)("p",null,"After a successful deployment, ensure the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the FireZone URL (Sigin -> Security -> Add OpenID Connect Provider) to FIREZONE_HOSTNAME."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"FIREZONE_HOSTNAME",src:o(67341).Z,width:"1326",height:"904"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casdoor can be logged in and used normally.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CASDOOR_HOSTNAME"),": ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000"),", if you deploy Casdoor using the default ",(0,r.kt)("inlineCode",{parentName:"p"},"app.conf"),"."))),(0,r.kt)("h2",{id:"step-2-configure-casdoor-application"},"Step 2: Configure Casdoor application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new Casdoor application or use an existing one.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a redirect URL:"),(0,r.kt)("p",{parentName:"li"},"For example, if the Configid in the FireZone Provider is TEST, the redirect URL should be ",(0,r.kt)("inlineCode",{parentName:"p"},"http://[FIREZONE_HOST]/auth/oidc/[PROVIDER_CONFIG_ID]/callback/"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"REDIRECT_URL",src:o(57852).Z,width:"966",height:"396"})),(0,r.kt)("p",{parentName:"li"},"Open your favorite browser and visit: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://[CASDOOR_HOSTNAME]/.well-known/openid-configuration"),", and you will see the OIDC configuration of Casdoor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure FireZone: Security -> Add OpenID Connect Provider"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"OIDC_CONFIG",src:o(86531).Z,width:"766",height:"836"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Discovery Document URI"),": The FireZone Provider Discovery Document URI should be ",(0,r.kt)("inlineCode",{parentName:"li"},"https://[CASDOOR_HOST]/.well-known/openid-configuration"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Scopes"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"openid email profile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConfigID"),": The ConfigID should be the PROVIDER_COONFIG_ID of the redirect URL and should correspond to the Casdoor redirect URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Auto-create users"),": Successful login will automatically create a user.")))),(0,r.kt)("h2",{id:"log-out-of-firezone-and-test-sso"},"Log out of FireZone and test SSO"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"FIREZONELOGIN",src:o(26826).Z,width:"1806",height:"849"})))}d.isMDXComponent=!0},67341:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Fire_Hostname-7c922caaa70fc0f05dd524971570627f.jpg"},26826:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Fire_LOGINFIREZONE-d44e663d1dcbbe8330b87730d8550d51.gif"},86531:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Fire_OIDCCONFIG-9340991316a621bbcf98a9a47d8f5c15.jpg"},57852:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Fire_RedirectURL-87e43e9479c3ef71a3e774b349846bdf.jpg"}}]);