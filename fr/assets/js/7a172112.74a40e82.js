"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7833],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),g=d(r),m=a,k=g["".concat(p,".").concat(m)]||g[m]||l[m]||i;return r?n.createElement(k,o(o({ref:e},s),{},{components:r})):n.createElement(k,o({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93280:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={title:"Overview",description:"Add Notification providers to your application",keywords:["Notification"],authors:["UsherFall"]},o=void 0,c={unversionedId:"provider/notification/overview",id:"provider/notification/overview",title:"Overview",description:"Add Notification providers to your application",source:"@site/docs/provider/notification/overview.md",sourceDirName:"provider/notification",slug:"/provider/notification/overview",permalink:"/fr/docs/provider/notification/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/notification/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Add Notification providers to your application",keywords:["Notification"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Notification",permalink:"/fr/docs/category/notification"},next:{title:"Telegram",permalink:"/fr/docs/provider/notification/telegram"}},p={},d=[],s={toc:d};function l(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casdoor can be configured to send notification messages using various Notification providers."),(0,a.kt)("p",null,"Currently, Casdoor supports multiple Notification providers. Here are the providers that Casdoor supports:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Provider"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Logo"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Telegram"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_telegram.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Custom HTTP"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/email_default.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Slack"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_slack.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Google Chat"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_google_chat.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Twitter"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_twitter.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Discord"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_discord.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Bark"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_bark.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"DingTalk"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_dingtalk.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Lark"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_lark.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Line"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_line.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Matrix"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_matrix.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Microsoft Teams"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_teams.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Pushbullet"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_pushbullet.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Pushover"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_pushover.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Reddit"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_reddit.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Rocket Chat"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_rocket_chat.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Viber"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/social_viber.png",width:"40"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Webpush"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{src:"https://cdn.casbin.org/img/email_default.png",width:"40"}))))))}l.isMDXComponent=!0}}]);