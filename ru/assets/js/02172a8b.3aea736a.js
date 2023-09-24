"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1281],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),y=o,h=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return t?n.createElement(h,s(s({ref:r},u),{},{components:t})):n.createElement(h,s({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},60099:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={title:"Overview",description:"Synchronizing users in Casdoor",keywords:["users","sync","syncer"],authors:["leo220yuyaodog"]},s=void 0,i={unversionedId:"syncer/overview",id:"syncer/overview",title:"Overview",description:"Synchronizing users in Casdoor",source:"@site/docs/syncer/overview.md",sourceDirName:"syncer",slug:"/syncer/overview",permalink:"/ru/docs/syncer/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/syncer/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Synchronizing users in Casdoor",keywords:["users","sync","syncer"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Syncer",permalink:"/ru/docs/category/syncer"},next:{title:"Database",permalink:"/ru/docs/syncer/Database"}},c={},l=[{value:"Syncer",id:"syncer",level:2},{value:"Synchronization hash",id:"synchronization-hash",level:2}],u={toc:l};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As an authentication platform, Casdoor can easily manage users stored in databases."),(0,o.kt)("h2",{id:"syncer"},"Syncer"),(0,o.kt)("p",null,"Casdoor stores users in the ",(0,o.kt)("strong",{parentName:"p"},"user")," table. So, when you plan to use Casdoor as an authentication platform, there is no need to worry about migrating your application's user data into Casdoor. Casdoor provides a ",(0,o.kt)("strong",{parentName:"p"},"syncer")," to quickly help you synchronize user data to Casdoor."),(0,o.kt)("p",null,"You need to specify the database and user table that you want to synchronize with Casdoor, and the syncer will take care of syncing the data at regular intervals. For more details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/syncer/Database"},"database syncer"),"."),(0,o.kt)("h2",{id:"synchronization-hash"},"Synchronization hash"),(0,o.kt)("p",null,"Casdoor uses a hash function to determine how to update a user. This hash value is calculated for each user in the table, using information such as the password or mobile phone number."),(0,o.kt)("p",null,"If the calculated hash value of a user with a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Id")," changes compared to the original value, Casdoor confirms that the user table has been updated. Subsequently, the database updates the old information, thereby achieving ",(0,o.kt)("strong",{parentName:"p"},"bilateral synchronization")," between the Casdoor user table and the original user table."))}d.isMDXComponent=!0}}]);