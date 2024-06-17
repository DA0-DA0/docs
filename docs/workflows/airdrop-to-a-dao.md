---
sidebar_position: 1
---

# Airdrop To DAO Members

Sending tokens to current DAO members is made simple with use of the [cw-fund-distributor contract](https://github.com/DA0-DA0/dao-contracts/tree/development/contracts/external/cw-fund-distributor).

## Workflow 

### 1. Create & Fund Contract 
- instantiate with: 
    - `distribution_height` - the height used for snapshotting voting power
    - `funding_period` - a time duration that should suffice to move the funds to be distributed into the distributor contract. 
    - `voting_contract` - the DAOs voting contract for calculating distribution ratios
- ensure DAO is set as admin of contract.

:::info 
Funding the contract can only happen during this period. No claims can happen during this period.
:::

There are two contract entry points to fund a distribution: `FundNative` for native tokens & `Recieve` for cw20 tokens.

### 2. DAO Members Claim Tokens

After the `funding_period` expires, the funds held by distributor contract become available for claims.

Funding the contract is no longer possible at this point.

There are three contract entry points for choosing how to claim tokens: `ClaimNative`, `ClaimCw20`, and `ClaimAll`.

### 3. Fund Redistribution 
Considering it is more than likely that not every user would claim its allocation, it is possible to redistribute the unclaimed funds. 

The redistribution method finds all the claims that have been performed and subtracts the amounts from the initially funded balance. The respective allocation ratios for each DAO member remain the same; any previous claims are cleared.

Only the `cw_admin` can call the method.

