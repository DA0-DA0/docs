"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62],{2678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(5893),s=t(1151);const a={sidebar_position:6},i="Cross-chain support",r={id:"dao-management/cross-chain",title:"Cross-chain support",description:"DAOs on DAO DAO can create and manage accounts on many chains with the magic of",source:"@site/docs/dao-management/cross-chain.md",sourceDirName:"dao-management",slug:"/dao-management/cross-chain",permalink:"/dao-management/cross-chain",draft:!1,unlisted:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/dao-management/cross-chain.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Execute via Authorization",permalink:"/dao-management/authz/execute"},next:{title:"Voting",permalink:"/dao-governance/configuration/voting-config"}},c={},l=[{value:"Terminology",id:"terminology",level:2},{value:"Polytone (via CosmWasm)",id:"polytone-via-cosmwasm",level:2},{value:"Drawbacks",id:"drawbacks",level:3},{value:"Downtime",id:"downtime",level:4},{value:"Interchain Accounts (ICA)",id:"interchain-accounts-ica",level:2},{value:"Drawbacks",id:"drawbacks-1",level:3},{value:"Relayers",id:"relayers",level:4},{value:"Downtime",id:"downtime-1",level:4},{value:"Governance restriction",id:"governance-restriction",level:4},{value:"Missing callbacks",id:"missing-callbacks",level:4},{value:"Ambiguous error/timeout distinction",id:"ambiguous-errortimeout-distinction",level:4},{value:"Simulation unsupported",id:"simulation-unsupported",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Is ICA necessary?",id:"is-ica-necessary",level:3},{value:"No CosmWasm",id:"no-cosmwasm",level:4},{value:"Multi-hop IBC transfers (PFM)",id:"multi-hop-ibc-transfers-pfm",level:4}];function h(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"cross-chain-support",children:"Cross-chain support"}),"\n",(0,o.jsxs)(n.p,{children:["DAOs on DAO DAO can create and manage accounts on many chains with the magic of\nIBC, allowing them to hold assets and interact with smart contracts, native\nprotocols, and dApps across the ecosystem. The following is a description of how\nthis works. A user-friendly guide of how to manage cross-chain assets can be\nfound ",(0,o.jsx)(n.a,{href:"./treasury/how-to-manage-cross-chain-tokens",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,o.jsx)(n.p,{children:'In the UI, wherever the phrase "Cross-Chain Accounts" is used, it refers to\nPolytone (described below). Interchain Accounts, the native Cosmos SDK module,\nis referred to as "ICA".'}),"\n",(0,o.jsx)(n.h2,{id:"polytone-via-cosmwasm",children:"Polytone (via CosmWasm)"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-apps/tree/main/cosmwasm/polytone",children:"Polytone"})," is a\nprotocol developed by DAO DAO which utilizes CosmWasm smart contracts and IBC to\nenable cross-chain accounts. Any entity on a blockchain, such as a wallet or a\nDAO (which is just a smart contract), can use Polytone."]}),"\n",(0,o.jsx)(n.p,{children:"Currently, Polytone can be deployed on any chain that supports both CosmWasm and\nIBC. Once the necessary smart contracts are deployed on two chains, a Polytone\nconnection can be established between them. A connection is one-way, allowing\nentities on the source chain to create accounts on the destination chain. Create\ntwo Polytone connections, each going in opposite directions between the same two\nchains, to establish bidirectional cross-chain support."}),"\n",(0,o.jsxs)(n.p,{children:["If you want to create a cross-chain account for your DAO on a chain that\nsupports CosmWasm and IBC, but you don't see the option in the UI when following\nthe guide mentioned at the beginning of this page, please ",(0,o.jsx)(n.a,{href:"https://discord.daodao.zone",children:"reach out to us on\nDiscord"})," and we will be happy to help. Any chain\nwith DAO DAO deployed should also support Polytone, as well as many other chains\nin the Cosmos ecosystem."]}),"\n",(0,o.jsx)(n.p,{children:"Polytone supports automatic relaying, callbacks, error handling, and transaction\nsimulation, making it the best available solution for cross-chain protocols,\nlike DAO DAO."}),"\n",(0,o.jsx)(n.h3,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,o.jsx)(n.h4,{id:"downtime",children:"Downtime"}),"\n",(0,o.jsx)(n.p,{children:"If the IBC connection a Polytone connection uses expires (i.e. it's not used at\nall during its trusted period), the Polytone connection will be frozen, leading\nto accounts managed through this connection to become temporarily inaccessible."}),"\n",(0,o.jsx)(n.p,{children:"Fortunately, a governance proposal on each chain can refresh the expired IBC\nclients used by a connection and unfreeze it. Also, a Polytone connection can\nreuse an existing IBC connection, such as the one used to send native tokens to\nthe other chain\u2014since the primary token transfer connection tends to be used\nquite frequently by others, Polytone connections between well-trafficked chains\nare at extremely low risk of ever experiencing downtime."}),"\n",(0,o.jsx)(n.p,{children:"Also, relayers routinely poll for IBC clients that are almost expired and\nautomatically refresh them, resetting their expiration period. With sufficient\nrelayer uptime, a Polytone connection can experience no downtime."}),"\n",(0,o.jsx)(n.h2,{id:"interchain-accounts-ica",children:"Interchain Accounts (ICA)"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://ibc.cosmos.network/main/apps/interchain-accounts/overview/",children:"ICA"})," is a\nnative Cosmos SDK protocol that enables cross-chain accounts. Similar to\nPolytone, any entity on a blockchain can use ICA. While it is sometimes\nsupported by chains that do not support CosmWasm (and thus do not support\nPolytone), we discourage using ICA due to its many drawbacks detailed below."]}),"\n",(0,o.jsx)(n.h3,{id:"drawbacks-1",children:"Drawbacks"}),"\n",(0,o.jsx)(n.h4,{id:"relayers",children:"Relayers"}),"\n",(0,o.jsx)(n.p,{children:"Relayers don't seem to automatically relay transactions which establish new\nICAs, leading to confusion and requiring a technically knowledgeable human to\nmanually relay the transaction. This is suboptimal when trying to create a\nseamless experience on a website that is trying to lower knowledge and cost\nbarriers to setting up sophisticated organizations."}),"\n",(0,o.jsx)(n.h4,{id:"downtime-1",children:"Downtime"}),"\n",(0,o.jsx)(n.p,{children:"On multiple accounts, blockchain developer teams have broken the ICA module\nduring unrelated upgrades, resulting in temporarily locked funds while they fix\nit and push a new upgrade. Blockchain upgrades are a hassle and require\ncoordination from a supermajority of the validator set."}),"\n",(0,o.jsx)(n.p,{children:"It is also possible to break the CosmWasm module during a chain upgrade (which\nhas happened in the past), though in practice this is far more rare and has been\nseen as a more urgent problem yielding a much faster resolution."}),"\n",(0,o.jsx)(n.p,{children:"ICA thus far is seemingly not used enough to warrant the attention we feel is\nneeded in order to be reliable."}),"\n",(0,o.jsx)(n.h4,{id:"governance-restriction",children:"Governance restriction"}),"\n",(0,o.jsx)(n.p,{children:"The destination/host chain can specify/limit which messages ICAs are allowed to\nexecute, and this parameter can be changed at any point through a governance\nproposal. While we don't expect any chain to intentionally lock a DAO's funds,\nit is technically possible to do so, which is undesirable. Chains may have valid\nreasons for needing to configure ICA with specific limitations, and/or they may\nnot always be aware that a DAO on another chain is using ICA to manage funds\nthere."}),"\n",(0,o.jsx)(n.h4,{id:"missing-callbacks",children:"Missing callbacks"}),"\n",(0,o.jsx)(n.p,{children:"ICA does not support callbacks, making it impossible for a smart contract on the\nsource chain to query the result of the execution and display success or failure\nand difficult for a website to do so."}),"\n",(0,o.jsx)(n.h4,{id:"ambiguous-errortimeout-distinction",children:"Ambiguous error/timeout distinction"}),"\n",(0,o.jsxs)(n.p,{children:["When an ICA transaction contains an error and cannot be executed (e.g. it tries\nto send to an invalid address, spend nonexistent funds, or execute a malformed\nmessage on a smart contract), nothing happens. Attempting to relay an erroneous\ntransaction simply fails, and eventually it times out ",(0,o.jsx)(n.strong,{children:"without recording the\nerror"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This makes it very difficult to investigate and determine why an ICA transaction\ndid not occur\u2014it may have simply timed out due to lack of relayer activity, or\nit may have been constructed incorrectly by the sender."}),"\n",(0,o.jsx)(n.h4,{id:"simulation-unsupported",children:"Simulation unsupported"}),"\n",(0,o.jsx)(n.p,{children:"When creating a proposal in a DAO, it is very useful to first simulate the\nintended transaction to ensure it is valid before opening up the voting\nperiod\u2014it would be a waste of time and effort to go through a whole proposal\nvoting period only to find out that the proposal fails on execution, and\nsometimes proposals are time-sensitive. The DAO DAO website automatically\nsimulates a proposal before submitting it to prevent this from happening,\nincluding cross-chain actions that use Polytone, allowing the proposal creator\nto view and correct any errors ahead of time."}),"\n",(0,o.jsx)(n.p,{children:"This is possible because smart contracts, such as a DAO or Polytone, support\ntransaction simulation, just like wallets and multisigs."}),"\n",(0,o.jsx)(n.p,{children:"Unfortunately, ICAs do not support transaction simulation. This means that when\ncreating a proposal containing an ICA execution, you pretty much just have to\nhope it works. And because ICAs do not store errors if they fail to relay, you\nwon't even be able to tell what caused your ICA execution to do nothing."}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Since ICA is supported by more chains than CosmWasm, it would be very nice to be\nable to rely on it. However, many of the ICA module's drawbacks are deal\nbreakers, and users of DAO DAO have consistently experienced problems using it."}),"\n",(0,o.jsx)(n.p,{children:"Since Polytone solves all of ICA's drawbacks, we strongly urge you to avoid\nusing ICA whenever possible, and let us know when you want a Polytone connection\nset up on a new chain."}),"\n",(0,o.jsx)(n.h3,{id:"is-ica-necessary",children:"Is ICA necessary?"}),"\n",(0,o.jsx)(n.p,{children:"In some instances, using ICA is unfortunately necessary."}),"\n",(0,o.jsx)(n.h4,{id:"no-cosmwasm",children:"No CosmWasm"}),"\n",(0,o.jsx)(n.p,{children:'Chains without CosmWasm of course do not support Polytone, and thus ICA is the\nonly choice if you need to interact directly with a native module on the chain.\nHowever, when possible, you should store assets on the DAO\'s home chain or\nanother one of its Polytone-connected ("Cross-Chain") accounts.'}),"\n",(0,o.jsx)(n.h4,{id:"multi-hop-ibc-transfers-pfm",children:"Multi-hop IBC transfers (PFM)"}),"\n",(0,o.jsxs)(n.p,{children:["In order to ",(0,o.jsx)(n.a,{href:"./treasury/how-to-send-tokens#change-recipient-chain",children:"send tokens over\nIBC"})," with intermediary\nhops that unwind the IBC token (e.g. sending Noble USDC from Osmosis to\nNeutron), a DAO must have an account on each intermediary chain. It is a\nrequirement of\n",(0,o.jsx)(n.a,{href:"https://github.com/cosmos/ibc-apps/tree/main/middleware/packet-forward-middleware",children:"packet-forward-middleware"}),"\nthat an address be specified for each chain involved in a multi-hop in case it\nfails halfway through and needs to leave the tokens in an account on an\nintermediary chain. This is exceedingly rare but technically possible in the\nprotocol and serves as a failsafe."]}),"\n",(0,o.jsx)(n.p,{children:"In order to prevent loss of funds or asking DAOs to trust a third party, we\ndecided to require that a DAO has an account on every intermediary chain in a\nmulti-hop, so that if it fails, the tokens being sent remain under DAO control.\nThus an ICA may be required to enable multi-hop transfers using assets native to\nthat chain if CosmWasm/Polytone is unsupported."}),"\n",(0,o.jsx)(n.p,{children:"For example, Noble USDC is a common asset used by DAOs, and Noble does not (as\nof writing this) support CosmWasm/Polytone. So in order to perform multi-hops\nwith USDC, a DAO must first create an ICA on Noble. We strongly advise against\nstoring any funds in the Noble ICA, instead just using its existence as a\nfallback measure during USDC multi-hops from/to other chains."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(7294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);