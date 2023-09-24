"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,m=u["".concat(p,".").concat(h)]||u[h]||l[h]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={title:"AzureAD",description:"Add AzureAD as a third-party service to complete authentication",keywords:["AzureAD"],authors:["leo220yuyaodog"]},i=void 0,s={unversionedId:"provider/oauth/azureAD",id:"provider/oauth/azureAD",title:"AzureAD",description:"Add AzureAD as a third-party service to complete authentication",source:"@site/docs/provider/oauth/azureAD.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/azureAD",permalink:"/zh/docs/provider/oauth/azureAD",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/azureAD.md",tags:[],version:"current",frontMatter:{title:"AzureAD",description:"Add AzureAD as a third-party service to complete authentication",keywords:["AzureAD"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"AD FS",permalink:"/zh/docs/provider/oauth/adfs"},next:{title:"Infoflow",permalink:"/zh/docs/provider/oauth/infoflow"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to use?",id:"how-to-use",level:2},{value:"Step 1: Register an application",id:"step-1-register-an-application",level:3},{value:"Step 2: Create a client secret",id:"step-2-create-a-client-secret",level:3},{value:"Step 3: Add redirect URIs",id:"step-3-add-redirect-uris",level:3},{value:"Step 4: Grant admin consent",id:"step-4-grant-admin-consent",level:3},{value:"Step 5: Create AzureAD provider in Casdoor",id:"step-5-create-azuread-provider-in-casdoor",level:3}],c={toc:d};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Azure Active Directory (Azure AD) simplifies application management by providing a single identity system for cloud and on-premises applications. Software as a Service (SaaS) applications, on-premises applications, and Line of Business (LOB) applications can be added to Azure AD. Users can then log in once for secure and seamless access to these applications, as well as Office 365 and other business applications provided by Microsoft."),(0,n.kt)("h2",{id:"how-to-use"},"How to use?"),(0,n.kt)("p",null,"The steps to register an app are shown below."),(0,n.kt)("h3",{id:"step-1-register-an-application"},"Step 1: Register an application"),(0,n.kt)("p",null,"First, ",(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps"},"register")," an application and choose the account type as needed. The demo station uses the type shown below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"azuread_register.png",src:r(35900).Z,width:"1156",height:"873"})),(0,n.kt)("h3",{id:"step-2-create-a-client-secret"},"Step 2: Create a client secret"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("inlineCode",{parentName:"p"},"client secret")," and save the value because it will be used later."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"azuread_secret.png",src:r(58159).Z,width:"1833",height:"693"})),(0,n.kt)("h3",{id:"step-3-add-redirect-uris"},"Step 3: Add redirect URIs"),(0,n.kt)("p",null,"Follow the example in the picture to add the redirect URIs for Casdoor."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"azuread_uri.png",src:r(11346).Z,width:"1521",height:"782"})),(0,n.kt)("h3",{id:"step-4-grant-admin-consent"},"Step 4: Grant admin consent"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"user.read")," API is open by default. You can add more scopes according to your needs. Finally, remember to ",(0,n.kt)("strong",{parentName:"p"},"grant admin consent"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"azuread_permission.png",src:r(52418).Z,width:"3211",height:"1729"})),(0,n.kt)("h3",{id:"step-5-create-azuread-provider-in-casdoor"},"Step 5: Create AzureAD provider in Casdoor"),(0,n.kt)("p",null,"The last step is to add an AzureAD OAuth provider and fill in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Client Secret")," in your Casdoor."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"azuread_casdoor.png",src:r(92628).Z,width:"739",height:"643"})))}l.isMDXComponent=!0},92628:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azuread_casdoor-7bd6bd02096a4a3606a35562f88acba0.png"},52418:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azuread_permission-b141dd57c4c83a86e6a5be99bc730230.png"},35900:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azuread_register-e51ad79f90939a059d244db9ec0eaca3.png"},58159:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azuread_secret-1fd0eb4779656296b9dc41b42dc4776a.png"},11346:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azuread_uri-d3c8e72ac13bfeb51097a3f2901b7098.png"}}]);