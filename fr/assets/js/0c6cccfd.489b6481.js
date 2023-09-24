"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4392],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Steam",description:"Add the Steam OAuth provider to your application",keywords:["Steam","OAuth"],authors:["Marvelousp4"]},i=void 0,l={unversionedId:"provider/oauth/Steam",id:"provider/oauth/Steam",title:"Steam",description:"Add the Steam OAuth provider to your application",source:"@site/docs/provider/oauth/Steam.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/Steam",permalink:"/fr/docs/provider/oauth/Steam",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/Steam.md",tags:[],version:"current",frontMatter:{title:"Steam",description:"Add the Steam OAuth provider to your application",keywords:["Steam","OAuth"],authors:["Marvelousp4"]},sidebar:"tutorialSidebar",previous:{title:"DingTalk",permalink:"/fr/docs/provider/oauth/DingTalk"},next:{title:"GitHub",permalink:"/fr/docs/provider/oauth/github"}},p={},c=[{value:"Steam \u2714\ufe0f",id:"steam-\ufe0f",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"steam-\ufe0f"},"Steam \u2714\ufe0f"),(0,n.kt)("p",null,"To add the Steam OAuth provider to your application, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Visit the ",(0,n.kt)("a",{parentName:"li",href:"https://steamcommunity.com/dev/revokekey"},"Steam WebAPI platform")," and log in using your Steam account."),(0,n.kt)("li",{parentName:"ol"},"Apply for an API Key for your Casdoor domain or IP."),(0,n.kt)("li",{parentName:"ol"},"Fill in your API Key as the Client Secret into Casdoor. The ClientID does not need to be filled."),(0,n.kt)("li",{parentName:"ol"},"Make sure that your Steam account has games in order to apply for the API.")),(0,n.kt)("p",null,"For more detailed information, please visit the ",(0,n.kt)("a",{parentName:"p",href:"https://steamcommunity.com/dev"},"Steam WebAPI documentation"),"."))}s.isMDXComponent=!0}}]);