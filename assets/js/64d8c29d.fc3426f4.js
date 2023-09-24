"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3858],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(i),f=n,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return i?o.createElement(h,s(s({ref:t},p),{},{components:i})):o.createElement(h,s({ref:t},p))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var l=2;l<r;l++)s[l]=i[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},82207:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=i(87462),n=(i(67294),i(3905));const r={title:"Overview",description:"Using Casbin to manage user access rights in organizations",keywords:["permissions","Casbin"],authors:["seriouszyx","MagicalSheep"]},s=void 0,a={unversionedId:"permission/overview",id:"permission/overview",title:"Overview",description:"Using Casbin to manage user access rights in organizations",source:"@site/docs/permission/overview.md",sourceDirName:"permission",slug:"/permission/overview",permalink:"/docs/permission/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/permission/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Using Casbin to manage user access rights in organizations",keywords:["permissions","Casbin"],authors:["seriouszyx","MagicalSheep"]},sidebar:"tutorialSidebar",previous:{title:"Permissions",permalink:"/docs/category/permissions"},next:{title:"Permission Configuration",permalink:"/docs/permission/permission-configuration"}},c={},l=[{value:"Introduction",id:"introduction",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"All users associated with a single Casdoor organization share access to the organization's applications. However, there may be instances where you want to restrict user access to certain applications or specific resources within an application. In such cases, you can utilize the ",(0,n.kt)("inlineCode",{parentName:"p"},"Permission")," feature provided by ",(0,n.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),"."),(0,n.kt)("p",null,"Before delving deeper into the topic, it is important to have a basic understanding of how Casbin works and its related concepts, such as Models, Policies, and Adapters. In a nutshell, a Model defines the structure of your permission policies and the criteria for matching requests against these policies and their outcomes. A Policy, on the other hand, describes the specific permission rules. Once Casbin has the necessary Model and Policy information, it can enforce permission control on incoming requests. Acting as an abstraction layer, an Adapter shields Casbin's executor from the source of the Policy, allowing the storage of Policies in various locations like files or databases."),(0,n.kt)("p",null,"Returning to the subject of permission configuration in Casdoor, you can add a Model for your organization in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Model")," configuration item within the Casdoor Web UI, and a Policy for your organization in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Permission")," configuration item. The ",(0,n.kt)("a",{parentName:"p",href:"https://casbin.org/editor"},"Casbin Online Editor")," can provide you with Model and Policy files tailored to your specific usage scenarios. You can effortlessly import the Model file into Casdoor through its Web UI for use by the built-in Casbin. However, for the Policy (i.e., the ",(0,n.kt)("inlineCode",{parentName:"p"},"Permission")," configuration item in the Casdoor Web UI), further instructions are necessary, which will be discussed later."),(0,n.kt)("p",null,"Just as your application needs to enforce permission control through Casdoor's built-in Casbin, Casdoor itself utilizes its own Model and Policy to regulate access permissions for the API interfaces through Casbin. Though Casdoor can call Casbin from internal code, external applications cannot. As a solution, Casdoor exposes an API for external applications to call the built-in Casbin. We will provide definitions of these API interfaces and instructions on how to use them shortly."),(0,n.kt)("p",null,"Towards the end of this chapter, we will showcase a practical example to demonstrate how Casdoor works in collaboration with external applications for permission control."),(0,n.kt)("p",null,"Let's get started!"))}u.isMDXComponent=!0}}]);