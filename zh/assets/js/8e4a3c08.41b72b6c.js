"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(h,n(n({ref:t},p),{},{components:r})):o.createElement(h,n({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var c=2;c<a;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},89164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const a={title:"Local File System",description:"Using the Local File System as a storage provider for Casdoor",keywords:["Local File System","storage","provider"],authors:["UsherFall"]},n=void 0,l={unversionedId:"provider/storage/localFileSystem",id:"provider/storage/localFileSystem",title:"Local File System",description:"Using the Local File System as a storage provider for Casdoor",source:"@site/docs/provider/storage/localFileSystem.md",sourceDirName:"provider/storage",slug:"/provider/storage/localFileSystem",permalink:"/zh/docs/provider/storage/localFileSystem",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/storage/localFileSystem.md",tags:[],version:"current",frontMatter:{title:"Local File System",description:"Using the Local File System as a storage provider for Casdoor",keywords:["Local File System","storage","provider"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/zh/docs/provider/storage/overview"},next:{title:"Amazon S3",permalink:"/zh/docs/provider/storage/amazon-s3"}},s={},c=[{value:"Configure the Casdoor provider",id:"configure-the-casdoor-provider",level:2},{value:"With prefix",id:"with-prefix",level:3},{value:"Without prefix",id:"without-prefix",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The Local File System provider will store your uploaded files in the Casdoor ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," folder."),(0,i.kt)("p",{parentName:"admonition"},"For example, when your Casdoor is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/user/casdoor")," directory, the uploaded files will be stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/user/casdoor/files")," folder.")),(0,i.kt)("h2",{id:"configure-the-casdoor-provider"},"Configure the Casdoor provider"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Local File configuration",src:r(35557).Z,width:"1474",height:"888"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Path prefix")," is the prefix of the location path for your files. You can fill it in as needed.\nIn the following example, you can see the difference with or without the prefix."),(0,i.kt)("h3",{id:"with-prefix"},"With prefix"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"With prefix configuration",src:r(73946).Z,width:"1212",height:"86"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Files with prefix",src:r(62077).Z,width:"1068",height:"52"})),(0,i.kt)("h3",{id:"without-prefix"},"Without prefix"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Without prefix configuration",src:r(70233).Z,width:"1376",height:"110"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Files without prefix",src:r(59631).Z,width:"964",height:"50"})))}d.isMDXComponent=!0},35557:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/localFileConfig-10a6d3af5ca5442dbd6363931ca74619.png"},73946:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/localFileWithPre-eeb4abb4c220a7f2767f6184dc70db0a.png"},62077:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/localFileWithResult-ee405201d9bb22eaaa59152b590a2f1c.png"},70233:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/localFileWithoutPre-cbb8a50b2366be3b646cc290dc6b8a04.png"},59631:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/localFileWithoutResult-5622f5997b14794f8514a65be6ee7fca.png"}}]);