"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78387:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Pulsar Manager",description:"Using Casdoor in Pulsar Manager",keywords:["Pulsar Manager"],authors:["jakiuncle"]},i=void 0,l={unversionedId:"integration/java/Pulsar-manager",id:"integration/java/Pulsar-manager",title:"Pulsar Manager",description:"Using Casdoor in Pulsar Manager",source:"@site/docs/integration/java/Pulsar-manager.md",sourceDirName:"integration/java",slug:"/integration/java/Pulsar-manager",permalink:"/zh/docs/integration/java/Pulsar-manager",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/Pulsar-manager.md",tags:[],version:"current",frontMatter:{title:"Pulsar Manager",description:"Using Casdoor in Pulsar Manager",keywords:["Pulsar Manager"],authors:["jakiuncle"]},sidebar:"tutorialSidebar",previous:{title:"RuoYi",permalink:"/zh/docs/integration/java/RuoYi"},next:{title:"Using Casdoor in ShenYu",permalink:"/zh/docs/integration/java/shenyu"}},s={},c=[{value:"Step 1: Deploy Casdoor",id:"step-1-deploy-casdoor",level:2},{value:"Step 2: Configure Casdoor",id:"step-2-configure-casdoor",level:2},{value:"Step 2.1: Create an organization",id:"step-21-create-an-organization",level:3},{value:"Step 2.2: Create an application",id:"step-22-create-an-application",level:3},{value:"Step 3: Enable the Pulsar Manager front-end switch",id:"step-3-enable-the-pulsar-manager-front-end-switch",level:2},{value:"Step 4: Configure the back-end code",id:"step-4-configure-the-back-end-code",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casdoor can easily connect to Pulsar Manager."),(0,r.kt)("p",null,"The code for connecting Casdoor has already been added to Pulsar Manager, so we just need to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," file in the back-end and enable the front-end switch."),(0,r.kt)("h2",{id:"step-1-deploy-casdoor"},"Step 1: Deploy Casdoor"),(0,r.kt)("p",null,"First, deploy Casdoor."),(0,r.kt)("p",null,"You can refer to the official Casdoor documentation for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Server Installation"),"."),(0,r.kt)("p",null,"After a successful deployment, ensure the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Casdoor server is running successfully at ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"http://localhost:8000"},"http://localhost:8000")),"."),(0,r.kt)("li",{parentName:"ul"},"Open your favorite browser and visit ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"http://localhost:7001"},"http://localhost:7001")),". You should see the login page of Casdoor."),(0,r.kt)("li",{parentName:"ul"},"Test the login functionality by entering ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"123"),".")),(0,r.kt)("p",null,"Now, you can quickly implement a Casdoor-based login page in your own app using the following steps."),(0,r.kt)("h2",{id:"step-2-configure-casdoor"},"Step 2: Configure Casdoor"),(0,r.kt)("p",null,"To configure Casdoor, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://door.casdoor.com/login"},"Casdoor")," (it is recommended to use a different browser than your development browser)."),(0,r.kt)("p",null,"You should also configure an organization and an application. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://door.casdoor.com/login"},"Casdoor")," for detailed instructions."),(0,r.kt)("h3",{id:"step-21-create-an-organization"},"Step 2.1: Create an organization"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"organization",src:a(25600).Z,width:"1838",height:"641"})),(0,r.kt)("h3",{id:"step-22-create-an-application"},"Step 2.2: Create an application"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"application",src:a(79858).Z,width:"1878",height:"845"})),(0,r.kt)("h2",{id:"step-3-enable-the-pulsar-manager-front-end-switch"},"Step 3: Enable the Pulsar Manager front-end switch"),(0,r.kt)("p",null,"Enable this switch to send code and state to the back-end."),(0,r.kt)("p",null,"You can find the switch on line 80 of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-manager/front-end/src/router/index.js"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"frontSwitch",src:a(8161).Z,width:"744",height:"60"})),(0,r.kt)("h2",{id:"step-4-configure-the-back-end-code"},"Step 4: Configure the back-end code"),(0,r.kt)("p",null,"Configure Casdoor's settings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," file, which can be found on line 154 of ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-manager/src/main/resources/application.properties"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"casdoor.endpoint = http://localhost:8000\ncasdoor.clientId = <client id from previous step>\ncasdoor.clientSecret = <client secret from previous step>\ncasdoor.certificate = <client certificate from previous step>\ncasdoor.organizationName = pulsar\ncasdoor.applicationName = app-pulsar\n")))}d.isMDXComponent=!0},79858:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editApplication-ee39cf0eb8842aa2a8e1761bd921fba9.png"},25600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editOrganization-e80b1957b77a724ad7262feba7315bb7.png"},8161:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);