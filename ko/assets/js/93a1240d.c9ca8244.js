"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},91360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Organization Tree",description:"User groups within an organization",keywords:["user","group","organization","tree"],authors:["leo220yuyaodog"]},o=void 0,p={unversionedId:"organization/organization-tree",id:"organization/organization-tree",title:"Organization Tree",description:"User groups within an organization",source:"@site/docs/organization/organization-tree.md",sourceDirName:"organization",slug:"/organization/organization-tree",permalink:"/ko/docs/organization/organization-tree",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/organization/organization-tree.md",tags:[],version:"current",frontMatter:{title:"Organization Tree",description:"User groups within an organization",keywords:["user","group","organization","tree"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/ko/docs/organization/overview"},next:{title:"Password Complexity",permalink:"/ko/docs/organization/passwordComplexity"}},l={},s=[{value:"Group properties",id:"group-properties",level:2},{value:"Managing groups",id:"managing-groups",level:2}],u={toc:s};function g(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Groups are a collection of users within an organization. A user can belong to multiple groups."),(0,a.kt)("h2",{id:"group-properties"},"Group properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Owner"),": The organization that owns the group"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name"),": Unique group name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"displayName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CreatedTime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UpdatedTime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Type"),": Groups can be classified as either ",(0,a.kt)("inlineCode",{parentName:"li"},"Physical")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual"),". A user can only belong to one ",(0,a.kt)("inlineCode",{parentName:"li"},"Physical")," group but can be in multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual")," groups."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ParentGroup"),": The parent group of a group (The parent group of the top-level groups in the organization is the organization itself)")),(0,a.kt)("h2",{id:"managing-groups"},"Managing groups"),(0,a.kt)("p",null,"There are two ways to manage groups:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the groups list page, you can view all the groups within the organization."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"groups list",src:r(24347).Z,width:"1862",height:"875"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Groups")," button on the organization list page."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"organization list",src:r(71587).Z,width:"1913",height:"530"})),(0,a.kt)("p",{parentName:"li"},"This will display the tree structure of the groups within the organization."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"groups tree",src:r(50255).Z,width:"1199",height:"511"})),(0,a.kt)("p",{parentName:"li"},"Here is a video that shows how to manage groups:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"groups tree page",src:r(33763).Z,width:"1404",height:"720"})),(0,a.kt)("p",{parentName:"li"},"Groups can also be edited in a user's profile."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"groups user",src:r(61783).Z,width:"774",height:"568"})))))}g.isMDXComponent=!0},24347:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/groups_list-232c691b0ebe548ba70b9f956b60725d.png"},33763:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/groups_tree-827ee61a967faec1697ef33f0149b808.gif"},50255:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/groups_tree-63729e2fe9a90fb7be81fa3f88b52ee9.png"},61783:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/groups_user-06e137ee26cc4e07cc8abcb79756dad5.png"},71587:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/organization_tree_entry-02c74d6c4ebb28f032f68c4dabe49fef.png"}}]);