export declare const protocolBoundsAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "admin_";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "treasury_";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "activeAt";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "admin";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "assetIndex";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
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
        readonly type: "tuple";
        readonly internalType: "struct ProtocolBounds.Bounds";
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
            readonly name: "maxHeartbeat";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "executeLoosen";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "executeTreasury";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "indexPlusOne";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isAsset";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "knownAssets";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint32[]";
        readonly internalType: "uint32[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "limitsOk";
    readonly inputs: readonly [{
        readonly name: "l";
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
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "listedCount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "loosenEta";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "maxLeverageBps";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "newPaused";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pauseNew";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "pausedUntil";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pendingTreasury";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "priceBandBps";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "proposeAddAsset";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "proposeLoosen";
    readonly inputs: readonly [{
        readonly name: "b";
        readonly type: "tuple";
        readonly internalType: "struct ProtocolBounds.Bounds";
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
            readonly name: "maxHeartbeat";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "proposeTreasury";
    readonly inputs: readonly [{
        readonly name: "t";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "removeAsset";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "tightenBounds";
    readonly inputs: readonly [{
        readonly name: "b";
        readonly type: "tuple";
        readonly internalType: "struct ProtocolBounds.Bounds";
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
            readonly name: "maxHeartbeat";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "treasury";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "treasuryEta";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "unpauseNew";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "AssetAdded";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly indexed: true;
        readonly internalType: "uint32";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "AssetProposed";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly indexed: true;
        readonly internalType: "uint32";
    }, {
        readonly name: "activeAt";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "AssetRemoved";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly indexed: true;
        readonly internalType: "uint32";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "BoundsChanged";
    readonly inputs: readonly [{
        readonly name: "bounds";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct ProtocolBounds.Bounds";
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
            readonly name: "maxHeartbeat";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LoosenQueued";
    readonly inputs: readonly [{
        readonly name: "bounds";
        readonly type: "tuple";
        readonly indexed: false;
        readonly internalType: "struct ProtocolBounds.Bounds";
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
            readonly name: "maxHeartbeat";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
    }, {
        readonly name: "eta";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "NewPaused";
    readonly inputs: readonly [{
        readonly name: "until";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "NewUnpaused";
    readonly inputs: readonly [];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "TreasuryQueued";
    readonly inputs: readonly [{
        readonly name: "treasury";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "eta";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "TreasurySet";
    readonly inputs: readonly [{
        readonly name: "treasury";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AssetExists";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Lapsed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotAdmin";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotTighter";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NothingQueued";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "OutOfRange";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PauseGap";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TooEarly";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TooManyAssets";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnknownAsset";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZeroAddress";
    readonly inputs: readonly [];
}];
