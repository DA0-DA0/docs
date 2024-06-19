---
sidebar_position: 5
---

# Technical breakdown

[DAO DAO's smart contracts](https://github.com/DA0-DA0/dao-contracts/) are built
with CosmWasm and thus run on blockchains that support CosmWasm:

- [Juno](https://junonetwork.io/)
- [Osmosis](https://osmosis.zone/)
- [Stargaze](https://stargaze.zone/)
- [Neutron](https://www.neutron.org/)
- [Migaloo](https://twitter.com/migaloo_zone)

### Developer Wiki
Further technical documentation can be found in the [contracts Github wiki](https://github.com/DA0-DA0/dao-contracts/wiki).

## What is CosmWasm?

CosmWasm is a [WebAssembly](https://webassembly.org/) virtual machine that runs
in a [Cosmos SDK](https://docs.cosmos.network/) module.

In practice, CosmWasm smart contracts (like DAO DAO's) are written in Rust.


## What is Rust?

[Rust](https://www.rust-lang.org/) is a performant, memory-safe, and thread-safe
programming language with a rich type system.

Writing smart contracts in Rust allows us to perform better security analysis on
our contracts, which in turn protects your DAOs from common attacks.

## What about the UI?

[DAO DAO's UI](https://github.com/DA0-DA0/dao-dao-ui) is built with
[Next.js](https://nextjs.org/) in [TypeScript](https://www.typescriptlang.org/).

As the UI is the primary entrypoint for users interacting with DAO DAO DAOs, its
security is as important as the smart contracts themselves. TypeScript increases
the likelihood that bugs are detected earlier, during development.

