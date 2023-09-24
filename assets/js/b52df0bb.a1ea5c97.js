"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3037],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>k});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(o),k=a,h=u["".concat(c,".").concat(k)]||u[k]||d[k]||n;return o?r.createElement(h,i(i({ref:t},s),{},{components:o})):r.createElement(h,i({ref:t},s))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},99721:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var r=o(87462),a=(o(67294),o(3905));const n={title:"Facebook",description:"Add the Facebook OAuth provider to your application.",keywords:["Facebook","OAuth"],authors:["ErikQQY"]},i=void 0,p={unversionedId:"provider/oauth/facebook",id:"provider/oauth/facebook",title:"Facebook",description:"Add the Facebook OAuth provider to your application.",source:"@site/docs/provider/oauth/facebook.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/facebook",permalink:"/docs/provider/oauth/facebook",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/facebook.md",tags:[],version:"current",frontMatter:{title:"Facebook",description:"Add the Facebook OAuth provider to your application.",keywords:["Facebook","OAuth"],authors:["ErikQQY"]},sidebar:"tutorialSidebar",previous:{title:"LinkedIn",permalink:"/docs/provider/oauth/linkedin"},next:{title:"Google",permalink:"/docs/provider/oauth/google"}},c={},l=[],s={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To set up the Facebook OAuth provider, please go to the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},"Facebook Developer")," website and create a new app."),(0,a.kt)("p",null,"Select the type of app you are going to create."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebook select",src:o(15015).Z,width:"752",height:"830"})),(0,a.kt)("p",null,"After entering your name and contact email, you will be taken to the Facebook Developer dashboard."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard",src:o(82888).Z,width:"1827",height:"822"})),(0,a.kt)("p",null,"Next, set up Facebook login:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebook login",src:o(33424).Z,width:"385",height:"290"})),(0,a.kt)("p",null,"Choose the Web platform for this app:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebook web",src:o(65998).Z,width:"931",height:"308"})),(0,a.kt)("p",null,"After filling in the website URL, go to ",(0,a.kt)("strong",{parentName:"p"},"Facebook Login > Settings")," and enter valid OAuth Redirect URIs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Redirect URIs",src:o(63061).Z,width:"1195",height:"580"})),(0,a.kt)("admonition",{title:"Set authorized redirect URLs correctly",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In the Facebook OAuth configuration, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Valid OAuth Redirect URIs")," must be ",(0,a.kt)("strong",{parentName:"p"},"your Casdoor's callback URL"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Redirect URL")," in Casdoor should be ",(0,a.kt)("strong",{parentName:"p"},"your application's callback URL"),"."),(0,a.kt)("p",{parentName:"admonition"},"For more details, please read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/application/config#further-understanding"},"App Configuration")," section.")),(0,a.kt)("p",null,"The basic app configuration is almost complete!"),(0,a.kt)("p",null,"Switch the mode from ",(0,a.kt)("strong",{parentName:"p"},"In development")," to ",(0,a.kt)("strong",{parentName:"p"},"Live")," in the top bar of the dashboard."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Top bar",src:o(74563).Z,width:"812",height:"71"})),(0,a.kt)("p",null,"Now you can use your ",(0,a.kt)("inlineCode",{parentName:"p"},"App ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"App Secret")," in Casdoor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebook app",src:o(72517).Z,width:"1167",height:"112"})),(0,a.kt)("p",null,"Add the Facebook OAuth provider and fill in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Secret")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"App ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"App Secret")," from your Casdoor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facebook Client",src:o(47118).Z,width:"671",height:"462"})),(0,a.kt)("p",null,"You can now use Facebook as a third-party service for authentication!"))}d.isMDXComponent=!0},82888:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/dashboard-951aa5187e74f5446a91447e00111c79.png"},72517:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/facebookappclient-ee54aca8e88d4718765e91e209a1ff72.png"},47118:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/facebookclient-efbc31eed7a5e0a168c701f129100ee9.png"},33424:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/facebooklogin-0552191f11736272e9619343c2126777.png"},63061:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/facebookredirecturl-36fbe7397ff2854f567d57559aa5a56f.png"},15015:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/facebookselect-6d176fa1e47c7d795a1d7bba08740632.png"},74563:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/facebooktopbar-25cd39076e7e3901397660685df9efee.png"},65998:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/facebookweb-42031519171f8a3731d1cda4007bc826.png"}}]);