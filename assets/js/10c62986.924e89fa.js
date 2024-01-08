"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8299],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(r),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(d,i(i({ref:e},p),{},{components:r})):n.createElement(d,i({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9235:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="Technical breakdown",s={unversionedId:"introduction/technical-breakdown",id:"introduction/technical-breakdown",title:"Technical breakdown",description:"DAO DAO's smart contracts are built",source:"@site/docs/introduction/technical-breakdown.md",sourceDirName:"introduction",slug:"/introduction/technical-breakdown",permalink:"/docs/introduction/technical-breakdown",draft:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/introduction/technical-breakdown.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"What's a blockchain?",permalink:"/docs/introduction/whats-a-blockchain"},next:{title:"Create your first DAO",permalink:"/docs/quickstart/create-a-dao"}},c={},l=[{value:"What is CosmWasm?",id:"what-is-cosmwasm",level:2},{value:"What is Rust?",id:"what-is-rust",level:2},{value:"What about the UI?",id:"what-about-the-ui",level:2}],p={toc:l};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"technical-breakdown"},"Technical breakdown"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-contracts/"},"DAO DAO's smart contracts")," are built\nwith CosmWasm and thus run on blockchains that support CosmWasm:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://junonetwork.io/"},"Juno")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://osmosis.zone/"},"Osmosis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stargaze.zone/"},"Stargaze")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.neutron.org/"},"Neutron")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/migaloo_zone"},"Migaloo"))),(0,a.kt)("h2",{id:"what-is-cosmwasm"},"What is CosmWasm?"),(0,a.kt)("p",null,"CosmWasm is a ",(0,a.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly")," virtual machine that runs\nin a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/"},"Cosmos SDK")," module."),(0,a.kt)("p",null,"In practice, CosmWasm smart contracts (like DAO DAO's) are written in Rust."),(0,a.kt)("h2",{id:"what-is-rust"},"What is Rust?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," is a performant, memory-safe, and thread-safe\nprogramming language with a rich type system."),(0,a.kt)("p",null,"Writing smart contracts in Rust allows us to perform better security analysis on\nour contracts, which in turn protects your DAOs from common attacks."),(0,a.kt)("h2",{id:"what-about-the-ui"},"What about the UI?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-dao-ui"},"DAO DAO's UI")," is built with\n",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," in ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),"."),(0,a.kt)("p",null,"As the UI is the primary entrypoint for users interacting with DAO DAO DAOs, its\nsecurity is as important as the smart contracts themselves. TypeScript increases\nthe likelihood that bugs are detected earlier, during development."))}u.isMDXComponent=!0}}]);