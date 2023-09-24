"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(k,r(r({ref:t},c),{},{components:n})):o.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={title:"Mobile SDKs .NET MAUI App",description:"A .NET MAUI App example for Casdoor",keywords:[".NET","SDK"],authors:["RVShershnev"]},r=void 0,s={unversionedId:"how-to-connect/desktop-sdks/maui-app",id:"how-to-connect/desktop-sdks/maui-app",title:"Mobile SDKs .NET MAUI App",description:"A .NET MAUI App example for Casdoor",source:"@site/docs/how-to-connect/desktop-sdks/maui-app.md",sourceDirName:"how-to-connect/desktop-sdks",slug:"/how-to-connect/desktop-sdks/maui-app",permalink:"/fr/docs/how-to-connect/desktop-sdks/maui-app",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/desktop-sdks/maui-app.md",tags:[],version:"current",frontMatter:{title:"Mobile SDKs .NET MAUI App",description:"A .NET MAUI App example for Casdoor",keywords:[".NET","SDK"],authors:["RVShershnev"]},sidebar:"tutorialSidebar",previous:{title:"dotNET Desktop App",permalink:"/fr/docs/how-to-connect/desktop-sdks/dotnet-app"},next:{title:"Qt Desktop App",permalink:"/fr/docs/how-to-connect/desktop-sdks/qt-app"}},l={},p=[{value:"Demonstration",id:"demonstration",level:2},{value:"Android",id:"android",level:3},{value:"Windows",id:"windows",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1: Create a MAUI Application",id:"step-1-create-a-maui-application",level:3},{value:"Step 2: Add a Reference",id:"step-2-add-a-reference",level:3},{value:"Step 3: Add the Casdoor Client",id:"step-3-add-the-casdoor-client",level:3},{value:"Step 4: Design the UI",id:"step-4-design-the-ui",level:3},{value:"Step 5: Support the Android Platform",id:"step-5-support-the-android-platform",level:3},{value:"Step 6: Launch the Application",id:"step-6-launch-the-application",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/RVShershnev/casdoor-dotnet-maui-example"},"This repository contains a .NET MAUI app and .NET MAUI library")," for demonstrating Casdoor authentication by OpenID Connect."),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Android",src:n(31412).Z,width:"395",height:"882"})),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Windows",src:n(95682).Z,width:"714",height:"586"})),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet/7.0"},".NET 7 SDK")," installed on your machine"),(0,i.kt)("li",{parentName:"ul"},"The required assets needed for your target platform(s), as described ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/maui/get-started/first-app"},"here")),(0,i.kt)("li",{parentName:"ul"},"Visual Studio 2022 for Windows 17.3  or Visual Studio 2022 for Mac 17.4 (optional)")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"step-1-create-a-maui-application"},"Step 1: Create a MAUI Application"),(0,i.kt)("p",null,"Create your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/maui/get-started/first-app"},"MAUI Application"),"."),(0,i.kt)("h3",{id:"step-2-add-a-reference"},"Step 2: Add a Reference"),(0,i.kt)("p",null,"Add a reference to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Casdoor.MauiOidcClient")," in your project.  "),(0,i.kt)("h3",{id:"step-3-add-the-casdoor-client"},"Step 3: Add the Casdoor Client"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"CasdoorClient")," as a singleton in the services."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'builder.Services.AddSingleton(new CasdoorClient(new()\n{\n    Domain = "<your domain>",\n    ClientId = "<your client>",\n    Scope = "openid profile email",\n\n#if WINDOWS\n    RedirectUri = "http://localhost/callback"\n#else\n    RedirectUri = "casdoor://callback"\n#endif\n}));\n')),(0,i.kt)("h3",{id:"step-4-design-the-ui"},"Step 4: Design the UI"),(0,i.kt)("p",null,"Add code to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MainPage")," file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MainPage.xaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             x:Class="Casdoor.MauiOidcClient.Example.MainPage">\n\n    <ScrollView>\n        <VerticalStackLayout>\n\n            <StackLayout\n                x:Name="LoginView">\n                <Button \n                    x:Name="LoginBtn"\n                    Text="Log In"\n                    SemanticProperties.Hint="Click to log in"\n                    Clicked="OnLoginClicked"\n                    HorizontalOptions="Center" />\n\n                <WebView x:Name="WebViewInstance" />\n            </StackLayout>\n\n            <StackLayout\n                x:Name="HomeView"\n                IsVisible="false">             \n\n                <Label\n                Text="Welcome to .NET Multi-platform App UI"\n                SemanticProperties.HeadingLevel="Level2"\n                SemanticProperties.Description="Welcome to dot net Multi-platform App UI"\n                FontSize="18"\n                HorizontalOptions="Center" />\n\n                <Button\n                x:Name="CounterBtn"\n                Text="Click me"\n                SemanticProperties.Hint="Counts the number of times you click"\n                Clicked="OnCounterClicked"\n                HorizontalOptions="Center" />\n\n                <Label \n                x:Name="NameLabel"\n                Text=""\n                SemanticProperties.HeadingLevel="Level2"\n                SemanticProperties.Description="User\'s name"\n                FontSize="18"\n                HorizontalOptions="Center" />\n\n                <Label \n                x:Name="EmailLabel"\n                Text=""\n                SemanticProperties.HeadingLevel="Level2"\n                SemanticProperties.Description="User\'s email"\n                FontSize="18"\n                HorizontalOptions="Center" />           \n\n                <Button \n                x:Name="LogoutBtn"\n                Text="Log Out"\n                SemanticProperties.Hint="Click to log out"\n                Clicked="OnLogoutClicked"\n                HorizontalOptions="Center" />\n\n            </StackLayout>\n        </VerticalStackLayout>\n    </ScrollView>\n\n</ContentPage>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MainPage.cs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace Casdoor.MauiOidcClient.Example\n{\n    public partial class MainPage : ContentPage\n    {\n        int count = 0;\n        private readonly CasdoorClient client;\n        private string accessToken;\n        public MainPage(CasdoorClient client)\n        {\n            InitializeComponent();\n            this.client = client;\n\n#if WINDOWS\n    client.Browser = new WebViewBrowserAuthenticator(WebViewInstance);\n#endif\n        }\n\n        private void OnCounterClicked(object sender, EventArgs e)\n        {\n            count++;\n\n            if (count == 1)\n                CounterBtn.Text = $"Clicked {count} time";\n            else\n                CounterBtn.Text = $"Clicked {count} times";\n\n            SemanticScreenReader.Announce(CounterBtn.Text);\n        }\n\n        private async void OnLoginClicked(object sender, EventArgs e)\n        {\n            var loginResult = await client.LoginAsync();\n            accessToken = loginResult.AccessToken;\n            if (!loginResult.IsError)\n            {\n                NameLabel.Text = loginResult.User.Identity.Name;\n                EmailLabel.Text = loginResult.User.Claims.FirstOrDefault(c => c.Type == "email")?.Value;            \n\n                LoginView.IsVisible = false;\n                HomeView.IsVisible = true;\n            }\n            else\n            {\n                await DisplayAlert("Error", loginResult.ErrorDescription, "OK");\n            }\n        }\n\n        private async void OnLogoutClicked(object sender, EventArgs e)\n        {\n            var logoutResult = await client.LogoutAsync(accessToken);\n\n\n            if (!logoutResult.IsError)\n            {\n                HomeView.IsVisible = false;\n                LoginView.IsVisible = true;\n                this.Focus();\n            }\n            else\n            {\n                await DisplayAlert("Error", logoutResult.ErrorDescription, "OK");\n            }\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"step-5-support-the-android-platform"},"Step 5: Support the Android Platform"),(0,i.kt)("p",null,"Modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android">\n    <application android:allowBackup="true" android:icon="@mipmap/appicon" android:roundIcon="@mipmap/appicon_round" android:supportsRtl="true"></application>\n    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n    <uses-permission android:name="android.permission.INTERNET" />\n    <queries>\n        <intent>\n            <action android:name="android.support.customtabs.action.CustomTabsService" />\n        </intent>\n    </queries>\n</manifest>\n')),(0,i.kt)("h3",{id:"step-6-launch-the-application"},"Step 6: Launch the Application"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Visual Studio:")," Press Ctrl + F5 to start."))}d.isMDXComponent=!0},31412:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/android-9a936bd740917cfc91f27c4b0a87b526.gif"},95682:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/windows-5ea35000341364f541bba413252ef39d.gif"}}]);