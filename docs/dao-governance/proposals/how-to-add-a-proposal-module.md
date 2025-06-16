# How to add a proposal module

The proposal module system enables DAOs to support any type of execution flow that can be coded in a smart contract.

DAO DAO provides two modules:

* single choice (e.g. Yes/No/Abstain)
* multiple choice (e.g. A/B/C/None of the Above)

You can always add new modules or disable existing ones, though there must always be at least one module enabled (or else the DAO will not function). The most likely reason one would want to add a new module is to use a new version with new features. Because the proposal module interface is standardized and unchanging, newer versions of proposal modules should be backwards compatible.

Adding and disabling proposal modules is not common, and can be dangerous, and thus is not easily supported by the UI, but it is not hard to do with a little bit of time.

{% hint style="warning" %}
Be careful to verify all proposal modules function correctly before disabling one you no longer need, because if the only enabled proposal modules are broken or the addresses are incorrect, the DAO will be bricked and all assets will be locked.
{% endhint %}

## Guide

First you need the code IDs of the proposal module and its corresponding pre-propose module. You can find all uploaded DAO DAO code IDs here: https://github.com/DA0-DA0/dao-dao-ui/blob/development/packages/utils/constants/codeIds.json

The following guide will add the `v2.6.0` single choice proposal module to a DAO on Osmosis mainnet (`osmosis-1`), so we need the `dao-proposal-single` and `dao-pre-propose-single` code IDs.

