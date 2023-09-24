"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[4389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"LDAP Server",description:"How to connect LDAP client in Casdoor",keywords:["LDAP server"],authors:["forestmgy"]},a=void 0,l={unversionedId:"ldap/ldapserver",id:"ldap/ldapserver",title:"LDAP Server",description:"How to connect LDAP client in Casdoor",source:"@site/docs/ldap/ldapserver.md",sourceDirName:"ldap",slug:"/ldap/ldapserver",permalink:"/docs/ldap/ldapserver",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/ldap/ldapserver.md",tags:[],version:"current",frontMatter:{title:"LDAP Server",description:"How to connect LDAP client in Casdoor",keywords:["LDAP server"],authors:["forestmgy"]},sidebar:"tutorialSidebar",previous:{title:"Configuring and Syncing LDAP Users",permalink:"/docs/ldap/config"},next:{title:"Integrations",permalink:"/docs/category/integrations"}},s={},p=[{value:"LDAP Server Port",id:"ldap-server-port",level:3},{value:"How it Works",id:"how-it-works",level:3},{value:"How to Bind",id:"how-to-bind",level:3},{value:"How to Search",id:"how-to-search",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Many systems, like ",(0,o.kt)("inlineCode",{parentName:"p"},"Nexus"),", support LDAP authentication. Casdoor also implements a simple LDAP server, which supports bind and search operations."),(0,o.kt)("p",null,"This document describes how to connect to the LDAP server in Casdoor and implement simple login authentication."),(0,o.kt)("h3",{id:"ldap-server-port"},"LDAP Server Port"),(0,o.kt)("p",null,"The LDAP server listens on port ",(0,o.kt)("inlineCode",{parentName:"p"},"389")," by default. You can change the default port by modifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"ldapServerPort")," value in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor/blob/28b381e01eebac66e39e20179ed95282695ecd75/conf/app.conf#L22"},"conf/app.conf"),"."),(0,o.kt)("h3",{id:"how-it-works"},"How it Works"),(0,o.kt)("p",null,"Similar to the LDAP client in Casdoor, the users in the LDAP server are all subclasses of ",(0,o.kt)("inlineCode",{parentName:"p"},"posixAccount"),"."),(0,o.kt)("p",null,"When the server receives a set of data transmitted by the LDAP, it will parse the ",(0,o.kt)("inlineCode",{parentName:"p"},"cn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ou"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"cn")," represents the username and ",(0,o.kt)("inlineCode",{parentName:"p"},"ou")," represents the organization name. The ",(0,o.kt)("inlineCode",{parentName:"p"},"dc")," does not matter."),(0,o.kt)("p",null,"If it is a bind operation, the server will use Casdoor to verify the username and password and grant the user permission in Casdoor."),(0,o.kt)("p",null,"If it is a search operation, the server will check whether the search operation is legal, according to the permissions granted to the client by the bind operation, and return a response."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We only support ",(0,o.kt)("strong",{parentName:"p"},"Simple Authentication"),".")),(0,o.kt)("h3",{id:"how-to-bind"},"How to Bind"),(0,o.kt)("p",null,"In Casdoor LDAP server, we only recognize ",(0,o.kt)("inlineCode",{parentName:"p"},"DN")," similar to this format: ",(0,o.kt)("inlineCode",{parentName:"p"},"cn=admin,ou=built-in,dc=example,dc=com"),"."),(0,o.kt)("p",null,"Please set the ",(0,o.kt)("inlineCode",{parentName:"p"},"DN")," of the admin user to the above format. Then, you can use this ",(0,o.kt)("inlineCode",{parentName:"p"},"DN")," to bind to the LDAP server with the user's password to log in to Casdoor for verification. If the server verification is successful, the user will be granted authority in Casdoor."),(0,o.kt)("h3",{id:"how-to-search"},"How to Search"),(0,o.kt)("p",null,"Once the bind operation completes successfully, you can perform the search operation. There are some differences between search and bind operations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To search for a certain user, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"Alice")," under the ",(0,o.kt)("inlineCode",{parentName:"li"},"built-in")," organization, you should use a ",(0,o.kt)("inlineCode",{parentName:"li"},"DN")," like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"ou=built-in,dc=example,dc=com"),", and add ",(0,o.kt)("inlineCode",{parentName:"li"},"cn=Alice")," in the Filter field."),(0,o.kt)("li",{parentName:"ul"},"To search for all users under a certain organization, such as all users in ",(0,o.kt)("inlineCode",{parentName:"li"},"built-in"),", you should use a ",(0,o.kt)("inlineCode",{parentName:"li"},"DN")," like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"ou=built-in,dc=example,dc=com"),", and add ",(0,o.kt)("inlineCode",{parentName:"li"},"cn=*")," in the Filter field."),(0,o.kt)("li",{parentName:"ul"},"To search for all users in all organizations (assuming the user has sufficient permissions), you should use a ",(0,o.kt)("inlineCode",{parentName:"li"},"DN")," like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"ou=*,dc=example,dc=com"),", and add ",(0,o.kt)("inlineCode",{parentName:"li"},"cn=*")," in the Filter field.")))}d.isMDXComponent=!0}}]);