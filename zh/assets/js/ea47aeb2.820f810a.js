"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[310],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"(Optional) Try with Docker",description:"Try Casdoor with Docker",keywords:["Casdoor","Docker"],authors:["hsluoyz"]},i=void 0,s={unversionedId:"basic/try-with-docker",id:"basic/try-with-docker",title:"(Optional) Try with Docker",description:"Try Casdoor with Docker",source:"@site/docs/basic/try-with-docker.md",sourceDirName:"basic",slug:"/basic/try-with-docker",permalink:"/zh/docs/basic/try-with-docker",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/basic/try-with-docker.md",tags:[],version:"current",frontMatter:{title:"(Optional) Try with Docker",description:"Try Casdoor with Docker",keywords:["Casdoor","Docker"],authors:["hsluoyz"]},sidebar:"tutorialSidebar",previous:{title:"Server Installation",permalink:"/zh/docs/basic/server-installation"},next:{title:"Casdoor Public API",permalink:"/zh/docs/basic/public-api"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"OS",id:"os",level:3},{value:"Docker",id:"docker",level:3},{value:"Get the image",id:"get-the-image",level:2},{value:"<strong>Option-1</strong>: Use the toy database",id:"option-1-use-the-toy-database",level:3},{value:"<strong>Option-2</strong>: Try with docker-compose",id:"option-2-try-with-docker-compose",level:3},{value:"<strong>Option-3</strong>: Try directly with the standard image",id:"option-3-try-directly-with-the-standard-image",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,"If you want to build the Docker image yourself, please ensure that your machine has at least ",(0,o.kt)("strong",{parentName:"p"},"2GB")," of memory. Casdoor's frontend is an NPM project of React. Building the frontend requires at least ",(0,o.kt)("strong",{parentName:"p"},"2GB")," of memory. Having less than ",(0,o.kt)("strong",{parentName:"p"},"2GB")," of memory may result in a frontend build failure."),(0,o.kt)("p",null,"If you only need to run the pre-built image, please ensure that your machine has at least ",(0,o.kt)("strong",{parentName:"p"},"100MB")," of memory."),(0,o.kt)("h3",{id:"os"},"OS"),(0,o.kt)("p",null,"All operating systems (Linux, Windows, and macOS) are supported."),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("strong",{parentName:"p"},"Docker (docker-engine version >= 17.05)")," in Linux or ",(0,o.kt)("strong",{parentName:"p"},"Docker Desktop")," in Windows and macOS."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker"))),(0,o.kt)("p",null,"Regardless of the operating system, users must ensure that they have ",(0,o.kt)("strong",{parentName:"p"},"docker-engine version >= 17.05"),". This is because we utilize the multi-stage build feature in the docker-compose.yml, which is supported in versions 17.05 and above. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/develop/develop-images/multistage-build/"},"https://docs.docker.com/develop/develop-images/multistage-build/"),"."),(0,o.kt)("p",null,"If you are also using docker-compose, please ensure that you have ",(0,o.kt)("strong",{parentName:"p"},"docker-compose version >= 2.2"),". For Linux users, you also need to make sure that docker-compose is installed, as it is separate from docker-engine."),(0,o.kt)("h2",{id:"get-the-image"},"Get the image"),(0,o.kt)("p",null,"We have provided two DockerHub images:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Suggestion"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/casbin/casdoor-all-in-one"},"casdoor-all-in-one")),(0,o.kt)("td",{parentName:"tr",align:null},"Both Casdoor and a MySQL database are included in the image"),(0,o.kt)("td",{parentName:"tr",align:null},"This image already includes a toy database and is only for testing purposes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/casbin/casdoor"},"casdoor")),(0,o.kt)("td",{parentName:"tr",align:null},"Only Casdoor is included in the image"),(0,o.kt)("td",{parentName:"tr",align:null},"This image can be connected to your own database and used in production")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"casbin/casdoor-all-in-one: This image includes the casdoor binary, a MySQL database, and all the necessary configurations. It is designed for new users who want to try Casdoor quickly. With this image, you can start Casdoor immediately with just one or two commands, without any complex configuration. However, please note that we ",(0,o.kt)("strong",{parentName:"li"},"do not recommend")," using this image in a production environment.")),(0,o.kt)("h3",{id:"option-1-use-the-toy-database"},(0,o.kt)("strong",{parentName:"h3"},"Option-1"),": Use the toy database"),(0,o.kt)("p",null,"Run the container with port ",(0,o.kt)("inlineCode",{parentName:"p"},"8000")," exposed to the host. The image will be automatically pulled if it doesn't exist on the local host."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 8000:8000 casbin/casdoor-all-in-one\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some users in areas like China usually use Docker image mirror services like ",(0,o.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/60750.html"},"Alibaba Cloud Image Booster")," (",(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/container-registry/latest/accelerate-the-download-of-docker-official-images"},"English"),") to achieve higher download speeds compared to DockerHub. However, these services have a known issue where the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag provided by them is not up-to-date. As a result, fetching the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag may result in a very old image. To mitigate this issue, you can specify the image version number explicitly using the following command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull casbin/casdoor-all-in-one:$(curl -sS \"https://hub.docker.com/v2/repositories/casbin/casdoor-all-in-one/tags/?page_size=1&page=2\" | sed 's/,/,\\n/g' | grep '\"name\"' |awk -F '\"' '{print $4}')\n")),(0,o.kt)("p",{parentName:"admonition"},"Note: The above command utilizes Linux tools like ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sed"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"grep"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"awk"),". If you are using Windows, make sure you run it in a Linux-style shell like ",(0,o.kt)("inlineCode",{parentName:"p"},"Git Shell")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Cygwin"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"CMD")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"PowerShell")," won't work.")),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000"},(0,o.kt)("strong",{parentName:"a"},"http://localhost:8000"))," in your browser. Log into the Casdoor dashboard with the default global admin account: ",(0,o.kt)("inlineCode",{parentName:"p"},"built-in/admin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"admin\n123\n")),(0,o.kt)("h3",{id:"option-2-try-with-docker-compose"},(0,o.kt)("strong",{parentName:"h3"},"Option-2"),": Try with docker-compose"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some users in areas like China usually use Docker image mirror services like ",(0,o.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/60750.html"},"Alibaba Cloud Image Booster")," (",(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/container-registry/latest/accelerate-the-download-of-docker-official-images"},"English"),") to achieve higher download speeds compared to DockerHub. However, these services have a known issue where the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag provided by them is not up-to-date. As a result, fetching the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag may result in a very old image. To mitigate this issue, you can specify the image version number explicitly using the following command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull casbin/casdoor:$(curl -sS \"https://hub.docker.com/v2/repositories/casbin/casdoor/tags/?page_size=1&page=2\" | sed 's/,/,\\n/g' | grep '\"name\"' |awk -F '\"' '{print $4}')\n")),(0,o.kt)("p",{parentName:"admonition"},"Note: The above command utilizes Linux tools like ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sed"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"grep"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"awk"),". If you are using Windows, make sure you run it in a Linux-style shell like ",(0,o.kt)("inlineCode",{parentName:"p"},"Git Shell")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Cygwin"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"CMD")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"PowerShell")," won't work.")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf")," directory in the same directory level as the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. Then, copy ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor/blob/master/conf/app.conf"},"app.conf")," from Casdoor. For more details about ",(0,o.kt)("inlineCode",{parentName:"p"},"app.conf"),", you can see ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic/server-installation#via-ini-file"},"Via Ini file"),"."),(0,o.kt)("p",null,"Create a separate database using docker-compose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,o.kt)("p",null,"That's it! \ud83d\udee9\ufe0f"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000"},(0,o.kt)("strong",{parentName:"a"},"http://localhost:8000"))," in your browser. Log into the Casdoor dashboard with the default global admin account: ",(0,o.kt)("inlineCode",{parentName:"p"},"built-in/admin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"admin\n123\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: If you dig deeper into the docker-compose.yml file, you may be puzzled by the environment variable we created called \"RUNNING_IN_DOCKER\". When the database 'db' is created via docker-compose, it is available on your PC's localhost but not the localhost of the Casdoor container. To prevent you from running into troubles caused by modifying app.conf, which can be quite difficult for a new user, we provided this environment variable and pre-assigned it in the docker-compose.yml. When this environment variable is set to true, localhost will be replaced with host.docker.internal so that Casdoor can access the database.")),(0,o.kt)("h3",{id:"option-3-try-directly-with-the-standard-image"},(0,o.kt)("strong",{parentName:"h3"},"Option-3"),": Try directly with the standard image"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some users in areas like China usually use Docker image mirror services like ",(0,o.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/60750.html"},"Alibaba Cloud Image Booster")," (",(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/container-registry/latest/accelerate-the-download-of-docker-official-images"},"English"),") to achieve higher download speeds compared to DockerHub. However, these services have a known issue where the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag provided by them is not up-to-date. As a result, fetching the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag may result in a very old image. To mitigate this issue, you can specify the image version number explicitly using the following command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull casbin/casdoor:$(curl -sS \"https://hub.docker.com/v2/repositories/casbin/casdoor/tags/?page_size=1&page=2\" | sed 's/,/,\\n/g' | grep '\"name\"' |awk -F '\"' '{print $4}')\n")),(0,o.kt)("p",{parentName:"admonition"},"Note: The above command utilizes Linux tools like ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sed"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"grep"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"awk"),". If you are using Windows, make sure you run it in a Linux-style shell like ",(0,o.kt)("inlineCode",{parentName:"p"},"Git Shell")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Cygwin"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"CMD")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"PowerShell")," won't work.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If it is not convenient to mount the configuration file to a container, using environment variables is also a possible solution."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="example"',title:'"example"'},"\ndocker run \\\n  -e driverName=mysql \\\n  -e dataSourceName='user:password@tcp(x.x.x.x:3306)/' \\\n  -p 8000:8000 \\\n  casbin/casdoor:latest\n\n"))),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),". You can copy it from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor/blob/master/conf/app.conf"},"conf/app.conf")," in Casdoor. For more details about ",(0,o.kt)("inlineCode",{parentName:"p"},"app.conf"),", you can see ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic/server-installation#via-ini-file"},"Via Ini file"),"."),(0,o.kt)("p",null,"Then run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run  -p 8000:8000 -v /folder/of/app.conf:/conf casbin/casdoor:latest\n")),(0,o.kt)("p",null,"Anyway, just ",(0,o.kt)("strong",{parentName:"p"},"mount the app.conf to /conf/app.conf")," and start the container."),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000"},(0,o.kt)("strong",{parentName:"a"},"http://localhost:8000"))," in your browser. Log into the Casdoor dashboard with the default global admin account: ",(0,o.kt)("inlineCode",{parentName:"p"},"built-in/admin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"admin\n123\n")))}c.isMDXComponent=!0}}]);