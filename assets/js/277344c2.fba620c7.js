"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[668],{2353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(5893),a=t(1151);const o={},r="Executing smart contracts",c={id:"recipes/executing-smart-contracts",title:"Executing smart contracts",description:"Once you've deployed a smart contract from",source:"@site/docs/recipes/executing-smart-contracts.md",sourceDirName:"recipes",slug:"/recipes/executing-smart-contracts",permalink:"/recipes/executing-smart-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/recipes/executing-smart-contracts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Updating the config of a DAO",permalink:"/recipes/config-updates"},next:{title:"V1 -> V2",permalink:"/upgrading/v2"}},i={},d=[{value:"Background",id:"background",level:2},{value:"JSON conversion",id:"json-conversion",level:2},{value:"House",id:"house",level:3},{value:"Bar",id:"bar",level:3},{value:"Blu",id:"blu",level:3},{value:"Executing a contract",id:"executing-a-contract",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"executing-smart-contracts",children:"Executing smart contracts"}),"\n",(0,s.jsxs)(n.p,{children:["Once you've ",(0,s.jsx)(n.a,{href:"/recipes/contract-deployment",children:"deployed a smart contract"})," from\nyour DAO you'll then likely want to start using it. The way to modify\nthe state of a contract or tell it to perform an action on cosmwasm is\nto execute a message on it. Here we'll walk through the process of\nexecuting a message on a DAO's staking contract to update its\nunstaking duration and in the process learn about controlling smart\ncontracts from a DAO DAO DAO."]}),"\n",(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(n.p,{children:["With CosmWasm there are a number of message types that can be executed\nby the chain. These message types can do things like stake tokens with\nvalidators, send tokens to addresses, and manage smart contracts. The\nmessage types are enumerated\n",(0,s.jsx)(n.a,{href:"https://docs.rs/cosmwasm-std/latest/cosmwasm_std/enum.CosmosMsg.html",children:"here"}),'. A\n"custom" message on a DAO DAO proposal can cause any of these message\ntypes to be executed.']}),"\n",(0,s.jsx)(n.p,{children:"In order to execute one of those message types it needs to be\nconverted into JSON. JSON allows us to manually type out messages in a\nhuman readable format that the computer can convert into the Rust\ndata structures you can see in the aforementioned enum."}),"\n",(0,s.jsx)(n.h2,{id:"json-conversion",children:"JSON conversion"}),"\n",(0,s.jsxs)(n.p,{children:["Under the hood a Rust library called ",(0,s.jsx)(n.a,{href:"https://docs.serde.rs/serde_json/",children:"Serde\nJSON"})," is used to do this conversion\nfrom human readable JSON to computer readable data. You can see the\nlinked docs for all the details about how this conversion\nhappens. Here's an example to build some intuition:"]}),"\n",(0,s.jsx)(n.p,{children:"Lets say we have a Rust enum that looks something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub enum Msg {\n\tHouse(HouseMsg),\n\tBar {\n\t    baz: String,\n\t},\n\tBluBla {}\n}\n\npub struct HouseMsg {\n\twidth: Uint128,\n\theight: Decimal,\n\tdepth: u64,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Lets see what the variants of this Rust enum look like in JSON,\nstarting with ",(0,s.jsx)(n.code,{children:"House"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"house",children:"House"}),"\n",(0,s.jsxs)(n.p,{children:["Say I want to write a ",(0,s.jsx)(n.code,{children:"House"})," with a ",(0,s.jsx)(n.code,{children:"width"})," of ",(0,s.jsx)(n.code,{children:"100"})," and a height of\n",(0,s.jsx)(n.code,{children:"0.12"})," and a depth of ",(0,s.jsx)(n.code,{children:"12"}),". The JSON for that would look like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n\t"house": {\n\t\t"width": "100",\n\t\t"height": "0.12",\n\t\t"depth": 12\n\t}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In CosmWasm ",(0,s.jsx)(n.code,{children:"Uint128"})," values are large integer values and to write one\nin JSON form you surround the number with quotes. The same applies to\nthe ",(0,s.jsx)(n.code,{children:"Decimal"})," type. For regular Rust integer types like ",(0,s.jsx)(n.code,{children:"u64"})," we can\njust write those out as normal."]}),"\n",(0,s.jsx)(n.h3,{id:"bar",children:"Bar"}),"\n",(0,s.jsxs)(n.p,{children:["Writing a ",(0,s.jsx)(n.code,{children:"Bar"})," is really similar to a Foo. Even though for the ",(0,s.jsx)(n.code,{children:"Foo"}),"\nthe data is in a separate ",(0,s.jsx)(n.code,{children:"struct"})," the serialized version looks the\nsame. Here's what a ",(0,s.jsx)(n.code,{children:"Bar"})," with a ",(0,s.jsx)(n.code,{children:"baz"})," of ",(0,s.jsx)(n.code,{children:'"zoop"'})," looks like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n\t"bar": {\n\t\t"baz": "zoop"\n\t}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For comparason, here's how you'd construct that same ",(0,s.jsx)(n.code,{children:"Bar"})," in Rust:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'Msg::Bar { baz: "zoop".to_string() }\n'})}),"\n",(0,s.jsx)(n.h3,{id:"blu",children:"Blu"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"BluBla"})," is just like a ",(0,s.jsx)(n.code,{children:"Bar"})," or a ",(0,s.jsx)(n.code,{children:"Foo"})," but it doesn't have any data:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n\t"blu_bla": {}\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Notice that the ",(0,s.jsx)(n.code,{children:"BluBla"})," gets converted from camel case to snake case\nduring serialization. This is not a hard rule for CosmWasm contracts,\nbut most will do this."]})}),"\n",(0,s.jsx)(n.h2,{id:"executing-a-contract",children:"Executing a contract"}),"\n",(0,s.jsx)(n.p,{children:'Now that we understand how messages are put together, let\'s try\nwriting a custom message to update the unstaking duration for a\nDAO. We\'ll start by collecting the relevant addresses for our\nmessage. For our purposes we\'ll need the DAO address and the staking\ncontract address. Those can be found in under the "Staking" and "DAO"\naddresses in the "Addresses" section of your DAO page.'}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For this walk through we'll use ",(0,s.jsx)(n.code,{children:"<DAO>"})," and ",(0,s.jsx)(n.code,{children:"<STAKING>"})," as placeholders\nfor those addresses. When you're writing your message you'll want to\nreplace those with the addresses you're using."]})}),"\n",(0,s.jsxs)(n.p,{children:["We can start with a basic ",(0,s.jsx)(n.a,{href:"https://docs.rs/cosmwasm-std/latest/cosmwasm_std/enum.WasmMsg.html",children:"WASM\nexecute"}),"\nmessage:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  {\n    "wasm": {\n      "execute": {\n        "contract_addr": "",\n        "msg": {},\n        "funds": []\n      }\n    }\n  }\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's fill in this basic message with the address of our staking\ncontract. The staking contract will be the contract we want to execute\nthis message on as we want to tell it to change the unstaking\nduration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  {\n    "wasm": {\n      "execute": {\n        "contract_addr": "<STAKING>",\n        "msg": {},\n        "funds": []\n      }\n    }\n  }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you look at the type of the ",(0,s.jsx)(n.code,{children:"msg"})," field on in the docs you'll see\nit is a ",(0,s.jsx)(n.code,{children:"Binary"})," type. The ",(0,s.jsx)(n.code,{children:"Binary"})," type in CosmWasm is a base64\nencoded JSON message. From your terminal you can create one by running:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo '<JSON you'd like to encode>' | base64\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Happily, the DAO DAO UI will automatically do that conversion for you\nso we can just put the JSON for the message we want to execute in that\nfield. We can find the format of the message we'd like to execute by\nlooking at the ",(0,s.jsxs)(n.a,{href:"https://github.com/DA0-DA0/dao-contracts/blob/2c7bc83eeb5f9a882ec36e442a1c8fdb6e3f90c6/contracts/stake-cw20/src/msg.rs#L25-L28",children:[(0,s.jsx)(n.code,{children:"UpdateConfig"}),"\nmessage"]}),"\nin the DAO DAO staking contract."]}),"\n",(0,s.jsxs)(n.p,{children:["We see that the message variant we want is ",(0,s.jsx)(n.code,{children:"UpdateConfig"})," so in JSON\nthat becomes ",(0,s.jsx)(n.code,{children:"update_config"}),". Likewise, the admin field is a string so\nwe call it ",(0,s.jsx)(n.code,{children:"admin"}),". Inspecting the ",(0,s.jsx)(n.code,{children:"Duration"})," type we see that it has\na ",(0,s.jsx)(n.code,{children:"Height"})," and ",(0,s.jsx)(n.code,{children:"Time"})," variant. We select the ",(0,s.jsx)(n.code,{children:"Time"})," variant and\nfollowing our rules of enum serialzation the ",(0,s.jsx)(n.code,{children:"duration"})," field becomes\n",(0,s.jsx)(n.code,{children:'{ "time": <VALUE> }'})]}),"\n",(0,s.jsxs)(n.p,{children:["As for the actual values, lets leave the admin as the DAO and update\nthe unstaking duration to ten seconds. Our ",(0,s.jsx)(n.code,{children:"msg"})," field will then look\nlike this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n"update_config": {\n\t"admin": "<DAO>",\n\t"duration": {\n\t\t"time": 10\n\t\t}\n\t}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The last field on the WASM message is the ",(0,s.jsx)(n.code,{children:"funds"})," field. We could use\nthis field to send some native tokens (for example, Juno) along with\nour message. We don't want to send money to our staking contract so\nwe'll leave that empty."]}),"\n",(0,s.jsx)(n.p,{children:"This makes our final WASM message:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n"wasm": {\n\t"execute": {\n\t\t"contract_addr": "<STAKING>",\n\t\t"msg": {\n\t\t\t"update_config": {\n\t\t\t\t"admin": "<DAO>",\n\t\t\t\t"duration": {\n\t\t\t\t\t"time": 10\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t"funds": []\n\t}\n   }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If we throw this into a custom message on a DAO DAO DAO proposal and\nexecute it it'll change the unstaking duration."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(7294);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);