"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7575],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>u});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),d=s(o),u=r,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||a;return o?n.createElement(m,i(i({ref:t},h),{},{components:o})):n.createElement(m,i({ref:t},h))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},95940:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={title:"WeChat",description:"Add WeChat OAuth provider to your application",keywords:["WeChat","OAuth"],authors:["Marvelousp4"]},i=void 0,p={unversionedId:"provider/oauth/Wechat",id:"provider/oauth/Wechat",title:"WeChat",description:"Add WeChat OAuth provider to your application",source:"@site/docs/provider/oauth/Wechat.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/Wechat",permalink:"/fr/docs/provider/oauth/Wechat",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/Wechat.md",tags:[],version:"current",frontMatter:{title:"WeChat",description:"Add WeChat OAuth provider to your application",keywords:["WeChat","OAuth"],authors:["Marvelousp4"]},sidebar:"tutorialSidebar",previous:{title:"Weibo",permalink:"/fr/docs/provider/oauth/Weibo"},next:{title:"WeCom",permalink:"/fr/docs/provider/oauth/weCom"}},l={},s=[{value:"WeChat \u2714\ufe0f",id:"wechat-\ufe0f",level:2}],h={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"wechat-\ufe0f"},"WeChat \u2714\ufe0f"),(0,r.kt)("p",null,"To add WeChat OAuth provider to your application, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://open.weixin.qq.com/"},"WeChat developer platform")," and register as a developer."),(0,r.kt)("li",{parentName:"ol"},"After your web application or mobile application is approved, you will receive your App ID and App Secret.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wechat",src:o(42628).Z,width:"1258",height:"882"})),(0,r.kt)("p",null,"The WeChat provider offers two different sets of keypairs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The first keypair (",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Secret"),") is for the ",(0,r.kt)("inlineCode",{parentName:"p"},"WeChat Open Platform (\u5fae\u4fe1\u5f00\u653e\u5e73\u53f0)")," and is designed for the PC login scenario. It allows you to display a QR code in the PC browser, which users can scan using the WeChat app on their mobile phone to sign in.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The second keypair (",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID 2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Secret 2"),") is for the ",(0,r.kt)("inlineCode",{parentName:"p"},"WeChat Media Platform (\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0)")," and is intended for the inside-WeChat-app login scenario. It enables users to log in with the WeChat built-in browser inside the WeChat mobile app, which will redirect them to your ",(0,r.kt)("inlineCode",{parentName:"p"},"WeChat Official Account (\u5fae\u4fe1\u516c\u4f17\u53f7)")," to log in. Please note that WeChat does not support logging in outside of the WeChat app in other mobile browsers or apps. This limitation is imposed by WeChat and not by Casdoor."))),(0,r.kt)("p",null,"If you fill in the second keypair (",(0,r.kt)("inlineCode",{parentName:"p"},"Client ID 2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Secret 2"),") and enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable QR code")," switch, Casdoor will ask the user to follow the WeChat official account (\u5fae\u4fe1\u516c\u4f17\u53f7) before proceeding with the login process when the user clicks on the WeChat button to log in. It's important to note that this functionality is only available in the PC login scenario because a mobile phone cannot scan the QR code by itself. When used in the mobile scenario (i.e., the WeChat built-in browser inside the WeChat mobile app), Casdoor will automatically skip this step."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend setting both key sets at the same time and linking your ",(0,r.kt)("inlineCode",{parentName:"p"},"WeChat Open Platform (\u5fae\u4fe1\u5f00\u653e\u5e73\u53f0)")," account and ",(0,r.kt)("inlineCode",{parentName:"p"},"WeChat Media Platform (\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0)")," account together inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"WeChat Open Platform (\u5fae\u4fe1\u5f00\u653e\u5e73\u53f0)"),". This will allow Casdoor to recognize a WeChat user logged in through both PC and mobile as the same user.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Due to the limitations of WeChat OAuth, there is currently no way to log in via WeChat in a third-party mobile app or in a mobile browser other than the WeChat app. The mobile login must happen inside the WeChat app for now.")),(0,r.kt)("p",null,"For more detailed information, please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/doc/oplatform/en/Website_App/WeChat_Login/Wechat_Login.html"},"WeChat Open Platform"),"."))}c.isMDXComponent=!0},42628:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wechat-daff5f7d0755ab606290542d8f3d0b42.png"}}]);