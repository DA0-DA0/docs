"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[219],{4759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(5893),i=t(1151);const a={sidebar_position:3},s="Updating the config of a DAO",c={id:"recipes/config-updates",title:"Updating the config of a DAO",description:"After you've deployed your DAO you may decide that you'd like to",source:"@site/docs/recipes/config-updates.md",sourceDirName:"recipes",slug:"/recipes/config-updates",permalink:"/recipes/config-updates",draft:!1,unlisted:!1,editUrl:"https://github.com/DA0-DA0/docs/tree/main/docs/recipes/config-updates.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploying a smart contract from a DAO",permalink:"/recipes/contract-deployment"},next:{title:"Executing smart contracts",permalink:"/recipes/executing-smart-contracts"}},r={},d=[{value:"Setup",id:"setup",level:2},{value:"The DAO DAO config",id:"the-dao-dao-config",level:2},{value:"Updating the config",id:"updating-the-config",level:2},{value:"Executing the config update",id:"executing-the-config-update",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"updating-the-config-of-a-dao",children:"Updating the config of a DAO"}),"\n",(0,o.jsx)(n.p,{children:"After you've deployed your DAO you may decide that you'd like to\nchange parts of the config."}),"\n",(0,o.jsx)(n.p,{children:"In this recipe, we'll walk through the process of creating and voting\non a proposal to change your DAO's configuration."}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Before beginning you'll need to have a DAO deployed on DAO-DAO. For a\nquick introduction to that see the\n",(0,o.jsx)(n.a,{href:"/quickstart/create-a-dao",children:"quickstart"})," guide."]}),"\n",(0,o.jsx)(n.h2,{id:"the-dao-dao-config",children:"The DAO DAO config"}),"\n",(0,o.jsxs)(n.p,{children:["All DAOs deployed from DAO DAO have a config with information like\nname, description, and voting threshold. You can view the raw JSON of\na DAOs config from the command line by running a ",(0,o.jsx)(n.code,{children:"{get_config: {}}"}),"\nquery like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"junod query wasm contract-state smart <DAO ADDRESS> '{\"get_config\": {}}'\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here's an example of what one of those configs might look like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    "name": "ekez dao",\n    "description": "The first DAO of the new DAO DAO UI!",\n    "threshold": {\n      "absolute_percentage": {\n        "percentage": "0.66"\n      }\n    },\n    "max_voting_period": {\n      "time": 604800\n    },\n    "proposal_deposit": "0",\n    "refund_failed_proposals": true\n  },\n  "gov_token": "juno1lnrdwhf4xcx6w6tdpsghgv6uavem353gtgz77sdreyhts883wdjqpg7dk8",\n  "staking_contract": "juno19nywm4al2pc2sdj834gtdm6tvcn5kqpghlwd022tvld0hek4jfes8jj6um"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Every part of this config can be updated via a governance proposal."}),"\n",(0,o.jsx)(n.h2,{id:"updating-the-config",children:"Updating the config"}),"\n",(0,o.jsxs)(n.p,{children:["To update a DAO's config we'll create a new proposal in the UI and add\na \"Custom\" message to it. Our custom message will be a WASM message\nwhich, when executed, will call the ",(0,o.jsx)(n.code,{children:"update_config"})," method on our DAO."]}),"\n",(0,o.jsxs)(n.p,{children:["The structure of a WASM Message can be found\n",(0,o.jsx)(n.a,{href:"https://docs.rs/cosmwasm-std/latest/cosmwasm_std/enum.WasmMsg.html",children:"here"}),". We'll\nstart by filling out most of the execute variant:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "wasm": {\n    "execute": {\n      "contract_addr": "<DAO ADDRESS>",\n      "msg": {}, // TODO - fill this in\n\t  "funds": []\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"update_config"})," message that we'll be executing with this has the\nsame structure as a DAOs config. To change only a few fields I\nrecommend copying your DAOs current config and then only modifying the\nfields that you'd like to change. Here's an example of what your\n",(0,o.jsx)(n.code,{children:"update_config"})," message might look like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "update_config": {\n    "name": "ekez dao",\n    "description": "The first DAO of the new DAO DAO UI outside a docker container!",\n    "threshold": {\n      "absolute_percentage": {\n        "percentage": "0.66"\n      }\n    },\n    "max_voting_period": {\n      "time": 604800\n    },\n    "proposal_deposit": "0",\n    "refund_failed_proposals": true\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Here I've updated the DAO's description to clarify that there were in\nfact other DAOs before this one but they all ran in Docker containers."}),"\n",(0,o.jsxs)(n.p,{children:["To finish up we just combine our WASM Message and our ",(0,o.jsx)(n.code,{children:"update_config"}),"\nmessage by putting the ",(0,o.jsx)(n.code,{children:"update_config"})," message into the ",(0,o.jsx)(n.code,{children:"msg"})," field of\nthe WASM Message:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "wasm": {\n    "execute": {\n      "contract_addr": "<DAO ADDRESS>",\n      "msg": {\n        "update_config": {\n          "name": "ekez dao",\n          "description": "The first DAO of the new DAO DAO UI outside a docker container!",\n          "threshold": {\n            "absolute_percentage": {\n              "percentage": "0.66"\n            }\n          },\n          "max_voting_period": {\n            "time": 604800\n          },\n          "proposal_deposit": "0",\n          "refund_failed_proposals": true\n        }\n      },\n      "funds": []\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"executing-the-config-update",children:"Executing the config update"}),"\n",(0,o.jsx)(n.p,{children:"To execute the config update just finish creating your proposal and\nhold a vote with your fellow DAO members. If the proposal passes you\ncan execute it and you'll have a new DAO config!"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var o=t(7294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);