export declare const hostedOperatorAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "hub_";
        readonly type: "address";
        readonly internalType: "contract BotHub";
    }, {
        readonly name: "bounds_";
        readonly type: "address";
        readonly internalType: "contract ProtocolBounds";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "addSigner";
    readonly inputs: readonly [{
        readonly name: "s";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
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
    readonly name: "hub";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract BotHub";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isSigner";
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
    readonly name: "removeSigner";
    readonly inputs: readonly [{
        readonly name: "s";
        readonly type: "address";
        readonly internalType: "address";
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
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "SignerAdded";
    readonly inputs: readonly [{
        readonly name: "signer";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SignerRemoved";
    readonly inputs: readonly [{
        readonly name: "signer";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "NotAdmin";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotSigner";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SignerExists";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnknownSigner";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZeroAddress";
    readonly inputs: readonly [];
}];
