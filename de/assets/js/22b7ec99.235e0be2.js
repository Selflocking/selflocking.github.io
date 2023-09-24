"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>d});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},A=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return n?o.createElement(m,r(r({ref:t},A),{},{components:n})):o.createElement(m,r({ref:t},A))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={title:"MinIO",description:"Configuring Casdoor as an identity provider to support MinIO",keywords:["MinIO"],authors:["Abingcbc"]},r=void 0,l={unversionedId:"integration/go/minio",id:"integration/go/minio",title:"MinIO",description:"Configuring Casdoor as an identity provider to support MinIO",source:"@site/docs/integration/go/minio.md",sourceDirName:"integration/go",slug:"/integration/go/minio",permalink:"/de/docs/integration/go/minio",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/go/minio.md",tags:[],version:"current",frontMatter:{title:"MinIO",description:"Configuring Casdoor as an identity provider to support MinIO",keywords:["MinIO"],authors:["Abingcbc"]},sidebar:"tutorialSidebar",previous:{title:"Grafana",permalink:"/de/docs/integration/go/grafana"},next:{title:"Portainer",permalink:"/de/docs/integration/go/portainer"}},s={},p=[{value:"Step 1: Deploy Casdoor &amp; MinIO",id:"step-1-deploy-casdoor--minio",level:2},{value:"Step 2: Configure Casdoor Application",id:"step-2-configure-casdoor-application",level:2},{value:"Step 3: Configure MinIO",id:"step-3-configure-minio",level:2},{value:"Step 4: Try the demo!",id:"step-4-try-the-demo",level:2}],A={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/minio/minio"},"MinIO")," supports external identity management using an OpenID Connect (OIDC)-compatible provider. This document covers the configuration of Casdoor as an identity provider to support MinIO."),(0,i.kt)("h2",{id:"step-1-deploy-casdoor--minio"},"Step 1: Deploy Casdoor & MinIO"),(0,i.kt)("p",null,"First, deploy Casdoor."),(0,i.kt)("p",null,"You can refer to the Casdoor official documentation for ",(0,i.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Server Installation"),"."),(0,i.kt)("p",null,"After a successful deployment, make sure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Casdoor server is running on ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"http://localhost:8000"},"http://localhost:8000")),"."),(0,i.kt)("li",{parentName:"ul"},"Open your favorite browser and visit ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"http://localhost:7001"},"http://localhost:7001"))," to see the login page of Casdoor."),(0,i.kt)("li",{parentName:"ul"},"Test the login functionality by entering ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"123"),".")),(0,i.kt)("p",null,"Next, you can quickly implement a Casdoor-based login page in your own app by following these steps."),(0,i.kt)("p",null,"You can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/minio/minio#minio-quickstart-guide"},"here")," to deploy your MinIO server and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.min.io/minio/baremetal/reference/minio-mc.html#install-mc"},"here")," for the MinIO client called ",(0,i.kt)("inlineCode",{parentName:"p"},"mc"),"."),(0,i.kt)("h2",{id:"step-2-configure-casdoor-application"},"Step 2: Configure Casdoor Application"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new Casdoor application or use an existing one.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add your redirect URL.\n",(0,i.kt)("img",{alt:"Casdoor Application Setting",src:n(15669).Z,width:"866",height:"291"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the provider you want and provide any necessary settings."),(0,i.kt)("p",{parentName:"li"},"On the application settings page, you will find two values: ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Client secret")," (as shown in the picture above). We will use these values in the next step."),(0,i.kt)("p",{parentName:"li"},"Open your favorite browser and visit: ",(0,i.kt)("strong",{parentName:"p"},"http://",(0,i.kt)("inlineCode",{parentName:"strong"},"CASDOOR_HOSTNAME"),"/.well-known/openid-configuration")," to see the OIDC configuration of Casdoor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This step is necessary for MinIO. As MinIO needs to use a claim attribute in JWT for its policy, you should configure it in Casdoor as well. Currently, Casdoor uses ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," as a workaround for configuring MinIO's policy."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"MinIO Policy Setting",src:n(703).Z,width:"516",height:"86"})),(0,i.kt)("p",{parentName:"li"},"You can find all the supported policies ",(0,i.kt)("a",{parentName:"p",href:"https://docs.min.io/minio/baremetal/security/minio-identity-management/policy-based-access-control.html#minio-policy"},"here"),"."))),(0,i.kt)("h2",{id:"step-3-configure-minio"},"Step 3: Configure MinIO"),(0,i.kt)("p",null,"You can start a MinIO server using the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export MINIO_ROOT_USER=minio\nexport MINIO_ROOT_PASSWORD=minio123\nminio server /mnt/export\n")),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--console-address")," parameter to configure the address and port."),(0,i.kt)("p",null,"Next, add a service alias using the MinIO client ",(0,i.kt)("inlineCode",{parentName:"p"},"mc"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mc alias set myminio <Your console address> minio minio123\n")),(0,i.kt)("p",null,"Now, configure the OpenID Connect of MinIO. For Casdoor, the command will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'mc admin config set myminio identity_openid config_url="http://CASDOOR_HOSTNAME/.well-known/openid-configuration" client_id=<client id> client_secret=<client secret> claim_name="tag"\n')),(0,i.kt)("p",null,"You can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.min.io/minio/baremetal/reference/minio-server/minio-server.html#openid-identity-management"},"official document")," for more detailed parameters."),(0,i.kt)("p",null,"Once successfully set, restart the MinIO instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mc admin service restart myminio\n")),(0,i.kt)("h2",{id:"step-4-try-the-demo"},"Step 4: Try the demo!"),(0,i.kt)("p",null,"Now, open your MinIO console in the browser and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Login with SSO"),"."),(0,i.kt)("p",null,"You will be redirected to the Casdoor user login page. Upon successful login, you will be redirected to the MinIO page and logged in automatically. You should now see the buckets and objects that you have access to."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you deploy the frontend and backend of Casdoor on different ports, the login page you are redirected to will be on the backend port and it will display ",(0,i.kt)("inlineCode",{parentName:"p"},"404 not found"),". You can modify the port to the frontend one. Then you can access the Casdoor login page successfully.")))}c.isMDXComponent=!0},15669:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/appsetting_spring_security-f2662d02db2032cea21f3b39b03b6c60.png"},703:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgQAAABWCAIAAAA/uRkUAAAMaGlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkJDQAhGQEnoTRHqREkKLICBVsBGSQEKJMSGI2NFFBdcuoljRVRFFV1dAFhWxl0Wx9wUVFWVd1EVRVN6kgK77yvdOvrnz58yZ/5TM5M4AoN3HlUhyUR0A8sT50viIEOb41DQm6SlA4IcK/IAJlyeTsOLiogGUwf7v8u4mtIVyzVnB9c/x/yp6fIGMBwAyEeIMvoyXB3EzAPhGnkSaDwBRobeani9R4HkQ60thgBCvUeAsFd6twBkq3KS0SYxnQ3wFAA0qlyvNAkDrPtQzC3hZkEfrE8SuYr5IDID2CIgDeUIuH2JF7CPy8qYqcAXE9tBeAjGMB/hkfMOZ9Tf+jCF+LjdrCKvyUopGqEgmyeXO+D9L878lL1c+6MMWNqpQGhmvyB/W8HbO1CgFpkLcLc6IiVXUGuI+EV9VdwBQilAemaSyR014MjasH2BA7MrnhkZBbAJxuDg3Jlqtz8gUhXMghqsFLRTlcxIhNoR4sUAWlqC22SqdGq/2hdZlStkstf4cV6r0q/D1UJ6TxFLzvxEKOGp+TKtImJgCMQVi6wJRcgzEWhC7yHISotQ2o4uE7JhBG6k8XhG/NcTxAnFEiIofK8iUhser7UvzZIP5YluFIk6MGh/MFyZGquqDneJxlfHDXLArAjEraZBHIBsfPZgLXxAapsodey4QJyWoefok+SHxqrk4RZIbp7bHLQW5EQq9JcQesoIE9Vw8OR8uThU/ninJj0tUxYkXZXPHxKniwVeAaMAGoYAJ5LBlgKkgG4hau+u74TfVSDjgAinIAgLgrNYMzkhRjojhMwEUgT8gEgDZ0LwQ5agAFED95yGt6ukMMpWjBcoZOeApxHkgCuTC73LlLPGQt2TwBGpE//DOhY0H482FTTH+7/WD2q8aFtREqzXyQY9M7UFLYhgxlBhJDCc64MZ4IO6PR8NnMGxuuA/uO5jHV3vCU0Ib4RHhBqGdcGeKqFj6XZRjQTvkD1fXIuPbWuC2kNMTD8EDIDtkxhm4MXDGPaAfFh4EPXtCLVsdt6IqzO+4/5bBN7+G2o7sSkbJw8jBZPvvZ2o5ankOsShq/W19VLFmDNWbPTTyvX/2N9Xnwz7qe0tsMXYIO4udwM5jTVg9YGLHsQbsEnZUgYdW1xPl6hr0Fq+MJwfyiP7hj6v2qaikzLXGtcv1k2osX1CYr9h47KmSGVJRljCfyYJvBwGTI+a5jGC6ubq5AaB416j+vt4ylO8QhHHhq67YA4AAysDAQNNXXXQ9AIc74Pbv/6qzewkAzQCAcwU8ubRApcMVDwL8l9CGO80ImAErYA/zcQNewB8EgzAwBsSCRJAKJsMqC+E6l4LpYBaYD0pAGVgB1oINYAvYDnaDfeAgqAdN4AQ4Ay6CK+AGuAdXTyd4CXrAO9CPIAgJoSF0xAgxR2wQJ8QN8UECkTAkGolHUpF0JAsRI3JkFrIAKUNWIRuQbUg18jNyBDmBnEfakDtIB9KFvEE+ohhKRfVRU9QWHYn6oCw0Ck1EJ6FZ6DS0CF2ILkMr0Cp0L1qHnkAvojfQdvQl2osBTBNjYBaYM+aDsbFYLA3LxKTYHKwUK8eqsFqsEf7O17B2rBv7gBNxOs7EneEKjsSTcB4+DZ+DL8U34LvxOvwUfg3vwHvwLwQawYTgRPAjcAjjCVmE6YQSQjlhJ+Ew4TTcS52Ed0QikUG0I3rDvZhKzCbOJC4lbiLuJzYT24iPib0kEsmI5EQKIMWSuKR8UglpPWkv6TjpKqmT1KehqWGu4aYRrpGmIdYo1ijX2KNxTOOqxjONfrIO2YbsR44l88kzyMvJO8iN5MvkTnI/RZdiRwmgJFKyKfMpFZRaymnKfcpbTU1NS01fzXGaIs15mhWaBzTPaXZofqDqUR2pbOpEqpy6jLqL2ky9Q31Lo9FsacG0NFo+bRmtmnaS9pDWp0XXctHiaPG15mpVatVpXdV6pU3WttFmaU/WLtIu1z6kfVm7W4esY6vD1uHqzNGp1Dmic0unV5euO0o3VjdPd6nuHt3zus/1SHq2emF6fL2Fetv1Tuo9pmN0KzqbzqMvoO+gn6Z36hP17fQ5+tn6Zfr79Fv1ewz0DDwMkg0KDSoNjhq0MzCGLYPDyGUsZxxk3GR8HGY6jDVMMGzJsNphV4e9NxxuGGwoMCw13G94w/CjEdMozCjHaKVRvdEDY9zY0Xic8XTjzcanjbuH6w/3H84bXjr84PC7JqiJo0m8yUyT7SaXTHpNzUwjTCWm601PmnabMcyCzbLN1pgdM+syp5sHmovM15gfN3/BNGCymLnMCuYpZo+FiUWkhdxim0WrRb+lnWWSZbHlfssHVhQrH6tMqzVWLVY91ubWY61nWddY37Uh2/jYCG3W2Zy1eW9rZ5tiu8i23va5naEdx67Irsbuvj3NPsh+mn2V/XUHooOPQ47DJocrjqijp6PQsdLxshPq5OUkctrk1DaCMMJ3hHhE1YhbzlRnlnOBc41zhwvDJdql2KXe5dVI65FpI1eOPDvyi6una67rDtd7o/RGjRlVPKpx1Bs3RzeeW6XbdXeae7j7XPcG99ceTh4Cj80etz3pnmM9F3m2eH728vaSetV6dXlbe6d7b/S+5aPvE+ez1OecL8E3xHeub5PvBz8vv3y/g35/+jv75/jv8X8+2m60YPSO0Y8DLAO4AdsC2gOZgemBWwPbgyyCuEFVQY+CrYL5wTuDn7EcWNmsvaxXIa4h0pDDIe/ZfuzZ7OZQLDQitDS0NUwvLClsQ9jDcMvwrPCa8J4Iz4iZEc2RhMioyJWRtzimHB6nmtMzxnvM7DGnoqhRCVEboh5FO0ZLoxvHomPHjF099n6MTYw4pj4WxHJiV8c+iLOLmxb36zjiuLhxleOexo+KnxV/NoGeMCVhT8K7xJDE5Yn3kuyT5EktydrJE5Ork9+nhKasSmkfP3L87PEXU41TRakNaaS05LSdab0TwiasndA50XNiycSbk+wmFU46P9l4cu7ko1O0p3CnHEonpKek70n/xI3lVnF7MzgZGzN6eGzeOt5LfjB/Db9LECBYJXiWGZC5KvN5VkDW6qwuYZCwXNgtYos2iF5nR2ZvyX6fE5uzK2cgNyV3f55GXnreEbGeOEd8aqrZ1MKpbRInSYmkfZrftLXTeqRR0p0yRDZJ1pCvDw/1l+T28h/kHQWBBZUFfdOTpx8q1C0UF16a4ThjyYxnReFFP83EZ/JmtsyymDV/Vsds1uxtc5A5GXNa5lrNXTi3c17EvN3zKfNz5v9W7Fq8qvivBSkLGheaLpy38PEPET/UlGiVSEtuLfJftGUxvli0uHWJ+5L1S76U8ksvlLmWlZd9WspbeuHHUT9W/DiwLHNZ63Kv5ZtXEFeIV9xcGbRy9yrdVUWrHq8eu7puDXNN6Zq/1k5Ze77co3zLOso6+br2iuiKhvXW61es/7RBuOFGZUjl/o0mG5dsfL+Jv+nq5uDNtVtMt5Rt+bhVtPX2tohtdVW2VeXbidsLtj/dkbzj7E8+P1XvNN5ZtvPzLvGu9t3xu09Ve1dX7zHZs7wGrZHXdO2duPfKvtB9DbXOtdv2M/aXHQAH5Ade/Jz+882DUQdbDvkcqv3F5peNh+mHS+uQuhl1PfXC+vaG1Ia2I2OOtDT6Nx7+1eXXXU0WTZVHDY4uP0Y5tvDYwPGi473NkubuE1knHrdMabl3cvzJ66fGnWo9HXX63JnwMyfPss4ePxdwrum83/kjF3wu1F/0ulh3yfPS4d88fzvc6tVad9n7csMV3yuNbaPbjl0NunriWui1M9c51y/eiLnRdjPp5u1bE2+13+bffn4n987ruwV3++/Nu0+4X/pA50H5Q5OHVb87/L6/3av9aEdox6VHCY/uPeY9fvlE9uRT58KntKflz8yfVT93e97UFd515cWEF50vJS/7u0v+0P1j4yv7V7/8GfznpZ7xPZ2vpa8H3ix9a/R2118ef7X0xvU+fJf3rv99aZ9R3+4PPh/Ofkz5+Kx/+ifSp4rPDp8bv0R9uT+QNzAg4Uq5yqMABhuamQnAm13wnJAKAB3e2ygTVHdBpSCq+6sSgf+EVfdFpXgBUAs7xTGe3QzAAdhsYaPOA0BxhE8MBqi7+1BTiyzT3U3FRYU3IULfwMBbUwBIjQB8lg4M9G8aGPi8AwZ7B4Dmaao7qEKI8M6wVclxlVE4D3wnqvvpNzl+3wNFBB7g+/5fLsyP7OkAisgAAABsZVhJZk1NACoAAAAIAAQBGgAFAAAAAQAAAD4BGwAFAAAAAQAAAEYBKAADAAAAAQACAACHaQAEAAAAAQAAAE4AAAAAAAAAkAAAAAEAAACQAAAAAQACoAIABAAAAAEAAAIEoAMABAAAAAEAAABWAAAAAOhB4CwAAAAJcEhZcwAAFiUAABYlAUlSJPAAABPsSURBVHgB7Z0HcFXFGscfCFKDJBAg0ksoCkhREQRFsaO+sT/l6VMUdJQRbCgOOsxT7CKj6Cgo48Pex4IFCyL20FGBJCglNIFQQgiBQN4vrLMu516Sc0ly78m9/0zmzp4939mz+zt79ttv99s91YqLi/+hPxEQAREQgcQmUD2xi6/Si4AIiIAIlBCQMlA9EAEREAERkDJQHRABERABEZBloDogAiIgAiIAAQ0TqRqIgAiIgAhIGagOiIAIiIAIyDJQHRABERABEYCAholUDURABERABKQMVAdEQAREQARkGagOiIAIiIAIQEDDRKoGIiACIiAC/6ghBiIQ9wTy8vJyc3MLCwvjvqQqoAgcMgEpg0NGpwurBgE0wbp166pGXpVLEYgdASmD2LHXnaNCAJuA+6SmpiYnJ0flhrqJCFRJApozqJKPTZn2T8CMDkkT+CcmycQkIGWQmM9dpRYBERCBAwhIGRyAQwciIAIikJgENGeQmM89oUud2zI9ocsf4MKnrM4KcO7iPGuyDOL8Aat4IiACIuCHgJSBH0qSEQEREIE4JyBlEOcPWMUTAREQAT8ENGfgh5Jk4paABqlj/mg1hRPzR2AyIMsgIA9C2RABERCBWBKQMoglfd1bBERABAJCQMogIA9C2RABERCBWBKQMoglfd1bBERABAJCQMogIA9C2RABERCBWBJIIG+iZTk752TnZWTnbc7bs2n7Hqg3blCzUVLNgV0bdm9dr11anVg+B91bBERABGJKICGUwYz5uZ8v2PJT1nYP6vyNe1du3DXv9zzi+6Q3OL1H8hk9UzwyOhQBERCBRCAQ58pg646iR99bNXvJNp7loO7JPdsntUqt3Sy5Vt3ahxFTULh3w9bdq/7clZG1febiEm3xUcbmMRe3Tks5PBGevcooAiIgApZAteLiYnsQZ4EFf+y4ecpf+15NHNYxvXndUgo4Pztv7MvLjcCUGzt1alGacCnp6FTQCGRmZpKljh072oy5q5yq3KKzvXv3Tpw4kbIMHz48KSnJFqrCA7/88suUKVNOP/30c889t8ITdxOs0o/DLUhVD1eAMti2bdtNN93kB8SZZ5555ZVX+pEsv4zVBN1b1Rt/dYfq1auVmWZRUfHtU7Oy1u5EctrILm2a1i7zEgkEn0CcKYPdu3d369YN7LNmzWrWrFnl8R86dOh3331Xp06djIyMmjVrVt6NpAwqj21EKVfAMNGePXuoLn7u2qVLFz9i5ZcpKNw3afoa0mnbpM6DQ737Fe/ctddOIJvxInPHGjWqTRze8fbns5bk5N//1sqnhqXXqSVvq/I/DaVQJQn069fvhx9+6NOnj6sJsBXmzZt32mmnXXTRRVWyVMr0wQlUgDJo2LDhq6++6t7im2++efbZZ4888sjHHnvMjW/SpIl7WHnhV77ekLm/g//E8AM0wbrNhe//uPHDjE321ucd1/ifJ6SmNaplYx4Z2uG8/y7kchK57sw0G6+ACCQUgeuuu+6SSy454ogj3FIvXrz4q6++atu2rRupcHwQqABlUKNGjd69e7s4Vq1axWHt2rU98a5M5YXX5e6eNms96T99Q6eaNf7u2u8pKn7mo5x5f+S1bVL7qFb1EPhtVT6KYc2mwnuHtKtZ469xJAaUJo/oMnzSEhI5q3dKi8Z/64nKy7NSFoEAEvBoggDmUFmqQAIVoAwOITfr1q1jJPf3339v2rTpUUcd1bp162rVwo/pr1y5cu7cubm5uchgsTZo0IApit9++w1N07Nnz7C3Nq6iPdrUb9PsgKUDn2RsQhP0apt033/a2wvv+d9yIjl1ft9UG9m8ca1uresvXrnj+6XbLu0fJWvG3l2BYBJgzISMUeuoe1TLH3/8sbCw8KqrrnJzu2jRoqVLl27fvj0tLY1hluTkZPesDSOAWFZW1uGHH079Z3LbHYqxYgSQnD17Nu8LbwpdK6xt9yxh8sC4DYG+ffu6p7Zu3bpkyZK6desec8wxbvyaNWvoqzVu3Dg9vcRo/vXXX7lF+/btsdp5y3766SfOYhCkpKSsXbuWYhLo1KmTlUSGMIkYGryVniz5JOBmSeGAEIi2MtixY8eDDz749ttvu+Vv167d888/37x5czdy3759Y8eOfffdd62/E+NR99xzD7/XXnttq1atPv/8c1fehllSQLh3B6+jRUZmyTqDfw1saiXNIcqAU64yKLm8XdJ+ZbC9FGXAy/zZZ5+dddZZHTp0cNNUOP4IUAmvvvpqyjVjxoyHHnqIoRLC9erVs8pg06ZNN95448KFC23Za9WqNWLECHx+bAwBavW0adOeeOKJXbt22XjSeeqpp0488UQbYwLvvPPO/fffv3NniUcDf5jg+F+MGjXKHJpfIm+++WYa9OnTp7v18K233mKQFr31888/kxN7CZ5IH3zwwR133GGUAS8jE34PPPAAyuPRRx8171r//v3RAR9//DExTA88/fTTXD5+/Hi6ZSadT/f/Eb7rrruuueYaE+mTgBHWbwAJRFsZ4KLAC9OoUSOqPj0O+vjffvstJsKll1763nvvuZMKVGVehsMOO6x79+4IYxAgOXr0aFv5DkaTBcac6tiiZCDI/XMNAhs/+5ethE85xtuDS9/vWmqSssJuAA+/YcOG0WVDXX3xxRfVq/89HuWKKRxnBCZMmIAbz9FHH021pCE2paNlv+GGGxhPpwIPGDCgRYsWNME0so8//nhqauoFF1xgIRBDvweD4NRTTyWFjRs3klpOTg4647nnnqMVtpKkcO+99xYVFbVs2fKkk05ixIapuBdffJGKZ2UI8IJgE9Ap4XauMsCe4CwZmzNnjqtmjK+HeyPEvv766y+//JIOFnYPxgT9LfcWJsyM8QknnIAWWL58OWLYPcT36NHDnPVPIDRlxQSEQFSVAZ5qaAKGephwbtOmjUFANeL9oVtB9bUuCnRzXnjhBQTomwwePNjCGjduHO+SPQwbMJ5CzVP+7g2FF9u2+7VZGz6dt5mz3drU98i0TC3xKzVJeU7pMJEJ0CJTA01TaDnQR0ETMODzyiuv0JgSj5VAz/rWW2/FumUQhnafSDo01HxGRB955JGzzz7bXo6lS0eHDrtto1ESI0eORBMgZlYVIEzMm2++iXFsLzQBVAXKAOVx+eWXmxiMCcaO0B/ckdfKKgO0Dt0X9FPnzp3dRDB3brvtNo8R4woQNu9mdnY2yqBXr16YI66ATwLuJQoHjUBU+7PHHXcclia102oCcGDJnn/++QSozZYOlZvwFVdc4WoCYngTPGOg9pKIAnOzto+cnIkmuHxA09dHd01tGPGSY3pkuNnxSvArsyAi+FVaGAvAowkYRqe6YiXQtTeawBTwnHPOueyyy2jQTWUmsn79+lR+XgFXExCPWcyv6bObaxEjWWwCBnBMjPlF0rwsbqRRIe7lzGfg8M3qH/r4qBkrbF4x+l42xgRIoXRN4JH3HPon4LlQh4EiEFVlgHXM+0Dr70FgzNsNGzbYePpZhAcOHGhjTIAmODTSI8P2c8SsyS30xLuHn83dvDW/aOxlbf89KC2pbhjzaPXGkiFdk5R7oRtm1JX3jX6fG6lwfBNgqMRTQOZgiaEyuIOcRubYY48lwFJec0jtpf4zQ2AO7a8ZvnfrP3O/nKWNdrWLkfcoEiJZekYKGBMrVqwwMugSAqeccgrtPjNb69eXONfxZxRGqDIILZSR9/nrn4DPBCUWEwJh2sHKzgfuCgsWLGC8iDqat/+PmQP3pps3b8aTgRjsbjfehBmuDY10Y9iIlO3nMnPyu4YM/lix75ZuI9y3ywE+1PYsgaycklk7knIjFRYBZlY9EEzHheab+TDPKbP42VO96UdT//mj7cafgrlfk4J7rbnE3ULDng0baRp9Ov7G5sYawM+HOYCTTz75ww8/5PDiiy8mBQSwYu2okU0ztFD2lJ9ApAT8pCmZ6BOIqjJg7ov5N3fQH486phA8xcaAYFwVxwZW3ntOcRg20hVj81G8S+dm513Y/wDHIVdm+ri/Jr7cSDc8d/9Wpv06e/PmyigsAhBgIN5wYHDGA8RM9ubn59Pim3r+ySefjBkzpqCgwEgaW8FzFYeM7PMbamocLBJlMHXqVNp6xpHwB6W/ZdycsC1o/ZnnQBmQJllllLXCVw9ERCC0sIoJCIGoKgP859AEjGMyW8X8AeYtO58A4rXXXmNm2BJh+y36NfSbMD89/qbIWKPbynsCvdqVOJUuWLFjxfoCz1IDj+TBDlmGhl8pZ/t1PqjpcLBrFZ9oBMwgJ7u54SlUetlxoDCOoUwvswEcUwKMGtHvwZvOM/hDmvjy22EfN9mwkYxHmU2EkDRjRNgEhFnowNw1awJQSwcbI3ITP7SwfwKHlr6uig6BqM4Z4IJJqbCm6b+wot1oAmKo957Smq248K/wxGNW49zmifQcsgH1VSc3I/KmZ5ftKdrnOWsOB49bwH/YU/v2FbP8mFMkouXHYREp0iXQtWtXDsvsoyCD+ya/9NbxC2IIlE4PmoCY0PpvBkiXLVvGWc9f2EiM6eOPP55x19WrVzMoxJvFobkQrYBdwlowM3vM3T0Jlv/QP4Hy30spVB6B6CkDltsYc9IsaLRFos8yc+ZMe2gCF154IRY0y8qefPJJY2sTj7nNWxS2Z+S5fMjAph2PLPHwu2VylueUOezUvC7/YU+NnppNPJeTSFgBN9LmzY1UOKEIMIlFm87gjGlt3bLjhckSM0btTSSjNwQ89Z8Y00lyLzRbOrK0zVPbGSNlqYEracNmWhjjg9EqJoRRD+aUMREYKSJ7DFUZJ1d7VaQBs7TCjguZy/0TiPR2ko8mgegpA8YuTW9l8uTJdsyUAKs0cV72lBnvPRy0iWT1I7tQYFYPGTKEy3HLu/POOz3CoYfsNjpicHPi//izYMzULDr7HpkJwzry74lkC+tRkzPZspT4sZe0LnPL0ocffpgdAlgJ4UlHhwlFAO+g66+/nikuXMvw7jeLeCHAICfxLNw1OoAY47TzxhtvmCkBYhB+5plnXn/9dQ8xXOZotbGDeTvo7JuzLBpgGZqZlPbIc8hqA34nTZrEO2UUgJHByGDzCRYooK6YOqaPFXqt/xi22UAYfePqA/8E/N9IktEnENU5Axr077//ngadZp05A5bG8MIwhcA7g4+2p/AsMqBas/spRq6xr+kumTWZHsmwhz3a1n9yWDoft1m0Kp9dSCP9uE2ZHzOgj/bSSy/hzc3vLbfcYhejhs2MIuObADMBtO/vv/8+y77wzKH95ZCZANp62l+2/zTFZ+UBhgIupDh90pum5jN6g7179913e9YTsIEE3SDsYxxD2RCC/VqY9UWYBJl4C/v5EKbZWPls2mijGMxNsVowGljez6GxHsrzLFg4zWpQ1NKgQYNwqmYRvllf7ZNAeW6tayubQPQsA0pChwUjF59oVuJgz86fPx+twOthuhuhRWVlJrNh7PeApwRDRlRolj6akRkz2Bp6iRuDPvjg7m4D9vuPjpqSOeHdlTMX5i5fuzO/YC+fd+OfDxv8sb5g1qItj72z0nzmjO3t3rj9aD+fOcMMx0ODfhbzH9IELvYEDFMbac1pGWmy8Rxl1J4BInyBcByiN2O3BmJPN7YMwurFiY45BsTYl4VuUNg2mstZz2iMafQKLwvNPTFuQ+9BbdKhjfa4XVhDofwTBpjClJScYOhTRnY0MnnwScCTYR0GikAFfOnsEMpDbwjbmSob6ldaZmrG9YiPpjGdUKawEZgxP5fd6/jEcSnyfdIb4JN6Rk+vF3kpl3CKvTRC19CVfonORplANL90Rk+FWVyaSOo2Hf+DlZTOEC0prj5hnUc9V23ZsoVlN+xaymiP51QMD7GJeYtRfp5umU8Cbs71pTOXRgzDsVEGZRaYLeruu+8++k3s5cJrYOUZWaI/zovEbo5stGvj/QSW5eyck52XkZ3H9nP2S2csKxvYtWH31vXapR2w37WfBCVTJQhEUxlUCSBBy6SUQUCeSECVAT1uRidZioxBihHAZBq2NuOnL7/8Mr0kIplzK+eyyYA8AGWjsglIGVQ24XKmL2VQToAVdXlUJ5D9Z5qxFzaAZMiVoVK8j9wLmZFjH8dDGF9yE1FYBERABETAJRBQZUAWWZXGGBHeRwwK4XuKZYA3EX+4aZfTPc4tv8IiIAIiIAIQCK4yIHN4LOD/UH4XCD1pERABERCB0glE1bW09KzorAiIgAiIQKwISBnEirzuKwIiIAIBIiBlEKCHoayIgAiIQKwISBnEirzuKwIiIAIBIiBlEKCHoayIgAiIQKwISBnEirzuKwIiIAIBIiBlEKCHoayIgAiIQKwIBHqdQayg6L6JQ8DdCyFxSq2SikAoAVkGoUwUIwIiIAIJR0DKIOEeuQosAiIgAqEEpAxCmShGBERABBKOgOYMEu6RJ1qB2eKwsLCQT8TwMRlT9pTVWYkGQeUVgTIJBPR7BmXmWwIi4JNAXl6e/QC9z0skJgIJSECWQQI+9MQqclJSEgXm08TYB4lVcpVWBCIhIMsgElqSFQEREIE4JaAJ5Dh9sCqWCIiACERCQMogElqSFQEREIE4JSBlEKcPVsUSAREQgUgISBlEQkuyIiACIhCnBKQM4vTBqlgiIAIiEAkBKYNIaElWBERABOKUgJRBnD5YFUsEREAEIiEgZRAJLcmKgAiIQJwSkDKI0werYomACIhAJASkDCKhJVkREAERiFMCUgZx+mBVLBEQARGIhICUQSS0JCsCIiACcUpAyiBOH6yKJQIiIAKREJAyiISWZEVABEQgTglIGcTpg1WxREAERCASAv8HweHjOHQxMd8AAAAASUVORK5CYII="}}]);