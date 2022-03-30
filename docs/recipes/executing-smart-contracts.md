# Executing smart contracts

Once you've [deployed a smart contract](./contract-deployment.md) from
your DAO you'll likely want to execute messages on it. Here we'll walk
through the process of executing a message on a DAO's staking contract
to update its unstaking duration.

## Background

On Juno and there are a number of message types that can be
executed. These are enumerated
[here](https://docs.rs/cosmwasm-std/latest/cosmwasm_std/enum.CosmosMsg.html). A
"custom" message on a DAO DAO proposal can cause any of these message
types to be executed.

In order to execute one of those message types it needs to be
converted into JSON. JSON allows us to manually type out messages in a
human readable format that the computer can convert into the Rust
data structures you can see in the aforementioned enum.

## JSON conversion

Under the hood a Rust library called [Serde
JSON](https://docs.serde.rs/serde_json/) is used to do this conversion
from human readable JSON to computer readable data. You can see the
linked docs for all the details about how this conversion
happens. Here's an example to build some intuition:

Lets say we have a Rust enum that looks something like this:

```rust
pub enum Msg {
	Foo(FooMsg),
	Bar {
	    baz: String,
	},
	BluBla {}
}

pub struct FooMsg {
	width: Uint128,
	height: Decimal,
	depth: u64,
}
```

This pretty well covers all of the enum variations you'll see in
CosmWasm messages. Don't worry that there is a lot here, we'll walk
through it examples. :)

### Foo

Say I want to write a `Foo` with a `with` of `100` and a height of
`0.12` and a depth of `12`. The JSON for that would look like this:

```json
{
	"foo": {
		"width": "100",
		"height": "0.12",
		"depth": 12
	}
}
```

In CosmWasm `Uint128` values are large integer values and to write one
in JSON form you surround the number with quotes. The same applies to
the `Decimal` type. For regular Rust integer types like `u64` we can
just write those out as normal.

### Bar

Writing a `Bar` is really similar to a Foo. Even though for the `Foo`
the data is in a separate `struct` the serialized version looks the
same. Here's what a `Bar` with a `baz` of `"zoop"` looks like:

```json
{
	"bar": {
		"baz": "zoop"
	}
}
```

### Blu

A `BluBla` is just like a `Bar` or a `Foo` but it doesn't have any data:

```json
{
	"blu_bla": {}
}
```

Notice that the `BluBla` gets converted from camel case to snake case
during serialization. This is not a hard rule for CosmWasm contracts,
but most will do this.

## Executing a contract

Now that we understand how messages are put together we can write a
custom message to update the unstaking duration for a DAO. We'll start
by collecting the relevant addresses for our message. For our purposes
we'll need the DAO address and the staking contract address. Those can
be found in under the "Staking" and "DAO" addresses in the "Addresses"
section of your DAO page.

For this walk through we'll use `<DAO>` and `<STAKING>` as placeholders
for those addresses. When you're writing your message you'll want to
replace those with the addresses you're using.

We can start with a basic [WASM
execute](https://docs.rs/cosmwasm-std/latest/cosmwasm_std/enum.WasmMsg.html)
message:

```json
  {
    "wasm": {
      "execute": {
        "contract_addr": "",
        "msg": {},
        "funds": []
      }
    }
  }
```

Next, lets fill in the address of our staking contract. That will be
the contract we want to execute this message on as we want to tell it
to change the unstaking duration.

```json
  {
    "wasm": {
      "execute": {
        "contract_addr": "<STAKING>",
        "msg": {},
        "funds": []
      }
    }
  }
```

If you look at the type of the `msg` field on in the docs you'll see
it is a `Binary` type. The `Binary` type in CosmWasm is a base64
encoded JSON message. From your terminal you can create one by running:

```bash
echo '<JSON you'd like to encode>' | base64
```

Happily, the DAO DAO UI will automatically do that conversion for you
so we can just put the JSON for the message we want to execute in that
field. We can find the format of the message we'd like to execute by
looking at the [`UpdateConfig`
message](https://github.com/DA0-DA0/dao-contracts/blob/2c7bc83eeb5f9a882ec36e442a1c8fdb6e3f90c6/contracts/stake-cw20/src/msg.rs#L25-L28)
in the DAO DAO staking contract.

For our purposes, lets leave the admin as the DAO and update the
unstaking duration to ten seconds. Our `msg` field will then look like
this:

```json
{
"update_config": {
	"admin": "<DAO>",
	"duration": {
		"time": 10
		}
	}
}
```

The last field on the WASM message is the `funds` field. We could use
this field to send some native tokens (for example, Juno) along with
our message. We don't want to send money to our staking contract so
we'll leave that empty.

This makes our final WASM message:

```json
{
"wasm": {
	"execute": {
		"contract_addr": "<STAKING>",
		"msg": {
			"update_config": {
				"admin": "<DAO>",
				"duration": {
					"time": 10
				}
			}
		},
		"funds": []
	}
   }
}
```

If we throw this into a custom message on a DAO DAO DAO proposal and
execute it it'll change the unstaking duration.
