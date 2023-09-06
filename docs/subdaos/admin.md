---
sidebar_position: 2
---

# SubDAO Admin

A SubDAO is a DAO that has another DAO as it's admin, implying a heirachical power relationship. The SubDAO admin has the ability to execute any message on behalf of the SubDAO, including spending it's treasury, managing members, pausing the SubDAO, or executing a smart contract message through it. This doc is about how to do that!

## Administering a SubDAO with the UI
In the DAO DAO UI, it's very easy to control a SubDAO through proposals. 

In the parent DAO, simply create a new proposal and add a "DAO Admin Execute" action. A list of SubDAOs will be displayed, select the one you want to execute an admin action for. Then simply, choose the action you want to execute!

In this example, we add a new voting member to a SubDAO using DAO Admin Execute:
![](/img/subdaos/dao-admin-execute.png)

## Manually Contstructing DAO Admin Execute JSON Messages
For some use cases like in smart contracting or Cosmos SDK gov props, it's sometimes necessary to format this message manually. The transaction builder UI can still be helpful for figuring out how you want to format your particular message. See: https://daodao.zone/me/tx

DAO Admin Execute will always call the SubDAO contract address, and wrap all messages to be executed in `execute_admin_msgs` which has a `msgs` field that contains a list of all CosmWasm messages to execute. 

Below are a list of some example messages.

### Spending a SubDAOs funds
```json
{
    "wasm": {
      "execute": {
        "contract_addr": "<SUBDAO_ADDRESS>",
        "funds": [],
        "msg": {
          "execute_admin_msgs": {
            "msgs": [
              {
                "bank": {
                  "send": {
                    "amount": [
                      {
                        "amount": "<AMOUNT>",
                        "denom": "<DENOM>"
                      }
                    ],
                    "to_address": "<DESTINATION_ADDRESS>"
                  }
                }
              }
            ]
          }
        }
      }
    }
}
```

### SubDAO Smart contract calls

SubDAO smart contract calls are similar to spending SubDAO funds. However, WASM execute msgs in `execute_admin_msgs` need to be encoded as base64, this guide will walk you through how to do this. Tools like [base64encode](https://www.base64encode.org/) and [base64decode](https://www.base64decode.org/) are helpful for encoding and validating messages.

For this example, we'll be canceling a vesting contract.

Unencoded:
```json
  {
    "wasm": {
      "execute": {
        "contract_addr": "<SUBDAO_ADDRESS>",
        "funds": [],
        "msg": {
          "execute_admin_msgs": {
            "msgs": [
              {
                "wasm": {
                  "execute": {
                    "contract_addr": "<VESTING_CONTRACT>",
                    "funds": [],
                    "msg": {
                      "cancel": {}
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  }
```

If we submitted this on the CLI, or using the Custom Message action in the DAO DAO UI, it would fail.

To fix it, we need to encode WASM execute message's `msg` field. In our case:
```json
{"cancel": {}}
```

Is encoded as:
```
eyJjYW5jZWwiOiB7fX0=
```

The final message now looks like this:
```json
  {
    "wasm": {
      "execute": {
        "contract_addr": "<SUBDAO_ADDRESS>",
        "funds": [],
        "msg": {
          "execute_admin_msgs": {
            "msgs": [
              {
                "wasm": {
                  "execute": {
                    "contract_addr": "<VESTING_CONTRACT>",
                    "funds": [],
                    "msg": "eyJjYW5jZWwiOiB7fX0="
                  }
                }
              }
            ]
          }
        }
      }
    }
  }
```

This process is the same for most things you'll want to manage on SubDAOs, such as managing DAO membership.
