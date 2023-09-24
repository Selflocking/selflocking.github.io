"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),k=i,h=u["".concat(p,".").concat(k)]||u[k]||s[k]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"LinkedIn",description:"Add LinkedIn OAuth provider to your application",keywords:["LinkedIn","OAuth"],authors:["ErikQQY"]},a=void 0,d={unversionedId:"provider/oauth/linkedin",id:"provider/oauth/linkedin",title:"LinkedIn",description:"Add LinkedIn OAuth provider to your application",source:"@site/docs/provider/oauth/linkedin.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/linkedin",permalink:"/zh/docs/provider/oauth/linkedin",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/linkedin.md",tags:[],version:"current",frontMatter:{title:"LinkedIn",description:"Add LinkedIn OAuth provider to your application",keywords:["LinkedIn","OAuth"],authors:["ErikQQY"]},sidebar:"tutorialSidebar",previous:{title:"Gitee",permalink:"/zh/docs/provider/oauth/gitee"},next:{title:"Facebook",permalink:"/zh/docs/provider/oauth/facebook"}},p={},l=[],c={toc:l};function s(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To set up the LinkedIn OAuth provider, please go to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps/new"},"LinkedIn Developer")," page to create a new app."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LinkedIn",src:n(43830).Z,width:"1003",height:"898"})),(0,i.kt)("p",null,"After filling in the form above and creating your app, you'll need to verify the LinkedIn page associated with the app."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LinkedIn Verify",src:n(56300).Z,width:"752",height:"431"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Only the company page administrator can verify your app and grant permission to it.")),(0,i.kt)("p",null,"Once your app is verified, you can continue:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LinkedIn sign in",src:n(28961).Z,width:"648",height:"495"})),(0,i.kt)("p",null,"Add authorized redirect URLs for your app as ",(0,i.kt)("strong",{parentName:"p"},"your Casdoor callback URL"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LinkedIn Redirect",src:n(17125).Z,width:"502",height:"193"})),(0,i.kt)("admonition",{title:"Set authorized redirect URLs correctly",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the LinkedIn OAuth configuration, the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorized redirect URLs")," must be ",(0,i.kt)("strong",{parentName:"p"},"your Casdoor's callback URL"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Redirect URL")," in Casdoor should be ",(0,i.kt)("strong",{parentName:"p"},"your application's callback URL"),"."),(0,i.kt)("p",{parentName:"admonition"},"For more details, please read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/application/config#further-understanding"},"App Config")," section.")),(0,i.kt)("p",null,"You can then obtain your ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Client Secret"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LinkedIn Client",src:n(47842).Z,width:"502",height:"325"})),(0,i.kt)("p",null,"Add a LinkedIn OAuth provider and fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Client Secret")," in your Casdoor."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LinkedIn Provider",src:n(65371).Z,width:"467",height:"477"})),(0,i.kt)("p",null,"Now you can use LinkedIn as a third-party service to complete authentication!"))}s.isMDXComponent=!0},56300:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkedin-verify-d9d6f42d3f6a9b10680047de3af195ce.png"},43830:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkedin-d13b05b1e96b81eda4d26c88e7917695.png"},47842:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkedinclient-85201547895e18c1c1372a2073a03072.png"},65371:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkedinprovider-b5ef384dedc55bbc5cfbed46551136ae.png"},17125:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkedinredirecturl-ed314e133ed877f52b4360b4f183e371.png"},28961:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linkedinsignin-d4983725aaea07cc9f692fd602b6ec33.png"}}]);