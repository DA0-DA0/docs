---
sidebar_position: 3
---

# Staking

A DAO's staking configuration determines the rules of the token staking process. Only token-based and NFT-based DAOs have a staking process to configure. Member-based DAOs do not have staking because they do not use tokens.

## How to update the staking configuration

To change the staking configuration of a DAO, you must submit a [governance proposal](../proposals/what) containing the `Update Staking Config` action from the `DAO Governance` category.

## Parameters

### Unstaking duration

After someone stakes tokens in a DAO, those tokens cannot be immediately unstaked. The unstaking duration is how long they remain locked after deciding to unstake. During the unstaking process, they do _not_ count towards your voting power, and you cannot transfer them.

This adds a time cost to staking and ensures a greater level of participatory commitment from members.
