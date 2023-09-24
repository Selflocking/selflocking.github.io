"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8040],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89815:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Telegram",description:"Using Telegram as a notification provider for Casdoor",keywords:["telegram","notification","provider"],authors:["UsherFall"]},i=void 0,l={unversionedId:"provider/notification/telegram",id:"provider/notification/telegram",title:"Telegram",description:"Using Telegram as a notification provider for Casdoor",source:"@site/docs/provider/notification/telegram.md",sourceDirName:"provider/notification",slug:"/provider/notification/telegram",permalink:"/ru/docs/provider/notification/telegram",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/notification/telegram.md",tags:[],version:"current",frontMatter:{title:"Telegram",description:"Using Telegram as a notification provider for Casdoor",keywords:["telegram","notification","provider"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/ru/docs/provider/notification/overview"},next:{title:"Custom HTTP",permalink:"/ru/docs/provider/notification/customHttp"}},p={},c=[{value:"Step 1: Get API Token",id:"step-1-get-api-token",level:2},{value:"Step 2: Get Chat ID",id:"step-2-get-chat-id",level:2},{value:"Step 3: Configure Casdoor Telegram Provider",id:"step-3-configure-casdoor-telegram-provider",level:2}],d={toc:c};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"step-1-get-api-token"},"Step 1: Get API Token"),(0,n.kt)("p",null,"First, you need to create an account on ",(0,n.kt)("a",{parentName:"p",href:"https://web.telegram.org/"},"Telegram"),". After creating an account, you should contact the ",(0,n.kt)("a",{parentName:"p",href:"https://telegram.me/BotFather"},"BotFather"),", which is a bot used to create other bots."),(0,n.kt)("p",null,"To create your bot, use the command ",(0,n.kt)("inlineCode",{parentName:"p"},"/newbot"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"telegram_bot",src:r(34381).Z,width:"1546",height:"1222"})),(0,n.kt)("p",null,"Your bot should have two attributes: a ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," and a ",(0,n.kt)("inlineCode",{parentName:"p"},"username"),". After creating the bot, you will receive an ",(0,n.kt)("inlineCode",{parentName:"p"},"API Token"),"."),(0,n.kt)("h2",{id:"step-2-get-chat-id"},"Step 2: Get Chat ID"),(0,n.kt)("p",null,"To find your chat ID, use ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/raw_info_bot"},"RawDataBot"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"telegram_chat_id",src:r(11774).Z,width:"1056",height:"424"})),(0,n.kt)("h2",{id:"step-3-configure-casdoor-telegram-provider"},"Step 3: Configure Casdoor Telegram Provider"),(0,n.kt)("p",null,"There are three required fields: ",(0,n.kt)("inlineCode",{parentName:"p"},"App Key"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Content"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"Chat ID"),". The relationship between the fields and Telegram is as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Name in Telegram"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Secret key"),(0,n.kt)("td",{parentName:"tr",align:null},"API Token")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Chat ID"),(0,n.kt)("td",{parentName:"tr",align:null},"Chat ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Content"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"telegram_provider",src:r(83960).Z,width:"1241",height:"652"})),(0,n.kt)("video",{src:"/video/provider/notification/use_telegram_as_notification_provider.mp4",controls:"controls",width:"100%"}))}s.isMDXComponent=!0},34381:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/telegram_bot-6520215d741bef8a4f05b928f738f0d0.png"},11774:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/telegram_chat_id-3f99ababa87520a02d9b625abf223a5c.png"},83960:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/telegram_provider-8e60bbc638b1dfadb2bb17d3af29aef9.png"}}]);