"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={title:"Subscription",description:"Casdoor Subscription Overview",keywords:["Subscription"],authors:["isulimanov","Chinoholo0807"]},o=void 0,l={unversionedId:"pricing/subscription",id:"pricing/subscription",title:"Subscription",description:"Casdoor Subscription Overview",source:"@site/docs/pricing/subscription.md",sourceDirName:"pricing",slug:"/pricing/subscription",permalink:"/docs/pricing/subscription",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/pricing/subscription.md",tags:[],version:"current",frontMatter:{title:"Subscription",description:"Casdoor Subscription Overview",keywords:["Subscription"],authors:["isulimanov","Chinoholo0807"]},sidebar:"tutorialSidebar",previous:{title:"Pricing Overview",permalink:"/docs/pricing/"},next:{title:"Users",permalink:"/docs/category/users"}},p={},s=[{value:"Subscription properties",id:"subscription-properties",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription")," feature helps in managing a user's selected ",(0,r.kt)("inlineCode",{parentName:"p"},"Plan"),", making it easy to control the access to ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," features."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since each ",(0,r.kt)("inlineCode",{parentName:"p"},"Plan")," is based on a ",(0,r.kt)("inlineCode",{parentName:"p"},"Role"),", you can assign the Plan's Role to a user and use the enforce API for permission checking.")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription")," can be created in three ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manually by an admin"),(0,r.kt)("li",{parentName:"ul"},"Via the Pricing flow (after signing up as a ",(0,r.kt)("inlineCode",{parentName:"li"},"paid-user")," and purchasing the selected ",(0,r.kt)("inlineCode",{parentName:"li"},"Plan"),")"),(0,r.kt)("li",{parentName:"ul"},"Via API")),(0,r.kt)("p",null,"The relationship between ",(0,r.kt)("inlineCode",{parentName:"p"},"Pricing"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Plan"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Product"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Payment")," is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"relation",src:n(71255).Z,width:"956",height:"1103"})),(0,r.kt)("h2",{id:"subscription-properties"},"Subscription properties"),(0,r.kt)("p",null,"Every Subscription has these properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Owner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreatedTime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DisplayName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Duration"),": The duration of the Subscription."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StartTime"),": The starting time for the Subscription to take effect."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EndTime"),": The end time for the Subscription to take effect."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pricing"),": The related Pricing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Plan"),": The related Plan."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Payment"),": The related Payment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"User"),": The user who holds this Subscription."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"State"),": Currently, the Subscription has the following states: ",(0,r.kt)("inlineCode",{parentName:"li"},"Pending"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Error"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Suspended"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Active"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Upcoming"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Expired"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"subscription edit",src:n(49621).Z,width:"2855",height:"1379"})))}u.isMDXComponent=!0},71255:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/relation-e734788393def1a0c3bbf46a4eaecd17.png"},49621:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sub_edit-966ef595e46c3ee9a468491d15e3abc9.png"}}]);