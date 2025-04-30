---
sidebar_position: 8
---

# How to create an autofill proposal link

Proposals and the actions they contain can be generated programmatically and
passed in via URL—this enables a more user-friendly experience for users of a
specific app or service that rely on DAO DAO for their governance needs.

Similar to the [bulk import actions](./bulk-import-actions) feature, you must
find the key and the shape of the data object for each action. However, unlike
bulk import, you must also find the proposal module adapter ID, and the action
key in the object must be `actionKey` instead of `key`.

## Link format

The link is simply the proposal creation page with a `prefill` parameter added,
like this:

`https://daodao.zone/dao/<DAO_ADDRESS>/proposals/create?prefill=<PREFILL_DATA>`

The `prefill` parameter can either be:

- a stringified JSON object
- a base64-encoded JSON object

> ⚠️ Remember to URL-escape the `prefill` parameter, whichever format it's in.
> For example, base64 strings sometimes contain `+` and `=`, which must be
> escaped as `%2B` and `%3D` respectively, or else they'll be decoded
> incorrectly and fail to autofill the proposal.

The format of the `prefill` object is always:

```json
{
  "id": "<PROPOSAL MODULE ADAPTER ID>",
  "data": {
    // PROPOSAL MODULE FORM DATA
  }
}
```

You can use [base64encode.org](https://www.base64encode.org/) to encode the JSON
object to a base64 string and [urlencoder.org](https://www.urlencoder.org/) to
URL-escape the base64 string.

### IPFS

The prefill object can get quite large which becomes impractical to use in a
URL, so instead you can upload a JSON blob to IPFS and replace the `prefill`
parameter with `pi`, pointing to the IPFS hash containing the object:

`https://daodao.zone/dao/<DAO_ADDRESS>/proposals/create?pi=<IPFS_HASH>`

### Proposal module adapter ID

The proposal module adapter IDs can be found in
[`@dao-dao/utils/constants/adapters.ts`](https://github.com/DA0-DA0/dao-dao-ui/blob/development/packages/utils/constants/adapters.ts).

For `dao-proposal-single` (the most commonly used proposal module that supports
proposals with Yes/No/Abstain votes), the ID is `DaoProposalSingle`. For
`dao-proposal-multiple` (which supports multiple choice proposals), the ID is
`DaoProposalMultiple`.

### Proposal module form data

The form data structure can be found in
[`@dao-dao/types/proposal-module-adapter.ts`](https://github.com/DA0-DA0/dao-dao-ui/blob/cd6def2f16a44895352efcc37122bde9af3e677b/packages/types/proposal-module-adapter.ts).

The [single choice proposal form
data](https://github.com/DA0-DA0/dao-dao-ui/blob/cd6def2f16a44895352efcc37122bde9af3e677b/packages/types/proposal-module-adapter.ts#L411-L417)
is:

```json
{
  "title": "<PROPOSAL TITLE>",
  "description": "<PROPOSAL DESCRIPTION>",
  "actionData": [
    {
      "actionKey": "<ACTION KEY>",
      "data": {
        // ACTION DATA
      }
    },
    ...
  ]
}
```

The [multiple choice proposal form
data](https://github.com/DA0-DA0/dao-dao-ui/blob/cd6def2f16a44895352efcc37122bde9af3e677b/packages/types/proposal-module-adapter.ts#L433-L438)
is:

```json
{
  "title": "<PROPOSAL TITLE>",
  "description": "<PROPOSAL DESCRIPTION>",
  "choices": [
    {
      "title": "<OPTION TITLE>",
      "description": "<OPTION DESCRIPTION>",
      "actionData": [
        {
          "actionKey": "<ACTION KEY>",
          "data": {
            // ACTION DATA
          }
        },
        ...
      ]
    },
    ...
  ]
}
```

See the bottom of this document for a complete example.

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

## Example

Here's an example of a proposal link that creates a single choice proposal with
a spend action and an execute action in the [DAO DAO
DAO](https://daodao.zone/dao/juno10h0hc64jv006rr8qy0zhlu4jsxct8qwa0vtaleayh0ujz0zynf2s2r7v8q).

```json
{
  "id": "DaoProposalSingle",
  "data": {
    "title": "Example Proposal",
    "description": "This proposal will send 100 JUNO to our community fund and update our voting module's unstaking duration.",
    "actionData": [
      {
        "actionKey": "spend",
        "data": {
          "fromChainId": "juno-1",
          "toChainId": "juno-1",
          "from": "juno10h0hc64jv006rr8qy0zhlu4jsxct8qwa0vtaleayh0ujz0zynf2s2r7v8q",
          "to": "juno1community...fund456",
          "amount": "100",
          "denom": "ujuno"
        }
      },
      {
        "actionKey": "execute",
        "data": {
          "chainId": "juno-1",
          "sender": "juno10h0hc64jv006rr8qy0zhlu4jsxct8qwa0vtaleayh0ujz0zynf2s2r7v8q",
          "address": "juno1voting...module789",
          "message": "{\"update_config\":{\"duration\":86400}}",
          "funds": []
        }
      }
    ]
  }
}
```

[Base64-encoding](https://www.base64encode.org/) the entire object:

```
ewogICJpZCI6ICJEYW9Qcm9wb3NhbFNpbmdsZSIsCiAgImRhdGEiOiB7CiAgICAidGl0bGUiOiAiRXhhbXBsZSBQcm9wb3NhbCIsCiAgICAiZGVzY3JpcHRpb24iOiAiVGhpcyBwcm9wb3NhbCB3aWxsIHNlbmQgMTAwIEpVTk8gdG8gb3VyIGNvbW11bml0eSBmdW5kIGFuZCB1cGRhdGUgb3VyIHZvdGluZyBtb2R1bGUncyB1bnN0YWtpbmcgZHVyYXRpb24uIiwKICAgICJhY3Rpb25EYXRhIjogWwogICAgICB7CiAgICAgICAgImFjdGlvbktleSI6ICJzcGVuZCIsCiAgICAgICAgImRhdGEiOiB7CiAgICAgICAgICAiZnJvbUNoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJ0b0NoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJmcm9tIjogImp1bm8xMGgwaGM2NGp2MDA2cnI4cXkwemhsdTRqc3hjdDhxd2EwdnRhbGVheWgwdWp6MHp5bmYyczJyN3Y4cSIsCiAgICAgICAgICAidG8iOiAianVubzFjb21tdW5pdHkuLi5mdW5kNDU2IiwKICAgICAgICAgICJhbW91bnQiOiAiMTAwIiwKICAgICAgICAgICJkZW5vbSI6ICJ1anVubyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgIHsKICAgICAgICAiYWN0aW9uS2V5IjogImV4ZWN1dGUiLAogICAgICAgICJkYXRhIjogewogICAgICAgICAgImNoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJzZW5kZXIiOiAianVubzEwaDBoYzY0anYwMDZycjhxeTB6aGx1NGpzeGN0OHF3YTB2dGFsZWF5aDB1anowenluZjJzMnI3djhxIiwKICAgICAgICAgICJhZGRyZXNzIjogImp1bm8xdm90aW5nLi4ubW9kdWxlNzg5IiwKICAgICAgICAgICJtZXNzYWdlIjogIntcInVwZGF0ZV9jb25maWdcIjp7XCJkdXJhdGlvblwiOjg2NDAwfX0iLAogICAgICAgICAgImZ1bmRzIjogW10KICAgICAgICB9CiAgICAgIH0KICAgIF0KICB9Cn0=
```

And then [URL-escaping](https://www.urlencoder.org/) the base64 string simply
replaces the `=` at the end with `%3D`:

```
ewogICJpZCI6ICJEYW9Qcm9wb3NhbFNpbmdsZSIsCiAgImRhdGEiOiB7CiAgICAidGl0bGUiOiAiRXhhbXBsZSBQcm9wb3NhbCIsCiAgICAiZGVzY3JpcHRpb24iOiAiVGhpcyBwcm9wb3NhbCB3aWxsIHNlbmQgMTAwIEpVTk8gdG8gb3VyIGNvbW11bml0eSBmdW5kIGFuZCB1cGRhdGUgb3VyIHZvdGluZyBtb2R1bGUncyB1bnN0YWtpbmcgZHVyYXRpb24uIiwKICAgICJhY3Rpb25EYXRhIjogWwogICAgICB7CiAgICAgICAgImFjdGlvbktleSI6ICJzcGVuZCIsCiAgICAgICAgImRhdGEiOiB7CiAgICAgICAgICAiZnJvbUNoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJ0b0NoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJmcm9tIjogImp1bm8xMGgwaGM2NGp2MDA2cnI4cXkwemhsdTRqc3hjdDhxd2EwdnRhbGVheWgwdWp6MHp5bmYyczJyN3Y4cSIsCiAgICAgICAgICAidG8iOiAianVubzFjb21tdW5pdHkuLi5mdW5kNDU2IiwKICAgICAgICAgICJhbW91bnQiOiAiMTAwIiwKICAgICAgICAgICJkZW5vbSI6ICJ1anVubyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgIHsKICAgICAgICAiYWN0aW9uS2V5IjogImV4ZWN1dGUiLAogICAgICAgICJkYXRhIjogewogICAgICAgICAgImNoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJzZW5kZXIiOiAianVubzEwaDBoYzY0anYwMDZycjhxeTB6aGx1NGpzeGN0OHF3YTB2dGFsZWF5aDB1anowenluZjJzMnI3djhxIiwKICAgICAgICAgICJhZGRyZXNzIjogImp1bm8xdm90aW5nLi4ubW9kdWxlNzg5IiwKICAgICAgICAgICJtZXNzYWdlIjogIntcInVwZGF0ZV9jb25maWdcIjp7XCJkdXJhdGlvblwiOjg2NDAwfX0iLAogICAgICAgICAgImZ1bmRzIjogW10KICAgICAgICB9CiAgICAgIH0KICAgIF0KICB9Cn0%3D
```

Using the [DAO DAO
DAO](https://daodao.zone/dao/juno10h0hc64jv006rr8qy0zhlu4jsxct8qwa0vtaleayh0ujz0zynf2s2r7v8q)
address and then adding the `prefill` parameter to the URL gives us the
proposal creation page with the proposal prefilled:

[`https://daodao.zone/dao/juno10h0hc64jv006rr8qy0zhlu4jsxct8qwa0vtaleayh0ujz0zynf2s2r7v8q/proposals/create?prefill=ewogICJpZCI6ICJEYW9Qcm9wb3NhbFNpbmdsZSIsCiAgImRhdGEiOiB7CiAgICAidGl0bGUiOiAiRXhhbXBsZSBQcm9wb3NhbCIsCiAgICAiZGVzY3JpcHRpb24iOiAiVGhpcyBwcm9wb3NhbCB3aWxsIHNlbmQgMTAwIEpVTk8gdG8gb3VyIGNvbW11bml0eSBmdW5kIGFuZCB1cGRhdGUgb3VyIHZvdGluZyBtb2R1bGUncyB1bnN0YWtpbmcgZHVyYXRpb24uIiwKICAgICJhY3Rpb25EYXRhIjogWwogICAgICB7CiAgICAgICAgImFjdGlvbktleSI6ICJzcGVuZCIsCiAgICAgICAgImRhdGEiOiB7CiAgICAgICAgICAiZnJvbUNoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJ0b0NoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJmcm9tIjogImp1bm8xMGgwaGM2NGp2MDA2cnI4cXkwemhsdTRqc3hjdDhxd2EwdnRhbGVheWgwdWp6MHp5bmYyczJyN3Y4cSIsCiAgICAgICAgICAidG8iOiAianVubzFjb21tdW5pdHkuLi5mdW5kNDU2IiwKICAgICAgICAgICJhbW91bnQiOiAiMTAwIiwKICAgICAgICAgICJkZW5vbSI6ICJ1anVubyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgIHsKICAgICAgICAiYWN0aW9uS2V5IjogImV4ZWN1dGUiLAogICAgICAgICJkYXRhIjogewogICAgICAgICAgImNoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJzZW5kZXIiOiAianVubzEwaDBoYzY0anYwMDZycjhxeTB6aGx1NGpzeGN0OHF3YTB2dGFsZWF5aDB1anowenluZjJzMnI3djhxIiwKICAgICAgICAgICJhZGRyZXNzIjogImp1bm8xdm90aW5nLi4ubW9kdWxlNzg5IiwKICAgICAgICAgICJtZXNzYWdlIjogIntcInVwZGF0ZV9jb25maWdcIjp7XCJkdXJhdGlvblwiOjg2NDAwfX0iLAogICAgICAgICAgImZ1bmRzIjogW10KICAgICAgICB9CiAgICAgIH0KICAgIF0KICB9Cn0%3D`](https://daodao.zone/dao/juno10h0hc64jv006rr8qy0zhlu4jsxct8qwa0vtaleayh0ujz0zynf2s2r7v8q/proposals/create?prefill=ewogICJpZCI6ICJEYW9Qcm9wb3NhbFNpbmdsZSIsCiAgImRhdGEiOiB7CiAgICAidGl0bGUiOiAiRXhhbXBsZSBQcm9wb3NhbCIsCiAgICAiZGVzY3JpcHRpb24iOiAiVGhpcyBwcm9wb3NhbCB3aWxsIHNlbmQgMTAwIEpVTk8gdG8gb3VyIGNvbW11bml0eSBmdW5kIGFuZCB1cGRhdGUgb3VyIHZvdGluZyBtb2R1bGUncyB1bnN0YWtpbmcgZHVyYXRpb24uIiwKICAgICJhY3Rpb25EYXRhIjogWwogICAgICB7CiAgICAgICAgImFjdGlvbktleSI6ICJzcGVuZCIsCiAgICAgICAgImRhdGEiOiB7CiAgICAgICAgICAiZnJvbUNoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJ0b0NoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJmcm9tIjogImp1bm8xMGgwaGM2NGp2MDA2cnI4cXkwemhsdTRqc3hjdDhxd2EwdnRhbGVheWgwdWp6MHp5bmYyczJyN3Y4cSIsCiAgICAgICAgICAidG8iOiAianVubzFjb21tdW5pdHkuLi5mdW5kNDU2IiwKICAgICAgICAgICJhbW91bnQiOiAiMTAwIiwKICAgICAgICAgICJkZW5vbSI6ICJ1anVubyIKICAgICAgICB9CiAgICAgIH0sCiAgICAgIHsKICAgICAgICAiYWN0aW9uS2V5IjogImV4ZWN1dGUiLAogICAgICAgICJkYXRhIjogewogICAgICAgICAgImNoYWluSWQiOiAianVuby0xIiwKICAgICAgICAgICJzZW5kZXIiOiAianVubzEwaDBoYzY0anYwMDZycjhxeTB6aGx1NGpzeGN0OHF3YTB2dGFsZWF5aDB1anowenluZjJzMnI3djhxIiwKICAgICAgICAgICJhZGRyZXNzIjogImp1bm8xdm90aW5nLi4ubW9kdWxlNzg5IiwKICAgICAgICAgICJtZXNzYWdlIjogIntcInVwZGF0ZV9jb25maWdcIjp7XCJkdXJhdGlvblwiOjg2NDAwfX0iLAogICAgICAgICAgImZ1bmRzIjogW10KICAgICAgICB9CiAgICAgIH0KICAgIF0KICB9Cn0%3D)
