"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"DB Migration",description:"Handling DB Migration in Casdoor",keywords:["deployment","Database","Migration"],authors:["forestmgy"]},i=void 0,s={unversionedId:"deployment/db-migration",id:"deployment/db-migration",title:"DB Migration",description:"Handling DB Migration in Casdoor",source:"@site/docs/deployment/db-migration.md",sourceDirName:"deployment",slug:"/deployment/db-migration",permalink:"/ko/docs/deployment/db-migration",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/deployment/db-migration.md",tags:[],version:"current",frontMatter:{title:"DB Migration",description:"Handling DB Migration in Casdoor",keywords:["deployment","Database","Migration"],authors:["forestmgy"]},sidebar:"tutorialSidebar",previous:{title:"Hosting Static Files in an Intranet",permalink:"/ko/docs/deployment/deploy-intranet"},next:{title:"How to Connect to Casdoor",permalink:"/ko/docs/category/how-to-connect-to-casdoor"}},p={},l=[{value:"How it Works",id:"how-it-works",level:2}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When upgrading the database, there is a risk of data loss, such as when deleting an old field. Luckily, Casdoor utilizes ",(0,o.kt)("a",{parentName:"p",href:"https://xorm.io/"},"xorm"),", which assists with many database migration problems. However, some schema and data migrations must still be handled manually, such as when a field name is changed."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://xorm.io/docs/chapter-03/readme/"},"xorm docs")," for a better understanding of xorm's schema operations.")),(0,o.kt)("h2",{id:"how-it-works"},"How it Works"),(0,o.kt)("p",null,"As mentioned earlier, xorm is unable to handle field name changes. To address this, xorm provides a ",(0,o.kt)("a",{parentName:"p",href:"https://gitea.com/xorm/xorm/src/branch/master/migrate"},"migrate")," package that can assist with this problem."),(0,o.kt)("p",null,"To handle field renaming, you can write code like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'migrations := []*migrate.Migration{\n        {\n            ID: "CasbinRule--fill ptype field with p",\n            Migrate: func(tx *xorm.Engine) error {\n                _, err := tx.Cols("ptype").Update(&xormadapter.CasbinRule{\n                    Ptype: "p",\n                })\n                return err\n            },\n            Rollback: func(tx *xorm.Engine) error {\n                return tx.DropTables(&xormadapter.CasbinRule{})\n            },\n        },\n    }\n    m.Migrate()\n')),(0,o.kt)("p",null,"Our objective is to ",(0,o.kt)("strong",{parentName:"p"},"rename ",(0,o.kt)("inlineCode",{parentName:"strong"},"p_type")," to ",(0,o.kt)("inlineCode",{parentName:"strong"},"ptype")),". However, since xorm ",(0,o.kt)("strong",{parentName:"p"},"does not support field renaming"),", we must resort to a more intricate approach: assigning the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"p_type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ptype"),", and subsequently deleting the ",(0,o.kt)("inlineCode",{parentName:"p"},"p_type")," field."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," field uniquely identifies the migration being performed. After ",(0,o.kt)("inlineCode",{parentName:"p"},"m.Migrate()")," runs, the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," will be added to the migrations table of the database."),(0,o.kt)("p",null,"Upon starting the project again, the database will check for any existing ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," field in the table and refrain from performing any operations associated with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"ID"),"."))}m.isMDXComponent=!0}}]);