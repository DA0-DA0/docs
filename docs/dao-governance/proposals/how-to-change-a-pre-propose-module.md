---
sidebar_position: 6
---

# How to change a pre-propose module

The proposal module system enables DAOs to support any type of execution flow
that can be coded in a smart contract, and the pre-propose module is the first
step in the proposal process. It determines the process for submitting a
proposal: who can propose something, whether or not there's a deposit, etc.

Proposal modules can either set a pre-propose module, or not use one, which
effectively removes all restrictions (meaning anyone can submit a proposal).

There are two pre-propose module types:

- base: manages deposits and submission policy
- approval: same as base, plus the ability to set an approver that must
  approve pending proposals before they open for voting on the proposal module

Each proposal module has corresponding pre-propose modules (e.g. the
`dao-proposal-single` module has `dao-pre-propose-single` and
`dao-pre-propose-approval-single`, the `dao-proposal-multiple` module has
`dao-pre-propose-multiple` and `dao-pre-propose-approval-multiple`, etc.).

You can always add, remove, or replace the pre-propose module for a proposal
module.

Adding and disabling proposal modules is not common, and can be dangerous, and
thus is not easily supported by the UI, but it is not hard to do with a little
bit of time.

> ⚠️ Be careful, the DAO will be bricked and all assets will be locked if the
> pre-propose module is misconfigured. It is best practice to ensure at least
> one is functioning before disabling another. Or, better yet, just add an
> entirely new proposal module and then disable the existing one, instead of
> trying to change the pre-propose module.

## Guide

First you need the address of the proposal module and the code ID of the
pre-propose module. You can find all uploaded DAO DAO code IDs here:
https://github.com/DA0-DA0/dao-dao-ui/blob/development/packages/utils/constants/codeIds.json

The following guide will update a `v2.6.0` single choice proposal module to use
the `v2.6.0` base pre-propose module on Osmosis mainnet (`osmosis-1`), so we
need the `dao-proposal-single` address and `dao-pre-propose-single` code ID.

You can use the DAO DAO indexer to query for the active proposal modules in a
DAO and find the `dao-proposal-single` address:

```bash
DAO_ADDRESS=INSERT_DAO_ADDRESS curl -s https://indexer.daodao.zone/osmosis-1/contract/$DAO_ADDRESS/daoCore/activeProposalModules | jq
```

Or query the chain directly:

```bash
osmosisd query contract-state smart $DAO_ADDRESS '{"active_proposal_modules":{}}' --output json | jq
```

The output will look like this:

```json
[
  {
    "prefix": "A",
    "status": "enabled",
    "address": "DAO_PROPOSAL_SINGLE_ADDRESS",
    "info": { "version": "2.6.0", "contract": "crates.io:dao-proposal-single" }
  },
  {
    "prefix": "B",
    "status": "enabled",
    "address": "DAO_PROPOSAL_MULTIPLE_ADDRESS",
    "info": {
      "version": "2.6.0",
      "contract": "crates.io:dao-proposal-multiple"
    }
  }
]
```

You can see the `dao-proposal-single` address is `DAO_PROPOSAL_SINGLE_ADDRESS`.

You can also find the `dao-pre-propose-single` code ID in the `codeIds.json`
file linked above: `1250`.

A few steps involve base64 encoding, which
[base64encode.org](https://www.base64encode.org/) can help with.

Here is the configuration we will use:

- submission policy: DAO members only
- no proposal deposit

You can look at the JSON schemas' `instantiate` definitions for the pre-propose
module to see the configuration fields you need to set, as well as the
`dao-proposal-single` contract's JSON schema to see the
`update_pre_propose_info` execution message that performs the actual update:

- [dao-pre-propose-single JSON schema](https://github.com/DA0-DA0/dao-contracts/blob/development/contracts/pre-propose/dao-pre-propose-single/schema/dao-pre-propose-single.json)
- [dao-proposal-single JSON schema](https://github.com/DA0-DA0/dao-contracts/blob/development/contracts/proposal/dao-proposal-single/schema/dao-proposal-single.json)

You can also look at the Rust source code, which contains the corresponding
`InstantiateMsg` and `ExecuteMsg` structs, though you will need to know how
serde serializes various types and enums which can be tricky. The JSON schemas
above contain all the information you need, but here is the source code for
reference:

- [dao-proposal-single `ExecuteMsg`
  struct](https://github.com/DA0-DA0/dao-contracts/blob/development/contracts/proposal/dao-proposal-single/src/msg.rs)
- [dao-pre-propose-single `InstantiateMsg`
  struct](https://github.com/DA0-DA0/dao-contracts/blob/development/contracts/pre-propose/dao-pre-propose-single/src/contract.rs)
  which just extends the [dao-pre-propose-base `InstantiateMsg`
  struct](https://github.com/DA0-DA0/dao-contracts/blob/development/packages/dao-pre-propose-base/src/msg.rs)

Putting that all together, the full message we need to execute on the proposal
module via a proposal, with everything decoded for readability, follows:

```
{
  "update_pre_propose_info": {
    "info": {
      "module_may_propose": {
        "info": {
          "code_id": 1250,
          "msg": {
            "submission_policy": {
              "specific": {
                "dao_members": true,
                "allowlist": [],
                "denylist": []
              }
            },
            "extension": {}
          },
          "admin": { "core_module": {} },
          "funds": [],
          "label": "dao-pre-propose-single-v2.6.0"
        }
      }
    }
  }
}
```

Now we have to encode the `msg` field with base64:

```
{
  "submission_policy": {
    "specific": {
      "dao_members": true,
      "allowlist": [],
      "denylist": []
    }
  },
  "extension": {}
}
```

This gets base64-encoded to:

```
ewogICJzdWJtaXNzaW9uX3BvbGljeSI6IHsKICAgICJzcGVjaWZpYyI6IHsKICAgICAgImRhb19tZW1iZXJzIjogdHJ1ZSwKICAgICAgImFsbG93bGlzdCI6IFtdLAogICAgICAiZGVueWxpc3QiOiBbXQogICAgfQogIH0sCiAgImV4dGVuc2lvbiI6IHt9Cn0=
```

Now replace the pre-propose module instantiation `msg` field with the
base64-encoded instantiation message:

```
{
  "update_pre_propose_info": {
    "info": {
      "module_may_propose": {
        "info": {
          "code_id": 1250,
          "msg": "ewogICJzdWJtaXNzaW9uX3BvbGljeSI6IHsKICAgICJzcGVjaWZpYyI6IHsKICAgICAgImRhb19tZW1iZXJzIjogdHJ1ZSwKICAgICAgImFsbG93bGlzdCI6IFtdLAogICAgICAiZGVueWxpc3QiOiBbXQogICAgfQogIH0sCiAgImV4dGVuc2lvbiI6IHt9Cn0=",
          "admin": { "core_module": {} },
          "funds": [],
          "label": "dao-pre-propose-single-v2.6.0"
        }
      }
    }
  }
}
```

And you have the full message to execute on the proposal module via a proposal.
You can now use the DAO DAO UI to create a proposal with the `Execute Smart
Contract` action, with the contract address being the `dao-proposal-single`
module's address, and the message field containing the above text. Once you pass
and execute the proposal, the pre-propose module will be updated.
