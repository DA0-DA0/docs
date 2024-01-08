"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>b});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,u=d["".concat(s,".").concat(b)]||d[b]||p[b]||r;return n?o.createElement(u,i(i({ref:t},h),{},{components:n})):o.createElement(u,i({ref:t},h))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},i="What's a blockchain?",c={unversionedId:"introduction/whats-a-blockchain",id:"introduction/whats-a-blockchain",title:"What's a blockchain?",description:"A blockchain is a database made of blocks of data, strung together to form a",source:"@site/docs/introduction/whats-a-blockchain.md",sourceDirName:"introduction",slug:"/introduction/whats-a-blockchain",permalink:"/docs/introduction/whats-a-blockchain",draft:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/introduction/whats-a-blockchain.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What's a DAO?",permalink:"/docs/introduction/whats-a-dao"},next:{title:"Technical breakdown",permalink:"/docs/introduction/technical-breakdown"}},s={},l=[{value:"What&#39;s a self-sovereign blockchain?",id:"whats-a-self-sovereign-blockchain",level:2},{value:"How do you send tokens between blockchains?",id:"how-do-you-send-tokens-between-blockchains",level:2},{value:"How does IBC work?",id:"how-does-ibc-work",level:3}],h={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whats-a-blockchain"},"What's a blockchain?"),(0,a.kt)("p",null,"A blockchain is a database made of ",(0,a.kt)("em",{parentName:"p"},"blocks")," of data, strung together to form a\n",(0,a.kt)("em",{parentName:"p"},"chain"),". Quite literally, a blockchain is a chain of blocks."),(0,a.kt)("p",null,"New data comes in piece by piece in the form of transactions. Each transaction\nis added to a block, and each block is chained to the previous block, creating a\nchronological ordering of events (or transactions). The canonical state of the\nblockchain can be derived by replaying each block in order from the beginning."),(0,a.kt)("p",null,"While blockchains can store any type of data, they are most commonly used to\nproduce a ledger: an append-only list of transactions. For example, Bitcoin's\nblockchain stores all transactions that send tokens from one account (i.e.\nwallet) to another. The balance of each account can be verified by looking at\nall the transactions that involve that account, adding and subtracting\naccordingly."),(0,a.kt)("p",null,"Blockchains use cryptography and distributed computing algorithms to provide\nimmutability, meaning that data entered cannot be changed after the fact. For\nBitcoin, this means that transactions are permanently recorded and viewable by\nanyone."),(0,a.kt)("h1",{id:"whats-the-interchain"},"What's the interchain?"),(0,a.kt)("p",null,"The interchain is a term used to describe interoperability between separate,\nself-sovereign blockchains. Interchain blockchains take advantage of protocols,\nlike\n",(0,a.kt)("a",{parentName:"p",href:"https://www.coinbase.com/cloud/discover/dev-foundations/ibc-protocol"},"IBC"),", to\nsend tokens between each other. They can also pass any other data, but tokens\nare a good example."),(0,a.kt)("h2",{id:"whats-a-self-sovereign-blockchain"},"What's a self-sovereign blockchain?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/layer-2/"},"Layer 2")," blockchains are built on top of\nlayer 1 blockchains, like Ethereum. If a blockchain depends on another\nblockchain to exist, which is the case for most layer 2 blockchains on Ethereum,\nit is ",(0,a.kt)("em",{parentName:"p"},"not")," self-sovereign."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://cosmos.network"},"Cosmos ecosystem")," is comprised of many\nself-sovereign (i.e. layer 1) blockchains that utilize the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.coinbase.com/cloud/discover/dev-foundations/ibc-protocol"},"IBC"),"\nprotocol, allowing them to interact and participate in an interchain ecosystem,\nmuch like the Internet."),(0,a.kt)("p",null,"While layer 2 blockchains can interact with their base layer, they are not\nself-sovereign, because they cannot exist without it. Self-sovereign blockchains\nare not dependent on any other blockchain."),(0,a.kt)("h2",{id:"how-do-you-send-tokens-between-blockchains"},"How do you send tokens between blockchains?"),(0,a.kt)("p",null,"Short answer: the ",(0,a.kt)("strong",{parentName:"p"},"inter-blockchain communication (IBC)")," protocol."),(0,a.kt)("p",null,"Before IBC, each blockchain was siloed. There was no way to send a token from\none self-sovereign blockchain to another. IBC allows chains to share data with\none another, including tokens."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Since DAO DAO is IBC-native, your DAO's governance tokens can be shared across\nany chain that supports IBC. Want your governance token to be tradeable on\n",(0,a.kt)("a",{parentName:"p",href:"https://osmosis.zone"},"Osmosis"),"? DAO DAO can help with that!")),(0,a.kt)("h3",{id:"how-does-ibc-work"},"How does IBC work?"),(0,a.kt)("p",null,"Say Alice wants to send 10 ATOM from her chain to Bob's chain:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Bob and Alice each run a light client of the other, tracking headers, but not\nreplicating the chain's full state.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Alice bonds 10 ATOM on Alice's chain.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Alice relays a proof to Bob that she has bonded 10 ATOM.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Bob verifies the proof. If valid, Bob creates 10 ATOM "vouchers" on his\nchain.'))),(0,a.kt)("p",null,"The ATOM on Bob's chain is not real ATOM. They represent Alice's ATOM, and a\nproof that those ATOMs are frozen. But Bob can \"redeem\" her vouchers for ATOM\nanytime. So they're as good as ATOM!"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Want to learn more about IBC? Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://v1.cosmos.network/intro#designing-the-internet-of-blockchains"},"Cosmos\ndocs"),".")))}p.isMDXComponent=!0}}]);