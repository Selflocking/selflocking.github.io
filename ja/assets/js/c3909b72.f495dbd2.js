"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3838],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=A(e,["components","mdxType","originalType","parentName"]),l=c(a),u=n,f=l["".concat(s,".").concat(u)]||l[u]||d[u]||r;return a?o.createElement(f,i(i({ref:t},p),{},{components:a})):o.createElement(f,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=l;var A={};for(var s in t)hasOwnProperty.call(t,s)&&(A[s]=t[s]);A.originalType=e,A.mdxType="string"==typeof e?e:n,i[1]=A;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}l.displayName="MDXCreateElement"},80083:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(67294);function n(e){return o.createElement("iframe",{src:e.src,width:e.width,height:e.height,style:{borderRadius:"20px"},frameBorder:"0",scrolling:"no",loading:"lazy"})}n.defaultProps={src:"https://door.casdoor.com",width:"600",height:"700"}},83714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>A,metadata:()=>c,toc:()=>d});var o=a(87462),n=(a(67294),a(3905)),r=a(74204),i=a(80083);const A={title:"Application Config",description:"Configure your application's authentication",keywords:["config","application"],authors:["ErikQQY"]},s=void 0,c={unversionedId:"application/config",id:"application/config",title:"Application Config",description:"Configure your application's authentication",source:"@site/docs/application/config.md",sourceDirName:"application",slug:"/application/config",permalink:"/ja/docs/application/config",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/application/config.md",tags:[],version:"current",frontMatter:{title:"Application Config",description:"Configure your application's authentication",keywords:["config","application"],authors:["ErikQQY"]},sidebar:"tutorialSidebar",previous:{title:"Terminology Reference",permalink:"/ja/docs/application/terminology"},next:{title:"Signup Items Table",permalink:"/ja/docs/application/signup-items-table"}},p={},d=[],l={toc:d};function u(e){let{components:t,...A}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,A,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After you deploy Casdoor on your server and set up your organization, you can now deploy your applications!"),(0,n.kt)("p",null,"Let's see how to configure your application's authentication using Casdoor!"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For example, I want to set up my Forum using ",(0,n.kt)("a",{parentName:"p",href:"https://casnode.org"},"Casnode"),".")),(0,n.kt)("p",null,"I create my application and fill in some necessary configurations."),(0,n.kt)("p",null,"Select the organization I created so that users in this organization can use this application."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Organization",src:a(83063).Z,width:"1888",height:"331"})),(0,n.kt)("p",null,"Since this organization is named ",(0,n.kt)("inlineCode",{parentName:"p"},"my_organization"),", I choose it from the drop-down menu."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Select Organization",src:a(91496).Z,width:"956",height:"763"})),(0,n.kt)("p",null,"Next, I want my users to be able to use Casdoor for authentication when they sign up. So, I fill in the redirect URL here as ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://your-site-url.com/callback"},"https://your-site-url.com/callback")),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please note that the ",(0,n.kt)("inlineCode",{parentName:"p"},"callback URL")," in the provider application should be Casdoor's callback URL, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Redirect URL")," in Casdoor should be your website's callback URL."),(0,n.kt)("h4",{parentName:"admonition",id:"further-understanding"},"Further Understanding"),(0,n.kt)("p",{parentName:"admonition"},"To make the authentication process work, the detailed steps are as follows:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Users send a request to Casdoor."),(0,n.kt)("li",{parentName:"ol"},"Casdoor uses the ",(0,n.kt)("inlineCode",{parentName:"li"},"Client ID")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Client Secret")," to authenticate with GitHub, Google, or other providers."),(0,n.kt)("li",{parentName:"ol"},"If the authentication is successful, GitHub calls back to Casdoor to notify Casdoor about the successful authentication. Therefore, the GitHub authorization callback URL should be your Casdoor's callback URL, which is ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"http://your-casdoor-url.com/callback"},"http://your-casdoor-url.com/callback")),"."),(0,n.kt)("li",{parentName:"ol"},"Casdoor then informs the application about the authentication success. This means that the Casdoor callback URL should be your application's callback URL, which is ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"http://your-site-url.com/callback"},"http://your-site-url.com/callback")),"."))),(0,n.kt)("p",null,"You can also add third-party apps for sign up by adding providers and setting their properties."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Select providers",src:a(1283).Z,width:"1635",height:"553"})),(0,n.kt)("div",{className:r.Z.signingradientborder},(0,n.kt)(i.Z,{src:"https://door.casdoor.com/login/oauth/authorize?client_id=014ae4bd048734ca2dea&response_type=code&redirect_uri=https://forum.casbin.com/callback&scope=read&state=app-casbin-forum",height:"680",mdxType:"CasdoorCard"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Note that if you don't want users to access your app using a ",(0,n.kt)("strong",{parentName:"p"},"username/password"),", you can switch off the ",(0,n.kt)("inlineCode",{parentName:"p"},"Password On")," button. This way, users can only access the app using third-party services."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Password On",src:a(22609).Z,width:"437",height:"190"}))))}u.isMDXComponent=!0},74204:(e,t,a)=>{a.d(t,{Z:()=>o});const o={gradientborder:"gradientborder_zL2q",signingradientborder:"signingradientborder_YFZJ"}},22609:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"},83063:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/organization-a4019f0e60e55d0dd1002174d68ddda6.png"},91496:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/selectorganization-60ab8d2f90b99663a2cedbcc353e119e.png"},1283:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/selectproviders-9bd1de3d45a5bd42ddbee6a84023c4e7.png"}}]);