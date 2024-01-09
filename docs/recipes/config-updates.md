---
sidebar_position: 3
---

# Updating the config of a DAO

After you've deployed your DAO you may decide that you'd like to
change parts of the config.

In this recipe, we'll walk through the process of creating and voting
on a proposal to change your DAO's configuration.

## Setup

Before beginning you'll need to have a DAO deployed on DAO-DAO. For a
quick introduction to that see the
[quickstart](/quickstart/create-a-dao.md) guide.

## The DAO DAO config

All DAOs deployed from DAO DAO have a config with information like
name, description, and voting threshold. You can view the raw JSON of
a DAOs config from the command line by running a `{get_config: {}}`
query like so:

```
junod query wasm contract-state smart <DAO ADDRESS> '{"get_config": {}}'
```

Here's an example of what one of those configs might look like:

```json
{
  "config": {
    "name": "ekez dao",
    "description": "The first DAO of the new DAO DAO UI!",
    "threshold": {
      "absolute_percentage": {
        "percentage": "0.66"
      }
    },
    "max_voting_period": {
      "time": 604800
    },
    "proposal_deposit": "0",
    "refund_failed_proposals": true
  },
  "gov_token": "juno1lnrdwhf4xcx6w6tdpsghgv6uavem353gtgz77sdreyhts883wdjqpg7dk8",
  "staking_contract": "juno19nywm4al2pc2sdj834gtdm6tvcn5kqpghlwd022tvld0hek4jfes8jj6um"
}
```

Every part of this config can be updated via a governance proposal.

## Updating the config

To update a DAO's config we'll create a new proposal in the UI and add
a "Custom" message to it. Our custom message will be a WASM message
which, when executed, will call the `update_config` method on our DAO.

The structure of a WASM Message can be found
[here](https://docs.rs/cosmwasm-std/latest/cosmwasm_std/enum.WasmMsg.html). We'll
start by filling out most of the execute variant:

```json
{
  "wasm": {
    "execute": {
      "contract_addr": "<DAO ADDRESS>",
      "msg": {}, // TODO - fill this in
	  "funds": []
  }
}
```

The `update_config` message that we'll be executing with this has the
same structure as a DAOs config. To change only a few fields I
recommend copying your DAOs current config and then only modifying the
fields that you'd like to change. Here's an example of what your
`update_config` message might look like:

```json
{
  "update_config": {
    "name": "ekez dao",
    "description": "The first DAO of the new DAO DAO UI outside a docker container!",
    "threshold": {
      "absolute_percentage": {
        "percentage": "0.66"
      }
    },
    "max_voting_period": {
      "time": 604800
    },
    "proposal_deposit": "0",
    "refund_failed_proposals": true
  }
}
```

Here I've updated the DAO's description to clarify that there were in
fact other DAOs before this one but they all ran in Docker containers.

To finish up we just combine our WASM Message and our `update_config`
message by putting the `update_config` message into the `msg` field of
the WASM Message:

```json
{
  "wasm": {
    "execute": {
      "contract_addr": "<DAO ADDRESS>",
      "msg": {
        "update_config": {
          "name": "ekez dao",
          "description": "The first DAO of the new DAO DAO UI outside a docker container!",
          "threshold": {
            "absolute_percentage": {
              "percentage": "0.66"
            }
          },
          "max_voting_period": {
            "time": 604800
          },
          "proposal_deposit": "0",
          "refund_failed_proposals": true
        }
      },
      "funds": []
    }
  }
}
```

## Executing the config update

To execute the config update just finish creating your proposal and
hold a vote with your fellow DAO members. If the proposal passes you
can execute it and you'll have a new DAO config!
