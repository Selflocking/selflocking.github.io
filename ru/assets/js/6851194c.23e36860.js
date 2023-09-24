"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5257],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>h});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(o),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return o?a.createElement(m,i(i({ref:e},c),{},{components:o})):a.createElement(m,i({ref:e},c))}));function h(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},16175:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const r={title:"Overview",description:"Connect your app to Casdoor",keywords:["OAuth","OAuth2.0","OIDC","SAML","CAS"],authors:["nomeguy"]},i=void 0,s={unversionedId:"how-to-connect/overview",id:"how-to-connect/overview",title:"Overview",description:"Connect your app to Casdoor",source:"@site/docs/how-to-connect/overview.md",sourceDirName:"how-to-connect",slug:"/how-to-connect/overview",permalink:"/ru/docs/how-to-connect/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Connect your app to Casdoor",keywords:["OAuth","OAuth2.0","OIDC","SAML","CAS"],authors:["nomeguy"]},sidebar:"tutorialSidebar",previous:{title:"How to Connect to Casdoor",permalink:"/ru/docs/category/how-to-connect-to-casdoor"},next:{title:"Standard OIDC Client",permalink:"/ru/docs/how-to-connect/oidc-client"}},l={},p=[{value:"OAuth 2.0 (OIDC)",id:"oauth-20-oidc",level:2},{value:"Standard OIDC client",id:"standard-oidc-client",level:3},{value:"Casdoor SDKs",id:"casdoor-sdks",level:3},{value:"Casdoor plugin",id:"casdoor-plugin",level:3},{value:"SAML",id:"saml",level:2},{value:"CAS",id:"cas",level:2},{value:"Integrations table",id:"integrations-table",level:2}],c={toc:p};function u(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section, we will show you how to connect your application to Casdoor."),(0,n.kt)("p",null,"As a Service Provider (SP), Casdoor supports two authentication protocols:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OAuth 2.0 (OIDC)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SAML"))),(0,n.kt)("p",null,"As an Identity Provider (IdP), Casdoor supports four authentication protocols:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OAuth 2.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OIDC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SAML")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CAS 1.0, 2.0, 3.0"))),(0,n.kt)("h2",{id:"oauth-20-oidc"},"OAuth 2.0 (OIDC)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What is OAuth 2.0?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth 2")," is an authorization framework that enables applications\u2014such as Facebook, GitHub, and Casdoor\u2014to obtain limited access to user accounts on an HTTP service. It works by delegating user authentication to the service that hosts a user account and authorizing third-party applications to access that user account. OAuth 2 provides authorization flows for web and desktop applications, as well as mobile devices.")),(0,n.kt)("p",null,"Casdoor's authorization process is built upon the OAuth 2.0 protocol. We recommend using the OAuth 2.0 protocol for the following reasons:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The protocol is simple and easy to implement, and can solve many scenarios."),(0,n.kt)("li",{parentName:"ol"},"It has a high maturity level and extensive community support.")),(0,n.kt)("p",null,"Therefore, your application will communicate with Casdoor via OAuth 2.0 (OIDC). There are three ways to connect to Casdoor:"),(0,n.kt)("h3",{id:"standard-oidc-client"},"Standard OIDC client"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/how-to-connect/oidc-client"},"Standard OIDC client")),": Use a standard OIDC client implementation, which is widely provided in any programming language or framework."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What is OIDC?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect (OIDC)")," is an open authentication protocol that works on top of the OAuth 2.0 framework. Targeted toward consumers, OIDC allows individuals to use single sign-on (SSO) to access relying party sites using OpenID Providers (OPs), such as an email provider or social network, to authenticate their identities. It provides the application or service with information about the user, the context of their authentication, and access to their profile information.")),(0,n.kt)("p",null,"Casdoor fully supports the OIDC protocol. If your application is already using another OAuth 2.0 (OIDC) identity provider via a ",(0,n.kt)("strong",{parentName:"p"},"standard OIDC client library"),", and you want to migrate to Casdoor, using OIDC discovery will make it very ",(0,n.kt)("strong",{parentName:"p"},"easy")," to switch to Casdoor."),(0,n.kt)("h3",{id:"casdoor-sdks"},"Casdoor SDKs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/how-to-connect/sdk"},"Casdoor SDKs")),": For most programming languages, Casdoor provides easy-to-use SDK libraries on top of OIDC, with extended functionality that is only available in Casdoor."),(0,n.kt)("p",null,"Compared to the standard OIDC protocol, Casdoor's SDK provides more functionalities, like user management and resource uploading, among others. Connecting to Casdoor via the Casdoor SDK requires more time than using a standard OIDC client library, but it offers the best ",(0,n.kt)("strong",{parentName:"p"},"flexibility")," and the most ",(0,n.kt)("strong",{parentName:"p"},"powerful")," API."),(0,n.kt)("h3",{id:"casdoor-plugin"},"Casdoor plugin"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/how-to-connect/plugin"},"Casdoor plugin")),": If your application is built on top of a popular platform (like Spring Boot, WordPress, etc.) and Casdoor (or a third party) has already provided a plugin or middleware for it, you should use it. Using a plugin is much easier than manually invoking the Casdoor SDK because the former is specially made for the platform."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Plugins:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/integration/java/jenkins-plugin"},"Jenkins plugin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/integration/lua/apisix#connect-casdoor-via-apisixs-casdoor-plugin"},"APISIX plugin"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Middleware:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/casdoor/casdoor-spring-boot-starter"},"Spring Boot plugin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/casdoor/django-casdoor-auth"},"Django plugin"))),(0,n.kt)("h2",{id:"saml"},"SAML"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What is SAML?"),(0,n.kt)("p",null,"Security Assertion Markup Language (SAML) is an open standard that allows identity providers (IdP) to pass authorization credentials to service providers (SP). What this jargon means is that you can use one set of credentials to log into many different websites. It's much simpler to manage one login per user than it is to manage separate logins to email, customer relationship management (CRM) software, Active Directory, etc."),(0,n.kt)("p",null,"SAML transactions use Extensible Markup Language (XML) for standardized communications between the identity provider and service providers. SAML is the link between the authentication of a user's identity and the authorization to use a service.")),(0,n.kt)("p",null,"Casdoor can be used as an ",(0,n.kt)("strong",{parentName:"p"},"SAML IdP"),". Currently, Casdoor supports the main features of ",(0,n.kt)("strong",{parentName:"p"},"SAML 2.0"),". For more details, see ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/how-to-connect/saml/overview"},"SAML")),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/how-to-connect/saml/keycloak#casdoor-as-a-saml-idp-in-keycloak"},"Casdoor as a SAML IdP in Keycloak")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Suggestions:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The protocol is ",(0,n.kt)("strong",{parentName:"li"},"powerful")," and covers many scenarios, making it one of the most comprehensive SSO protocols."),(0,n.kt)("li",{parentName:"ol"},"The protocol is ",(0,n.kt)("strong",{parentName:"li"},"large"),", with many optional parameters, so it is difficult to cover all application scenarios 100% in the actual implementation."),(0,n.kt)("li",{parentName:"ol"},"If the application is ",(0,n.kt)("strong",{parentName:"li"},"newly")," developed, SAML is ",(0,n.kt)("strong",{parentName:"li"},"not")," recommended due to its high technical complexity.")),(0,n.kt)("h2",{id:"cas"},"CAS"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What is CAS?"),(0,n.kt)("p",null,"The Central Authentication Service (CAS) is a single sign-on protocol for the web. Its purpose is to allow a user to access multiple applications while providing their credentials (such as user ID and password) only once. It also allows web applications to authenticate users without gaining access to a user's security credentials, such as a password.")),(0,n.kt)("p",null,"Casdoor has implemented CAS 1.0, 2.0, and 3.0 features. For more details, see ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/how-to-connect/cas"},"CAS")),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Suggestions:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The protocol itself is relatively lightweight and easy to implement, but it can only solve a single scenario."),(0,n.kt)("li",{parentName:"ol"},"The mutual trust between the CAS Client and the CAS Server is established through interface invocation without any encryption or signature mechanism to ensure further security."),(0,n.kt)("li",{parentName:"ol"},"The CAS protocol has no advantage over other protocols.")),(0,n.kt)("h2",{id:"integrations-table"},"Integrations table"),(0,n.kt)("p",null,"Some applications already have examples that connect to Casdoor. You can follow the documentation to quickly connect to Casdoor. You can see all applications in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/category/integrations"},"Integrations table"),"."))}u.isMDXComponent=!0}}]);