"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[9345],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),p=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,y=s["".concat(d,".").concat(m)]||s[m]||l[m]||a;return r?o.createElement(y,i(i({ref:t},u),{},{components:r})):o.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},39837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Products",description:"Add products that you want to sell",keywords:["products"],authors:["leo220yuyaodog"]},i=void 0,c={unversionedId:"products/product",id:"products/product",title:"Products",description:"Add products that you want to sell",source:"@site/docs/products/product.md",sourceDirName:"products",slug:"/products/product",permalink:"/ru/docs/products/product",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/products/product.md",tags:[],version:"current",frontMatter:{title:"Products",description:"Add products that you want to sell",keywords:["products"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Products",permalink:"/ru/docs/category/products"},next:{title:"Payment",permalink:"/ru/docs/products/payment"}},d={},p=[{value:"Configuring Product Attributes",id:"configuring-product-attributes",level:2},{value:"Payment Provider",id:"payment-provider",level:2},{value:"Preview the Product",id:"preview-the-product",level:2}],u={toc:p};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can add the product (or service) you want to sell. The following will guide you through the process of adding a product."),(0,n.kt)("h2",{id:"configuring-product-attributes"},"Configuring Product Attributes"),(0,n.kt)("p",null,"First, you need to understand the basic properties of the product:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tag"),(0,n.kt)("li",{parentName:"ul"},"Detail"),(0,n.kt)("li",{parentName:"ul"},"Currency"),(0,n.kt)("li",{parentName:"ul"},"Price"),(0,n.kt)("li",{parentName:"ul"},"Quantity"),(0,n.kt)("li",{parentName:"ul"},"Sold")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"product_field.png",src:r(32420).Z,width:"666",height:"389"})),(0,n.kt)("h2",{id:"payment-provider"},"Payment Provider"),(0,n.kt)("p",null,"In addition to setting these properties, you also need to add payment providers to the product.\nMultiple payment providers can be added to a product."),(0,n.kt)("p",null,"To learn how to configure a payment provider, refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/provider/payment/overview"},"Payment Provider")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"product_provider.png",src:r(78440).Z,width:"745",height:"164"})),(0,n.kt)("p",null,"Finally, fill in the ",(0,n.kt)("strong",{parentName:"p"},"Return URL"),". This is the URL to which the payment provider page will redirect after the payment is completed."),(0,n.kt)("h2",{id:"preview-the-product"},"Preview the Product"),(0,n.kt)("p",null,"You're done! Review the details and save:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"product_preview",src:r(95979).Z,width:"1644",height:"709"})))}l.isMDXComponent=!0},32420:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/product_field-e8a1ea4a5c97a683632915bdf7d4d5d4.png"},95979:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/product_preview-a080df075a9e689301cecfc3985c1340.png"},78440:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/product_provider-be25047951e1ddc3b563f2ad8acca69d.png"}}]);