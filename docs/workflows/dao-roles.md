---
sidebar_position: 5
---

# Making Use of CW721-Roles

CW721-Roles are non-transferrable NFT's that associate its owner with a specific role and weight.  

## When Might A DAO use CW721-Roles?
One example of making use of Cw721-Roles is a scenario of a DAO having an internal management application with access token-gated by active participating members. Conditions can be made to require a role and a minimum voting power in order to access content. Smart contracts can also be created to interact with a DAO's roles collection

## Workflow 

### 1. Prepare Roles 
Decide what roles are needed, as well as any weight distribution for the roles. 

### 2. Instantiate & Mint Proposal 
Propose to create the roles collection by defining:
- `name`
- `symbol`
- `minter` - *set-as-DAO*
- `withdraw_address` -  *set-as-DAO*

The minter is the only address with the ability to transfer, burn, or modify the state of the contracts.

Propose to mint:
- `token_id`
- `owner`
- `token_uri`
- `extension` - Metadata extension for the `role` & `weight`

:::info
 If a DAO has not yet assigned roles, all tokens can be minted to the DAO treasury, until roles are assigned with a nft-transfer proposal.
:::

### 3. Implement Roles Into Custom UI 
With the roles collection contract known, a client can now perform an ownership query to the contract to check if for example a connected wallet is assigned a role to an internal DAO committee website.