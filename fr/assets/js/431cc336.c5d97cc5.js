"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1036],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Frontend",description:"Casdoor Frontend Development Guide",keywords:["frontend","guide"],authors:["hsluoyz"]},l=void 0,i={unversionedId:"developer-guide/frontend",id:"developer-guide/frontend",title:"Frontend",description:"Casdoor Frontend Development Guide",source:"@site/docs/developer-guide/frontend.md",sourceDirName:"developer-guide",slug:"/developer-guide/frontend",permalink:"/fr/docs/developer-guide/frontend",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/developer-guide/frontend.md",tags:[],version:"current",frontMatter:{title:"Frontend",description:"Casdoor Frontend Development Guide",keywords:["frontend","guide"],authors:["hsluoyz"]},sidebar:"tutorialSidebar",previous:{title:"Developer Guide",permalink:"/fr/docs/category/developer-guide"},next:{title:"Generating Swagger Files",permalink:"/fr/docs/developer-guide/swagger"}},d={},p=[],c={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The source code for Casdoor's frontend is located inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"/web")," folder: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor/tree/master/web"},"https://github.com/casdoor/casdoor/tree/master/web")),(0,a.kt)("p",null,"It is a ",(0,a.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},(0,a.kt)("strong",{parentName:"a"},"Create-React-App (CRA)"))," project, which follows the classic CRA folder structure as outlined below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"File/Directory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"public"),(0,a.kt)("td",{parentName:"tr",align:null},"The root HTML file for React")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"src"),(0,a.kt)("td",{parentName:"tr",align:null},"Source code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"craco.config.js"),(0,a.kt)("td",{parentName:"tr",align:null},"The Craco configuration file. You can change the theme color (blue by default) here")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"crowdin.yml"),(0,a.kt)("td",{parentName:"tr",align:null},"Crowdin i18n configuration file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"package.json"),(0,a.kt)("td",{parentName:"tr",align:null},"NPM/Yarn dependency file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"yarn.lock"),(0,a.kt)("td",{parentName:"tr",align:null},"Yarn lock file")))),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"/src")," directory, you will find several important files and folders:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"File/Directory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"account"),(0,a.kt)("td",{parentName:"tr",align:null},'The "My profile" page for logged-in users')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"auth"),(0,a.kt)("td",{parentName:"tr",align:null},"All code related to authentication, such as OAuth, SAML, sign up page, sign in page, forget password page, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"backend"),(0,a.kt)("td",{parentName:"tr",align:null},"The SDK for calling the Go backend API. It contains all the ",(0,a.kt)("inlineCode",{parentName:"td"},"fetch()")," calls")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"basic"),(0,a.kt)("td",{parentName:"tr",align:null},"The homepage (dashboard page) for Casdoor, which contains several card widgets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"common"),(0,a.kt)("td",{parentName:"tr",align:null},"Shared UI widgets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"locales"),(0,a.kt)("td",{parentName:"tr",align:null},"i18n translation files in JSON, synced with our Crowdin project: ",(0,a.kt)("a",{parentName:"td",href:"https://crowdin.com/project/casdoor-site"},"https://crowdin.com/project/casdoor-site"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"App.js"),(0,a.kt)("td",{parentName:"tr",align:null},"The entry JS file containing all the routes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Setting.js"),(0,a.kt)("td",{parentName:"tr",align:null},"Utility functions used by other code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OrganizationListPage.js"),(0,a.kt)("td",{parentName:"tr",align:null},"The page for the organization list, similar to all other ",(0,a.kt)("inlineCode",{parentName:"td"},"XXXListPage.js")," files")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OrganizationEditPage.js"),(0,a.kt)("td",{parentName:"tr",align:null},"The page for editing one organization, similar to all other ",(0,a.kt)("inlineCode",{parentName:"td"},"XXXEditPage.js")," files")))))}s.isMDXComponent=!0}}]);