"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5581],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(f,o(o({ref:e},d),{},{components:r})):n.createElement(f,o({ref:e},d))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92771:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"Twitter",description:"Using Twitter as a notification provider for Casdoor",keywords:["Twitter","notification","provider"],authors:["UsherFall"]},o=void 0,l={unversionedId:"provider/notification/twitter",id:"provider/notification/twitter",title:"Twitter",description:"Using Twitter as a notification provider for Casdoor",source:"@site/docs/provider/notification/twitter.md",sourceDirName:"provider/notification",slug:"/provider/notification/twitter",permalink:"/zh/docs/provider/notification/twitter",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/notification/twitter.md",tags:[],version:"current",frontMatter:{title:"Twitter",description:"Using Twitter as a notification provider for Casdoor",keywords:["Twitter","notification","provider"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Google Chat",permalink:"/zh/docs/provider/notification/googleChat"},next:{title:"Discord",permalink:"/zh/docs/provider/notification/discord"}},p={},c=[{value:"Step 1: Get the configuration items from twitter",id:"step-1-get-the-configuration-items-from-twitter",level:2},{value:"Step 2: Get Twitter ID",id:"step-2-get-twitter-id",level:2},{value:"Step 3: Configure Casdoor Twitter Provider",id:"step-3-configure-casdoor-twitter-provider",level:2}],d={toc:c};function s(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"step-1-get-the-configuration-items-from-twitter"},"Step 1: Get the configuration items from twitter"),(0,i.kt)("p",null,"First, sign up for a Twitter developer account, create a Twitter App within the developer portal refer to the documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://developer.twitter.com/en/docs/authentication/oauth-1-0a/api-key-and-secret#:~:text=The%20API%20Key%20and%20Secret,App%20requests%20are%20coming%20from."},"Authentication")),(0,i.kt)("p",null,"Copy your ",(0,i.kt)("inlineCode",{parentName:"p"},"API Key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"API Secret"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Access Token")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Access Token Secret")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"twitter_items",src:r(282).Z,width:"1295",height:"821"})),(0,i.kt)("h2",{id:"step-2-get-twitter-id"},"Step 2: Get Twitter ID"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Twitter ID")," can't be obtained directly, you can get it from some third-party tools."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tweeterid.com/"},"TweeterID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://twiteridfinder.com/"},"Twiteridfinder"))),(0,i.kt)("h2",{id:"step-3-configure-casdoor-twitter-provider"},"Step 3: Configure Casdoor Twitter Provider"),(0,i.kt)("p",null,"There are five required fields: ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Client secret"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID 2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Client secret 2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Chat ID"),". The relationship between the fields and Twitter is as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Name in Twitter"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,i.kt)("td",{parentName:"tr",align:null},"API Key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client secret"),(0,i.kt)("td",{parentName:"tr",align:null},"API Secret")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client ID 2"),(0,i.kt)("td",{parentName:"tr",align:null},"Access Token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client secret 2"),(0,i.kt)("td",{parentName:"tr",align:null},"Access Token Secret")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Chat ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Twitter ID")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"twitter_provider",src:r(49612).Z,width:"1117",height:"841"})))}s.isMDXComponent=!0},282:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/twitter_items-826c273ca14b08629eee1c9e4f053a7d.png"},49612:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/twitter_provider-b00316e2875ff9c824ed33f2be9a5071.png"}}]);