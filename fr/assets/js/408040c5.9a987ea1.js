"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Bytebase",description:"Using OAuth2 to connect various applications, like Bytebase",keywords:["OAuth2","Bytebase","IDP"],authors:["jakiuncle"]},i=void 0,s={unversionedId:"integration/go/Bytebase",id:"integration/go/Bytebase",title:"Bytebase",description:"Using OAuth2 to connect various applications, like Bytebase",source:"@site/docs/integration/go/Bytebase.md",sourceDirName:"integration/go",slug:"/integration/go/Bytebase",permalink:"/fr/docs/integration/go/Bytebase",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/go/Bytebase.md",tags:[],version:"current",frontMatter:{title:"Bytebase",description:"Using OAuth2 to connect various applications, like Bytebase",keywords:["OAuth2","Bytebase","IDP"],authors:["jakiuncle"]},sidebar:"tutorialSidebar",previous:{title:"BookStack",permalink:"/fr/docs/integration/go/bookstack"},next:{title:"ELK",permalink:"/fr/docs/integration/go/elk"}},l={},p=[{value:"Step 1: Deploy Casdoor and Bytebase",id:"step-1-deploy-casdoor-and-bytebase",level:2},{value:"Step 2: Configure Casdoor application",id:"step-2-configure-casdoor-application",level:2},{value:"Step 3: Configure Bytebase",id:"step-3-configure-bytebase",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," can use OAuth2 to connect various applications. In this example, we will use ",(0,o.kt)("a",{parentName:"p",href:"https://www.bytebase.com/docs/get-started/install/deploy-with-docker?source=demo"},"Bytebase")," to demonstrate how to use OAuth2 to connect to your applications."),(0,o.kt)("p",null,"The following are the configuration names:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CASDOOR_HOSTNAME"),": The domain name or IP address where the Casdoor server is deployed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Bytebase_HOSTNAME"),": The domain name or IP address where Bytebase is deployed."),(0,o.kt)("h2",{id:"step-1-deploy-casdoor-and-bytebase"},"Step 1: Deploy Casdoor and Bytebase"),(0,o.kt)("p",null,"Firstly, deploy ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.bytebase.com/docs/get-started/install/deploy-with-docker?source=demo"},"Bytebase"),"."),(0,o.kt)("p",null,"After successful deployment, make sure that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Casdoor can be logged in and used normally."),(0,o.kt)("li",{parentName:"ol"},"You can set ",(0,o.kt)("inlineCode",{parentName:"li"},"CASDOOR_HOSTNAME")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000")," when deploying Casdoor in ",(0,o.kt)("inlineCode",{parentName:"li"},"prod")," mode. See ",(0,o.kt)("a",{parentName:"li",href:"https://casdoor.org/docs/basic/server-installation#production-mode"},"production mode"),".")),(0,o.kt)("h2",{id:"step-2-configure-casdoor-application"},"Step 2: Configure Casdoor application"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new or use an existing Casdoor application."),(0,o.kt)("li",{parentName:"ol"},"Find the redirect URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"<CASDOOR_HOSTNAME>/oauth/callback"),"."),(0,o.kt)("li",{parentName:"ol"},"Add the redirect URL to the Casdoor application: ",(0,o.kt)("img",{alt:"Redirect",src:n(27014).Z,width:"1865",height:"284"}))),(0,o.kt)("p",null,"On the application settings page, you will find two values: ",(0,o.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Client secret"),". We will use these values in the next step."),(0,o.kt)("p",null,"Open your favorite browser and visit: ",(0,o.kt)("strong",{parentName:"p"},"http://",(0,o.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/.well-known/openid-configuration"),". You will see the OIDC configuration of Casdoor."),(0,o.kt)("h2",{id:"step-3-configure-bytebase"},"Step 3: Configure Bytebase"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find SSO and select OAuth 2.0: ",(0,o.kt)("img",{alt:"Find SSO",src:n(62793).Z,width:"1002",height:"403"})),(0,o.kt)("li",{parentName:"ol"},"Configure this app: ",(0,o.kt)("img",{alt:"Configure",src:n(92656).Z,width:"1907",height:"835"})),(0,o.kt)("li",{parentName:"ol"},"Find the Client ID and Client Secret on the Casdoor application page.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Token server URL"),": ",(0,o.kt)("strong",{parentName:"li"},"http://",(0,o.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/api/login/oauth/access_token")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Authorization server URL"),": ",(0,o.kt)("strong",{parentName:"li"},"http://",(0,o.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/login/oauth/authorize")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"User Info server URL"),": ",(0,o.kt)("strong",{parentName:"li"},"http://",(0,o.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/api/get-account")),(0,o.kt)("li",{parentName:"ul"},"Scopes: ",(0,o.kt)("inlineCode",{parentName:"li"},"address phone openid profile offline_access email"))),(0,o.kt)("p",null,"Log out of Bytebase and test SSO.\n",(0,o.kt)("img",{alt:"Login",src:n(36577).Z,width:"800",height:"405"})))}d.isMDXComponent=!0},62793:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Find_SSO-5b8774786be8a1fed72ab84a8a949b31.png"},27014:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/application-020759fc042687a2dcf04551c3d5d79b.png"},36577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-06f14a3a542621a609bd0dd2413909bf.gif"},92656:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sso-f459f4b866062567bf4ee64be3b0fea7.png"}}]);