---
sidebar_position: 2
---

# Deploying a smart contract from a DAO

Have a smart contract, but want your DAO to control it?

In this recipe, we'll walk through the process of deploying a smart contract via
a proposal in DAO DAO.

This example is intended for folks who already have some amount of
experience deploying smart contracts in Juno. If you'd like a
refresher consider reading the [Juno
documentation](https://docs.junonetwork.io/smart-contracts-and-junod-development/tutorial-erc-20)
on smart contract deployment to learn more.

## Motivation

Smart contracts are typically structured such that their owner (the
person who deploys them) controls them. For example, the owner of a
smart contract that collects fees for its usage can withdraw those
funds. By deploying a smart contract from a DAO we can make sure that
the DAO owns the smart contract instead of a potentially untrustworthy
individual.

:::tip Did you know?

The Ethereum Name Service (ENS) is currently controlled by a four-of-seven
multisig. This means that at the root of the entire system are seven
people, four of whom together have complete control over the
contract. As they write in [their
docs](https://ens.domains/about/#about-root):

> In the long term, we would like the root multisig to be replaced by
> some form of distributed decision making process, as such systems
> become available.

DAO DAO is one such system.

:::

## Setup

Before beginning you'll need to have a DAO deployed on DAO-DAO. For a
quick introduction to that see the
[quickstart](../quickstart/create-a-dao) guide.

## Deploying a contract

From the homepage for your DAO go the proposals page and press the
create button to create a new proposal.

![](/static/img/examples/create-button.jpg)

Type in the name and description of your proposal and then add a
"WASM" message. We'll be using a WASM message as we'll be interacting
with a smart contract.

### Collecting information about the contract to be deployed

Next, you'll need to gather some information about the contract you'll
be deploying. You'll need to know the code ID for the contract and
what information the contract expects to be instantiated with.

At the time of writing the DAO-DAO smart contract is deployed with
code id `280` and we can learn what information it expects for
instantiation by taking a look at its
[`InstantiateMsg`](https://github.com/DA0-DA0/dao-contracts/blob/28744e2040fa09c0e3a4eb87905fc68895b01e9a/contracts/cw3-dao/src/msg.rs#L12-L28).

### Creating the deployment proposal

In order to deploy the contract DAO-DAO expects a
[`WasmMsg`](https://docs.rs/cosmwasm-std/0.16.2/cosmwasm_std/enum.WasmMsg.html),
which encapsulates all of ways that one might interact with a smart
contract on Juno. We'll be using the `Instantiate` variant so our
message will look something like this:

```json
{
  "wasm": {
    "instantiate": {
      "admin": "juno147huky2j39qccdw4a0j68y8xrpg7wwqfvkm29qfmsecn5nu6rl8qsle7gk",
      "code_id": 280,
      "label": "baby dao",
      "msg": {} // TODO - We'll create the message below.
    }
  }
}
```

Here we've set the `admin` of the contract to the address of the DAO
we'll be deploying the contract from. This allows the DAO to [perform
a
migration](https://github.com/CosmWasm/wasmd/blob/315284e3601b5e4a15a57b8b9ab5edd785323b9c/x/wasm/internal/types/tx.proto#L51-L52)
of the contract code should it want to. The admin field is optional if
you'd prefer to disable migration. You can find the address of your
DAO in the "Info" tab on your DAO's homepage.

The message field will vary from contract to contract and based on
how you'd like to set up the DAO you're deploying so its particulars
aren't terribly important. Here we'll use a pretty standard issue DAO
configuration:

```json
{
  "name": "baby dao",
  "description": "this is a dao created via a DAO-DAO proposal",
  "gov_token": {
    "instantiate_new_cw20": {
    "code_id": 279,
    "label": "bdao",
    "msg": {
      "name": "baby dao",
      "symbol": "bdao",
      "decimals": 6,
      "initial_balances": [
          {
            "address": "juno1m7a7nva00p82xr0tssye052r8sxsxvcy2v5qz6",
            "amount": "6000000"
          }
	    ]
      }
    }
  },
  "threshold": {
    "absolute_percentage": {
      "percentage": "0.5"
    }
  },
  "proposal_deposit_amount": "1",
  "max_voting_period": {
    "time": 604800
  }
}
```

Our final message is our WASM message with the above JSON object
replacing the `TODO` line above. With the replacement done you can
go ahead and create the proposal.

## Deployment

All that is left is to chat with the other members of your DAO and
vote on it. If it passes you can execute the proposal and your smart
contract will be instantiated!
