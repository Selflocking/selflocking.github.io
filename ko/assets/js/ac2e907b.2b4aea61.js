"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3799],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>s});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),u=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},c=function(e){var o=u(e.components);return r.createElement(l.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},g=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=u(t),s=n,h=g["".concat(l,".").concat(s)]||g[s]||d[s]||a;return t?r.createElement(h,i(i({ref:o},c),{},{components:t})):r.createElement(h,i({ref:o},c))}));function s(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var l in o)hasOwnProperty.call(o,l)&&(p[l]=o[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},63e3:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=t(87462),n=(t(67294),t(3905));const a={title:"Google One Tap",description:"Learn how to add Google One Tap support to your application",keywords:["Google","Google One Tap","OAuth"],authors:["Chinoholo0807"]},i=void 0,p={unversionedId:"provider/oauth/googleonetap",id:"provider/oauth/googleonetap",title:"Google One Tap",description:"Learn how to add Google One Tap support to your application",source:"@site/docs/provider/oauth/googleonetap.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/googleonetap",permalink:"/ko/docs/provider/oauth/googleonetap",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/googleonetap.md",tags:[],version:"current",frontMatter:{title:"Google One Tap",description:"Learn how to add Google One Tap support to your application",keywords:["Google","Google One Tap","OAuth"],authors:["Chinoholo0807"]},sidebar:"tutorialSidebar",previous:{title:"Google",permalink:"/ko/docs/provider/oauth/google"},next:{title:"Baidu",permalink:"/ko/docs/provider/oauth/baidu"}},l={},u=[{value:"Step 1: Configure Your Application",id:"step-1-configure-your-application",level:2},{value:"Step 2: Logging In with Google One Tap",id:"step-2-logging-in-with-google-one-tap",level:2}],c={toc:u};function d(e){let{components:o,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"step-1-configure-your-application"},"Step 1: Configure Your Application"),(0,n.kt)("p",null,"If you want to allow login through Google One Tap, you'll need to add Google OAuth Provider to your application. For information on how to do this, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/ko/docs/provider/oauth/google"},"Google's documentation"),"."),(0,n.kt)("p",null,"Once you've added the Google OAuth Provider, navigate to the application edit page, add the Google OAuth Provider, and switch the ",(0,n.kt)("inlineCode",{parentName:"p"},"Rule")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"Default")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"One Tap"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Switch rule from &quot;Default&quot; to &quot;One Tap&quot;.",src:t(22389).Z,width:"3743",height:"1290"})),(0,n.kt)("h2",{id:"step-2-logging-in-with-google-one-tap"},"Step 2: Logging In with Google One Tap"),(0,n.kt)("p",null,"With the setup completed, users can now log in with Google One Tap."),(0,n.kt)("video",{src:"/video/provider/oauth/googleonetap_login.mp4",controls:"controls",width:"100%"}))}d.isMDXComponent=!0},22389:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/googleonetap_rule_conf-6d34a28a7e0f1748e6f584976346db12.png"}}]);