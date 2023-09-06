"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return a?o.createElement(h,s(s({ref:t},c),{},{components:a})):o.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:3},s="Governance proposals",i={unversionedId:"proposal-messages",id:"proposal-messages",title:"Governance proposals",description:"Governance proposals are how DAOs change their state. Governance",source:"@site/docs/proposal-messages.md",sourceDirName:".",slug:"/proposal-messages",permalink:"/docs/proposal-messages",draft:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/proposal-messages.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/docs/quickstart/congratulations"},next:{title:"What does DAO DAO do?",permalink:"/docs/more-info/what-does-dao-dao-do"}},p={},l=[{value:"Title",id:"title",level:2},{value:"Description",id:"description",level:2},{value:"Proposal Actions",id:"proposal-actions",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"governance-proposals"},"Governance proposals"),(0,n.kt)("p",null,"Governance proposals are how DAOs change their state. Governance\nproposals are composed of three components: a title, a description,\nand proposal messages."),(0,n.kt)("p",null,'Proposal messages are where things get interesting. Proposal messages\nare "transactions" that will get executed if the proposal is passed. As\na simple example: a proposal message could pay a contributor.'),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The word \"transaction\" above may be a little confusing if you're new\nto blockchains and smart contracts. Transactions on a blockchain are\nwhat update the chain's state. They can do all sorts of things. For\nexample a transaction can:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Deploy a docker container on ",(0,n.kt)("a",{parentName:"li",href:"https://akash.network/"},"Akash"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rawdao.zone/vote/11"},"Update the configuration")," of a\nsmart contract."),(0,n.kt)("li",{parentName:"ul"},"Pay a ",(0,n.kt)("a",{parentName:"li",href:"https://daodao.zone/dao/juno1gpwekludv6vu8pkpnp2hwwf7f84a7mcvgm9t2cvp92hvpxk07kdq8z4xj2/proposals/A7"},"RPC node\nprovider"),".")),(0,n.kt)("p",{parentName:"admonition"},"Truly, anything that you can do on a blockchain you can do\nautomatically and via governance with DAO DAO.")),(0,n.kt)("h2",{id:"title"},"Title"),(0,n.kt)("p",null,"This is the human-readable title of your proposal. It will appear in\nvoting screens."),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This is the human-readable description of your proposal. You can use ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"Markdown\nsyntax")," for rich formatting."),(0,n.kt)("h2",{id:"proposal-actions"},"Proposal Actions"),(0,n.kt)("p",null,"Proposal actions are actions that execute when the proposal\npasses. These actions let you do things like ",(0,n.kt)("em",{parentName:"p"},"mint")," new governance\ntokens, ",(0,n.kt)("em",{parentName:"p"},"spend")," from the shared treasury, and more."),(0,n.kt)("p",null,"DAO DAO has a number of predefined action templates which mean that,\nfor the most part, you can create proposals without needing to\nactually write out the transactions that you'd like executed should it\npass. If you're doing something custom, you can always use a custom\nmessage. If you'd like to contribute an action template to DAO DAO\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/DA0-DA0/dao-dao-ui/wiki/Adding-an-action-to-DAO-DAO"},"you can do that\ntoo"),"!"))}u.isMDXComponent=!0}}]);