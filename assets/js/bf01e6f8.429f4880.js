"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3457],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(o),g=n,h=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return o?r.createElement(h,i(i({ref:t},s),{},{components:o})):r.createElement(h,i({ref:t},s))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},90979:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={title:"Google",description:"Add the Google OAuth provider to your application",keywords:["Google","OAuth"],authors:["ErikQQY"]},i=void 0,l={unversionedId:"provider/oauth/google",id:"provider/oauth/google",title:"Google",description:"Add the Google OAuth provider to your application",source:"@site/docs/provider/oauth/google.md",sourceDirName:"provider/oauth",slug:"/provider/oauth/google",permalink:"/docs/provider/oauth/google",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/oauth/google.md",tags:[],version:"current",frontMatter:{title:"Google",description:"Add the Google OAuth provider to your application",keywords:["Google","OAuth"],authors:["ErikQQY"]},sidebar:"tutorialSidebar",previous:{title:"Facebook",permalink:"/docs/provider/oauth/facebook"},next:{title:"Google One Tap",permalink:"/docs/provider/oauth/googleonetap"}},p={},c=[],s={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To set up the Google OAuth provider, please go to the ",(0,n.kt)("a",{parentName:"p",href:"https://console.developers.google.com"},"Google API console")," and log in using your Google account."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Setting up the project",src:o(6108).Z,width:"685",height:"282"})),(0,n.kt)("p",null,"Next, navigate to the ",(0,n.kt)("strong",{parentName:"p"},"OAuth consent screen")," tab to configure the OAuth consent screen."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Configure consent",src:o(27035).Z,width:"985",height:"632"})),(0,n.kt)("p",null,"Register your Google app by following these steps:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Registering the app",src:o(82516).Z,width:"707",height:"862"})),(0,n.kt)("p",null,"Afterward, go to the ",(0,n.kt)("strong",{parentName:"p"},"Credential")," tab."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Credentials",src:o(17261).Z,width:"790",height:"585"})),(0,n.kt)("p",null,"Create a credential for your app:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Creating a credential",src:o(76323).Z,width:"672",height:"243"})),(0,n.kt)("admonition",{title:"Ensure that you set the Authorized redirect URIs correctly",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"In the Google OAuth configuration, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Authorized redirect URIs")," must be set to ",(0,n.kt)("strong",{parentName:"p"},"your Casdoor's callback URL"),", while the ",(0,n.kt)("inlineCode",{parentName:"p"},"Redirect URL")," in Casdoor should be set to ",(0,n.kt)("strong",{parentName:"p"},"your application's callback URL"),"."),(0,n.kt)("p",{parentName:"admonition"},"For more details, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/application/config#further-understanding"},"App configuration"),".")),(0,n.kt)("p",null,"After creating the Client ID, you will obtain the ",(0,n.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Client Secret"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Client",src:o(23128).Z,width:"637",height:"571"})),(0,n.kt)("p",null,"Add the Google OAuth provider and enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Client Secret")," in your Casdoor."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Google Provider",src:o(93571).Z,width:"830",height:"538"})),(0,n.kt)("p",null,"You can now use Google as a third-party service to complete authentication."))}d.isMDXComponent=!0},82516:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/appregistration-87849f4455596912d0d0e3e84c208577.png"},76323:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/createcredential-e9743928b3600b1e6cad8369e5528796.png"},17261:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/credential-10fe32fc952597a145175b3ed3c6bb31.png"},23128:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/googleclient-b46b7e7218929ecfb37effdbd6d1ec2c.png"},6108:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/googlenewproject-8bd45f7704f21c640d151f0c93031ba1.png"},93571:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/googleprovider-01588d90465d526d64567900bd858d44.png"},27035:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/oauthconsentscreen-09c2355fde1f2a70f46eb0ef9a655398.png"}}]);