"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[7205],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"MinIO",description:"Using MinIO as a storage provider for Casdoor",keywords:["MinIO","storage","provider"],authors:["Chinoholo0807"]},o=void 0,p={unversionedId:"provider/storage/minio",id:"provider/storage/minio",title:"MinIO",description:"Using MinIO as a storage provider for Casdoor",source:"@site/docs/provider/storage/minio.md",sourceDirName:"provider/storage",slug:"/provider/storage/minio",permalink:"/de/docs/provider/storage/minio",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/storage/minio.md",tags:[],version:"current",frontMatter:{title:"MinIO",description:"Using MinIO as a storage provider for Casdoor",keywords:["MinIO","storage","provider"],authors:["Chinoholo0807"]},sidebar:"tutorialSidebar",previous:{title:"Azure Blob",permalink:"/de/docs/provider/storage/azure"},next:{title:"Aliyun OSS",permalink:"/de/docs/provider/storage/aliyun-oss"}},l={},s=[{value:"Step 1: Deploy the MinIO service",id:"step-1-deploy-the-minio-service",level:3},{value:"Step 2: Create a MinIO provider in Casdoor",id:"step-2-create-a-minio-provider-in-casdoor",level:3},{value:"Step 3: Use MinIO storage service in your application",id:"step-3-use-minio-storage-service-in-your-application",level:3}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is an example of how to configure a ",(0,a.kt)("strong",{parentName:"p"},"MinIO")," provider.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/minio/minio"},"MinIO")," is a high-performance object storage service that is API compatible with Amazon S3 cloud storage service."),(0,a.kt)("h3",{id:"step-1-deploy-the-minio-service"},"Step 1: Deploy the MinIO service"),(0,a.kt)("p",null,"First, deploy the MinIO service with TLS enabled. You can obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"API address")," from the console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy service",src:r(20914).Z,width:"1990",height:"1225"})),(0,a.kt)("p",null,"Second, create the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access Key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret key"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create access key",src:r(60472).Z,width:"3831",height:"1858"})),(0,a.kt)("p",null,"Third, create the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bucket"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create bucket",src:r(4862).Z,width:"3838",height:"1851"})),(0,a.kt)("h3",{id:"step-2-create-a-minio-provider-in-casdoor"},"Step 2: Create a MinIO provider in Casdoor"),(0,a.kt)("p",null,"Now create a MinIO provider in Casdoor. Fill in the necessary information."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Name in MinIO"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Category"),(0,a.kt)("td",{parentName:"tr",align:null},"choose ",(0,a.kt)("inlineCode",{parentName:"td"},"Storage"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Type"),(0,a.kt)("td",{parentName:"tr",align:null},"choose ",(0,a.kt)("inlineCode",{parentName:"td"},"MinIO"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Access Key")," obtained from Step 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client secret"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Secret Key")," obtained from Step 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"API address")," obtained from Step 1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Bucket")," obtained from Step 1")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a MinIO provider",src:r(72087).Z,width:"1503",height:"991"})),(0,a.kt)("h3",{id:"step-3-use-minio-storage-service-in-your-application"},"Step 3: Use MinIO storage service in your application"),(0,a.kt)("p",null,"Now you can use the MinIO storage service in your application."),(0,a.kt)("video",{src:"/video/provider/storage/use_minio_in_app.mp4",controls:"controls",width:"100%"}))}c.isMDXComponent=!0},4862:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/minio_create_bucket-4271058ff47e4e6007af9e21afa9fbf2.png"},60472:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/minio_create_key-1f692a5d966b8be339b4afe661a0a69b.png"},20914:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/minio_deploy-fbf7a288fa97d28202f95a36d53bbbb2.png"},72087:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/minio_provider_conf_detail-d8283862bf9083096689563b35212544.png"}}]);