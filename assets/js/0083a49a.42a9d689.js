"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[559],{3905:(n,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>g});var a=r(67294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function t(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,a)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?t(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,a,o=function(n,e){if(null==n)return{};var r,a,o={},t=Object.keys(n);for(a=0;a<t.length;a++)r=t[a],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(a=0;a<t.length;a++)r=t[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var l=a.createContext({}),c=function(n){var e=a.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},p=function(n){var e=c(n.components);return a.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var r=n.components,o=n.mdxType,t=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),m=c(r),g=o,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||t;return r?a.createElement(u,i(i({ref:e},p),{},{components:r})):a.createElement(u,i({ref:e},p))}));function g(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var t=r.length,i=new Array(t);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var c=2;c<t;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82570:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const t={title:"Core Concepts",description:"Learn about the core concepts of Casdoor.",keywords:["core concepts","organization","user","application","provider"],authors:["hsluoyz"]},i=void 0,s={unversionedId:"basic/core-concepts",id:"basic/core-concepts",title:"Core Concepts",description:"Learn about the core concepts of Casdoor.",source:"@site/docs/basic/core-concepts.md",sourceDirName:"basic",slug:"/basic/core-concepts",permalink:"/docs/basic/core-concepts",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/basic/core-concepts.md",tags:[],version:"current",frontMatter:{title:"Core Concepts",description:"Learn about the core concepts of Casdoor.",keywords:["core concepts","organization","user","application","provider"],authors:["hsluoyz"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Server Installation",permalink:"/docs/basic/server-installation"}},l={},c=[{value:"Organization",id:"organization",level:2},{value:"User",id:"user",level:2},{value:"Application",id:"application",level:2},{value:"Login URLs",id:"login-urls",level:3},{value:"1. Manually concatenating strings",id:"1-manually-concatenating-strings",level:4},{value:"2. Using frontend SDK (for frontend JavaScript code using React, Vue, or Angular)",id:"2-using-frontend-sdk-for-frontend-javascript-code-using-react-vue-or-angular",level:4},{value:"3. Using backend SDK (for backend code using Go, Java, etc.)",id:"3-using-backend-sdk-for-backend-code-using-go-java-etc",level:4},{value:"Provider",id:"provider",level:2},{value:"How does Casdoor manage itself?",id:"how-does-casdoor-manage-itself",level:2}],p={toc:c};function d(n){let{components:e,...r}=n;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a Casdoor administrator, you should be familiar with at least four core concepts: ",(0,o.kt)("inlineCode",{parentName:"p"},"Organization"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider"),"."),(0,o.kt)("mermaid",{value:"flowchart LR;\n    subgraph Organization-1;\n        Applications-1;\n        Users-1;\n    end;\n    \n    subgraph Organization-2;\n        Applications-2;\n        Users-2;\n    end;\n    \n    subgraph Users-1;\n        Resources-1;\n        Permissions-1;\n    end;\n    \n    subgraph Users-2;\n        Resources-2;\n        Permissions-2;\n    end;\n    \n    subgraph Providers;\n        SMS;\n        OAuth;\n        SAML;\n        Email;\n    end;\n    \n    subgraph SMS;\n        AWS\\\\nAliyunCloud;\n    end;\n    \n    subgraph OAuth;\n        Github\\\\nGoogle\\\\nFacebook\\\\nWeChat;\n    end;\n    \n    subgraph SAML;\n        Keycloak\\\\nAliyunIDaaS;\n    end;\n    \n    subgraph Applications-1;\n        Forum;\n        CMS;\n    end;\n    \n    subgraph Applications-2;\n        OA;\n    end;\n    \n    Organization-1 --\x3e Applications-1;\n    Applications-1<--\x3eProviders;\n    Applications-2<--\x3eProviders;"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In the following parts, we will use the demo site ",(0,o.kt)("a",{parentName:"p",href:"https://door.casdoor.com"},"https://door.casdoor.com")," as an example.")),(0,o.kt)("h2",{id:"organization"},"Organization"),(0,o.kt)("p",null,"In Casdoor, an organization is a container for users and applications. For example, all the employees of a company or all the customers of a business can be abstracted as one organization. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Organization")," class definition is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Organization struct {\n    Owner       string `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name        string `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime string `xorm:"varchar(100)" json:"createdTime"`\n\n    DisplayName        string   `xorm:"varchar(100)" json:"displayName"`\n    WebsiteUrl         string   `xorm:"varchar(100)" json:"websiteUrl"`\n    Favicon            string   `xorm:"varchar(100)" json:"favicon"`\n    PasswordType       string   `xorm:"varchar(100)" json:"passwordType"`\n    PasswordSalt       string   `xorm:"varchar(100)" json:"passwordSalt"`\n    PhonePrefix        string   `xorm:"varchar(10)"  json:"phonePrefix"`\n    DefaultAvatar      string   `xorm:"varchar(100)" json:"defaultAvatar"`\n    Tags               []string `xorm:"mediumtext" json:"tags"`\n    MasterPassword     string   `xorm:"varchar(100)" json:"masterPassword"`\n    EnableSoftDeletion bool     `json:"enableSoftDeletion"`\n    IsProfilePublic    bool     `json:"isProfilePublic"`\n\n    AccountItems []*AccountItem `xorm:"varchar(2000)" json:"accountItems"`\n}\n')),(0,o.kt)("h2",{id:"user"},"User"),(0,o.kt)("p",null,"In Casdoor, a user can log into an application. Each user can belong to only one organization but can log into multiple applications owned by the organization. Currently, there are two types of users in Casdoor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"built-in")," organization users, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"built-in/admin"),": global administrators who have full administrative power on the Casdoor platform."),(0,o.kt)("li",{parentName:"ul"},"Other organizations' users, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"my-company/alice"),": normal users who can sign up, sign in, sign out, change their own profile, etc.")),(0,o.kt)("p",null,"In the Casdoor API, a user is typically identified as ",(0,o.kt)("inlineCode",{parentName:"p"},"<organization_name>/<username>"),". For example, the default administrator of Casdoor is denoted as ",(0,o.kt)("inlineCode",{parentName:"p"},"built-in/admin"),". Additionally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," class definition includes an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property, which is a UUID like ",(0,o.kt)("inlineCode",{parentName:"p"},"d835a48f-2e88-4c1f-b907-60ac6b6c1b40")," and can be chosen as a user's ID by an application."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For applications that are only for one organization, it's possible to use ",(0,o.kt)("inlineCode",{parentName:"p"},"<username>")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"<organization_name>/<username>")," as the user ID across the application for simplicity.")),(0,o.kt)("p",null,"Here's the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," class definition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type User struct {\n    Owner       string `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name        string `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime string `xorm:"varchar(100)" json:"createdTime"`\n    UpdatedTime string `xorm:"varchar(100)" json:"updatedTime"`\n\n    Id                string   `xorm:"varchar(100)" json:"id"`\n    Type              string   `xorm:"varchar(100)" json:"type"`\n    Password          string   `xorm:"varchar(100)" json:"password"`\n    PasswordSalt      string   `xorm:"varchar(100)" json:"passwordSalt"`\n    DisplayName       string   `xorm:"varchar(100)" json:"displayName"`\n    Avatar            string   `xorm:"varchar(500)" json:"avatar"`\n    PermanentAvatar   string   `xorm:"varchar(500)" json:"permanentAvatar"`\n    Email             string   `xorm:"varchar(100) index" json:"email"`\n    Phone             string   `xorm:"varchar(100) index" json:"phone"`\n    Location          string   `xorm:"varchar(100)" json:"location"`\n    Address           []string `json:"address"`\n    Affiliation       string   `xorm:"varchar(100)" json:"affiliation"`\n    Title             string   `xorm:"varchar(100)" json:"title"`\n    IdCardType        string   `xorm:"varchar(100)" json:"idCardType"`\n    IdCard            string   `xorm:"varchar(100) index" json:"idCard"`\n    Homepage          string   `xorm:"varchar(100)" json:"homepage"`\n    Bio               string   `xorm:"varchar(100)" json:"bio"`\n    Tag               string   `xorm:"varchar(100)" json:"tag"`\n    Region            string   `xorm:"varchar(100)" json:"region"`\n    Language          string   `xorm:"varchar(100)" json:"language"`\n    Gender            string   `xorm:"varchar(100)" json:"gender"`\n    Birthday          string   `xorm:"varchar(100)" json:"birthday"`\n    Education         string   `xorm:"varchar(100)" json:"education"`\n    Score             int      `json:"score"`\n    Ranking           int      `json:"ranking"`\n    IsDefaultAvatar   bool     `json:"isDefaultAvatar"`\n    IsOnline          bool     `json:"isOnline"`\n    IsAdmin           bool     `json:"isAdmin"`\n    IsGlobalAdmin     bool     `json:"isGlobalAdmin"`\n    IsForbidden       bool     `json:"isForbidden"`\n    IsDeleted         bool     `json:"isDeleted"`\n    SignupApplication string   `xorm:"varchar(100)" json:"signupApplication"`\n    Hash              string   `xorm:"varchar(100)" json:"hash"`\n    PreHash           string   `xorm:"varchar(100)" json:"preHash"`\n\n    CreatedIp      string `xorm:"varchar(100)" json:"createdIp"`\n    LastSigninTime string `xorm:"varchar(100)" json:"lastSigninTime"`\n    LastSigninIp   string `xorm:"varchar(100)" json:"lastSigninIp"`\n\n    Github   string `xorm:"varchar(100)" json:"github"`\n    Google   string `xorm:"varchar(100)" json:"google"`\n    QQ       string `xorm:"qq varchar(100)" json:"qq"`\n    WeChat   string `xorm:"wechat varchar(100)" json:"wechat"`\n    Facebook string `xorm:"facebook varchar(100)" json:"facebook"`\n    DingTalk string `xorm:"dingtalk varchar(100)" json:"dingtalk"`\n    Weibo    string `xorm:"weibo varchar(100)" json:"weibo"`\n    Gitee    string `xorm:"gitee varchar(100)" json:"gitee"`\n    LinkedIn string `xorm:"linkedin varchar(100)" json:"linkedin"`\n    Wecom    string `xorm:"wecom varchar(100)" json:"wecom"`\n    Lark     string `xorm:"lark varchar(100)" json:"lark"`\n    Gitlab   string `xorm:"gitlab varchar(100)" json:"gitlab"`\n    Apple    string `xorm:"apple varchar(100)" json:"apple"`\n    AzureAD  string `xorm:"azuread varchar(100)" json:"azuread"`\n    Slack    string `xorm:"slack varchar(100)" json:"slack"`\n\n    Ldap       string            `xorm:"ldap varchar(100)" json:"ldap"`\n    Properties map[string]string `json:"properties"`\n}\n')),(0,o.kt)("h2",{id:"application"},"Application"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"application")," represents a web service that needs to be protected by Casdoor, such as a forum site, an OA system, or a CRM system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Application struct {\n    Owner               string          `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name                string          `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime         string          `xorm:"varchar(100)" json:"createdTime"`\n    DisplayName         string          `xorm:"varchar(100)" json:"displayName"`\n    Logo                string          `xorm:"varchar(100)" json:"logo"`\n    HomepageUrl         string          `xorm:"varchar(100)" json:"homepageUrl"`\n    Description         string          `xorm:"varchar(100)" json:"description"`\n    Organization        string          `xorm:"varchar(100)" json:"organization"`\n    Cert                string          `xorm:"varchar(100)" json:"cert"`\n    EnablePassword      bool            `json:"enablePassword"`\n    EnableSignUp        bool            `json:"enableSignUp"`\n    EnableSigninSession bool            `json:"enableSigninSession"`\n    EnableCodeSignin    bool            `json:"enableCodeSignin"`\n    Providers           []*ProviderItem `xorm:"mediumtext" json:"providers"`\n    SignupItems         []*SignupItem   `xorm:"varchar(1000)" json:"signupItems"`\n    OrganizationObj     *Organization   `xorm:"-" json:"organizationObj"`\n    ClientId             string         `xorm:"varchar(100)" json:"clientId"`\n    ClientSecret         string         `xorm:"varchar(100)" json:"clientSecret"`\n    RedirectUris         []string       `xorm:"varchar(1000)" json:"redirectUris"`\n    TokenFormat          string         `xorm:"varchar(100)" json:"tokenFormat"`\n    ExpireInHours        int            `json:"expireInHours"`\n    RefreshExpireInHours int            `json:"refreshExpireInHours"`\n    SignupUrl            string         `xorm:"varchar(200)" json:"signupUrl"`\n    SigninUrl            string         `xorm:"varchar(200)" json:"signinUrl"`\n    ForgetUrl            string         `xorm:"varchar(200)" json:"forgetUrl"`\n    AffiliationUrl       string         `xorm:"varchar(100)" json:"affiliationUrl"`\n    TermsOfUse           string         `xorm:"varchar(100)" json:"termsOfUse"`\n    SignupHtml           string         `xorm:"mediumtext" json:"signupHtml"`\n    SigninHtml           string         `xorm:"mediumtext" json:"signinHtml"`\n}\n')),(0,o.kt)("p",null,"Each application can have its own customized sign-up page, sign-in page, and more. The root login page ",(0,o.kt)("inlineCode",{parentName:"p"},"/login")," (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://door.casdoor.com/login"},"https://door.casdoor.com/login"),") is the sign-in page only for Casdoor's built-in application: ",(0,o.kt)("inlineCode",{parentName:"p"},"app-built-in"),"."),(0,o.kt)("p",null,'An application is a "portal" or "interface" for a user to log into Casdoor. A user must go through one application\'s sign-in page to log into Casdoor.'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Application"),(0,o.kt)("th",{parentName:"tr",align:null},"Sign-up page URL"),(0,o.kt)("th",{parentName:"tr",align:null},"Sign-in page URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"app-built-in"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://door.casdoor.com/signup"},"https://door.casdoor.com/signup")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://door.casdoor.com/login"},"https://door.casdoor.com/login"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"app-casnode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://door.casdoor.com/signup/app-casnode"},"https://door.casdoor.com/signup/app-casnode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://door.casdoor.com/login/oauth/authorize?client_id=014ae4bd048734ca2dea&response_type=code&redirect_uri=http://localhost:9000/callback&scope=read&state=casdoor"},"https://door.casdoor.com/login/oauth/authorize?client_id=014ae4bd048734ca2dea&response_type=code&redirect_uri=http://localhost:9000/callback&scope=read&state=casdoor"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"app-casbin-oa"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://door.casdoor.com/signup/app-casbin-oa"},"https://door.casdoor.com/signup/app-casbin-oa")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://door.casdoor.com/login/oauth/authorize?client_id=0ba528121ea87b3eb54d&response_type=code&redirect_uri=http://localhost:9000/callback&scope=read&state=casdoor"},"https://door.casdoor.com/login/oauth/authorize?client_id=0ba528121ea87b3eb54d&response_type=code&redirect_uri=http://localhost:9000/callback&scope=read&state=casdoor"))))),(0,o.kt)("h3",{id:"login-urls"},"Login URLs"),(0,o.kt)("p",null,"It's very easy to log into Casdoor via Casdoor's built-in application; simply visit Casdoor server homepage (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://door.casdoor.com"},"https://door.casdoor.com")," for demo site) and it will automatically redirect you to ",(0,o.kt)("inlineCode",{parentName:"p"},"/login"),". But how do you get the URLs for other applications in frontend and backend code? You can either concatenate strings manually or call some utility functions provided by Casdoor SDKs to get the URLs:"),(0,o.kt)("h4",{id:"1-manually-concatenating-strings"},"1. Manually concatenating strings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign-up page URL",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Signup for the specified application: ",(0,o.kt)("inlineCode",{parentName:"li"},"<your-casdoor-hostname>/signup/<your-application-name>")),(0,o.kt)("li",{parentName:"ul"},"Signup by OAuth: ",(0,o.kt)("inlineCode",{parentName:"li"},"<your-casdoor-hostname>/signup/oauth/authorize?client_id=<client-id-for-your-application>&response_type=code&redirect_uri=<redirect-uri-for-your-application>&&scope=read&state=casdoor")),(0,o.kt)("li",{parentName:"ul"},"Signup automatically: ",(0,o.kt)("inlineCode",{parentName:"li"},"<your-casdoor-hostname>/auto-signup/oauth/authorize?client_id=<client-id-for-your-application>&response_type=code&redirect_uri=<redirect-uri-for-your-application>&&scope=read&state=casdoor")))),(0,o.kt)("li",{parentName:"ul"},"Sign-in page URL",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Sign-in for the specified organization: ",(0,o.kt)("inlineCode",{parentName:"li"},"<your-casdoor-hostname>/login/<your-organization-name>")),(0,o.kt)("li",{parentName:"ul"},"Sign-in by OAuth: ",(0,o.kt)("inlineCode",{parentName:"li"},"<your-casdoor-hostname>/login/oauth/authorize?client_id=<client-id-for-your-application>&response_type=code&redirect_uri=<redirect-uri-for-your-application>&&scope=read&state=casdoor"))))),(0,o.kt)("h4",{id:"2-using-frontend-sdk-for-frontend-javascript-code-using-react-vue-or-angular"},"2. Using frontend SDK (for frontend JavaScript code using React, Vue, or Angular)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getSignupUrl()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getSigninUrl()"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-js-sdk/blob/3d08d726bcd5f62d6444b820596e2d8472f67d97/src/sdk.ts#L50-L63"},"casdoor-js-sdk")),(0,o.kt)("h4",{id:"3-using-backend-sdk-for-backend-code-using-go-java-etc"},"3. Using backend SDK (for backend code using Go, Java, etc.)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GetSignupUrl()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GetSigninUrl()"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-go-sdk/blob/f3ef1adff792e9a06af5682e0a3af9436ed24ed3/auth/url.go#L23-L39"},"casdoor-go-sdk")),(0,o.kt)("h2",{id:"provider"},"Provider"),(0,o.kt)("p",null,"Casdoor is a federated single sign-on system that supports multiple identity providers via OIDC, OAuth, and SAML. Casdoor can also send verification codes or other notifications to users via email or SMS. Casdoor uses the concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," to manage all these third-party connectors."),(0,o.kt)("p",null,"A list of all providers supported by Casdoor can be found at ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/provider/overview"},"provider/overview")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Provider struct {\n    Owner       string `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name        string `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime string `xorm:"varchar(100)" json:"createdTime"`\n\n    DisplayName   string `xorm:"varchar(100)" json:"displayName"`\n    Category      string `xorm:"varchar(100)" json:"category"`\n    Type          string `xorm:"varchar(100)" json:"type"`\n    Method        string `xorm:"varchar(100)" json:"method"`\n    ClientId      string `xorm:"varchar(100)" json:"clientId"`\n    ClientSecret  string `xorm:"varchar(100)" json:"clientSecret"`\n    ClientId2     string `xorm:"varchar(100)" json:"clientId2"`\n    ClientSecret2 string `xorm:"varchar(100)" json:"clientSecret2"`\n\n    Host    string `xorm:"varchar(100)" json:"host"`\n    Port    int    `json:"port"`\n    Title   string `xorm:"varchar(100)" json:"title"`\n    Content string `xorm:"varchar(1000)" json:"content"`\n\n    RegionId     string `xorm:"varchar(100)" json:"regionId"`\n    SignName     string `xorm:"varchar(100)" json:"signName"`\n    TemplateCode string `xorm:"varchar(100)" json:"templateCode"`\n    AppId        string `xorm:"varchar(100)" json:"appId"`\n\n    Endpoint         string `xorm:"varchar(1000)" json:"endpoint"`\n    IntranetEndpoint string `xorm:"varchar(100)" json:"intranetEndpoint"`\n    Domain           string `xorm:"varchar(100)" json:"domain"`\n    Bucket           string `xorm:"varchar(100)" json:"bucket"`\n\n    Metadata               string `xorm:"mediumtext" json:"metadata"`\n    IdP                    string `xorm:"mediumtext" json:"idP"`\n    IssuerUrl              string `xorm:"varchar(100)" json:"issuerUrl"`\n    EnableSignAuthnRequest bool   `json:"enableSignAuthnRequest"`\n\n    ProviderUrl string `xorm:"varchar(200)" json:"providerUrl"`\n}\n')),(0,o.kt)("h2",{id:"how-does-casdoor-manage-itself"},"How does Casdoor manage itself?"),(0,o.kt)("p",null,"Upon running Casdoor for the first time, some built-in objects are created to facilitate its management:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A built-in organization named ",(0,o.kt)("inlineCode",{parentName:"li"},"built-in"),"."),(0,o.kt)("li",{parentName:"ul"},"A user named ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"built-in")," organization."),(0,o.kt)("li",{parentName:"ul"},"A built-in application named ",(0,o.kt)("inlineCode",{parentName:"li"},"app-built-in"),", administered by the ",(0,o.kt)("inlineCode",{parentName:"li"},"built-in")," organization, representing Casdoor itself.")),(0,o.kt)("p",null,"All users under the ",(0,o.kt)("inlineCode",{parentName:"p"},"built-in")," organization, including ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),", will have full administrator privileges on the Casdoor platform. Therefore, if there are multiple administrators, it is advisable to create new accounts under the ",(0,o.kt)("inlineCode",{parentName:"p"},"built-in")," organization. Alternatively, the sign-up channel for the ",(0,o.kt)("inlineCode",{parentName:"p"},"app-built-in")," application should be closed to prevent unwanted access."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is not possible to rename or delete the built-in objects via both the web UI or the RESTful API. Casdoor has hardcoded these reserved names in many places; attempting to rename or delete them by modifying the DB may cause the entire system to crash.")))}d.isMDXComponent=!0}}]);