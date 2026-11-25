export const hostedOperatorAbi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "hub_",
                "type": "address",
                "internalType": "contract BotHub"
            },
            {
                "name": "bounds_",
                "type": "address",
                "internalType": "contract ProtocolBounds"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "addSigner",
        "inputs": [
            {
                "name": "s",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
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
        "name": "hub",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract BotHub"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isSigner",
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
                "type": "bool",
                "internalType": "bool"
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
        "name": "removeSigner",
        "inputs": [
            {
                "name": "s",
                "type": "address",
                "internalType": "address"
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
                "name": "",
                "type": "uint64",
                "internalType": "uint64"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "SignerAdded",
        "inputs": [
            {
                "name": "signer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SignerRemoved",
        "inputs": [
            {
                "name": "signer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "NotAdmin",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotSigner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SignerExists",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnknownSigner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroAddress",
        "inputs": []
    }
];
