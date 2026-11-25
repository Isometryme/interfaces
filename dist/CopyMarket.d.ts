export declare const copyMarketAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "hub_";
        readonly type: "address";
        readonly internalType: "contract IBotHub";
    }, {
        readonly name: "bounds_";
        readonly type: "address";
        readonly internalType: "contract ProtocolBounds";
    }, {
        readonly name: "usdc_";
        readonly type: "address";
        readonly internalType: "contract IERC20";
    }, {
        readonly name: "feeCollector_";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "factory_";
        readonly type: "address";
        readonly internalType: "contract IVaultFactory";
    }];
    readonly stateMutability: "nonpayable";
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
    readonly name: "buyCopy";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
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
    }, {
        readonly name: "depositAmount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "maxPrice";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "maxFeeBps";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [{
        readonly name: "vault";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
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
    readonly name: "feeCollector";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "hub";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IBotHub";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "usdc";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IERC20";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "CopyBought";
    readonly inputs: readonly [{
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "buyer";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "vault";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "price";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "creatorPart";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "protocolPart";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "deposit";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "BadLimits";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "FeeAbove";
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
    readonly name: "NotListed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "PriceAbove";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SelfCopy";
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
    readonly name: "TransferFailed";
    readonly inputs: readonly [];
}];
