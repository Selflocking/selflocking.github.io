"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[9009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"Standard OIDC Client",description:"Using OIDC discovery to migrate to Casdoor",keywords:["OIDC","discovery","client"],authors:["nomeguy"]},i=void 0,l={unversionedId:"how-to-connect/oidc-client",id:"how-to-connect/oidc-client",title:"Standard OIDC Client",description:"Using OIDC discovery to migrate to Casdoor",source:"@site/docs/how-to-connect/oidc-client.md",sourceDirName:"how-to-connect",slug:"/how-to-connect/oidc-client",permalink:"/ko/docs/how-to-connect/oidc-client",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/oidc-client.md",tags:[],version:"current",frontMatter:{title:"Standard OIDC Client",description:"Using OIDC discovery to migrate to Casdoor",keywords:["OIDC","discovery","client"],authors:["nomeguy"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/ko/docs/how-to-connect/overview"},next:{title:"Casdoor SDKs",permalink:"/ko/docs/how-to-connect/sdk"}},s={},d=[{value:"OIDC Discovery",id:"oidc-discovery",level:2},{value:"List of OIDC Client Libraries",id:"list-of-oidc-client-libraries",level:2},{value:"OIDC UserInfo Fields",id:"oidc-userinfo-fields",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"oidc-discovery"},"OIDC Discovery"),(0,r.kt)("p",null,"Casdoor has fully implemented the OIDC protocol. If your application is already using a standard OIDC client library to connect to another OAuth 2.0 identity provider, and you want to migrate to Casdoor, using OIDC discovery will make it very easy for you to switch. Casdoor's OIDC discovery URL is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-url"},"<your-casdoor-backend-host>/.well-known/openid-configuration\n")),(0,r.kt)("p",null,"For example, the OIDC discovery URL for the demo site is: ",(0,r.kt)("a",{parentName:"p",href:"https://door.casdoor.com/.well-known/openid-configuration"},"https://door.casdoor.com/.well-known/openid-configuration"),", and it contains the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "issuer": "https://door.casdoor.com",\n  "authorization_endpoint": "https://door.casdoor.com/login/oauth/authorize",\n  "token_endpoint": "https://door.casdoor.com/api/login/oauth/access_token",\n  "userinfo_endpoint": "https://door.casdoor.com/api/userinfo",\n  "jwks_uri": "https://door.casdoor.com/.well-known/jwks",\n  "introspection_endpoint": "https://door.casdoor.com/api/login/oauth/introspect",\n  "response_types_supported": [\n    "code",\n    "token",\n    "id_token",\n    "code token",\n    "code id_token",\n    "token id_token",\n    "code token id_token",\n    "none"\n  ],\n  "response_modes_supported": [\n    "login",\n    "code",\n    "link"\n  ],\n  "grant_types_supported": [\n    "password",\n    "authorization_code"\n  ],\n  "subject_types_supported": [\n    "public"\n  ],\n  "id_token_signing_alg_values_supported": [\n    "RS256"\n  ],\n  "scopes_supported": [\n    "openid",\n    "email",\n    "profile",\n    "address",\n    "phone",\n    "offline_access"\n  ],\n  "claims_supported": [\n    "iss",\n    "ver",\n    "sub",\n    "aud",\n    "iat",\n    "exp",\n    "id",\n    "type",\n    "displayName",\n    "avatar",\n    "permanentAvatar",\n    "email",\n    "phone",\n    "location",\n    "affiliation",\n    "title",\n    "homepage",\n    "bio",\n    "tag",\n    "region",\n    "language",\n    "score",\n    "ranking",\n    "isOnline",\n    "isAdmin",\n    "isGlobalAdmin",\n    "isForbidden",\n    "signupApplication",\n    "ldap"\n  ],\n  "request_parameter_supported": true,\n  "request_object_signing_alg_values_supported": [\n    "HS256",\n    "HS384",\n    "HS512"\n  ]\n}\n')),(0,r.kt)("h2",{id:"list-of-oidc-client-libraries"},"List of OIDC Client Libraries"),(0,r.kt)("p",null,"Here is a list of some OIDC client libraries for languages like Go and Java:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OIDC client library"),(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"go-oidc"),(0,r.kt)("td",{parentName:"tr",align:null},"Go"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/coreos/go-oidc"},"https://github.com/coreos/go-oidc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pac4j-oidc"),(0,r.kt)("td",{parentName:"tr",align:null},"Java"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.pac4j.org/docs/clients/openid-connect.html"},"https://www.pac4j.org/docs/clients/openid-connect.html"))))),(0,r.kt)("p",null,"Please note that the above table is not exhaustive. For a full list of OIDC client libraries, you can find more details at:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://oauth.net/code/"},"https://oauth.net/code/")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://openid.net/certified-open-id-developer-tools/"},"https://openid.net/certified-open-id-developer-tools/"))),(0,r.kt)("h2",{id:"oidc-userinfo-fields"},"OIDC UserInfo Fields"),(0,r.kt)("p",null,"The following table illustrates how OIDC UserInfo fields (via the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/userinfo")," API) are mapped from properties of Casdoor's User table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Casdoor User Field"),(0,r.kt)("th",{parentName:"tr",align:null},"OIDC UserInfo Field"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},"sub")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"originBackend"),(0,r.kt)("td",{parentName:"tr",align:null},"iss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aud"),(0,r.kt)("td",{parentName:"tr",align:null},"aud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"preferred_username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisplayName"),(0,r.kt)("td",{parentName:"tr",align:null},"name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"picture")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Location"),(0,r.kt)("td",{parentName:"tr",align:null},"address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phone"),(0,r.kt)("td",{parentName:"tr",align:null},"phone")))),(0,r.kt)("p",null,"You can see the definition of UserInfo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor/blob/95ab2472ce84c479be43d6fc4db6533fc738b259/object/user.go#L175-L185"},"here"),"."))}c.isMDXComponent=!0}}]);