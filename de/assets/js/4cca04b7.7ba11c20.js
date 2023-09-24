"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3246],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),g=o,h=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69324:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={title:"Thingsboard",description:"Learn how to integrate Casdoor with Thingsboard to secure your applications",keywords:["oauth2","Thingsboard","integration"],authors:["RanTao123"]},i=void 0,s={unversionedId:"integration/java/Thingsboard",id:"integration/java/Thingsboard",title:"Thingsboard",description:"Learn how to integrate Casdoor with Thingsboard to secure your applications",source:"@site/docs/integration/java/Thingsboard.md",sourceDirName:"integration/java",slug:"/integration/java/Thingsboard",permalink:"/de/docs/integration/java/Thingsboard",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/Thingsboard.md",tags:[],version:"current",frontMatter:{title:"Thingsboard",description:"Learn how to integrate Casdoor with Thingsboard to secure your applications",keywords:["oauth2","Thingsboard","integration"],authors:["RanTao123"]},sidebar:"tutorialSidebar",previous:{title:"Cloud Foundry",permalink:"/de/docs/integration/java/CloudFoundry"},next:{title:"JavaScript",permalink:"/de/docs/category/javascript"}},l={},d=[{value:"Step 1: Configure Casdoor application",id:"step-1-configure-casdoor-application",level:2},{value:"Step 2: Add a user in Casdoor",id:"step-2-add-a-user-in-casdoor",level:2},{value:"Step 3: Prerequisites and Build Thingsboard App",id:"step-3-prerequisites-and-build-thingsboard-app",level:2},{value:"Step 4: Integrate Casdoor",id:"step-4-integrate-casdoor",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before the integration, we need to deploy Casdoor locally."),(0,o.kt)("p",null,"Then, we can quickly implement a Casdoor-based login page in our own app by following these steps."),(0,o.kt)("h2",{id:"step-1-configure-casdoor-application"},"Step 1: Configure Casdoor application"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new Casdoor application or use an existing one."),(0,o.kt)("li",{parentName:"ol"},"Add a redirect URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://CASDOOR_HOSTNAME/login"),(0,o.kt)("img",{alt:"Casdoor Application Setting",src:a(66674).Z,width:"1324",height:"856"})),(0,o.kt)("li",{parentName:"ol"},"Copy the client ID and client secret. We will need them in the following steps.")),(0,o.kt)("h2",{id:"step-2-add-a-user-in-casdoor"},"Step 2: Add a user in Casdoor"),(0,o.kt)("p",null,"Now that you have the application, you need to create a user and assign a role."),(0,o.kt)("p",null,'Go to the "Users" page and click on "Add user" in the top right corner. This will open a new page where you can add the new user.'),(0,o.kt)("p",null,'Save the user after adding a username and selecting the organization "Thingsboard" (other details are optional).'),(0,o.kt)("p",null,'Next, you need to set up a password for the user. You can do this by clicking on "Manage your password".'),(0,o.kt)("p",null,"Choose a password for the user and confirm it."),(0,o.kt)("h2",{id:"step-3-prerequisites-and-build-thingsboard-app"},"Step 3: Prerequisites and Build Thingsboard App"),(0,o.kt)("p",null,"First of all, Thingsboard only supports Java 11 (OpenJDK)."),(0,o.kt)("p",null,"You can download it from the following link:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://adoptium.net/zh-CN/"},"JDK Download Page")),(0,o.kt)("p",null,"To start Thingsboard, follow these steps (for Windows system):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download and extract the package. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/thingsboard/thingsboard/releases/download/v3.5/thingsboard-windows-3.5.zip"},"Download the package")),(0,o.kt)("li",{parentName:"ul"},"Configure Thingsboard in \\thingsboard\\conf\\thingsboard.yml according to your preferences, including the configuration of Kafka, PostgreSQL, and others."),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"install.bat \u2013loadDemo")," in the command line in the Thingsboard folder to install and add demo data.\n",(0,o.kt)("img",{alt:"Casdoor Application Setting",src:a(12473).Z,width:"801",height:"283"})),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"net start thingsboard")," in the command line to start Thingsboard. You should see the following output:\n",(0,o.kt)("img",{alt:"Casdoor Application Setting",src:a(61901).Z,width:"841",height:"100"}))),(0,o.kt)("h2",{id:"step-4-integrate-casdoor"},"Step 4: Integrate Casdoor"),(0,o.kt)("p",null,"Now open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")," and log in to the admin account:"),(0,o.kt)("p",null,"Account: ",(0,o.kt)("a",{parentName:"p",href:"mailto:sysadmin@thingsboard.org"},"sysadmin@thingsboard.org")," / Password: sysadmin"),(0,o.kt)("p",null,"After successfully logging in, click the OAuth2 button at the bottom left of the page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casdoor Application Setting",src:a(40032).Z,width:"999",height:"679"})),(0,o.kt)("p",null,"Fill in the blanks as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casdoor Application Setting",src:a(8607).Z,width:"902",height:"769"})),(0,o.kt)("p",null,"You can get these values from the following link:\n",(0,o.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/how-to-connect/oidc-client#oidc-discovery/"},"OIDC discovery URL"),"\n",(0,o.kt)("img",{alt:"Casdoor Application Setting",src:a(84522).Z,width:"977",height:"251"})),(0,o.kt)("p",null,"After filling in these blanks, you have successfully integrated Casdoor with Thingsboard. When you log in to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/"),", you should see the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casdoor Application Setting",src:a(5565).Z,width:"1918",height:"1028"})))}c.isMDXComponent=!0},84522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_1-4260f080c0c177ac86b919fc90d80e2a.png"},8607:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_2-313a4281b1e6e75e29a35e84eca968bf.png"},40032:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_3-14edf9785f0a3504db2aaf4ccdbdfafd.png"},61901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_4-1091f3733aeb037acb5c5075dbb72137.png"},12473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_5-238e50cc2ff0156ec5aff17e0cea9237.png"},66674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_6-8085d7d59b1b1c4352c007dce5af14af.png"},5565:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/integrate-efd5c1b6d36a01c13b308448cb38b78b.gif"}}]);