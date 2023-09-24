"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Portainer",description:"Using Casdoor for authentication in Portainer",keywords:["Portainer"],authors:["UsherFall"]},i=void 0,p={unversionedId:"integration/go/portainer",id:"integration/go/portainer",title:"Portainer",description:"Using Casdoor for authentication in Portainer",source:"@site/docs/integration/go/portainer.md",sourceDirName:"integration/go",slug:"/integration/go/portainer",permalink:"/zh/docs/integration/go/portainer",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/go/portainer.md",tags:[],version:"current",frontMatter:{title:"Portainer",description:"Using Casdoor for authentication in Portainer",keywords:["Portainer"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"MinIO",permalink:"/zh/docs/integration/go/minio"},next:{title:"Java",permalink:"/zh/docs/category/java"}},s={},l=[{value:"Using Casdoor for authentication in Portainer",id:"using-casdoor-for-authentication-in-portainer",level:2},{value:"Step 1: Create an app for Portainer in Casdoor",id:"step-1-create-an-app-for-portainer-in-casdoor",level:2},{value:"Step 2: Configure Portainer",id:"step-2-configure-portainer",level:2}],c={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-casdoor-for-authentication-in-portainer"},"Using Casdoor for authentication in Portainer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.portainer.io/"},"Portainer")," supports authentication via OAuth. Therefore, it is easy for users to use Casdoor to log in to Portainer. Only several steps and simple configurations are needed to achieve that."),(0,a.kt)("p",null,"Here is a tutorial on how to use Casdoor for authentication in Grafana. Before you proceed, please ensure that you have Portainer installed and running."),(0,a.kt)("p",null,"The following are the configuration names:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CASDOOR_HOST"),": The domain name or IP address where the Casdoor server is deployed."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PORTAINER_HOST"),": The domain name or IP address where Portainer is deployed."),(0,a.kt)("h2",{id:"step-1-create-an-app-for-portainer-in-casdoor"},"Step 1: Create an app for Portainer in Casdoor"),(0,a.kt)("p",null,"Here is an example of creating an app in Casdoor:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"portainer_1",src:r(17619).Z,width:"1263",height:"792"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the client secret and client ID for the next step.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a Redirect URL. It's your Portainer host."))),(0,a.kt)("h2",{id:"step-2-configure-portainer"},"Step 2: Configure Portainer"),(0,a.kt)("p",null,"Expand the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," from the left navigation bar, click on the ",(0,a.kt)("strong",{parentName:"p"},"Authentication")," option from this list."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable ",(0,a.kt)("strong",{parentName:"p"},"Use SSO")," and ",(0,a.kt)("strong",{parentName:"p"},"Automatic user provisioning"),": ",(0,a.kt)("img",{alt:"portainer_2",src:r(38150).Z,width:"1798",height:"838"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in the necessary information as follows: ",(0,a.kt)("img",{alt:"portainer_3",src:r(26952).Z,width:"1797",height:"823"})))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Authorization URL"),": ",(0,a.kt)("strong",{parentName:"p"},"https://<CASDOOR_HOST>/login/oauth/authorize"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Access token URL"),": ",(0,a.kt)("strong",{parentName:"p"},"https://<CASDOOR_HOST>/api/login/oauth/access_token"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Resource URL"),": ",(0,a.kt)("strong",{parentName:"p"},"https://<CASDOOR_HOST>/api/userinfo"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Redirect URL"),": ",(0,a.kt)("strong",{parentName:"p"},"https://<PORTAINER_HOST>")))),(0,a.kt)("p",null,"Log out of Portainer and test."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Login",src:r(14771).Z,width:"1000",height:"538"})))}u.isMDXComponent=!0},14771:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/login-04a0b3fdbd31c1816de99af78b7795b6.gif"},17619:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/portainer_1-87932c48a9f81c89c50a1a750497983b.png"},38150:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/portainer_2-8bc3c3bf76173e45b5795e4f85a65872.png"},26952:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/portainer_3-ba30bcfa6366b097a9c33bea0e614b50.png"}}]);