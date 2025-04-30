---
sidebar_position: 7
---

# How to bulk import actions

To bulk import actions, you can use the `Bulk Import Actions` action in the
`Advanced` category of the Action Library when creating a proposal.

![Bulk import actions](/img/dao-governance/bulk-import-actions.png)

You can use either a JSON or CSV file. CSV files are easier to use but only
support some of the actions, whereas JSON files support all actions.

### JSON

The JSON file (with extension `.json`) must be formatted with one top-level
`actions` key, which is an array of actions, like this:

```json
{
  "actions": [
    // INSERT ACTIONS HERE
  ]
}
```

And an action looks like this:

```json
{
  "key": "<ACTION KEY>",
  "data": {
    // INSERT ACTION DATA HERE
  }
}
```

### CSV

The CSV file (with extension `.csv`) must have a header with an `ACTION` column
and columns for each key in the `data` object of an action. Only actions with
flat data objects (i.e. no nested objects or arrays) are supported.

A CSV that imports a bunch of Spend actions would look like this:

```
ACTION,to,amount,denom
spend,junoAddress,5,ujuno
spend,anotherJunoAddress,5,ujuno
spend,junoAddress,1,ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034
```

## Action keys

The action keys can be found in
[`@dao-dao/types/actions.ts`](https://github.com/DA0-DA0/dao-dao-ui/tree/development/packages/types/actions.ts)
in the `ActionKey` enum. For example:

- `spend`
- `execute`
- `mintNft`
- `mint`

The key and data format for an action are defined in its `README.md`, and the
actions can be found in the following places:

- [`@dao-dao/stateful/actions/core/actions`](https://github.com/DA0-DA0/dao-dao-ui/tree/development/packages/stateful/actions/core/actions)
  — common actions to all DAOs.
- [`@dao-dao/stateful/voting-module-adapter/adapters/*/actions`](https://github.com/DA0-DA0/dao-dao-ui/tree/development/packages/stateful/voting-module-adapter/adapters)
  — each voting module adapter may contain specific actions (for example:
  member-based DAOs include a Manage Members action).
- [`@dao-dao/stateful/proposal-module-adapter/adapters/*/common/actions`](https://github.com/DA0-DA0/dao-dao-ui/tree/development/packages/stateful/proposal-module-adapter/adapters)
  — each proposal module adapter may contain specific actions (for example:
  single choice proposals have a different Update Proposal Submission Config
  action from multiple choice proposals).
- [`@dao-dao/stateful/modules/modules/*/actions`](https://github.com/DA0-DA0/dao-dao-ui/tree/development/packages/stateful/modules/modules)
  — each module may contain specific actions (for example: the vesting payments
  module adds an action to manage vesting payments).

Here are some common ones:

### [`spend`](https://github.com/DA0-DA0/dao-dao-ui/tree/development/packages/stateful/actions/core/actions/Spend/README.md)

For sending money from the treasury.

```json
{
  "fromChainId": "<CHAIN ID>",
  "toChainId": "<CHAIN ID>",
  "from": "<FROM ADDRESS>",
  "to": "<RECIPIENT ADDRESS>",
  "amount": "<AMOUNT>",
  "denom": "<DENOM>"
}
```

### [`execute`](https://github.com/DA0-DA0/dao-dao-ui/tree/development/packages/stateful/actions/core/actions/Execute/README.md)

For executing a smart contract.

```json
{
  "chainId": "<CHAIN ID>",
  "sender": "<EXECUTOR ADDRESS>",
  "address": "<SMART CONTRACT ADDRESS>",
  "message": "<SMART CONTRACT MESSAGE>",
  "funds": [
    {
      "denom": "<DENOM>",
      "amount": "<AMOUNT>",
      "decimals": "<DECIMALS>"
    }
  ]
}
```

### [`mintNft`](https://github.com/DA0-DA0/dao-dao-ui/tree/development/packages/stateful/actions/core/actions/MintNft/README.md)

For minting an NFT in a collection the DAO controls.

```json
{
  "contractChosen": true,
  "collectionAddress": "<NFT COLLECTION ADDRESS>",
  "mintMsg": {
    "owner": "<RECIPIENT ADDRESS>",
    "token_id": "<UNIQUE TOKEN ID>",
    "token_uri": "<JSON METADATA URL>"
  }
}
```

### [`mint`](https://github.com/DA0-DA0/dao-dao-ui/blob/development/packages/stateful/voting-module-adapter/adapters/DaoVotingTokenStaked/actions/DaoVotingTokenStakedMint/README.md)

For minting governance tokens in a token-based DAO.

```json
{
  "recipient": "<RECIPIENT ADDRESS>",
  "amount": "<TOKEN AMOUNT>"
}
```
