"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Apache DolphinScheduler",description:"Using Casdoor for DolphinScheduler SSO login",keywords:["DolphinScheduler"],authors:["Abingcbc"]},i=void 0,l={unversionedId:"integration/java/dolphinscheduler",id:"integration/java/dolphinscheduler",title:"Apache DolphinScheduler",description:"Using Casdoor for DolphinScheduler SSO login",source:"@site/docs/integration/java/dolphinscheduler.md",sourceDirName:"integration/java",slug:"/integration/java/dolphinscheduler",permalink:"/de/docs/integration/java/dolphinscheduler",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/dolphinscheduler.md",tags:[],version:"current",frontMatter:{title:"Apache DolphinScheduler",description:"Using Casdoor for DolphinScheduler SSO login",keywords:["DolphinScheduler"],authors:["Abingcbc"]},sidebar:"tutorialSidebar",previous:{title:"Apache IoTDB",permalink:"/de/docs/integration/java/iotdb"},next:{title:"FireZone",permalink:"/de/docs/integration/java/firezone"}},p={},s=[{value:"Step 1: Deploy Casdoor",id:"step-1-deploy-casdoor",level:2},{value:"Step 2: Configure Casdoor Application",id:"step-2-configure-casdoor-application",level:2},{value:"Step 3: Configure DolphinScheduler",id:"step-3-configure-dolphinscheduler",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casdoor is one of the supported login methods for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/dolphinscheduler"},"Apache DolphinScheduler"),"."),(0,r.kt)("h2",{id:"step-1-deploy-casdoor"},"Step 1: Deploy Casdoor"),(0,r.kt)("p",null,"Firstly, Casdoor should be deployed. You can refer to the Casdoor official documentation for ",(0,r.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/basic/server-installation"},"Server Installation"),"."),(0,r.kt)("p",null,"After a successful deployment, please ensure that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Casdoor server is running successfully at ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000"),"."),(0,r.kt)("li",{parentName:"ul"},"Open your favorite browser and visit ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:7001"},"http://localhost:7001"),". You will see the login page of Casdoor."),(0,r.kt)("li",{parentName:"ul"},'Test the login functionality by inputting "admin" and "123".')),(0,r.kt)("p",null,"Once the deployment is completed, you can quickly implement a Casdoor-based login page in your own app by following the steps below."),(0,r.kt)("h2",{id:"step-2-configure-casdoor-application"},"Step 2: Configure Casdoor Application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new Casdoor application or use an existing one."),(0,r.kt)("li",{parentName:"ol"},"Add your redirect URL (You can find more details about how to obtain the redirect URL in the next section).\n",(0,r.kt)("img",{alt:"Casdoor Application Setting",src:n(30652).Z,width:"974",height:"935"})),(0,r.kt)("li",{parentName:"ol"},"Add the desired provider and fill in other necessary settings.")),(0,r.kt)("p",null,"On the application settings page, you will find two important values: ",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Client secret"),", as shown in the picture above. We will use these values in the next step."),(0,r.kt)("p",null,"Open your favorite browser and visit ",(0,r.kt)("strong",{parentName:"p"},"http://",(0,r.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/.well-known/openid-configuration")," to view the OIDC configuration of Casdoor."),(0,r.kt)("h2",{id:"step-3-configure-dolphinscheduler"},"Step 3: Configure DolphinScheduler"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"dolphinscheduler-api/src/main/resources/application.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"security:\n  authentication:\n    # Authentication types (supported types: PASSWORD, LDAP, CASDOOR_SSO)\n    type: CASDOOR_SSO\ncasdoor:\n  # The URL of your Casdoor server\n  endpoint:\n  client-id:\n  client-secret:\n  # The certificate may be multi-line; you can use `|-` for ease\n  certificate: \n  # The organization name you added in Casdoor\n  organization-name:\n  # The application name you added in Casdoor\n  application-name:\n  # The DolphinScheduler login URL\n  redirect-url: http://localhost:5173/login \n")),(0,r.kt)("p",null,"Now, DolphinScheduler will automatically redirect you to Casdoor for authentication.\n",(0,r.kt)("img",{alt:"Demo",src:n(91023).Z,width:"1510",height:"854"})))}d.isMDXComponent=!0},91023:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dolphinscheduler-ff81209192ddf6a095626f64c8952204.gif"},30652:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/casdoor_setting-fca4ce21a48b644d6bbe251ca27271b7.png"}}]);