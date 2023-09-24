"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3401],{3905:(t,e,A)=>{A.d(e,{Zo:()=>d,kt:()=>c});var a=A(67294);function r(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}function n(t,e){var A=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),A.push.apply(A,a)}return A}function o(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?n(Object(A),!0).forEach((function(e){r(t,e,A[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(A)):n(Object(A)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(A,e))}))}return t}function l(t,e){if(null==t)return{};var A,a,r=function(t,e){if(null==t)return{};var A,a,r={},n=Object.keys(t);for(a=0;a<n.length;a++)A=n[a],e.indexOf(A)>=0||(r[A]=t[A]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)A=n[a],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(t,A)&&(r[A]=t[A])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),A=e;return t&&(A="function"==typeof t?t(e):o(o({},e),t)),A},d=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var A=t.components,r=t.mdxType,n=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(A),c=r,m=u["".concat(i,".").concat(c)]||u[c]||s[c]||n;return A?a.createElement(m,o(o({ref:e},d),{},{components:A})):a.createElement(m,o({ref:e},d))}));function c(t,e){var A=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=A.length,o=new Array(n);o[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<n;p++)o[p]=A[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,A)}u.displayName="MDXCreateElement"},65524:(t,e,A)=>{A.r(e),A.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=A(87462),r=(A(67294),A(3905));const n={title:"Appgate (POST)",description:"How to Use Casdoor as SAML IdP for Appgate",keywords:["SAML","IdP","Appgate"],authors:["leo220yuyaodog"]},o=void 0,l={unversionedId:"how-to-connect/saml/appgate",id:"how-to-connect/saml/appgate",title:"Appgate (POST)",description:"How to Use Casdoor as SAML IdP for Appgate",source:"@site/docs/how-to-connect/saml/appgate.md",sourceDirName:"how-to-connect/saml",slug:"/how-to-connect/saml/appgate",permalink:"/ru/docs/how-to-connect/saml/appgate",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/saml/appgate.md",tags:[],version:"current",frontMatter:{title:"Appgate (POST)",description:"How to Use Casdoor as SAML IdP for Appgate",keywords:["SAML","IdP","Appgate"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Google Workspace",permalink:"/ru/docs/how-to-connect/saml/google-workspace"},next:{title:"WebAuthn",permalink:"/ru/docs/how-to-connect/webauthn"}},i={},p=[{value:"Casdoor as a SAML IdP in Appgate",id:"casdoor-as-a-saml-idp-in-appgate",level:2},{value:"Casdoor Configuration",id:"casdoor-configuration",level:3},{value:"Add SAML IdP in Appgate",id:"add-saml-idp-in-appgate",level:3},{value:"Map Attributes",id:"map-attributes",level:3},{value:"Test Integration",id:"test-integration",level:3},{value:"Access Policy",id:"access-policy",level:3}],d={toc:p};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"casdoor-as-a-saml-idp-in-appgate"},"Casdoor as a SAML IdP in Appgate"),(0,r.kt)("p",null,"Appgate accepts the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMLResponse")," sent by a POST request. If you use another Service Provider (SP) that also supports a POST request, you can refer to this document."),(0,r.kt)("h3",{id:"casdoor-configuration"},"Casdoor Configuration"),(0,r.kt)("p",null,"Go to your Casdoor account and add a new application."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enter basic SAML configuration in the application"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Redirect URLs \u2013 Type in a unique name. This may be called ",(0,r.kt)("inlineCode",{parentName:"p"},"Audience")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity ID")," in your SP. See the table below."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Entity ID",src:A(4277).Z,width:"743",height:"229"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reply URL \u2013 Type in the URL of the ACS (Assertion Consumer Service) that verifies the SAML response. Refer to the table below."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Reply URL",src:A(96040).Z,width:"727",height:"251"})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Administrator Authentication"),(0,r.kt)("th",{parentName:"tr",align:null},"User Authentication"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},'Redirect URL = "AppGate"'),(0,r.kt)("td",{parentName:"tr",align:null},'Redirect URL = "AppGate Client"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SAML Reply URL = ",(0,r.kt)("a",{parentName:"td",href:"https://mycontroller.your-site-url.com/admin/saml"},"https://mycontroller.your-site-url.com/admin/saml")),(0,r.kt)("td",{parentName:"tr",align:null},"SAML Reply URL = ",(0,r.kt)("a",{parentName:"td",href:"https://redirectserver.your-site-url.com/saml"},"https://redirectserver.your-site-url.com/saml"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download the XML metadata file")),(0,r.kt)("p",null,"You can copy the URL of the metadata and download the file from your browser."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"metadata",src:A(93727).Z,width:"1800",height:"552"})),(0,r.kt)("h3",{id:"add-saml-idp-in-appgate"},"Add SAML IdP in Appgate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In your AppGate SDP console"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select System > Identity Providers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a new Identity Provider.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose the type SAML.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start configuring your identity provider following the details in the tables below."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:null},"Administrator Authentication"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},'Enter a unique name, e.g. "Casdoor SAML Admin".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Single Sign-on URL"),(0,r.kt)("td",{parentName:"tr",align:null},"See below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Issuer"),(0,r.kt)("td",{parentName:"tr",align:null},"See below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Audience"),(0,r.kt)("td",{parentName:"tr",align:null},"Type in the ",(0,r.kt)("strong",{parentName:"td"},"Redirect URL")," from the Casdoor application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Public Certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"See below")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the XML Metadata file to autocomplete the ",(0,r.kt)("strong",{parentName:"p"},"Single Sign-On"),", ",(0,r.kt)("strong",{parentName:"p"},"Issuer"),", and ",(0,r.kt)("strong",{parentName:"p"},"Public Certificate")," fields.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Choose a file")," and select the metadata file that you previously downloaded - this will autocomplete the relevant fields."))),(0,r.kt)("h3",{id:"map-attributes"},"Map Attributes"),(0,r.kt)("p",null,"Map the ",(0,r.kt)("strong",{parentName:"p"},"Name")," to ",(0,r.kt)("strong",{parentName:"p"},"username"),". Your completed form should look something like this:\n",(0,r.kt)("img",{alt:"map_attribute",src:A(75991).Z,width:"1272",height:"154"})),(0,r.kt)("h3",{id:"test-integration"},"Test Integration"),(0,r.kt)("p",null,"On your AppGate SDP Controller console:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Log out of the admin UI.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Log in using the following information:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Identity Provider \u2013 choose your Azure IdP from the drop-down list.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Sign in with browser")," to connect to your authenticator.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'You may see the following message:\n"You don\u2019t have any administration rights" \u2013 this confirms that the test user credentials have been\nsuccessfully authenticated by your Identity Provider.'))),(0,r.kt)("h3",{id:"access-policy"},"Access Policy"),(0,r.kt)("p",null,"You need to modify the access policy to allow administrators to log in to Appgate using the SAML IdP. Enter the Builtin Administrator Policy:"),(0,r.kt)("p",null,"Your completed form should look something like this:\n",(0,r.kt)("img",{alt:"appgate_policy.png",src:A(88651).Z,width:"1273",height:"562"})))}s.isMDXComponent=!0},88651:(t,e,A)=>{A.d(e,{Z:()=>a});const a=A.p+"assets/images/saml_appgate_policy-ac5dfde8eafa3fa9c8284bac674bfbdf.png"},4277:(t,e,A)=>{A.d(e,{Z:()=>a});const a=A.p+"assets/images/saml_entityId-02cf13e2debc60f1c7babe47bb443cbf.png"},75991:(t,e,A)=>{A.d(e,{Z:()=>a});const a="data:image/png;base64,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"},93727:(t,e,A)=>{A.d(e,{Z:()=>a});const a=A.p+"assets/images/saml_metadata_url-e63798ce9e7e167374b920d7b30b7da9.png"},96040:(t,e,A)=>{A.d(e,{Z:()=>a});const a=A.p+"assets/images/saml_replyURL-54e1796b344daaab144af1999228412e.png"}}]);