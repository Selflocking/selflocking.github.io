"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3741],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(o),u=r,h=g["".concat(l,".").concat(u)]||g[u]||d[u]||n;return o?a.createElement(h,s(s({ref:t},p),{},{components:o})):a.createElement(h,s({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}g.displayName="MDXCreateElement"},47935:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=o(87462),r=(o(67294),o(3905));const n={title:"Google Workspace",description:"Using Casdoor as a SAML IdP",keywords:["SAML","IdP"],authors:["UsherFall"]},s=void 0,i={unversionedId:"how-to-connect/saml/google-workspace",id:"how-to-connect/saml/google-workspace",title:"Google Workspace",description:"Using Casdoor as a SAML IdP",source:"@site/docs/how-to-connect/saml/google-workspace.md",sourceDirName:"how-to-connect/saml",slug:"/how-to-connect/saml/google-workspace",permalink:"/ja/docs/how-to-connect/saml/google-workspace",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/saml/google-workspace.md",tags:[],version:"current",frontMatter:{title:"Google Workspace",description:"Using Casdoor as a SAML IdP",keywords:["SAML","IdP"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Keycloak",permalink:"/ja/docs/how-to-connect/saml/keycloak"},next:{title:"Appgate (POST)",permalink:"/ja/docs/how-to-connect/saml/appgate"}},l={},c=[{value:"Casdoor as a SAML IdP in Google Workspace",id:"casdoor-as-a-saml-idp-in-google-workspace",level:2},{value:"Add Certificate",id:"add-certificate",level:3},{value:"Configure SAML Application",id:"configure-saml-application",level:3},{value:"Add Third-Party SAML IdP for Google Workspace",id:"add-third-party-saml-idp-for-google-workspace",level:3},{value:"Add Users for Testing",id:"add-users-for-testing",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"casdoor-as-a-saml-idp-in-google-workspace"},"Casdoor as a SAML IdP in Google Workspace"),(0,r.kt)("p",null,"This guide will show you how to configure Casdoor and Google Workspace to add Casdoor as a SAML IdP in Google Workspace."),(0,r.kt)("h3",{id:"add-certificate"},"Add Certificate"),(0,r.kt)("p",null,"In Casdoor, add a certificate of type X.509 with RSA crypto algorithm and download it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add cert",src:o(20616).Z,width:"2802",height:"1264"})),(0,r.kt)("h3",{id:"configure-saml-application"},"Configure SAML Application"),(0,r.kt)("p",null,"On the application edit page, select the certificate you just created. Add the domain name of the Google application you will use in the ",(0,r.kt)("strong",{parentName:"p"},"Redirect URLs"),", such as google.com."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select cert and add redirect URLs",src:o(85255).Z,width:"2754",height:"438"})),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"SAML reply URL")," field, enter ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.google.com/a/<your domain>/acs"),", which is the ACS URL. You can find relevant information about ACS URL here: ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/a/answer/6330801"},"SSO assertion requirements"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enter the SAML reply URL field",src:o(8095).Z,width:"2768",height:"1034"})),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("strong",{parentName:"p"},"sign-in page URL"),". This will be used in the next step."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy the sign-in page URL",src:o(90034).Z,width:"2692",height:"1328"})),(0,r.kt)("h3",{id:"add-third-party-saml-idp-for-google-workspace"},"Add Third-Party SAML IdP for Google Workspace"),(0,r.kt)("p",null,"In the Google Workspace Admin console, navigate to ",(0,r.kt)("strong",{parentName:"p"},"Security")," and then ",(0,r.kt)("strong",{parentName:"p"},"Overview"),". Look for the ",(0,r.kt)("strong",{parentName:"p"},"SSO with third-party IdP"),' section.\nClick on "Add SSO profile" to access the editing page. Check the "Set up SSO with third-party identity provider" checkbox. Paste the copied sign-in page URL into the ',(0,r.kt)("strong",{parentName:"p"},"Sign-in page URL")," and ",(0,r.kt)("strong",{parentName:"p"},"Sign-out page URL"),' fields. Upload the certificate downloaded in the previous step. Click "Save" to save the changes.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure Google Workspace",src:o(3061).Z,width:"2856",height:"1380"})),(0,r.kt)("h3",{id:"add-users-for-testing"},"Add Users for Testing"),(0,r.kt)("p",null,'In Google Workspace, create a user with the username "test" (you can customize the username, this is just an example).'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add a user in Google Workspace",src:o(62591).Z,width:"1568",height:"1234"})),(0,r.kt)("p",null,"In Casdoor, add a user with the same username as set in Google Workspace. Make sure to select the appropriate organization and enter the user's email address."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add a user in Casdoor",src:o(72305).Z,width:"1876",height:"1224"})),(0,r.kt)("p",null,'As an example using "google.com," follow these steps:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on the login button on the Google.com page.\nEnter the user's email address to initiate the login process."),(0,r.kt)("li",{parentName:"ol"},"You will be redirected to the Casdoor page.\nOn the Casdoor page, enter the corresponding email address and password."),(0,r.kt)("li",{parentName:"ol"},"If the login is successful, you will be redirected back to google.com.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final result",src:o(38824).Z,width:"1000",height:"590"})))}d.isMDXComponent=!0},8095:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_google-workspace_acs-3b6a27d3f143fe3eb459426b0406821e.png"},85255:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_google-workspace_app-040a4e0baaf44f2ab47f635e524c63a7.png"},20616:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_google-workspace_cert-a992979f507231384cfd7dda2604a49a.png"},3061:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_google-workspace_conf-2fa247aa8180e9f9c1ae31dcbd5b0cec.png"},90034:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_google-workspace_login-2de83588de73e9594bfdf16fa02db650.png"},72305:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_google-workspace_test-16bd27a0e2eaf12b566a74e5e9f022e4.png"},38824:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_google-workspace_test_gif-39d8dffa0ea237389a3ccbb6450dc65b.gif"},62591:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_google-workspace_user-a3c5a3c7d585ee7710ad9ea447bd8a28.png"}}]);