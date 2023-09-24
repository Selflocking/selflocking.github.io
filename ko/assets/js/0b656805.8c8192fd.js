"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2406],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(a),m=o,u=k["".concat(s,".").concat(m)]||k[m]||d[m]||i;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},89854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={title:"Keycloak",description:"Using Keycloak to authenticate users",keywords:["Keycloak"],authors:["seriouszyx"]},r=void 0,l={unversionedId:"provider/saml/keycloak",id:"provider/saml/keycloak",title:"Keycloak",description:"Using Keycloak to authenticate users",source:"@site/docs/provider/saml/keycloak.md",sourceDirName:"provider/saml",slug:"/provider/saml/keycloak",permalink:"/ko/docs/provider/saml/keycloak",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/saml/keycloak.md",tags:[],version:"current",frontMatter:{title:"Keycloak",description:"Using Keycloak to authenticate users",keywords:["Keycloak"],authors:["seriouszyx"]},sidebar:"tutorialSidebar",previous:{title:"Aliyun IDaaS",permalink:"/ko/docs/provider/saml/aliyun"},next:{title:"Payment",permalink:"/ko/docs/category/payment"}},s={},p=[{value:"Configure Keycloak",id:"configure-keycloak",level:2},{value:"Add a client entry in Keycloak",id:"add-a-client-entry-in-keycloak",level:2},{value:"Configure in Casdoor",id:"configure-in-casdoor",level:2},{value:"Validate the effect",id:"validate-the-effect",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The JBoss ",(0,o.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak")," system is a widely used and open-source identity management system that supports integration with applications via SAML and OpenID Connect. It can also operate as an identity broker between other providers such as LDAP or other SAML providers and applications that support SAML or OpenID Connect."),(0,o.kt)("p",null,"Here is an example of how to configure a new client entry in Keycloak and configure Casdoor to use it to allow UI login by Keycloak users who are granted access via Keycloak configuration."),(0,o.kt)("h2",{id:"configure-keycloak"},"Configure Keycloak"),(0,o.kt)("p",null,"For this example, let's make the following configuration choices and assumptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assume that you are running Casdoor in dev mode locally. The Casdoor UI is available at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:7001")," and the server is available at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000"),". Replace with the appropriate URL as needed."),(0,o.kt)("li",{parentName:"ul"},"Assume that you are running Keycloak locally. The Keycloak UI is available at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/auth"),"."),(0,o.kt)("li",{parentName:"ul"},"Based on that, the SP ACS URL for this deployment will be: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/api/acs"),"."),(0,o.kt)("li",{parentName:"ul"},"Our SP Entity ID will use the same URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/api/acs"),".")),(0,o.kt)("p",null,"You can use the default realm or create a new realm."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Keycloak realm",src:a(91173).Z,width:"2560",height:"590"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Keycloak realm",src:a(54540).Z,width:"2560",height:"965"})),(0,o.kt)("h2",{id:"add-a-client-entry-in-keycloak"},"Add a client entry in Keycloak"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more details about Keycloak Clients, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/index.html#_client-saml-configuration"},"Keycloak documentation"),".")),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Clients")," in the menu and then click ",(0,o.kt)("strong",{parentName:"p"},"Create")," to go to the ",(0,o.kt)("strong",{parentName:"p"},"Add Client")," page. Fill in the fields as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client ID"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/api/acs")," - This will be the SP Entity ID used in the Casdoor configuration later."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client Protocol"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"saml"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client SAML Endpoint"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/api/acs")," - This URL is where you want the Keycloak server to send SAML requests and responses. Generally, applications have one URL for processing SAML requests. Multiple URLs can be set in the Settings tab of the client.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Keycloak client",src:a(37434).Z,width:"2560",height:"961"})),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),". This action creates the client and brings you to the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab."),(0,o.kt)("p",null,"The following are part of the settings:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"Casdoor"),". This is only used to display a friendly name to Keycloak users in the Keycloak UI. You can use any name you prefer."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Enabled")," - Select ",(0,o.kt)("inlineCode",{parentName:"li"},"on"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Include Authn Statement")," - Select ",(0,o.kt)("inlineCode",{parentName:"li"},"on"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sign Documents")," - Select ",(0,o.kt)("inlineCode",{parentName:"li"},"on"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sign Assertions")," - Select ",(0,o.kt)("inlineCode",{parentName:"li"},"off"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Encrypt Assertions")," - Select ",(0,o.kt)("inlineCode",{parentName:"li"},"off"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Client Signature Required")," - Select ",(0,o.kt)("inlineCode",{parentName:"li"},"off"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Force Name ID Format")," - Select ",(0,o.kt)("inlineCode",{parentName:"li"},"on"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name ID Format")," - Select ",(0,o.kt)("inlineCode",{parentName:"li"},"username"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Valid Redirect URIs")," - Add ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/api/acs"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Master SAML Processing URL")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/api/acs"),"."),(0,o.kt)("li",{parentName:"ol"},"Fine Grain SAML Endpoint Configuration",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Assertion Consumer Service POST Binding URL")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/api/acs"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Assertion Consumer Service Redirect Binding URL")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/api/acs"),".")))),(0,o.kt)("p",null,"Save the configuration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configure Keycloak client",src:a(91667).Z,width:"2557",height:"3014"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to sign the authn request, you need to enable the ",(0,o.kt)("strong",{parentName:"p"},"Client Signature Required")," option and upload the certificate generated by yourself. The private key and certificate used in Casdoor, ",(0,o.kt)("inlineCode",{parentName:"p"},"token_jwt_key.key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"token_jwt_key.pem"),", are located in the ",(0,o.kt)("strong",{parentName:"p"},"object")," directory. In Keycloak, you need to click the ",(0,o.kt)("strong",{parentName:"p"},"Keys")," tab, click the ",(0,o.kt)("strong",{parentName:"p"},"Import")," button, select ",(0,o.kt)("strong",{parentName:"p"},"Archive Format")," as ",(0,o.kt)("strong",{parentName:"p"},"Certificate PEM"),", and upload the certificate.")),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Installation")," tab."),(0,o.kt)("p",null,"For Keycloak <= 5.0.0, select Format Option - ",(0,o.kt)("strong",{parentName:"p"},"SAML Metadata IDPSSODescriptor")," and copy the metadata."),(0,o.kt)("p",null,"For Keycloak 6.0.0+, select Format Option - ",(0,o.kt)("strong",{parentName:"p"},"Mod Auth Mellon files")," and click ",(0,o.kt)("strong",{parentName:"p"},"Download"),". Unzip the downloaded.zip, locate ",(0,o.kt)("inlineCode",{parentName:"p"},"idp-metadata.xml"),", and copy the metadata."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Download metadata",src:a(37443).Z,width:"2560",height:"596"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy metadata",src:a(83891).Z,width:"1002",height:"241"})),(0,o.kt)("h2",{id:"configure-in-casdoor"},"Configure in Casdoor"),(0,o.kt)("p",null,"Create a new provider in Casdoor."),(0,o.kt)("p",null,"Select category as ",(0,o.kt)("strong",{parentName:"p"},"SAML"),", type as ",(0,o.kt)("strong",{parentName:"p"},"Keycloak"),". Copy the content of metadata and paste it into the ",(0,o.kt)("strong",{parentName:"p"},"Metadata")," field. The values of ",(0,o.kt)("strong",{parentName:"p"},"Endpoint"),", ",(0,o.kt)("strong",{parentName:"p"},"IdP"),", and ",(0,o.kt)("strong",{parentName:"p"},"Issuer URL")," will be generated automatically after clicking the ",(0,o.kt)("strong",{parentName:"p"},"Parse")," button. Finally, click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you enable the ",(0,o.kt)("strong",{parentName:"p"},"Client Signature Required")," option in Keycloak and upload the certificate, please enable the ",(0,o.kt)("strong",{parentName:"p"},"Sign request")," option in Casdoor.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casdoor provider",src:a(18584).Z,width:"2505",height:"1272"})),(0,o.kt)("p",null,"Edit the application you want to configure in Casdoor. Select the provider you just added and click the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add provider for app",src:a(77589).Z,width:"2487",height:"255"})),(0,o.kt)("h2",{id:"validate-the-effect"},"Validate the effect"),(0,o.kt)("p",null,"Go to the application you just configured and you will find a Keycloak icon on the login page."),(0,o.kt)("p",null,"Click the icon and you will be redirected to the Keycloak login page. After successful authentication, you will be logged into Casdoor."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casdoor login",src:a(79051).Z,width:"1280",height:"720"})))}d.isMDXComponent=!0},77589:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_casdoor_app-c3afe561f88f7c5ade9973f8aa706dec.png"},79051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_casdoor_login-5080e3bced4808bd768772ecfb15ca97.gif"},18584:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_casdoor_provider-238d41bdb7a2ce7eab3252b45b8f7d63.png"},37434:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_client_add-a22a58cfe1cac19aac7c471f4b95a391.png"},91667:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_client_configure-d8a4520b9809494ac277da30d02a8d35.png"},83891:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_client_copy-3233ceff3f6b91883873e5441c6e50fe.png"},37443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_client_install-e8ed45db439c33e32b2f46fbdc476f40.png"},54540:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_realm-aa47ec9142083126d9c9f1ce79c75eac.png"},91173:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak_realm_add-9a27d681ede089b89474ebd0acc155c0.png"}}]);