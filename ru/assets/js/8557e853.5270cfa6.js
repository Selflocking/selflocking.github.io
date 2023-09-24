"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7194],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),h=i,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||a;return o?n.createElement(d,r(r({ref:t},p),{},{components:o})):n.createElement(d,r({ref:t},p))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},35147:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));const a={title:"Customizing Themes",description:"Learn how to customize themes for organizations and applications within an organization",keywords:["theme"],authors:["leo220yuyaodog"]},r=void 0,s={unversionedId:"organization/customize-theme",id:"organization/customize-theme",title:"Customizing Themes",description:"Learn how to customize themes for organizations and applications within an organization",source:"@site/docs/organization/customize-theme.md",sourceDirName:"organization",slug:"/organization/customize-theme",permalink:"/ru/docs/organization/customize-theme",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/organization/customize-theme.md",tags:[],version:"current",frontMatter:{title:"Customizing Themes",description:"Learn how to customize themes for organizations and applications within an organization",keywords:["theme"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Account Customization",permalink:"/ru/docs/organization/accountCustomization"},next:{title:"Manage Multi-Factor Authentication Items",permalink:"/ru/docs/organization/mfa-items"}},c={},l=[{value:"Customizing the Organization Theme",id:"customizing-the-organization-theme",level:2},{value:"Customizing the Application Theme",id:"customizing-the-application-theme",level:2}],p={toc:l};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Casdoor allows you to customize themes to meet the UI diversity requirements of businesses or brands, including primary color and border radius."),(0,i.kt)("p",null,"Within Casdoor, themes can be customized at the global, organization, and application levels."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Global scope: This is the default theme of Casdoor and is applied to any organization that chooses to follow the global theme. Modifications can only be made in the Casdoor source code and cannot be modified in the web UI.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Organization scope: The theme for an organization can be customized on the organization edit page. This theme applies to all Casdoor after-login pages for users within the organization, as well as the entry pages (signup, signin, forget password, etc.) of applications that follow the organization theme.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Application scope: The theme for an application can be customized on the application edit page. This theme applies to the entry pages (signup, signin, forget password, etc.) of the specific application."))),(0,i.kt)("h2",{id:"customizing-the-organization-theme"},"Customizing the Organization Theme"),(0,i.kt)("p",null,"We provide a demo to demonstrate how to configure the theme for an organization:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit theme",src:o(86984).Z,width:"1434",height:"720"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If your account organization is the same as the organization you are editing, the configuration changes will take effect immediately as shown in the video above. However, if they are different, you will need to log in to the organization to see the changes.")),(0,i.kt)("h2",{id:"customizing-the-application-theme"},"Customizing the Application Theme"),(0,i.kt)("p",null,"Applications can customize themes using the same theme editor as the organization. Additionally, you can preview the theme conveniently in the preview panel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"preview",src:o(76070).Z,width:"1754",height:"927"})))}m.isMDXComponent=!0},76070:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/application_preview-b55aa705628067194473df9cfab46213.png"},86984:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/edit_theme-77d5cf03f53893a852b4cc06ef3a4fd3.gif"}}]);