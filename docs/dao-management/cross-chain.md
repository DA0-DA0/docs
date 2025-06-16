# Cross-chain support

DAOs on DAO DAO can create and manage accounts on many chains with the magic of IBC, allowing them to hold assets and interact with smart contracts, native protocols, and dApps across the ecosystem. The following is a description of how this works. A user-friendly guide of how to manage cross-chain assets can be found [here](treasury/cross-chain).

## Terminology

In the UI, wherever the phrase "Cross-Chain Accounts" is used, it refers to Polytone (described below). Interchain Accounts, the native Cosmos SDK module, is referred to as "ICA".

## Polytone (via CosmWasm)

[Polytone](https://github.com/cosmos/ibc-apps/tree/main/cosmwasm/polytone) is a protocol developed by DAO DAO which utilizes CosmWasm smart contracts and IBC to enable cross-chain accounts. Any entity on a blockchain, such as a wallet or a DAO (which is just a smart contract), can use Polytone.

Currently, Polytone can be deployed on any chain that supports both CosmWasm and IBC. Once the necessary smart contracts are deployed on two chains, a Polytone connection can be established between them. A connection is one-way, allowing entities on the source chain to create accounts on the destination chain. Create two Polytone connections, each going in opposite directions between the same two chains, to establish bidirectional cross-chain support.

If you want to create a cross-chain account for your DAO on a chain that supports CosmWasm and IBC, but you don't see the option in the UI when following the guide mentioned at the beginning of this page, please [reach out to us on Discord](https://discord.daodao.zone) and we will be happy to help. Any chain with DAO DAO deployed should also support Polytone, as well as many other chains in the Cosmos ecosystem.

Polytone supports automatic relaying, callbacks, error handling, and transaction simulation, making it the best available solution for cross-chain protocols, like DAO DAO.

### Drawbacks

#### Downtime

If the IBC connection a Polytone connection uses expires (i.e. it's not used at all during its trusted period), the Polytone connection will be frozen, leading to accounts managed through this connection to become temporarily inaccessible.

Fortunately, a governance proposal on each chain can refresh the expired IBC clients used by a connection and unfreeze it. Also, a Polytone connection can reuse an existing IBC connection, such as the one used to send native tokens to the other chain—since the primary token transfer connection tends to be used quite frequently by others, Polytone connections between well-trafficked chains are at extremely low risk of ever experiencing downtime.

Also, relayers routinely poll for IBC clients that are almost expired and automatically refresh them, resetting their expiration period. With sufficient relayer uptime, a Polytone connection can experience no downtime.

## Interchain Accounts (ICA)

[ICA](https://ibc.cosmos.network/main/apps/interchain-accounts/overview) is a native Cosmos SDK protocol that enables cross-chain accounts. Similar to Polytone, any entity on a blockchain can use ICA. While it is sometimes supported by chains that do not support CosmWasm (and thus do not support Polytone), we discourage using ICA due to its many drawbacks detailed below.

### Drawbacks

#### Relayers

Relayers don't seem to automatically relay transactions which establish new ICAs, leading to confusion and requiring a technically knowledgeable human to manually relay the transaction. This is suboptimal when trying to create a seamless experience on a website that is trying to lower knowledge and cost barriers to setting up sophisticated organizations.

#### Downtime

On multiple accounts, blockchain developer teams have broken the ICA module during unrelated upgrades, resulting in temporarily locked funds while they fix it and push a new upgrade. Blockchain upgrades are a hassle and require coordination from a supermajority of the validator set.

It is also possible to break the CosmWasm module during a chain upgrade (which has happened in the past), though in practice this is far more rare and has been seen as a more urgent problem yielding a much faster resolution.

ICA thus far is seemingly not used enough to warrant the attention we feel is needed in order to be reliable.

#### Governance restriction

The destination/host chain can specify/limit which messages ICAs are allowed to execute, and this parameter can be changed at any point through a governance proposal. While we don't expect any chain to intentionally lock a DAO's funds, it is technically possible to do so, which is undesirable. Chains may have valid reasons for needing to configure ICA with specific limitations, and/or they may not always be aware that a DAO on another chain is using ICA to manage funds there.

#### Missing callbacks

ICA does not support callbacks, making it impossible for a smart contract on the source chain to query the result of the execution and display success or failure and difficult for a website to do so.

#### Ambiguous error/timeout distinction

When an ICA transaction contains an error and cannot be executed (e.g. it tries to send to an invalid address, spend nonexistent funds, or execute a malformed message on a smart contract), nothing happens. Attempting to relay an erroneous transaction simply fails, and eventually it times out **without recording the error**.

This makes it very difficult to investigate and determine why an ICA transaction did not occur—it may have simply timed out due to lack of relayer activity, or it may have been constructed incorrectly by the sender.

#### Simulation unsupported

When creating a proposal in a DAO, it is very useful to first simulate the intended transaction to ensure it is valid before opening up the voting period—it would be a waste of time and effort to go through a whole proposal voting period only to find out that the proposal fails on execution, and sometimes proposals are time-sensitive. The DAO DAO website automatically simulates a proposal before submitting it to prevent this from happening, including cross-chain actions that use Polytone, allowing the proposal creator to view and correct any errors ahead of time.

This is possible because smart contracts, such as a DAO or Polytone, support transaction simulation, just like wallets and multisigs.

Unfortunately, ICAs do not support transaction simulation. This means that when creating a proposal containing an ICA execution, you pretty much just have to hope it works. And because ICAs do not store errors if they fail to relay, you won't even be able to tell what caused your ICA execution to do nothing.

## Conclusion

Since ICA is supported by more chains than CosmWasm, it would be very nice to be able to rely on it. However, many of the ICA module's drawbacks are deal breakers, and users of DAO DAO have consistently experienced problems using it.

Since Polytone solves all of ICA's drawbacks, we strongly urge you to avoid using ICA whenever possible, and let us know when you want a Polytone connection set up on a new chain.

### Is ICA necessary?

In some instances, using ICA is unfortunately necessary.

#### No CosmWasm

Chains without CosmWasm of course do not support Polytone, and thus ICA is the only choice if you need to interact directly with a native module on the chain. However, when possible, you should store assets on the DAO's home chain or another one of its Polytone-connected ("Cross-Chain") accounts.

#### Multi-hop IBC transfers (PFM)

In order to [send tokens over IBC](treasury/send/#change-recipient-chain) with intermediary hops that unwind the IBC token (e.g. sending Noble USDC from Osmosis to Neutron), a DAO must have an account on each intermediary chain. It is a requirement of [packet-forward-middleware](https://github.com/cosmos/ibc-apps/tree/main/middleware/packet-forward-middleware) that an address be specified for each chain involved in a multi-hop in case it fails halfway through and needs to leave the tokens in an account on an intermediary chain. This is exceedingly rare but technically possible in the protocol and serves as a failsafe.

In order to prevent loss of funds or asking DAOs to trust a third party, we decided to require that a DAO has an account on every intermediary chain in a multi-hop, so that if it fails, the tokens being sent remain under DAO control. Thus an ICA may be required to enable multi-hop transfers using assets native to that chain if CosmWasm/Polytone is unsupported.

For example, Noble USDC is a common asset used by DAOs, and Noble does not (as of writing this) support CosmWasm/Polytone. So in order to perform multi-hops with USDC, a DAO must first create an ICA on Noble. We strongly advise against storing any funds in the Noble ICA, instead just using its existence as a fallback measure during USDC multi-hops from/to other chains.
