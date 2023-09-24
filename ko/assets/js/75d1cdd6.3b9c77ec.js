"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[240],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),c=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},l=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),g=c(a),m=n,u=g["".concat(p,".").concat(m)]||g[m]||d[m]||o;return a?r.createElement(u,i(i({ref:e},l),{},{components:a})):r.createElement(u,i({ref:e},l))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},65150:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Overview",description:"Casdoor basic unit \u2014 organization",keywords:["organization"],authors:["sh1luo"]},i=void 0,s={unversionedId:"organization/overview",id:"organization/overview",title:"Overview",description:"Casdoor basic unit \u2014 organization",source:"@site/docs/organization/overview.md",sourceDirName:"organization",slug:"/organization/overview",permalink:"/ko/docs/organization/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/organization/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Casdoor basic unit \u2014 organization",keywords:["organization"],authors:["sh1luo"]},sidebar:"tutorialSidebar",previous:{title:"Organizations",permalink:"/ko/docs/category/organizations"},next:{title:"Organization Tree",permalink:"/ko/docs/organization/organization-tree"}},p={},c=[],l={toc:c};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An organization is the basic unit of Casdoor, which manages users and applications. If a user signs in to an organization, then they can access all applications belonging to the organization without signing in again."),(0,n.kt)("p",null,"In the configuration of ",(0,n.kt)("a",{parentName:"p",href:"/docs/application/config"},"applications")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/provider/overview"},"providers"),", choosing an organization is important, as it determines whether a user can access the application using specific providers."),(0,n.kt)("p",null,"We can also set up LDAP in Casdoor. For more details, please see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/ldap/overview"},"LDAP")," documentation."),(0,n.kt)("p",null,"Casdoor provides multiple password storage algorithms that can be selected on the organization edit page."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Algorithm"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Scenario"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"plain"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"The password will be stored in cleartext. (default)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"salt"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/master/cred/sha256-salt.go"},"SHA-256")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.n-able.com/blog/sha-256-encryption"},"SHA-256")," is a patented cryptographic hash function that outputs a value that is 256 bits long."),(0,n.kt)("td",{parentName:"tr",align:"center"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"md5-salt"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/master/cred/md5-user-salt.go"},"MD5")),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/MD5"},"MD5 message-digest algorithm")," is a cryptographically broken but still widely used hash function producing a 128-bit hash value."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://www.discuz.vip/"},"Discuz!"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"bcrypt"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/master/cred/bcrypt.go"},"bcrypt")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Bcrypt"},"bcrypt")," is a password-hashing function and is used to hash and salt passwords securely."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://spring.io/projects/spring-boot"},"Spring Boot"),", ",(0,n.kt)("a",{parentName:"td",href:"https://stackoverflow.com/questions/1045988/what-type-of-hash-does-wordpress-use"},"WordPress"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"pbkdf2-salt"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor/blob/master/cred/pbkdf2-salt.go"},"SHA-256 and PBKDF2")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/PBKDF2"},"PBKDF2")," is a simple cryptographic key derivation function that is resistant to dictionary attacks and rainbow table attacks. It was originally implemented in Casdoor for the Keycloak syncer. Select this option if you are importing users using the Keycloak syncer."),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"http://keycloak.org/"},"Keycloak"))))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In addition to logging into Casdoor via an application (which redirects to Casdoor for SSO), a Casdoor user can also choose to directly log into Casdoor via the organization's login page: ",(0,n.kt)("inlineCode",{parentName:"p"},"/login/<organization_name>"),", e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://door.casdoor.com/login/casbin"},"https://door.casdoor.com/login/casbin")," in the demo site.")))}d.isMDXComponent=!0}}]);