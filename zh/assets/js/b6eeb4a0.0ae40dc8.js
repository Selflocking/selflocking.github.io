"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"Gitea",description:"Using Casdoor for authentication in Gitea",keywords:["Gitea"],authors:["ComradeProgrammer"]},r=void 0,l={unversionedId:"integration/go/gitea",id:"integration/go/gitea",title:"Gitea",description:"Using Casdoor for authentication in Gitea",source:"@site/docs/integration/go/gitea.md",sourceDirName:"integration/go",slug:"/integration/go/gitea",permalink:"/zh/docs/integration/go/gitea",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/go/gitea.md",tags:[],version:"current",frontMatter:{title:"Gitea",description:"Using Casdoor for authentication in Gitea",keywords:["Gitea"],authors:["ComradeProgrammer"]},sidebar:"tutorialSidebar",previous:{title:"ELK",permalink:"/zh/docs/integration/go/elk"},next:{title:"Grafana",permalink:"/zh/docs/integration/go/grafana"}},s={},c=[{value:"Using Casdoor for authentication in Gitea",id:"using-casdoor-for-authentication-in-gitea",level:2},{value:"Preparations",id:"preparations",level:3},{value:"1. Create an Casdoor application",id:"1-create-an-casdoor-application",level:3},{value:"2. Configure Gitea to use Casdoor",id:"2-configure-gitea-to-use-casdoor",level:3},{value:"3. Configure the callback url in casdoor",id:"3-configure-the-callback-url-in-casdoor",level:3},{value:"4. Have a try on Gitea",id:"4-have-a-try-on-gitea",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-casdoor-for-authentication-in-gitea"},"Using Casdoor for authentication in Gitea"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gitea.io/en-us/"},"Gitea")," is a community managed lightweight code hosting solution written in Go. It is published under the MIT license."),(0,a.kt)("p",null,"Gitea supports 3rd-party authentication including Oauth, which makes it possible to use Casdoor to authenticate it. Here is the tutorial for achieving this."),(0,a.kt)("h3",{id:"preparations"},"Preparations"),(0,a.kt)("p",null,"To configure Gitea to use Casdoor as identification provider, you need to have Gitea installed as well as access to administrator account."),(0,a.kt)("p",null,"For more information about how to download, install and run Gitea see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gitea.io/en-us/install-from-binary/"},"https://docs.gitea.io/en-us/install-from-binary/")),(0,a.kt)("p",null,"You are supposed to create an administrator account during installation. If you didn't, the administrator will be the first registered user. Please use this account proceed the following procedures."),(0,a.kt)("h3",{id:"1-create-an-casdoor-application"},"1. Create an Casdoor application"),(0,a.kt)("p",null,"Like this\n",(0,a.kt)("img",{alt:"Create an Casdoor application",src:n(97614).Z,width:"1287",height:"822"})),(0,a.kt)("p",null,"Please remember the client ID and client Secret for the next step."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please don't fill in the callback url in this step. The url depends on the configurations on gitea in the next step. Later we will come back to set a correct callback url.")),(0,a.kt)("h3",{id:"2-configure-gitea-to-use-casdoor"},"2. Configure Gitea to use Casdoor"),(0,a.kt)("p",null,"Log in as administrator. Go to 'Site Administration' page via drop-down menu  in the upper right corner. Then Switch to \"Authentication Source\" Page."),(0,a.kt)("p",null,"You are supposed to see something like this."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Authentication source page",src:n(29079).Z,width:"1319",height:"669"})),(0,a.kt)("p",null,'Press the "Add Authentication Source" Button, and fill in the form like this.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add authentication source",src:n(65643).Z,width:"1307",height:"760"})),(0,a.kt)("p",null,'Please choose the authentication type as "oauth2".'),(0,a.kt)("p",null,"Please input a name for this authentication source and ",(0,a.kt)("strong",{parentName:"p"},"remember this name"),". This name will be used for the callback_url in the next step."),(0,a.kt)("p",null,"Please choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenID Connect")," Oauth2 Provider."),(0,a.kt)("p",null,"Fill in the ",(0,a.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,a.kt)("strong",{parentName:"p"},"Client Secret")," remembered in the previous step."),(0,a.kt)("p",null,"Fill in the openid connect auto discovery url, which is supposed to be ",(0,a.kt)("inlineCode",{parentName:"p"},"<your endpoint of casdoor>/.well-known/openid-configuration"),"."),(0,a.kt)("p",null,"Fill in the other optional configuration items as you wish. And then submit it."),(0,a.kt)("p",null,"Submit the form."),(0,a.kt)("h3",{id:"3-configure-the-callback-url-in-casdoor"},"3. Configure the callback url in casdoor"),(0,a.kt)("p",null,"Go back to the application edit page in step 2, and add the following callback url:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<endpoint of gitea>/user/oauth2/<authentication source name>/callback")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<authentication source name>"),"is the name for authentication source in Gitea in the previous step."),(0,a.kt)("h3",{id:"4-have-a-try-on-gitea"},"4. Have a try on Gitea"),(0,a.kt)("p",null,"Logout the current administrator account."),(0,a.kt)("p",null,"You are supposed to see this in login page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Gitea login page",src:n(30845).Z,width:"916",height:"531"})),(0,a.kt)("p",null,"Press the 'sign in with openid' button and you will be redirected to casdoor login page."),(0,a.kt)("p",null,"After login you will see this:\n",(0,a.kt)("img",{alt:"After login",src:n(972).Z,width:"1317",height:"590"})),(0,a.kt)("p",null,"Follow the instructions and bind the casdoor account with a new gitea account or existing account."),(0,a.kt)("p",null,"Then everything will be working correctly."))}p.isMDXComponent=!0},29079:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitea2-0485cf3e8fb95bcd05a8a84eb2dfdef8.png"},65643:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitea3-b0884b97a2c90528d0685337bd49adea.png"},30845:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitea4-70ca227d6bb5c4cfc9aad93a32d37141.png"},972:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitea5-e6618e57f8c5d90b4f7249039c5dc593.png"},97614:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gitea6-4023db6c59ac29bf7883700edb4c41b7.png"}}]);