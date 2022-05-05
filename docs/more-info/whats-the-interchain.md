---
sidebar_position: 3
---

# What's the interchain?

The interchain (or cross-chain) is a phrase used to describe interoperability between separate,
self-sovereign blockchains.

## What's a blockchain?
A blockchain is a database made up of *blocks* of data, concatenated together to form a *chain*.

Specifically, new data comes in piece by piece in the form of transactions. Each transaction is added to a block. Each blocks is chained to the previous block, creating a chronological ordering of data.

While blockchains can store any type of data, the most common use is to produce a ledger: an append-only list of transactions. For example, Bitcoin's blockchain stores all the transactions from one wallet (account) to every other. The balance of each account is a reduce over these transactions.

Blockchains use cryptography and distributed computing algorithms to provide immutability, meaning that data entered cannot be changed after the fact. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.

## How do you send tokens between blockchains?

Short answer: the **inter-blockchain**, or **IBC** protocol.

Before IBC, each blockchain was siloed. There was no way to send a token from one
blockchain to another.
IBC allows chains to share data with one another, including tokens.

:::tip
Since DAO DAO is IBC-native, your DAO governance tokens can be shared across any chain that supports IBC. Want your governance token to be tradeable [Osmosis](https://osmosis.zone/)? DAO DAO can help with that!
:::

### How does IBC work?

Say Alice wants to send 10 ATOM from her chain to Bob's chain:

1. Bob and Alice each run a light client of the other, tracking headers, but not
   replicating the chain’s full state.

2. Alice bonds 10 ATOM on Alice’s chain.

3. Alice relays a proof to Bob that she has bonded 10 ATOM.

4. Bob verifies the proof. if valid, Bob creates 10 ATOM "vouchers" on his
   chain.

The ATOM on Bob’s chain are not real ATOM. they represent Alice's ATOM, and a
proof that those ATOM are frozen. But Bob can “redeem” her vouchers for ATOM on
A anytime. So they’re as good as ATOM!

:::tip
Want to learn more about IBC? Check out [the Cosmos docs](https://v1.cosmos.network/intro#designing-the-internet-of-blockchains).
:::
