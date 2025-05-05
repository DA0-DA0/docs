---
sidebar_position: 5
---

# Making Use of CW721-Roles

CW721-Roles are non-transferrable NFT's that associate its owner with a specific role and weight.  

## Examples of CW721-Roles In Use
- **Creative Gaming / On-Chain Simulations**: MRPG (multi-role-playing-games), an other on-chain simulations can make use of roles.
- **Internal Management App**: a DAO could limit access of content to members with specific roles. A DAO might even decide conditions that require a role and also a minimum voting power in order to access content.
- **Custom Payroll & Distribution Contracts:** DAOs making use of smart contract to automate distributions to their roles. 

## Workflow 

### 1. Prepare Roles 
Decide what roles are needed, as well as any weight distribution for the roles. 

### 2. Instantiate & Mint Proposal 

Define the following in a smart contract instantiation proposal:
- `name` - name of your DAO roles collection
- `symbol` - collection symbol
- `minter` - minter of collection *set-as-DAO*
<!-- - `withdraw_address` -  *set-as-DAO* -->

![Init Roles](/img/quickstart/cw721-roles-init.png)
The minter is the only address with the ability to transfer, burn, or modify the state of the contracts.

To propose minting new role tokens:
- `token_id`
- `owner`
- `token_uri`
- `extension` - Metadata extension for the `role` & `weight`

![Mint Roles](/img/quickstart/cw721-roles-mint.png)

:::info
 If a DAO has not yet assigned roles, all tokens can be minted to the DAO treasury, until roles are assigned with a nft-transfer proposal.
:::

### 3. Implement Roles Into Custom UI 
With the roles collection contract known, ownership queries can be made by clients and other contracts to power features that make use of the DAOs role tokens.