"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=i,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={title:"Via Built-in SSO",description:"Using the OIDC protocol as an IDP to connect various applications, such as Jira",keywords:["OIDC","Jira","IDP"],authors:["jakiuncle"]},o=void 0,s={unversionedId:"integration/java/jira2",id:"integration/java/jira2",title:"Via Built-in SSO",description:"Using the OIDC protocol as an IDP to connect various applications, such as Jira",source:"@site/docs/integration/java/jira2.md",sourceDirName:"integration/java",slug:"/integration/java/jira2",permalink:"/fr/docs/integration/java/jira2",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/jira2.md",tags:[],version:"current",frontMatter:{title:"Via Built-in SSO",description:"Using the OIDC protocol as an IDP to connect various applications, such as Jira",keywords:["OIDC","Jira","IDP"],authors:["jakiuncle"]},sidebar:"tutorialSidebar",previous:{title:"Jira",permalink:"/fr/docs/category/jira"},next:{title:"Using the miniOrange Plugin",permalink:"/fr/docs/integration/java/jira"}},l={},c=[{value:"Step 1: Deploy Casdoor and Jira",id:"step-1-deploy-casdoor-and-jira",level:2},{value:"Step 2: Configure Casdoor application",id:"step-2-configure-casdoor-application",level:2},{value:"Step 3: Configure Jira",id:"step-3-configure-jira",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a free method to connect Casdoor, but your website must use HTTPS."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," can use the OIDC protocol as an IDP to connect various applications. Here is a ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/software/jira/guides/getting-started/overview"},"Jira")," tutorial."),(0,i.kt)("p",null,"The following are some of the names in the configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CASDOOR_HOSTNAME"),": Domain name or IP where the Casdoor server is deployed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Jira_HOSTNAME"),": Domain name or IP where Jira is deployed.")),(0,i.kt)("h2",{id:"step-1-deploy-casdoor-and-jira"},"Step 1: Deploy Casdoor and Jira"),(0,i.kt)("p",null,"Firstly, deploy ",(0,i.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/software/jira/guides/getting-started/overview"},"Jira"),"."),(0,i.kt)("p",null,"After a successful deployment, ensure the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Casdoor can be logged in and used normally."),(0,i.kt)("li",{parentName:"ol"},"You can set ",(0,i.kt)("inlineCode",{parentName:"li"},"CASDOOR_HOSTNAME")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:8000")," when deploying Casdoor in ",(0,i.kt)("inlineCode",{parentName:"li"},"prod")," mode. See ",(0,i.kt)("a",{parentName:"li",href:"https://casdoor.org/docs/basic/server-installation#production-mode"},"production mode"),".")),(0,i.kt)("h2",{id:"step-2-configure-casdoor-application"},"Step 2: Configure Casdoor application"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create or use an existing Casdoor application."),(0,i.kt)("li",{parentName:"ol"},"Find Authentication methods: ",(0,i.kt)("img",{alt:"Jira Callback",src:a(93631).Z,width:"1843",height:"1009"})),(0,i.kt)("li",{parentName:"ol"},"Add a Configuration and choose OpenID Connection single sign-on in the Authentication method ",(0,i.kt)("img",{alt:"Jira Method",src:a(80189).Z,width:"1330",height:"582"})),(0,i.kt)("li",{parentName:"ol"},"Find the redirect URL: ",(0,i.kt)("img",{alt:"redirect",src:a(61871).Z,width:"1274",height:"286"})),(0,i.kt)("li",{parentName:"ol"},"Add a redirect URL: ",(0,i.kt)("img",{alt:"Jira Application",src:a(60565).Z,width:"1643",height:"349"}))),(0,i.kt)("p",null,"Not surprisingly, you can obtain two values on the application settings page: ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Client secret"),", like the picture above. We will use them in the next step."),(0,i.kt)("p",null,"Open your favorite browser and visit: ",(0,i.kt)("strong",{parentName:"p"},"http://",(0,i.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/.well-known/openid-configuration"),". You will see the OIDC configuration of Casdoor."),(0,i.kt)("h2",{id:"step-3-configure-jira"},"Step 3: Configure Jira"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We need to continue configuring our Configuration in Jira ",(0,i.kt)("img",{alt:"Config",src:a(59336).Z,width:"870",height:"974"})," ",(0,i.kt)("img",{alt:"Config2",src:a(73070).Z,width:"962",height:"1025"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can configure more complex authorization later. For now, check if OpenID actually works.\n",(0,i.kt)("img",{alt:"Jira Login",src:a(28598).Z,width:"800",height:"409"})))))}d.isMDXComponent=!0},59336:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Config-9cdf331d592c57180213ad81fe82d54f.png"},73070:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Config2-001996865d35ea258784f60816e7d9bc.png"},93631:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/System-73adfab766c0e5904e290390e2e12e39.png"},60565:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jira_application-eaa97171e5aeef506a77890d0c171727.png"},28598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login-fda7a78b7e0c77bc93b2e52cab11ed3e.gif"},80189:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/method-1ac086718dfb1b56bf5e5876040a3c1b.png"},61871:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/redirect-4eb151a3a86f570392ba9a288e66bfa6.png"}}]);