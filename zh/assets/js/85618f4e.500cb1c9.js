"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={title:"Account Customization",description:"Customizing users' account items",keywords:["account customization"],authors:["leo220yuyaodog"]},o=void 0,l={unversionedId:"organization/accountCustomization",id:"organization/accountCustomization",title:"Account Customization",description:"Customizing users' account items",source:"@site/docs/organization/accountCustomization.md",sourceDirName:"organization",slug:"/organization/accountCustomization",permalink:"/zh/docs/organization/accountCustomization",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/organization/accountCustomization.md",tags:[],version:"current",frontMatter:{title:"Account Customization",description:"Customizing users' account items",keywords:["account customization"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Password Complexity",permalink:"/zh/docs/organization/passwordComplexity"},next:{title:"Customizing Themes",permalink:"/zh/docs/organization/customize-theme"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"How to Customize?",id:"how-to-customize",level:2},{value:"Account Table",id:"account-table",level:2}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In an organization, you can customize users' ",(0,i.kt)("strong",{parentName:"p"},"account items"),". This includes whether each item is ",(0,i.kt)("strong",{parentName:"p"},"visible")," and its ",(0,i.kt)("strong",{parentName:"p"},"view rule")," and ",(0,i.kt)("strong",{parentName:"p"},"modify rule"),"."),(0,i.kt)("p",null,"When you customize account items in an organization, this configuration takes effect on the home page of all members of that organization."),(0,i.kt)("h2",{id:"how-to-customize"},"How to Customize?"),(0,i.kt)("p",null,"Account items have four attributes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Column Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Selectable Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Account item name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Visible"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"True")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:null},"Select whether this account item is visible on the user home page.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ViewRule"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rule Items"),(0,i.kt)("td",{parentName:"tr",align:null},"Select a rule to use when viewing the account item.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ModifyRule"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rule Items"),(0,i.kt)("td",{parentName:"tr",align:null},"Select a rule to use when modifying the account item.")))),(0,i.kt)("p",null,"To customize account items, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the Organization Edit page.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You will find the following options:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"account_customize.png",src:n(40419).Z,width:"1803",height:"885"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casdoor provides simple operations to configure account items:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set the item to be visible or invisible."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"account_visible.png",src:n(14440).Z,width:"1519",height:"349"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set viewing and modifying rules."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"account_rule.png",src:n(75002).Z,width:"676",height:"237"})))))),(0,i.kt)("p",null,"There are 3 rules available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Public"),": Everyone has permission."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Self"),": Each user has their own permission."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Admin"),": The administrator has permission.")),(0,i.kt)("h2",{id:"account-table"},"Account Table"),(0,i.kt)("p",null,"Below are all the fields in the account item. For descriptions, you can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/user/overview"},"user"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Organization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Display name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Avatar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"User type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Phone")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Country/Region")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Location")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Affiliation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Title")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Homepage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tag")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Signup application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3rd-party logins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Is admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Is global admin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Is forbidden")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Is deleted"))))}c.isMDXComponent=!0},40419:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account_customize-243885eef021d59360f3c91f10301898.png"},75002:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account_rule-ed55cc6b2700da2609c190578af09b85.png"},14440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account_visible-05d5e8e4761434d4117577bad7707d8c.png"}}]);