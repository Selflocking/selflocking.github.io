"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8330],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(i),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return i?n.createElement(f,a(a({ref:t},p),{},{components:i})):n.createElement(f,a({ref:t},p))}));function d(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},62377:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(87462),o=(i(67294),i(3905));const r={title:"Permission Configuration",description:"Using exposed Casbin APIs to manage users' access rights in an organization",keywords:["permissions","Casbin"],authors:["MagicalSheep"]},a=void 0,s={unversionedId:"permission/permission-configuration",id:"permission/permission-configuration",title:"Permission Configuration",description:"Using exposed Casbin APIs to manage users' access rights in an organization",source:"@site/docs/permission/permission-configuration.md",sourceDirName:"permission",slug:"/permission/permission-configuration",permalink:"/zh/docs/permission/permission-configuration",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/permission/permission-configuration.md",tags:[],version:"current",frontMatter:{title:"Permission Configuration",description:"Using exposed Casbin APIs to manage users' access rights in an organization",keywords:["permissions","Casbin"],authors:["MagicalSheep"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/zh/docs/permission/overview"},next:{title:"Exposed Casbin APIs",permalink:"/zh/docs/permission/exposed-casbin-apis"}},l={},c=[],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's explain each item in the Permission Configuration page."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Organization"),": The name of the organization to which the policy belongs. An organization can have multiple permission policy files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Name"),": The globally unique name of the permission policy in the organization. It is used to identify the policy file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Display name"),": Not important."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Model"),": The name of the model file that describes the structure and matching patterns of the permission policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Adapter"),": ",(0,o.kt)("strong",{parentName:"li"},"Attention!")," In the current version, this field describes the name of the database table that stores the permission policy, rather than the name of the adapter configured in the Adapter menu item in the Casdoor Web UI. Casdoor uses its own database to store configured permission policies. If this field is empty, the permission policy will be stored in the ",(0,o.kt)("inlineCode",{parentName:"li"},"permission_rule")," table. Otherwise, it will be stored in the specified database table. If the specified table name does not exist in the database used by Casdoor, it will be created automatically. We strongly recommend ",(0,o.kt)("strong",{parentName:"li"},"specifying different adapters for different models"),", as keeping all policies in the same table may cause conflicts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sub users"),": Which users will the permission policy be applied to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sub roles"),": If the RBAC model is used, which roles will be applied to the permission policy. This will add permission policies such as ",(0,o.kt)("inlineCode",{parentName:"li"},"g user role")," for every user in this role."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sub domains"),": Which domains will the permission policy be applied to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Resource type"),": In the current version, Casdoor does not use this field for external applications that want to authenticate. You can ignore it for now."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Resources"),": This field describes the resources for which you wish to enforce permission control. Note, however, that the resources here are not those configured in the Resources menu item of the Casdoor Web UI. You can add any string you want here, such as a URL or a filename."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Actions"),": This field describes the actions to operate on resources. Similar to resources, it can be any string you want, such as an HTTP method or other natural language. But please note that Casdoor will convert all these strings to lowercase before storing. Additionally, Casdoor will apply all actions to each resource. You cannot specify that an action only takes effect on certain resources."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Effect"),": This option takes effect for Casdoor itself to control application access. If you want an external application to enforce permission controls using the interface Casdoor exposes, it won't do anything. You should describe the effect of pattern matching in the Model file.")),(0,o.kt)("p",null,"As you can see, this configuration page is almost tailor-made for the ",(0,o.kt)("inlineCode",{parentName:"p"},"(sub, obj, act)")," model."))}u.isMDXComponent=!0}}]);