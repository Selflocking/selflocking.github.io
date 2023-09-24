"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5459],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(o),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||n;return o?a.createElement(g,i(i({ref:t},c),{},{components:o})):a.createElement(g,i({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<n;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5222:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var a=o(87462),r=(o(67294),o(3905));const n={title:"Password Complexity",description:"Supporting different password complexity options.",keywords:["password","complexity"],authors:["leoil"]},i=void 0,p={unversionedId:"organization/passwordComplexity",id:"organization/passwordComplexity",title:"Password Complexity",description:"Supporting different password complexity options.",source:"@site/docs/organization/passwordComplexity.md",sourceDirName:"organization",slug:"/organization/passwordComplexity",permalink:"/ko/docs/organization/passwordComplexity",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/organization/passwordComplexity.md",tags:[],version:"current",frontMatter:{title:"Password Complexity",description:"Supporting different password complexity options.",keywords:["password","complexity"],authors:["leoil"]},sidebar:"tutorialSidebar",previous:{title:"Organization Tree",permalink:"/ko/docs/organization/organization-tree"},next:{title:"Account Customization",permalink:"/ko/docs/organization/accountCustomization"}},s={},l=[{value:"Supported Complexity Options",id:"supported-complexity-options",level:2},{value:"Password Complexity Validation",id:"password-complexity-validation",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casdoor supports customizing password complexity options for user passwords in each organization."),(0,r.kt)("h2",{id:"supported-complexity-options"},"Supported Complexity Options"),(0,r.kt)("p",null,"We currently support five options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AtLeast6"),": The password must have at least six characters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AtLeast8"),": The password must have at least eight characters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Aa123"),": The password must contain at least one uppercase letter, one lowercase letter, and one digit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SpecialChar"),": The password must contain at least one special character."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NoRepeat"),": The password must not contain any repeated characters.")),(0,r.kt)("p",null,"If you want to use multiple options, you can select them on the organization edit page:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," button on the organization list page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"org edit",src:o(80762).Z,width:"1756",height:"432"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then select the option you need in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Password complexity options")," column."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"option selection",src:o(75138).Z,width:"2056",height:"1291"})))),(0,r.kt)("h2",{id:"password-complexity-validation"},"Password Complexity Validation"),(0,r.kt)("p",null,"We support password complexity validation on the following pages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign up page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"signup page check",src:o(33503).Z,width:"1918",height:"1038"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Forget password page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"forget page check",src:o(46607).Z,width:"1918",height:"1038"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"User edit page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"user-edit page check",src:o(9099).Z,width:"1918",height:"1038"})))))}d.isMDXComponent=!0},46607:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/forget_demo-89b5a94380b8792d2ce1b3b1e5325f76.gif"},80762:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/org_edit-3fb82cc71eb03925606c390831ed19a5.png"},75138:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/select_password_option-8ff3a33271c551184ca6aea97faed9b9.png"},33503:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/sign_up_demo-73a9d16ec1ee65c0c509756ef4ad572e.gif"},9099:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/user_edit_demo-4bf610e7f7dcbd86bcba5be07c924851.gif"}}]);