"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7723],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"JumpServer",description:"Using CAS to connect JumpServer",keywords:["CAS","JumpServer","IDP"],authors:["jakiuncle"]},i=void 0,p={unversionedId:"integration/python/JumpServer",id:"integration/python/JumpServer",title:"JumpServer",description:"Using CAS to connect JumpServer",source:"@site/docs/integration/python/JumpServer.md",sourceDirName:"integration/python",slug:"/integration/python/JumpServer",permalink:"/zh/docs/integration/python/JumpServer",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/python/JumpServer.md",tags:[],version:"current",frontMatter:{title:"JumpServer",description:"Using CAS to connect JumpServer",keywords:["CAS","JumpServer","IDP"],authors:["jakiuncle"]},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/zh/docs/category/python"},next:{title:"Monitoring",permalink:"/zh/docs/category/monitoring"}},l={},s=[{value:"Step 1: Deploy Casdoor and JumpServer",id:"step-1-deploy-casdoor-and-jumpserver",level:2},{value:"Step 2: Configure Casdoor application",id:"step-2-configure-casdoor-application",level:2},{value:"Step 3: Configure JumpServer",id:"step-3-configure-jumpserver",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," can be used to connect ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jumpserver/jumpserver/"},"JumpServer"),"."),(0,o.kt)("p",null,"The following are some of the names in the configuration:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CASDOOR_HOSTNAME"),": The domain name or IP where Casdoor server is deployed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JumpServer_HOSTNAME"),": The domain name or IP where JumpServer is deployed."),(0,o.kt)("h2",{id:"step-1-deploy-casdoor-and-jumpserver"},"Step 1: Deploy Casdoor and JumpServer"),(0,o.kt)("p",null,"Firstly, deploy ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jumpserver/jumpserver/"},"JumpServer"),"."),(0,o.kt)("p",null,"After successful deployment, ensure the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Casdoor can be logged in and used normally."),(0,o.kt)("li",{parentName:"ol"},"You can set CASDOOR_HOSTNAME to ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000")," when deploying Casdoor in ",(0,o.kt)("inlineCode",{parentName:"li"},"prod")," mode. See ",(0,o.kt)("a",{parentName:"li",href:"https://casdoor.org/docs/basic/server-installation#production-mode"},"production mode"),".")),(0,o.kt)("h2",{id:"step-2-configure-casdoor-application"},"Step 2: Configure Casdoor application"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new Casdoor application or use an existing one."),(0,o.kt)("li",{parentName:"ol"},"Find a redirect URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"CASDOOR_HOSTNAME"),"/cas/",(0,o.kt)("inlineCode",{parentName:"li"},"your organization"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"your application"),"/login."),(0,o.kt)("li",{parentName:"ol"},"Add your redirect URL to the Casdoor application: ",(0,o.kt)("inlineCode",{parentName:"li"},"JumpServer_HOSTNAME"),".")),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/how-to-connect/cas"},"CAS"),", refer to the documentation."),(0,o.kt)("h2",{id:"step-3-configure-jumpserver"},"Step 3: Configure JumpServer"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find Auth: ",(0,o.kt)("img",{alt:"Find_Auth",src:r(66469).Z,width:"2485",height:"1261"}),"."),(0,o.kt)("li",{parentName:"ol"},"Configure this app: ",(0,o.kt)("img",{alt:"configure",src:r(9889).Z,width:"2493",height:"1292"}),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/login")," endpoint: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/login"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/logout")," endpoint: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/logout"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/serviceValidate")," endpoint: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/serviceValidate"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/proxyValidate")," endpoint: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/proxyValidate"),".")),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/how-to-connect/cas"},"CAS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.jumpserver.org/zh/master/admin-guide/authentication/cas/"},"JumpServer"),", refer to the documentation."),(0,o.kt)("p",null,"Log out of JumpServer and test SSO:\n",(0,o.kt)("img",{alt:"Login",src:r(48407).Z,width:"800",height:"456"})))}d.isMDXComponent=!0},66469:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Auth-cca41f5ecc9e43bde2b4095afe0c7767.png"},9889:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jumpServer-d55ccef6f3c471af48368152d9aba7db.png"},48407:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/login-ee404d63fe3fb49826af5ad2ff322819.gif"}}]);