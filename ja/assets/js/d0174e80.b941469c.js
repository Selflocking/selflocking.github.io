"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"Discord",description:"Using Discord as a notification provider for Casdoor",keywords:["Discord","notification","provider"],authors:["UsherFall"]},a=void 0,d={unversionedId:"provider/notification/discord",id:"provider/notification/discord",title:"Discord",description:"Using Discord as a notification provider for Casdoor",source:"@site/docs/provider/notification/discord.md",sourceDirName:"provider/notification",slug:"/provider/notification/discord",permalink:"/ja/docs/provider/notification/discord",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/notification/discord.md",tags:[],version:"current",frontMatter:{title:"Discord",description:"Using Discord as a notification provider for Casdoor",keywords:["Discord","notification","provider"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Twitter",permalink:"/ja/docs/provider/notification/twitter"},next:{title:"Storage",permalink:"/ja/docs/category/storage"}},c={},l=[{value:"Step 1: Get Token from Discord",id:"step-1-get-token-from-discord",level:2},{value:"Step 2: Get Channel ID",id:"step-2-get-channel-id",level:2},{value:"Step 3: Configure Casdoor Discord Provider",id:"step-3-configure-casdoor-discord-provider",level:2}],s={toc:l};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"step-1-get-token-from-discord"},"Step 1: Get Token from Discord"),(0,o.kt)("p",null,"First, sign up for the Discord Developer portal, create a new application, navigate to the \u201cBot\u201d tab to configure it."),(0,o.kt)("p",null,"Copy your Bot ",(0,o.kt)("inlineCode",{parentName:"p"},"token")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"discord_token",src:r(88563).Z,width:"1773",height:"897"})),(0,o.kt)("h2",{id:"step-2-get-channel-id"},"Step 2: Get Channel ID"),(0,o.kt)("p",null,"Copy the Channel ID of the channel you want to post a message to. You can grab the Channel ID by right clicking a channel and selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy Channel ID")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"discord_channel",src:r(57878).Z,width:"1734",height:"747"})),(0,o.kt)("h2",{id:"step-3-configure-casdoor-discord-provider"},"Step 3: Configure Casdoor Discord Provider"),(0,o.kt)("p",null,"There are three required fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"App Key"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Content"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Chat ID"),". The relationship between the fields and Discord is as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Name in Slack"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Secret key"),(0,o.kt)("td",{parentName:"tr",align:null},"Token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Chat ID"),(0,o.kt)("td",{parentName:"tr",align:null},"Channel ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Content"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"discord_provider",src:r(74057).Z,width:"1231",height:"538"})))}p.isMDXComponent=!0},57878:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/discord_channel-6224958e564039e6923c9a1b9f50f6e6.png"},74057:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/discord_provider-fe8d7b034140a1e2836a2d2e41e9d9d6.png"},88563:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/discord_token-ce2d1d06d304b3696a748177147c7bdd.png"}}]);