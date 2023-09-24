"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,b=d["".concat(u,".").concat(p)]||d[p]||c[p]||a;return n?o.createElement(b,r(r({ref:t},h),{},{components:n})):o.createElement(b,r({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const a={title:"WebAuthn",description:"Use WebAuthn in Casdoor",keywords:["webauthn"],authors:["ComradeProgrammer"]},r=void 0,s={unversionedId:"how-to-connect/webauthn",id:"how-to-connect/webauthn",title:"WebAuthn",description:"Use WebAuthn in Casdoor",source:"@site/docs/how-to-connect/webauthn.md",sourceDirName:"how-to-connect",slug:"/how-to-connect/webauthn",permalink:"/ja/docs/how-to-connect/webauthn",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/webauthn.md",tags:[],version:"current",frontMatter:{title:"WebAuthn",description:"Use WebAuthn in Casdoor",keywords:["webauthn"],authors:["ComradeProgrammer"]},sidebar:"tutorialSidebar",previous:{title:"Appgate (POST)",permalink:"/ja/docs/how-to-connect/saml/appgate"},next:{title:"Developer Guide",permalink:"/ja/docs/category/developer-guide"}},u={},l=[{value:"Overview",id:"overview",level:2},{value:"What is WebAuthn?",id:"what-is-webauthn",level:3},{value:"How to use WebAuthn in Casdoor?",id:"how-to-use-webauthn-in-casdoor",level:3},{value:"Step 0: Modify the configurations and enable WebAuthn authentication",id:"step-0-modify-the-configurations-and-enable-webauthn-authentication",level:4},{value:"Step 1: Go to &quot;My Account&quot; page",id:"step-1-go-to-my-account-page",level:4},{value:"Step 2: Log in using WebAuthn",id:"step-2-log-in-using-webauthn",level:4}],h={toc:l};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We are delighted to inform Casdoor's customers that Casdoor now supports logging in with WebAuthn. This means that you can log in using your biological identifications such as fingerprints or facial recognition, or even U-disks, provided that your device supports these cool authorization methods and WebAuthn."),(0,i.kt)("h3",{id:"what-is-webauthn"},"What is WebAuthn?"),(0,i.kt)("p",null,"WebAuthn is the Web Authentication API, a specification written by the W3C and FIDO in collaboration with Google, Mozilla, Microsoft, Yubico, and others. This API allows servers to register and authenticate users using public key cryptography instead of a password. It enables servers to integrate with strong authenticators built into devices, such as Windows Hello or Apple's Touch ID."),(0,i.kt)("p",null,"To put it simply, WebAuthn requires users to generate a public key-private key pair and provide the public key to the website. When a user wants to log in to a website, the web generates a random number and asks the user to encrypt it with their private key and send the result back. Upon receiving the result, the website uses the public key to decrypt it. If the decrypted number matches the random number generated earlier, the user is considered a legitimate user and is granted access to log in. The combination of the public key and necessary information, like the username or information about the user's authorizer, is called the WebAuthn Credential, which is stored by the website."),(0,i.kt)("p",null,"The public key-private key pair is exclusively and uniquely associated with three pieces of information: the user's username, the user's authorizer, and the website's URL. This means that if the combination of (user's username, user's authorizer, and the website's URL) is the same, the key pair should be identical, and vice versa."),(0,i.kt)("p",null,"For more detailed information about WebAuthn technology, you can visit ",(0,i.kt)("a",{parentName:"p",href:"https://webauthn.guide/"},"https://webauthn.guide/"),"."),(0,i.kt)("h3",{id:"how-to-use-webauthn-in-casdoor"},"How to use WebAuthn in Casdoor?"),(0,i.kt)("p",null,"On the login page, you may have already noticed the option to log in using WebAuthn. However, if you don't have a WebAuthn credential yet (which can be likened to a WebAuth password), this tutorial will show you how to create and manage a credential and then log in using it."),(0,i.kt)("h4",{id:"step-0-modify-the-configurations-and-enable-webauthn-authentication"},"Step 0: Modify the configurations and enable WebAuthn authentication"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/app.conf")," file, you can find the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'origin = "http://localhost:8000"\n')),(0,i.kt)("p",null,"Please ensure that this configuration exactly matches the URL of your website."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: Only HTTPS is supported for WebAuthn, unless you are using localhost.")),(0,i.kt)("p",null,'Next, log in as the administrator and go to the edit page of your application. Turn on the "Enable WebAuthn signin" switch. By default, this feature is not enabled.'),(0,i.kt)("h4",{id:"step-1-go-to-my-account-page"},'Step 1: Go to "My Account" page'),(0,i.kt)("p",null,'Navigate to the account page. On this page, you should see the "Add WebAuthn Credential" button and a list displaying all the WebAuthn credentials you have previously registered.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WebAuthn1",src:n(34679).Z,width:"3258",height:"1345"})),(0,i.kt)("p",null,'Click the button and follow the instructions of your device to register a new credential in Casdoor. You can remove any credentials using the "delete" button in the list.'),(0,i.kt)("h4",{id:"step-2-log-in-using-webauthn"},"Step 2: Log in using WebAuthn"),(0,i.kt)("p",null,"Before starting this step, make sure you have logged out of Casdoor."),(0,i.kt)("p",null,"Go to the login page, select the WebAuthn login method, enter your username, and click the login button. Follow the instructions of your device."),(0,i.kt)("p",null,"(For example, if you are using fingerprint and Windows Hello, you should see something like this)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WebAuthn2",src:n(48817).Z,width:"2385",height:"1370"})),(0,i.kt)("p",null,"You will then be logged in successfully."))}c.isMDXComponent=!0},48817:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login_webauthn-2c808d16236d35066e13262bee117858.png"},34679:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/webauthn-732ec1106885a458043ebfcf66f7e73e.png"}}]);