A few steps involve base64 encoding, which [base64encode.org](https://www.base64encode.org/) can help with.

Here is the configuration we will use:

* threshold: majority
* quorum: 20%
* max voting period: 1 week
* only members can execute: true
* close proposal on execution failure: true
* allow revoting: false
* submission policy: DAO members only
* no proposal deposit

You can look at the JSON schemas' `instantiate` definitions for the proposal and pre-propose modules to see the configuration fields you need to set, as well as the `dao-dao-core` contract's JSON schema to see the `update_proposal_modules` execution message that performs the actual update:

* [dao-proposal-single JSON schema](https://github.com/DA0-DA0/dao-contracts/blob/development/contracts/proposal/dao-proposal-single/schema/dao-proposal-single.json)
* [dao-pre-propose-single JSON schema](https://github.com/DA0-DA0/dao-contracts/blob/development/contracts/pre-propose/dao-pre-propose-single/schema/dao-pre-propose-single.json)
* [dao-dao-core JSON schema](https://github.com/DA0-DA0/dao-contracts/blob/development/contracts/dao-dao-core/schema/dao-dao-core.json)

You can also look at the Rust source code, which contains the corresponding `InstantiateMsg` and `ExecuteMsg` structs, though you will need to know how serde serializes various types and enums which can be tricky. The JSON schemas above contain all the information you need, but here is the source code for reference:

* [dao-proposal-single `InstantiateMsg` struct](https://github.com/DA0-DA0/dao-contracts/blob/development/contracts/proposal/dao-proposal-single/src/msg.rs)
* [dao-pre-propose-single `InstantiateMsg` struct](https://github.com/DA0-DA0/dao-contracts/blob/development/contracts/pre-propose/dao-pre-propose-single/src/contract.rs) which just extends the [dao-pre-propose-base `InstantiateMsg` struct](https://github.com/DA0-DA0/dao-contracts/blob/development/packages/dao-pre-propose-base/src/msg.rs)
* [dao-dao-core `ExecuteMsg` struct](https://github.com/DA0-DA0/dao-contracts/blob/development/packages/dao-interface/src/msg.rs) defined in the `dao-interface` crate.

Putting that all together, the full message we need to execute on the DAO via a proposal, with everything decoded for readability, follows:

```
{
  "update_proposal_modules": {
    "to_add": [{
      "admin": { "core_module": {} },
      "code_id": 1252,
      "label": "dao-proposal-single-v2.6.0",
      "msg": {
        "threshold": {
          "threshold_quorum": {
            "threshold": { "majority": {} },
            "quorum": { "percent": "0.2" }
          }
        },
        "max_voting_period": { "time": 604800 },
        "only_members_execute": true,
        "close_proposal_on_execution_failure": true,
        "allow_revoting": false,
        "pre_propose_info": {
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
      },
      "funds": []
    }],
    "to_disable": []
  }
}
```

Now we have to recursively encode the `msg` fields with base64, so starting from the innermost `msg` field for the pre-propose module instantiation message:

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

Now isolate the proposal module instantiation `msg`, and replace the pre-propose module instantiation `msg` field with the base64-encoded pre-propose module instantiation message from above:

```
{
  "threshold": {
    "threshold_quorum": {
      "threshold": { "majority": {} },
      "quorum": { "percent": "0.2" }
    }
  },
  "max_voting_period": { "time": 604800 },
  "only_members_execute": true,
  "close_proposal_on_execution_failure": true,
  "allow_revoting": false,
  "pre_propose_info": {
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
```

This gets base64-encoded to:

```
ewogICJ0aHJlc2hvbGQiOiB7CiAgICAidGhyZXNob2xkX3F1b3J1bSI6IHsKICAgICAgInRocmVzaG9sZCI6IHsgIm1ham9yaXR5Ijoge30gfSwKICAgICAgInF1b3J1bSI6IHsgInBlcmNlbnQiOiAiMC4yIiB9CiAgICB9CiAgfSwKICAibWF4X3ZvdGluZ19wZXJpb2QiOiB7ICJ0aW1lIjogNjA0ODAwIH0sCiAgIm9ubHlfbWVtYmVyc19leGVjdXRlIjogdHJ1ZSwKICAiY2xvc2VfcHJvcG9zYWxfb25fZXhlY3V0aW9uX2ZhaWx1cmUiOiB0cnVlLAogICJhbGxvd19yZXZvdGluZyI6IGZhbHNlLAogICJwcmVfcHJvcG9zZV9pbmZvIjogewogICAgIm1vZHVsZV9tYXlfcHJvcG9zZSI6IHsKICAgICAgImluZm8iOiB7CiAgICAgICAgImNvZGVfaWQiOiAxMjUwLAogICAgICAgICJtc2ciOiAiZXdvZ0lDSnpkV0p0YVhOemFXOXVYM0J2YkdsamVTSTZJSHNLSUNBZ0lDSnpjR1ZqYVdacFl5STZJSHNLSUNBZ0lDQWdJbVJoYjE5dFpXMWlaWEp6SWpvZ2RISjFaU3dLSUNBZ0lDQWdJbUZzYkc5M2JHbHpkQ0k2SUZ0ZExBb2dJQ0FnSUNBaVpHVnVlV3hwYzNRaU9pQmJYUW9nSUNBZ2ZRb2dJSDBzQ2lBZ0ltVjRkR1Z1YzJsdmJpSTZJSHQ5Q24wPSIsCiAgICAgICAgImFkbWluIjogeyAiY29yZV9tb2R1bGUiOiB7fSB9LAogICAgICAgICJmdW5kcyI6IFtdLAogICAgICAgICJsYWJlbCI6ICJkYW8tcHJlLXByb3Bvc2Utc2luZ2xlLXYyLjYuMCIKICAgICAgfQogICAgfQogIH0KfQ==
```

Now replace the proposal module instantiation `msg` field in the `update_proposal_modules` execution message with the base64-encoded proposal module instantiation message from above:

```
{
  "update_proposal_modules": {
    "to_add": [{
      "admin": { "core_module": {} },
      "code_id": 1252,
      "label": "dao-proposal-single-v2.6.0",
      "msg": "ewogICJ0aHJlc2hvbGQiOiB7CiAgICAidGhyZXNob2xkX3F1b3J1bSI6IHsKICAgICAgInRocmVzaG9sZCI6IHsgIm1ham9yaXR5Ijoge30gfSwKICAgICAgInF1b3J1bSI6IHsgInBlcmNlbnQiOiAiMC4yIiB9CiAgICB9CiAgfSwKICAibWF4X3ZvdGluZ19wZXJpb2QiOiB7ICJ0aW1lIjogNjA0ODAwIH0sCiAgIm9ubHlfbWVtYmVyc19leGVjdXRlIjogdHJ1ZSwKICAiY2xvc2VfcHJvcG9zYWxfb25fZXhlY3V0aW9uX2ZhaWx1cmUiOiB0cnVlLAogICJhbGxvd19yZXZvdGluZyI6IGZhbHNlLAogICJwcmVfcHJvcG9zZV9pbmZvIjogewogICAgIm1vZHVsZV9tYXlfcHJvcG9zZSI6IHsKICAgICAgImluZm8iOiB7CiAgICAgICAgImNvZGVfaWQiOiAxMjUwLAogICAgICAgICJtc2ciOiAiZXdvZ0lDSnpkV0p0YVhOemFXOXVYM0J2YkdsamVTSTZJSHNLSUNBZ0lDSnpjR1ZqYVdacFl5STZJSHNLSUNBZ0lDQWdJbVJoYjE5dFpXMWlaWEp6SWpvZ2RISjFaU3dLSUNBZ0lDQWdJbUZzYkc5M2JHbHpkQ0k2SUZ0ZExBb2dJQ0FnSUNBaVpHVnVlV3hwYzNRaU9pQmJYUW9nSUNBZ2ZRb2dJSDBzQ2lBZ0ltVjRkR1Z1YzJsdmJpSTZJSHQ5Q24wPSIsCiAgICAgICAgImFkbWluIjogeyAiY29yZV9tb2R1bGUiOiB7fSB9LAogICAgICAgICJmdW5kcyI6IFtdLAogICAgICAgICJsYWJlbCI6ICJkYW8tcHJlLXByb3Bvc2Utc2luZ2xlLXYyLjYuMCIKICAgICAgfQogICAgfQogIH0KfQ==",
      "funds": []
    }],
    "to_disable": []
  }
}
```

And you have the full message to execute on the DAO via a proposal. You can now use the DAO DAO UI to create a proposal with the `Execute Smart Contract` action, with the contract address being the DAO's `dao-dao-core` contract, and the message field containing the above text.

Once you execute this, test the new proposal module by creating a proposal, voting on it, and executing it. If everything seems to work, you can now disable the old single choice proposal module by executing the following message in another proposal:

```
{
  "update_proposal_modules": {
    "to_add": [],
    "to_disable": ["EXISTING PROPOSAL MODULE ADDRESS"]
  }
}
```

Ideally, wait a while to see the new proposal module in action before disabling the old one.
