export declare const vaultFactoryAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "implementation_";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "hub_";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "market_";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "createVault";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "botId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "isMaster";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "hosted";
        readonly type: "bool";
        readonly internalType: "bool";
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
        readonly name: "feeBps";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [{
        readonly name: "v";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "hub";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "implementation";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isVault";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
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
    readonly type: "event";
    readonly name: "VaultCreated";
    readonly inputs: readonly [{
        readonly name: "vault";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "owner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "botId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "isMaster";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "CloneFailed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotAllowed";
    readonly inputs: readonly [];
}];
