---
sidebar_position: 4
---

# What's a blockchain?

A blockchain is a database made of _blocks_ of data, strung together to form a _chain_. Quite literally, a blockchain is a chain of blocks.

New data comes in piece by piece in the form of transactions. Each transaction is added to a block, and each block is chained to the previous block, creating a chronological ordering of events (or transactions). The canonical state of the blockchain can be derived by replaying each block in order from the beginning.

While blockchains can store any type of data, they are most commonly used to produce a ledger: an append-only list of transactions. For example, Bitcoin's blockchain stores all transactions that send tokens from one account (i.e. wallet) to another. The balance of each account can be verified by looking at all the transactions that involve that account, adding and subtracting accordingly.

Blockchains use cryptography and distributed computing algorithms to provide immutability, meaning that data entered cannot be changed after the fact. For Bitcoin, this means that transactions are permanently recorded and viewable by anyone.

## What's the interchain?

The interchain is a term used to describe interoperability between separate, self-sovereign blockchains. Interchain blockchains take advantage of protocols, like [IBC](https://www.coinbase.com/cloud/discover/dev-foundations/ibc-protocol), to send tokens between each other. They can also pass any other data, but tokens are a good example.

### What's a self-sovereign blockchain?

[Layer 2](https://ethereum.org/en/layer-2/) blockchains are built on top of layer 1 blockchains, like Ethereum. If a blockchain depends on another blockchain to exist, which is the case for most layer 2 blockchains on Ethereum, it is _not_ self-sovereign.

The [Cosmos ecosystem](https://cosmos.network) is comprised of many self-sovereign (i.e. layer 1) blockchains that utilize the [IBC](https://www.coinbase.com/cloud/discover/dev-foundations/ibc-protocol) protocol, allowing them to interact and participate in an interchain ecosystem, much like the Internet.

While layer 2 blockchains can interact with their base layer, they are not self-sovereign, because they cannot exist without it. Self-sovereign blockchains are not dependent on any other blockchain.

### How do you send tokens between blockchains?

Short answer: the **inter-blockchain communication (IBC)** protocol.

Before IBC, each blockchain was siloed. There was no way to send a token from one self-sovereign blockchain to another. IBC allows chains to share data with one another, including tokens.

You can dive deeper into IBC from [its website](https://www.ibcprotocol.dev/).

{% hint style="info" %}
Since DAO DAO is IBC-native, your DAO's governance tokens can be shared across any chain that supports IBC. Want your governance token to be tradeable on [Osmosis](https://osmosis.zone)? DAO DAO can help with that!
{% endhint %}

#### How does IBC work?

Say Alice wants to send 10 ATOM from her chain to Bob's chain:

1. Bob and Alice each run a light client of the other, tracking headers, but not replicating the chain's full state.
2. Alice bonds 10 ATOM on Alice's chain.
3. Alice relays a proof to Bob that she has bonded 10 ATOM.
4. Bob verifies the proof. If valid, Bob creates 10 ATOM "vouchers" on his chain.

The ATOM on Bob's chain is not real ATOM. They represent Alice's ATOM, and a proof that those ATOMs are frozen. But Bob can "redeem" her vouchers for ATOM anytime. So they're as good as ATOM!

{% hint style="info" %}
Want to learn more about IBC? Check out the [Cosmos docs](https://v1.cosmos.network/intro#designing-the-internet-of-blockchains).
{% endhint %}
