export const vaultFactoryAbi = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "implementation_",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "hub_",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "market_",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createVault",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "botId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "isMaster",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "hosted",
        "type": "bool",
        "internalType": "bool"
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
        "name": "feeBps",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [
      {
        "name": "v",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "hub",
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
    "name": "implementation",
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
    "name": "isVault",
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
    "type": "event",
    "name": "VaultCreated",
    "inputs": [
      {
        "name": "vault",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "botId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "isMaster",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "CloneFailed",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NotAllowed",
    "inputs": []
  }
] as const;
