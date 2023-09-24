"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6832],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},l=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),l=u(r),b=i,h=l["".concat(s,".").concat(b)]||l[b]||d[b]||a;return r?n.createElement(h,o(o({ref:e},c),{},{components:r})):n.createElement(h,o({ref:e},c))}));function b(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=l;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:i,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},30579:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={title:"GitHub",description:"Add GitHub OAuth provider to your application",keywords:["GitHub","OAuth"],authors:["ErikQQY"]},o=void 0,p={unversionedId:"provider/oauth/github",id:"provider/oauth/github",title:"GitHub",description:"Add GitHub OAuth provider to your application",source:"@site/docs/provider/oauth/github.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/github",permalink:"/de/docs/provider/oauth/github",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/github.md",tags:[],version:"current",frontMatter:{title:"GitHub",description:"Add GitHub OAuth provider to your application",keywords:["GitHub","OAuth"],authors:["ErikQQY"]},sidebar:"tutorialSidebar",previous:{title:"Steam",permalink:"/de/docs/provider/oauth/Steam"},next:{title:"Gitee",permalink:"/de/docs/provider/oauth/gitee"}},s={},u=[],c={toc:u};function d(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GitHub OAuth supports both the web application flow and device flow. Please continue reading to obtain OAuth credentials."),(0,i.kt)("p",null,"First, please visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/apps/new"},"GitHub developer settings")," to register a new GitHub App."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Tricks:")," We recommend that you use GitHub Apps to replace OAuth Apps because GitHub Apps can add multiple redirect URIs, which can bring convenience when deploying test and production environments. The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/getting-started-with-apps/migrating-oauth-apps-to-github-apps"},"GitHub")," official also recommends using GitHub Apps instead of OAuth Apps."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"githubapps",src:r(94472).Z,width:"667",height:"453"}))),(0,i.kt)("p",null,"Then fill in the ",(0,i.kt)("strong",{parentName:"p"},"GitHub App name"),", ",(0,i.kt)("strong",{parentName:"p"},"Homepage URL"),", ",(0,i.kt)("strong",{parentName:"p"},"description"),", and ",(0,i.kt)("strong",{parentName:"p"},"Callback URL"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub",src:r(28842).Z,width:"1529",height:"1427"})),(0,i.kt)("admonition",{title:"Set the authorization callback URL correctly",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the GitHub App config, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Callback URL")," must be ",(0,i.kt)("strong",{parentName:"p"},"your Casdoor's callback URL"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Redirect URL")," in Casdoor should be ",(0,i.kt)("strong",{parentName:"p"},"your application's callback URL"),"."),(0,i.kt)("p",{parentName:"admonition"},"For more details, please read ",(0,i.kt)("a",{parentName:"p",href:"/docs/application/config#further-understanding"},"App config"),".")),(0,i.kt)("p",null,"After registering your GitHub App, you can now generate your ",(0,i.kt)("inlineCode",{parentName:"p"},"Client Secret"),"!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Client ID",src:r(47535).Z,width:"1570",height:"1097"})),(0,i.kt)("p",null,"Add a GitHub OAuth provider and fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Client Secret")," in your Casdoor."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Github Provider",src:r(46224).Z,width:"2049",height:"1139"})),(0,i.kt)("p",null,"Now you can use GitHub as a third-party service to complete authentication."))}d.isMDXComponent=!0},28842:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/github-a9936a74f1f11adbab65f4078580b7fd.png"},94472:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/githubapps-2238efc890e841dd5b58bdb97bd79382.png"},47535:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/githubclient-8a6138007e49624aa0bf4ca5569eb5b5.png"},46224:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/githubprovider-4d0d00c30dce4d7e50638d38cdf53a82.png"}}]);