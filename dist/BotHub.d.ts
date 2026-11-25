export declare const botHubAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "bounds_";
        readonly type: "address";
        readonly internalType: "contract ProtocolBounds";
    }, {
        readonly name: "factory_";
        readonly type: "address";
        readonly internalType: "contract IVaultFactory";
    }, {
        readonly name: "market_";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "maxBatch_";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "applyGas_";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "addCopy";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "vault";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "applyGas";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "approve";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "balanceOf";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "bot";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct BotHub.Bot";
        readonly components: readonly [{
            readonly name: "creator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "masterVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "kind";
            readonly type: "uint8";
            readonly internalType: "enum Kind";
        }, {
            readonly name: "perfFeeBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "pendingFeeBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "pendingFeeAt";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "copyPrice";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "listed";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "retired";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "firstSignalAt";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "lastHeartbeat";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "operatorEpoch";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "botCount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "bounds";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ProtocolBounds";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "copiesOf";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "copyCount";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "creatorOf";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "effectiveFee";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "factory";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IVaultFactory";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getApproved";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "isApprovedForAll";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "isRetired";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lastHeartbeat";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "latestTarget";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "asset";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "int32";
        readonly internalType: "int32";
    }, {
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "list";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "market";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "marketInfo";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "m";
        readonly type: "tuple";
        readonly internalType: "struct IBotHub.MarketInfo";
        readonly components: readonly [{
            readonly name: "creator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "masterVault";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "copyPrice";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "listed";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "retired";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "firstSignalAt";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "copyCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "maxBatch";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "minFeeSince";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "since";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly outputs: readonly [{
        readonly name: "m";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "name";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "ownerOf";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "o";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "ping";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "propagate";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "nonce";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "maxVaults";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "done";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "registerBot";
    readonly inputs: readonly [{
        readonly name: "kind";
        readonly type: "uint8";
        readonly internalType: "enum Kind";
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "perfFeeBps";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }, {
        readonly name: "copyPrice";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "limits";
        readonly type: "tuple";
        readonly internalType: "struct Limits";
        readonly components: readonly [{
            readonly name: "maxLeverageBps";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "priceBandBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "maxDrawdownBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "maxDailyLossBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "heartbeatTimeout";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "assetMask";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxOrderNotional";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "masterVault";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "retire";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "safeTransferFrom";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "safeTransferFrom";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "setApprovalForAll";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "setCopyPrice";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "price";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setOperator";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "op";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setPerfFee";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "bps";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setTarget";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "asset";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "targetBps";
        readonly type: "int32";
        readonly internalType: "int32";
    }, {
        readonly name: "limitPx";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly outputs: readonly [{
        readonly name: "nonce";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "signal";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "nonce";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct BotHub.Signal";
        readonly components: readonly [{
            readonly name: "asset";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "targetBps";
            readonly type: "int32";
            readonly internalType: "int32";
        }, {
            readonly name: "limitPx";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "issuedAt";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "copiesAtIssue";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "cursor";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "masterApplied";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "operatorEpoch";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "signalSettled";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "nonce";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "supportsInterface";
    readonly inputs: readonly [{
        readonly name: "id";
        readonly type: "bytes4";
        readonly internalType: "bytes4";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "symbol";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transferFrom";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "unlist";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "ApplySkipped";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "nonce";
        readonly type: "uint64";
        readonly indexed: true;
        readonly internalType: "uint64";
    }, {
        readonly name: "vault";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "reason";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "enum Skip";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "BotListed";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "BotRegistered";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "creator";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "kind";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "enum Kind";
    }, {
        readonly name: "masterVault";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "BotRetired";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "BotUnlisted";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "CopyAdded";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "vault";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "CopyPriceSet";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "price";
        readonly type: "uint128";
        readonly indexed: false;
        readonly internalType: "uint128";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "FeeChangeQueued";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "bps";
        readonly type: "uint16";
        readonly indexed: false;
        readonly internalType: "uint16";
    }, {
        readonly name: "effectiveAt";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "FeeChanged";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "bps";
        readonly type: "uint16";
        readonly indexed: false;
        readonly internalType: "uint16";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Heartbeat";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "MasterApplied";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "nonce";
        readonly type: "uint64";
        readonly indexed: true;
        readonly internalType: "uint64";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OperatorSet";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "operator";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SignalApplied";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "nonce";
        readonly type: "uint64";
        readonly indexed: true;
        readonly internalType: "uint64";
    }, {
        readonly name: "vault";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SignalIssued";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "nonce";
        readonly type: "uint64";
        readonly indexed: true;
        readonly internalType: "uint64";
    }, {
        readonly name: "asset";
        readonly type: "uint32";
        readonly indexed: false;
        readonly internalType: "uint32";
    }, {
        readonly name: "targetBps";
        readonly type: "int32";
        readonly indexed: false;
        readonly internalType: "int32";
    }, {
        readonly name: "limitPx";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Transfer";
    readonly inputs: readonly [{
        readonly name: "from";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "to";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "tokenId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AssetNotListed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BadLimits";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "FeeTooHigh";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MasterTooSmall";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NewPaused";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotCreator";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotEnoughGas";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotMarket";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotOperator";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PriceTooLow";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Retired";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SignalDone";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SignalExpired";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Soulbound";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "StaleOperator";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TargetTooLarge";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TooManyCopies";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TooYoung";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnknownBot";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnknownSignal";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZeroAddress";
    readonly inputs: readonly [];
}];
