---
sidebar_position: 3
---

# Governance proposals

Governance proposals are how DAOs change their state. Governance proposals are composed of three components: a title, a description, and proposal messages.


## Title

This is the human-readable title of your proposal. It will appear in voting screens.

## Description

This is the human-readable description of your proposal. You can use [Markdown
syntax](https://www.markdownguide.org/basic-syntax/) for rich formatting.

## Proposal messages

Proposal messages are actions that execute when the proposal passes. These messages let you do things like *mint* new governance tokens, *spend* from the shared treasury, and more. 

:::tip
Proposal messages are a bit like [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). 
They allow you to execute some action after your proposal passes.

Remember: everyone will be able to see the messages in your proposal!
:::

Your proposal can contain any number of proposal messages. 

### Spend messages

Spend messages will give some number of tokens from the DAO's treasury to the address specified.

### Mint messages

Mint messages will create some number of new DAO governance tokens, putting them in the address specified.

:::tip
If you want these coins to go into your treasury, put your DAO's address here.
:::

### Custom messages

You can add any JSON to a proposal. Perhaps you've deployed a custom smart
contract that ingests these data; perhaps there's another part of the stack that
you'd like to modify we haven't covered here. The sky is the limit!


Messages should fit the serde-json version of the struct [CosmosMsg](https://docs.rs/cosmwasm-std/latest/cosmwasm_std/enum.CosmosMsg.html).
