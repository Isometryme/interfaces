export const protocolBoundsAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "admin_",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "treasury_",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "activeAt",
        "inputs": [
            {
                "name": "",
                "type": "uint32",
                "internalType": "uint32"
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
        "name": "admin",
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
        "name": "assetIndex",
        "inputs": [
            {
                "name": "asset",
                "type": "uint32",
                "internalType": "uint32"
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
        "name": "bounds",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct ProtocolBounds.Bounds",
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
                        "name": "maxHeartbeat",
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
        "name": "executeLoosen",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "executeTreasury",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "indexPlusOne",
        "inputs": [
            {
                "name": "",
                "type": "uint32",
                "internalType": "uint32"
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
        "name": "isAsset",
        "inputs": [
            {
                "name": "asset",
                "type": "uint32",
                "internalType": "uint32"
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
        "name": "knownAssets",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint32[]",
                "internalType": "uint32[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "limitsOk",
        "inputs": [
            {
                "name": "l",
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
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "listedCount",
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
        "name": "loosenEta",
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
        "name": "maxLeverageBps",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "newPaused",
        "inputs": [],
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
        "name": "pauseNew",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "pausedUntil",
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
        "name": "pendingTreasury",
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
        "name": "priceBandBps",
        "inputs": [],
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
        "name": "proposeAddAsset",
        "inputs": [
            {
                "name": "asset",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "proposeLoosen",
        "inputs": [
            {
                "name": "b",
                "type": "tuple",
                "internalType": "struct ProtocolBounds.Bounds",
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
                        "name": "maxHeartbeat",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "proposeTreasury",
        "inputs": [
            {
                "name": "t",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "removeAsset",
        "inputs": [
            {
                "name": "asset",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "tightenBounds",
        "inputs": [
            {
                "name": "b",
                "type": "tuple",
                "internalType": "struct ProtocolBounds.Bounds",
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
                        "name": "maxHeartbeat",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "treasury",
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
        "name": "treasuryEta",
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
        "name": "unpauseNew",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "AssetAdded",
        "inputs": [
            {
                "name": "asset",
                "type": "uint32",
                "indexed": true,
                "internalType": "uint32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "AssetProposed",
        "inputs": [
            {
                "name": "asset",
                "type": "uint32",
                "indexed": true,
                "internalType": "uint32"
            },
            {
                "name": "activeAt",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "AssetRemoved",
        "inputs": [
            {
                "name": "asset",
                "type": "uint32",
                "indexed": true,
                "internalType": "uint32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BoundsChanged",
        "inputs": [
            {
                "name": "bounds",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct ProtocolBounds.Bounds",
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
                        "name": "maxHeartbeat",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "LoosenQueued",
        "inputs": [
            {
                "name": "bounds",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct ProtocolBounds.Bounds",
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
                        "name": "maxHeartbeat",
                        "type": "uint32",
                        "internalType": "uint32"
                    }
                ]
            },
            {
                "name": "eta",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NewPaused",
        "inputs": [
            {
                "name": "until",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NewUnpaused",
        "inputs": [],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TreasuryQueued",
        "inputs": [
            {
                "name": "treasury",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "eta",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "TreasurySet",
        "inputs": [
            {
                "name": "treasury",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AssetExists",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Lapsed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotAdmin",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotTighter",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NothingQueued",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OutOfRange",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PauseGap",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TooEarly",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TooManyAssets",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnknownAsset",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAddress",
        "inputs": []
    }
];
