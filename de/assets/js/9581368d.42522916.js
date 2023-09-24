"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Overview",description:"Casdoor cooperates with an LDAP server",keywords:["LDAP"],authors:["WindSpiritSR"]},i=void 0,s={unversionedId:"ldap/overview",id:"ldap/overview",title:"Overview",description:"Casdoor cooperates with an LDAP server",source:"@site/docs/ldap/overview.md",sourceDirName:"ldap",slug:"/ldap/overview",permalink:"/de/docs/ldap/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/ldap/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Casdoor cooperates with an LDAP server",keywords:["LDAP"],authors:["WindSpiritSR"]},sidebar:"tutorialSidebar",previous:{title:"LDAP",permalink:"/de/docs/category/ldap"},next:{title:"Configuring and Syncing LDAP Users",permalink:"/de/docs/ldap/config"}},d={},c=[{value:"Details about Casdoor-LDAP synchronization mechanism",id:"details-about-casdoor-ldap-synchronization-mechanism",level:2}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Support for an LDAP server has been introduced into Casdoor. Casdoor is able to synchronize users from LDAP servers to Casdoor in order to use them as user accounts for logging in, and authenticate them using the LDAP servers. Casdoor also supports setting up cron jobs to synchronize users automatically on a regular basis."),(0,o.kt)("h2",{id:"details-about-casdoor-ldap-synchronization-mechanism"},"Details about Casdoor-LDAP synchronization mechanism"),(0,o.kt)("p",null,"The way Casdoor cooperates with an LDAP server is described as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Synchronization: Casdoor can connect to an LDAP server, fetch users' information, and read all users' information (including ",(0,o.kt)("inlineCode",{parentName:"p"},"uidNumber"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gidNumber"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mail"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"emailAddress"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"telephoneNumber"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mobile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mobileTelephoneNumber"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"registeredAddress"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"postalAddress"),"). It then creates Casdoor accounts for each user in the LDAP, and stores these accounts in the database.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Authentication: As we have seen, Casdoor does not fetch LDAP users' passwords. When an account that is synchronized from the LDAP server tries to log in through Casdoor, instead of checking the password stored in Casdoor's database, Casdoor connects to the LDAP server and verifies whether the user's password is correct.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"User identification: Casdoor uses ",(0,o.kt)("inlineCode",{parentName:"p"},"uid")," to exclusively identify a user. Therefore, please ensure that every LDAP user has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"uid"),"."))),(0,o.kt)("p",null,"Once a user is synchronized into Casdoor, their information is independent from the LDAP user. This means that if you modify the user's information in Casdoor, the user's information in the LDAP will not be modified, and vice versa (except for the LDAP user's password, as we rely on it to authenticate the user)."))}p.isMDXComponent=!0}}]);