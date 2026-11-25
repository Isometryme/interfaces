export const botHubAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "bounds_",
                "type": "address",
                "internalType": "contract ProtocolBounds"
            },
            {
                "name": "factory_",
                "type": "address",
                "internalType": "contract IVaultFactory"
            },
            {
                "name": "market_",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "maxBatch_",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "applyGas_",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addCopy",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "vault",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "applyGas",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "bot",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct BotHub.Bot",
                "components": [
                    {
                        "name": "creator",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "operator",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "masterVault",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "kind",
                        "type": "uint8",
                        "internalType": "enum Kind"
                    },
                    {
                        "name": "perfFeeBps",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "pendingFeeBps",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "pendingFeeAt",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "copyPrice",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "listed",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "retired",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "firstSignalAt",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "lastHeartbeat",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "nonce",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "operatorEpoch",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "botCount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "bounds",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract ProtocolBounds"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "copiesOf",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "copyCount",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "creatorOf",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "effectiveFee",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "factory",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IVaultFactory"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getApproved",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "isRetired",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "lastHeartbeat",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "latestTarget",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "asset",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "int32",
                "internalType": "int32"
            },
            {
                "name": "",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "list",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "market",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "marketInfo",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "m",
                "type": "tuple",
                "internalType": "struct IBotHub.MarketInfo",
                "components": [
                    {
                        "name": "creator",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "masterVault",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "copyPrice",
                        "type": "uint128",
                        "internalType": "uint128"
                    },
                    {
                        "name": "listed",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "retired",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "firstSignalAt",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "copyCount",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "maxBatch",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "minFeeSince",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "since",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "outputs": [
            {
                "name": "m",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "ownerOf",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "o",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "ping",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "propagate",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "nonce",
                "type": "uint64",
                "internalType": "uint64"
            },
            {
                "name": "maxVaults",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "done",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "registerBot",
        "inputs": [
            {
                "name": "kind",
                "type": "uint8",
                "internalType": "enum Kind"
            },
            {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "perfFeeBps",
                "type": "uint16",
                "internalType": "uint16"
            },
            {
                "name": "copyPrice",
                "type": "uint128",
                "internalType": "uint128"
            },
            {
                "name": "limits",
                "type": "tuple",
                "internalType": "struct Limits",
                "components": [
                    {
                        "name": "maxLeverageBps",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "priceBandBps",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "maxDrawdownBps",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "maxDailyLossBps",
                        "type": "uint16",
                        "internalType": "uint16"
                    },
                    {
                        "name": "heartbeatTimeout",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "assetMask",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "maxOrderNotional",
                        "type": "uint64",
                        "internalType": "uint64"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "masterVault",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "retire",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "setCopyPrice",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "price",
                "type": "uint128",
                "internalType": "uint128"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setOperator",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "op",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setPerfFee",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "bps",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setTarget",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "asset",
                "type": "uint32",
                "internalType": "uint32"
            },
            {
                "name": "targetBps",
                "type": "int32",
                "internalType": "int32"
            },
            {
                "name": "limitPx",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "outputs": [
            {
                "name": "nonce",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "signal",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "nonce",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct BotHub.Signal",
                "components": [
                    {
                        "name": "asset",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "targetBps",
                        "type": "int32",
                        "internalType": "int32"
                    },
                    {
                        "name": "limitPx",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "issuedAt",
                        "type": "uint64",
                        "internalType": "uint64"
                    },
                    {
                        "name": "copiesAtIssue",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "cursor",
                        "type": "uint32",
                        "internalType": "uint32"
                    },
                    {
                        "name": "masterApplied",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "operatorEpoch",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "signalSettled",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "nonce",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "inputs": [
            {
                "name": "id",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "pure"
    },
    {
        "type": "function",
        "name": "unlist",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "ApplySkipped",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "nonce",
                "type": "uint64",
                "indexed": true,
                "internalType": "uint64"
            },
            {
                "name": "vault",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "reason",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum Skip"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BotListed",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BotRegistered",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "creator",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "kind",
                "type": "uint8",
                "indexed": false,
                "internalType": "enum Kind"
            },
            {
                "name": "masterVault",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BotRetired",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BotUnlisted",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "CopyAdded",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "vault",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "CopyPriceSet",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "price",
                "type": "uint128",
                "indexed": false,
                "internalType": "uint128"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "FeeChangeQueued",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "bps",
                "type": "uint16",
                "indexed": false,
                "internalType": "uint16"
            },
            {
                "name": "effectiveAt",
                "type": "uint64",
                "indexed": false,
                "internalType": "uint64"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "FeeChanged",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "bps",
                "type": "uint16",
                "indexed": false,
                "internalType": "uint16"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Heartbeat",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MasterApplied",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "nonce",
                "type": "uint64",
                "indexed": true,
                "internalType": "uint64"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OperatorSet",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "operator",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SignalApplied",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "nonce",
                "type": "uint64",
                "indexed": true,
                "internalType": "uint64"
            },
            {
                "name": "vault",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SignalIssued",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "nonce",
                "type": "uint64",
                "indexed": true,
                "internalType": "uint64"
            },
            {
                "name": "asset",
                "type": "uint32",
                "indexed": false,
                "internalType": "uint32"
            },
            {
                "name": "targetBps",
                "type": "int32",
                "indexed": false,
                "internalType": "int32"
            },
            {
                "name": "limitPx",
                "type": "uint64",
                "indexed": false,
                "internalType": "uint64"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AssetNotListed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "BadLimits",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FeeTooHigh",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MasterTooSmall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NewPaused",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotCreator",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotEnoughGas",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotMarket",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotOperator",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PriceTooLow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Retired",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SignalDone",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SignalExpired",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Soulbound",
        "inputs": []
    },
    {
        "type": "error",
        "name": "StaleOperator",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TargetTooLarge",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TooManyCopies",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TooYoung",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnknownBot",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnknownSignal",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAddress",
        "inputs": []
    }
];
