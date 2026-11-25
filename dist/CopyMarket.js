export const copyMarketAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "hub_",
                "type": "address",
                "internalType": "contract IBotHub"
            },
            {
                "name": "bounds_",
                "type": "address",
                "internalType": "contract ProtocolBounds"
            },
            {
                "name": "usdc_",
                "type": "address",
                "internalType": "contract IERC20"
            },
            {
                "name": "feeCollector_",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "factory_",
                "type": "address",
                "internalType": "contract IVaultFactory"
            }
        ],
        "stateMutability": "nonpayable"
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
        "name": "buyCopy",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "internalType": "uint256"
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
            },
            {
                "name": "depositAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "maxPrice",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "maxFeeBps",
                "type": "uint16",
                "internalType": "uint16"
            }
        ],
        "outputs": [
            {
                "name": "vault",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
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
        "name": "feeCollector",
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
        "name": "hub",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IBotHub"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "usdc",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IERC20"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "CopyBought",
        "inputs": [
            {
                "name": "botId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "buyer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "vault",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "price",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "creatorPart",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "protocolPart",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "deposit",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "BadLimits",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FeeAbove",
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
        "name": "NotListed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PriceAbove",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SelfCopy",
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
        "name": "TransferFailed",
        "inputs": []
    }
];
