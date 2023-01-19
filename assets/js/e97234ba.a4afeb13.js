"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5869],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return o?n.createElement(h,s(s({ref:t},p),{},{components:o})):n.createElement(h,s({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1804:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:2},s="What's a DAO?",i={unversionedId:"introduction/what-is-dao",id:"introduction/what-is-dao",title:"What's a DAO?",description:"Decentralized autonomous organizations (DAOs) are collectively owned governance",source:"@site/docs/introduction/what-is-dao.md",sourceDirName:"introduction",slug:"/introduction/what-is-dao",permalink:"/docs/introduction/what-is-dao",draft:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/introduction/what-is-dao.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome to DAO DAO",permalink:"/docs/introduction/welcome-to-dao-dao"},next:{title:"Create your first DAO",permalink:"/docs/quickstart/create-a-dao"}},l={},c=[{value:"Proposals",id:"proposals",level:2},{value:"Governance tokens",id:"governance-tokens",level:2},{value:"Non-token based DAOs",id:"non-token-based-daos",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whats-a-dao"},"What's a DAO?"),(0,a.kt)("p",null,"Decentralized autonomous organizations (DAOs) are collectively owned governance\nsystems whose governing software is cryptographically bound to obey the\ndemocratic wishes of members."),(0,a.kt)("h2",{id:"proposals"},"Proposals"),(0,a.kt)("p",null,"At its simplest, a DAO is an organization where you can vote on proposals.\nProposals are written to an immutable, public ledger (blockchain) - their text,\nwhether they passed or failed, and who voted on them. Proposals can be natural\nlanguage rules or laws (for example, you could run a legislature with them), or\nthey can be software."),(0,a.kt)("p",null,'When a proposal passes the DAO\'s voting period, that proposal becomes canonical.\nIt will be as "passed" in the ledger, and any ',(0,a.kt)("em",{parentName:"p"},"proposal messages")," (effectively,\nbits of code) will be executed on the chain, modifying the DAO's state."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For example, ",(0,a.kt)("a",{parentName:"p",href:"https://www.rawdao.zone/vote/11"},"this proposal")," in RAW DAO (which\ngoverns the ",(0,a.kt)("a",{parentName:"p",href:"https://junoswap.com"},"Junoswap DEX"),") has proposal messages\nassociated with it. These messages will ",(0,a.kt)("em",{parentName:"p"},"only")," be executed if the proposal\npasses and they will change the unbonding period for LPs on Junoswap\nautomatically.")),(0,a.kt)("p",null,"The DAO's governance can itself be modified by governance proposals. For\nexample, the voting rules of the DAO themselves (e.g., how long voting periods\nlast, what proportion of people need to vote on something for it to pass, etc.)\ncan be modified by governance proposals."),(0,a.kt)("admonition",{title:"Changing the rules by which rules are made",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can think of DAOs as a big game of\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Nomic#:~:text=Nomic%20is%20a%20game%20in,done%20afterwards%2C%20and%20doing%20it."},"Nomic"),". For\nexample, ",(0,a.kt)("a",{parentName:"p",href:"https://daodao.zone/dao/juno1czh5dy2kxwwt5hlw6rr2q25clj96sheftsdccswg9qe34m3wzgdswmw8ju/proposals/A9"},"this\nproposal"),"\nin Dog Dao updates the DAOs voting rules to make the voting duration shorter\nand, thus, make proposals complete more quickly.")),(0,a.kt)("h2",{id:"governance-tokens"},"Governance tokens"),(0,a.kt)("p",null,"Some (not all!) DAOs manage voting through ",(0,a.kt)("em",{parentName:"p"},"governance tokens"),". Like\nshares in a corporation, governance token determines your voting\npower. A person with 80% of a DAO's tokens will be able to pass things\nautocratically. Distributing tokens evenly will give everyone an even\nvote, assuming no one trades their tokens."),(0,a.kt)("admonition",{title:"Tokens are programmable.",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can prevent transfer, vest (i.e. slowly unlock) tokens over time,\nand more.")),(0,a.kt)("h2",{id:"non-token-based-daos"},"Non-token based DAOs"),(0,a.kt)("p",null,"Most DAOs do not need a token. Those DAOs may use fixed voting weights\nto determine voting power. For example, the DAO DAO ",(0,a.kt)("a",{parentName:"p",href:"https://daodao.zone/dao/juno130z8079e3dvalal8lw7yu37l99umm0ytzehes00830xl546uu7aqz5akcp"},"Development\nFund"),'\nassigns fixed weights to members. These types of DAOs are often\nreferred to a "multisigs".'),(0,a.kt)("p",null,"Tokens can be useful when you want very fluid governance with many\nmembers. They also introduce complexity because if your governance\ntoken becomes liquid your DAO will loosen control of what members it\nhas. Non-token based DAOs add and remove members via vote, so they\ndon't have this problem."),(0,a.kt)("p",null,'Additionally, launching a token with a DAO may invite speculators who\nwill "invest" in your DAO. This may bring expectations and scrutiny as\nothers could expect your team to spend time increasing the value of\nyour governance token. For some DAOs, this is desirable, but many DAOs\nmay want to focus on building out their product and revenue streams.'),(0,a.kt)("p",null,"The current state of DAOs and the blockchain ecosystem is very token\ngovernance heavy. We encourage you to think deeply about if that is\nthe system that actually works best for you when creating a DAO for\nyour community. In many cases, a member based DAO may be a better\noption. You can always migrate to a token based DAO later."))}d.isMDXComponent=!0}}]);