"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||n;return r?o.createElement(g,i(i({ref:t},d),{},{components:r})):o.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41843:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={title:"Overview",description:"Setting up a storage provider for uploading files in Casdoor",keywords:["storage","provider"],authors:["leo220yuyaodog"]},i=void 0,l={unversionedId:"provider/storage/overview",id:"provider/storage/overview",title:"Overview",description:"Setting up a storage provider for uploading files in Casdoor",source:"@site/docs/provider/storage/overview.md",sourceDirName:"provider/storage",slug:"/provider/storage/overview",permalink:"/ja/docs/provider/storage/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/storage/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",description:"Setting up a storage provider for uploading files in Casdoor",keywords:["storage","provider"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/ja/docs/category/storage"},next:{title:"Local File System",permalink:"/ja/docs/provider/storage/localFileSystem"}},p={},s=[{value:"Item",id:"item",level:2},{value:"Local",id:"local",level:2},{value:"Cloud",id:"cloud",level:2}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'If you need to use file storage services, such as "avatar upload", you will need to set up a storage provider and apply it to your application in Casdoor.'),(0,a.kt)("p",null,"Casdoor supports two types of storage: ",(0,a.kt)("strong",{parentName:"p"},"Local")," and ",(0,a.kt)("strong",{parentName:"p"},"Cloud"),". In this chapter, you will learn how to add a storage provider to use these services."),(0,a.kt)("h2",{id:"item"},"Item"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client ID"),": A unique identifier provided by the cloud storage provider."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client secret"),": A secure value known only to Casdoor and the cloud storage service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Endpoint"),": The public URL or domain of the cloud storage service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Endpoint (Intranet)"),": The internal or private URL or domain of the cloud storage service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Path prefix"),": Path prefix for the file location.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The default ",(0,a.kt)("inlineCode",{parentName:"p"},"Path prefix"),' is "/". For example, when the ',(0,a.kt)("inlineCode",{parentName:"p"},"Path prefix")," is empty, a default file path would be:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"https://cdn.casbin.com/casdoor/avatar.png\n")),(0,a.kt)("p",{parentName:"admonition"},'You can fill it with "abcd/xxxx", and then you can store your avatar in:'),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"https://cdn.casbin.com/abcd/xxxx/casdoor/avatar.png\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bucket"),": A container used for storing files and data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Domain"),": The custom domain name of the CDN for your cloud storage."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Region ID"),": An identifier used to specify the data center region where the cloud storage service is located.")),(0,a.kt)("h2",{id:"local"},"Local"),(0,a.kt)("p",null,"We support uploading files to the local system."),(0,a.kt)("h2",{id:"cloud"},"Cloud"),(0,a.kt)("p",null,"We support ",(0,a.kt)("strong",{parentName:"p"},"AWS S3"),", ",(0,a.kt)("strong",{parentName:"p"},"Azure Blob Storage"),", ",(0,a.kt)("strong",{parentName:"p"},"MinIO"),", ",(0,a.kt)("strong",{parentName:"p"},"Alibaba Cloud OSS"),", ",(0,a.kt)("strong",{parentName:"p"},"Tencent Cloud COS"),", and we are constantly adding more Cloud storage services."))}c.isMDXComponent=!0}}]);