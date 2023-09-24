"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,k=u["".concat(p,".").concat(g)]||u[g]||s[g]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"DingTalk",description:"Add DingTalk OAuth provider to your application",keywords:["DingTalk","OAuth"],authors:["Marvelousp4"]},o=void 0,l={unversionedId:"provider/oauth/DingTalk",id:"provider/oauth/DingTalk",title:"DingTalk",description:"Add DingTalk OAuth provider to your application",source:"@site/docs/provider/oauth/DingTalk.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/DingTalk",permalink:"/docs/provider/oauth/DingTalk",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/DingTalk.md",tags:[],version:"current",frontMatter:{title:"DingTalk",description:"Add DingTalk OAuth provider to your application",keywords:["DingTalk","OAuth"],authors:["Marvelousp4"]},sidebar:"tutorialSidebar",previous:{title:"Tencent QQ",permalink:"/docs/provider/oauth/Tencent"},next:{title:"Steam",permalink:"/docs/provider/oauth/Steam"}},p={},d=[{value:"DingTalk \u2714\ufe0f",id:"dingtalk-\ufe0f",level:2},{value:"Configuring DingTalk",id:"configuring-dingtalk",level:3},{value:"Configuring Casdoor",id:"configuring-casdoor",level:3}],c={toc:d};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dingtalk-\ufe0f"},"DingTalk \u2714\ufe0f"),(0,a.kt)("h3",{id:"configuring-dingtalk"},"Configuring DingTalk"),(0,a.kt)("p",null,"To configure DingTalk, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://open-dev.dingtalk.com/?spm=ding_open_doc.document.0.0.140a645fxfAUAE#/loginMan"},"DingTalk developer platform")," and log in using your DingTalk account. Once you're on the platform, follow the instructions provided to obtain your ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Secret"),". The corresponding terms in DingTalk are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Term"),(0,a.kt)("th",{parentName:"tr",align:null},"DingTalk Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"AppKey")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client secret"),(0,a.kt)("td",{parentName:"tr",align:null},"AppSecret")))),(0,a.kt)("p",null,"In DingTalk, you can find the ",(0,a.kt)("inlineCode",{parentName:"p"},"Appkey")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AppSecret")," in the App Info."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DingTalk",src:n(39980).Z,width:"1998",height:"1380"})),(0,a.kt)("p",null,"Make sure to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"Redirect Domain"),", which should be your Casdoor domain."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DingTalk",src:n(74112).Z,width:"2382",height:"1148"})),(0,a.kt)("p",null,"For more detailed information, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/orgapp-server/tutorial-obtaining-user-personal-information"},"DingTalk developer docs"),"."),(0,a.kt)("p",null,"Additionally, you need to add the following permissions to the DingTalk application:\n",(0,a.kt)("img",{alt:"DingTalk",src:n(18650).Z,width:"3801",height:"1707"})),(0,a.kt)("h3",{id:"configuring-casdoor"},"Configuring Casdoor"),(0,a.kt)("p",null,"Here's the final configuration for DingTalk:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DingTalk",src:n(55012).Z,width:"1516",height:"764"})))}s.isMDXComponent=!0},39980:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dingtalkapp-8e87b46414aa268cd679836f5f7dd31c.png"},18650:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dingtalkpermission-2b4566d87d7957e3ab0fccbf97329eaa.png"},55012:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dingtalkprovider-5a4f040a73da713417788ea17a7c57b9.png"},74112:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dingtalkredirect-fbdaffca8e18eb47c39f21d07bab3173.png"}}]);