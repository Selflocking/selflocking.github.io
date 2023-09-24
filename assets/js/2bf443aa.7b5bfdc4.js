"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[982],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(o),g=r,h=c["".concat(d,".").concat(g)]||c[g]||p[g]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},84963:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={title:"Cloud Foundry",description:"Learn how to integrate Casdoor with Cloud Foundry to secure your applications.",keywords:["OAuth","Cloud Foundry","integration"],authors:["RanTao123"]},i=void 0,l={unversionedId:"integration/java/CloudFoundry",id:"integration/java/CloudFoundry",title:"Cloud Foundry",description:"Learn how to integrate Casdoor with Cloud Foundry to secure your applications.",source:"@site/docs/integration/java/CloudFoundry.md",sourceDirName:"integration/java",slug:"/integration/java/CloudFoundry",permalink:"/docs/integration/java/CloudFoundry",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/java/CloudFoundry.md",tags:[],version:"current",frontMatter:{title:"Cloud Foundry",description:"Learn how to integrate Casdoor with Cloud Foundry to secure your applications.",keywords:["OAuth","Cloud Foundry","integration"],authors:["RanTao123"]},sidebar:"tutorialSidebar",previous:{title:"FireZone",permalink:"/docs/integration/java/firezone"},next:{title:"Thingsboard",permalink:"/docs/integration/java/Thingsboard"}},d={},s=[{value:"Step 1: Configure Casdoor application",id:"step-1-configure-casdoor-application",level:2},{value:"Step 2: Add a user in Casdoor",id:"step-2-add-a-user-in-casdoor",level:2},{value:"Step 3: Build the Cloud Foundry App",id:"step-3-build-the-cloud-foundry-app",level:2},{value:"Step 4: Integrate Casdoor",id:"step-4-integrate-casdoor",level:2}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before the integration, we need to deploy Casdoor locally."),(0,r.kt)("p",null,"Then, we can quickly implement a Casdoor-based login page in our own app with the following steps."),(0,r.kt)("h2",{id:"step-1-configure-casdoor-application"},"Step 1: Configure Casdoor application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create or use an existing Casdoor application."),(0,r.kt)("li",{parentName:"ol"},"Add a redirect URL: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://CASDOOR_HOSTNAME/login"),(0,r.kt)("img",{alt:"Casdoor Application Setting",src:o(45746).Z,width:"1767",height:"146"})),(0,r.kt)("li",{parentName:"ol"},"Copy the client ID; we will need it in the following steps.")),(0,r.kt)("h2",{id:"step-2-add-a-user-in-casdoor"},"Step 2: Add a user in Casdoor"),(0,r.kt)("p",null,"Now that you have the application, but not a user, you need to create a user and assign the role."),(0,r.kt)("p",null,'Go to the "Users" page and click on "Add user" in the top-right corner. This opens a new page where you can add the new user.'),(0,r.kt)("p",null,'Save the user after adding a username and the organization "Cloud Foundry" (other details are optional).'),(0,r.kt)("p",null,'Now, you need to set up a password for your user, which you can do by clicking on "Manage your password".'),(0,r.kt)("p",null,"Choose a password for your user and confirm it."),(0,r.kt)("h2",{id:"step-3-build-the-cloud-foundry-app"},"Step 3: Build the Cloud Foundry App"),(0,r.kt)("p",null,"Start the Cloud Foundry by following these steps."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$ git clone git://github.com/cloudfoundry/uaa.git"),(0,r.kt)("li",{parentName:"ul"},"$ cd uaa"),(0,r.kt)("li",{parentName:"ul"},"$ ./gradlew run\n",(0,r.kt)("img",{alt:"Casdoor Application Setting",src:o(97898).Z,width:"1223",height:"639"}))),(0,r.kt)("h2",{id:"step-4-integrate-casdoor"},"Step 4: Integrate Casdoor"),(0,r.kt)("p",null,"Now open another command line and input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl '<http://localhost/oauth/authorize?response_type=token&client_id=app&scope=openid&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapp%2F>' -i -X GET \\\n  -H 'Accept: application/x-www-form-urlencoded'\n")),(0,r.kt)("p",null,"We have already obtained the client ID and redirect URI before; we input these parameters.\n",(0,r.kt)("img",{alt:"Casdoor Application Setting",src:o(93930).Z,width:"704",height:"674"})),(0,r.kt)("p",null,"Execute the command, and we can get the result below, which means that we have successfully integrated Casdoor with Cloud Foundry.\n",(0,r.kt)("img",{alt:"Casdoor Application Setting",src:o(4640).Z,width:"1033",height:"248"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Casdoor Application Setting",src:o(176).Z,width:"1920",height:"1024"})))}p.isMDXComponent=!0},45746:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cas-5af2f28e52ed3cd92f069520979945f5.png"},97898:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/command-f6d0aae3ae2b6b75040758486645752b.png"},176:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/login-2e161549ef24baaecc277a598f730064.gif"},93930:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/parameter-4569b7eb8f9ed0806c2c230e0f4a9996.png"},4640:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/result-b952a1fcf5ffb667fedd33a5f6c1a8bc.png"}}]);