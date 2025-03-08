"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5462],{2154:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=o(5893),a=o(1151);const i={sidebar_position:4},s="What's a blockchain?",c={id:"introduction/whats-a-blockchain",title:"What's a blockchain?",description:"A blockchain is a database made of blocks of data, strung together to form a chain. Quite literally, a blockchain is a chain of blocks.",source:"@site/docs/introduction/whats-a-blockchain.md",sourceDirName:"introduction",slug:"/introduction/whats-a-blockchain",permalink:"/introduction/whats-a-blockchain",draft:!1,unlisted:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/introduction/whats-a-blockchain.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"What's a DAO?",permalink:"/introduction/whats-a-dao"},next:{title:"Technical breakdown",permalink:"/introduction/technical-breakdown"}},r={},h=[{value:"What&#39;s a self-sovereign blockchain?",id:"whats-a-self-sovereign-blockchain",level:2},{value:"How do you send tokens between blockchains?",id:"how-do-you-send-tokens-between-blockchains",level:2},{value:"How does IBC work?",id:"how-does-ibc-work",level:3}];function l(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"whats-a-blockchain",children:"What's a blockchain?"}),"\n",(0,t.jsxs)(n.p,{children:["A blockchain is a database made of ",(0,t.jsx)(n.em,{children:"blocks"})," of data, strung together to form a ",(0,t.jsx)(n.em,{children:"chain"}),". Quite literally, a blockchain is a chain of blocks."]}),"\n",(0,t.jsx)(n.p,{children:"New data comes in piece by piece in the form of transactions. Each transaction is added to a block, and each block is chained to the previous block, creating a chronological ordering of events (or transactions). The canonical state of the blockchain can be derived by replaying each block in order from the beginning."}),"\n",(0,t.jsx)(n.p,{children:"While blockchains can store any type of data, they are most commonly used to produce a ledger: an append-only list of transactions. For example, Bitcoin's blockchain stores all transactions that send tokens from one account (i.e. wallet) to another. The balance of each account can be verified by looking at all the transactions that involve that account, adding and subtracting accordingly."}),"\n",(0,t.jsx)(n.p,{children:"Blockchains use cryptography and distributed computing algorithms to provide immutability, meaning that data entered cannot be changed after the fact. For Bitcoin, this means that transactions are permanently recorded and viewable by anyone."}),"\n",(0,t.jsx)(n.h1,{id:"whats-the-interchain",children:"What's the interchain?"}),"\n",(0,t.jsxs)(n.p,{children:["The interchain is a term used to describe interoperability between separate, self-sovereign blockchains. Interchain blockchains take advantage of protocols, like ",(0,t.jsx)(n.a,{href:"https://www.coinbase.com/cloud/discover/dev-foundations/ibc-protocol",children:"IBC"}),", to send tokens between each other. They can also pass any other data, but tokens are a good example."]}),"\n",(0,t.jsx)(n.h2,{id:"whats-a-self-sovereign-blockchain",children:"What's a self-sovereign blockchain?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://ethereum.org/en/layer-2/",children:"Layer 2"})," blockchains are built on top of layer 1 blockchains, like Ethereum. If a blockchain depends on another blockchain to exist, which is the case for most layer 2 blockchains on Ethereum, it is ",(0,t.jsx)(n.em,{children:"not"})," self-sovereign."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://cosmos.network",children:"Cosmos ecosystem"})," is comprised of many self-sovereign (i.e. layer 1) blockchains that utilize the ",(0,t.jsx)(n.a,{href:"https://www.coinbase.com/cloud/discover/dev-foundations/ibc-protocol",children:"IBC"})," protocol, allowing them to interact and participate in an interchain ecosystem, much like the Internet."]}),"\n",(0,t.jsx)(n.p,{children:"While layer 2 blockchains can interact with their base layer, they are not self-sovereign, because they cannot exist without it. Self-sovereign blockchains are not dependent on any other blockchain."}),"\n",(0,t.jsx)(n.h2,{id:"how-do-you-send-tokens-between-blockchains",children:"How do you send tokens between blockchains?"}),"\n",(0,t.jsxs)(n.p,{children:["Short answer: the ",(0,t.jsx)(n.strong,{children:"inter-blockchain communication (IBC)"})," protocol."]}),"\n",(0,t.jsx)(n.p,{children:"Before IBC, each blockchain was siloed. There was no way to send a token from one self-sovereign blockchain to another. IBC allows chains to share data with one another, including tokens."}),"\n",(0,t.jsxs)(n.p,{children:["You can dive deeper into IBC from ",(0,t.jsx)(n.a,{href:"https://www.ibcprotocol.dev/",children:"its website"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Since DAO DAO is IBC-native, your DAO's governance tokens can be shared across any chain that supports IBC. Want your governance token to be tradeable on ",(0,t.jsx)(n.a,{href:"https://osmosis.zone",children:"Osmosis"}),"? DAO DAO can help with that!"]})}),"\n",(0,t.jsx)(n.h3,{id:"how-does-ibc-work",children:"How does IBC work?"}),"\n",(0,t.jsx)(n.p,{children:"Say Alice wants to send 10 ATOM from her chain to Bob's chain:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Bob and Alice each run a light client of the other, tracking headers, but not replicating the chain's full state."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Alice bonds 10 ATOM on Alice's chain."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Alice relays a proof to Bob that she has bonded 10 ATOM."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Bob verifies the proof. If valid, Bob creates 10 ATOM "vouchers" on his chain.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The ATOM on Bob's chain is not real ATOM. They represent Alice's ATOM, and a proof that those ATOMs are frozen. But Bob can \"redeem\" her vouchers for ATOM anytime. So they're as good as ATOM!"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Want to learn more about IBC? Check out the ",(0,t.jsx)(n.a,{href:"https://v1.cosmos.network/intro#designing-the-internet-of-blockchains",children:"Cosmos docs"}),"."]})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var t=o(7294);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);