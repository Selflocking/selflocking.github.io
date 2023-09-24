"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2637],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=s(o),m=n,u=k["".concat(c,".").concat(m)]||k[m]||p[m]||r;return o?a.createElement(u,i(i({ref:t},d),{},{components:o})):a.createElement(u,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}k.displayName="MDXCreateElement"},88886:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=o(87462),n=(o(67294),o(3905));const r={title:"Keycloak",description:"Using Casdoor as a SAML IdP",keywords:["SAML","IdP"],authors:["seriouszyx"]},i=void 0,l={unversionedId:"how-to-connect/saml/keycloak",id:"how-to-connect/saml/keycloak",title:"Keycloak",description:"Using Casdoor as a SAML IdP",source:"@site/docs/how-to-connect/saml/keycloak.md",sourceDirName:"how-to-connect/saml",slug:"/how-to-connect/saml/keycloak",permalink:"/de/docs/how-to-connect/saml/keycloak",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/saml/keycloak.md",tags:[],version:"current",frontMatter:{title:"Keycloak",description:"Using Casdoor as a SAML IdP",keywords:["SAML","IdP"],authors:["seriouszyx"]},sidebar:"tutorialSidebar",previous:{title:"AWS Client VPN",permalink:"/de/docs/how-to-connect/saml/aws"},next:{title:"Google Workspace",permalink:"/de/docs/how-to-connect/saml/google-workspace"}},c={},s=[{value:"Casdoor as a SAML IdP in Keycloak",id:"casdoor-as-a-saml-idp-in-keycloak",level:2},{value:"Adding SAML IdP in Keycloak",id:"adding-saml-idp-in-keycloak",level:3},{value:"Configuring the SAML application in Casdoor",id:"configuring-the-saml-application-in-casdoor",level:3},{value:"Logging in using Casdoor SAML",id:"logging-in-using-casdoor-saml",level:3}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"casdoor-as-a-saml-idp-in-keycloak"},"Casdoor as a SAML IdP in Keycloak"),(0,n.kt)("p",null,"This guide will show you how to configure Casdoor and Keycloak to add Casdoor as a SAML IdP in Keycloak."),(0,n.kt)("h3",{id:"adding-saml-idp-in-keycloak"},"Adding SAML IdP in Keycloak"),(0,n.kt)("p",null,"Open the Keycloak admin page, click on ",(0,n.kt)("strong",{parentName:"p"},"Identity Providers"),", and select ",(0,n.kt)("strong",{parentName:"p"},"SAML v2.0")," from the list of providers."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"saml_keycloak_idp_create",src:o(77609).Z,width:"2560",height:"1206"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can visit the Keycloak SAML Identity Providers ",(0,n.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-v2-0-identity-providers"},"documentation")," to get more detailed information.")),(0,n.kt)("p",null,"Enter the ",(0,n.kt)("strong",{parentName:"p"},"Alias")," and the ",(0,n.kt)("strong",{parentName:"p"},"Import from URL")," in the Keycloak IdP edit page. The content of the ",(0,n.kt)("strong",{parentName:"p"},"Import from URL")," can be found on the Casdoor application edit page. Click ",(0,n.kt)("strong",{parentName:"p"},"Import")," and the SAML config will be filled automatically."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"saml_keycloak_idp_edit",src:o(38478).Z,width:"1483",height:"392"})),(0,n.kt)("p",null,"Remember the ",(0,n.kt)("strong",{parentName:"p"},"Service Provider Entity ID")," and save the configuration."),(0,n.kt)("h3",{id:"configuring-the-saml-application-in-casdoor"},"Configuring the SAML application in Casdoor"),(0,n.kt)("p",null,"In the application edit page, add a redirect URL which contains the ",(0,n.kt)("strong",{parentName:"p"},"Service Provider Entity ID")," from Keycloak. Also, make sure to enable SAML compress for Keycloak."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"saml_keycloak_compress",src:o(52738).Z,width:"2450",height:"692"})),(0,n.kt)("h3",{id:"logging-in-using-casdoor-saml"},"Logging in using Casdoor SAML"),(0,n.kt)("p",null,"Open the Keycloak login page and you will find an additional button that allows you to log in to Keycloak using the Casdoor SAML provider."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"saml_keycloak_login",src:o(4663).Z,width:"1549",height:"867"})),(0,n.kt)("p",null,"Click on the button and you will be redirected to the Casdoor SAML provider for authentication. After successful authentication, you will be redirected back to Keycloak. Then you need to assign users to the application."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"saml_keycloak_success",src:o(81939).Z,width:"1705",height:"963"})),(0,n.kt)("p",null,"We also provide a demo video that demonstrates the entire process, which we hope will be helpful to you."),(0,n.kt)("video",{src:"/video/saml_keycloak.mp4",controls:"controls",width:"100%"}))}p.isMDXComponent=!0},52738:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_keycloak_compress-31ccc297f3c517c6ffe24f38a25137f6.png"},77609:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_keycloak_idp_create-2b0cc39c21d6a1b6076844bfc5470b1d.png"},38478:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_keycloak_idp_edit-4963c9be36f7011c41f2b431a9478417.png"},4663:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_keycloak_login-d5b72edf974b0844ee37037fe8ff41f5.png"},81939:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/saml_keycloak_success-c8961ef7869d53c11d269d8723955ccc.png"}}]);