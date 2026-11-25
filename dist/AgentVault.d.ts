export declare const agentVaultAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "d";
        readonly type: "tuple";
        readonly internalType: "struct AgentVault.Deps";
        readonly components: readonly [{
            readonly name: "hub";
            readonly type: "address";
            readonly internalType: "contract IBotHub";
        }, {
            readonly name: "market";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "factory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "bounds";
            readonly type: "address";
            readonly internalType: "contract ProtocolBounds";
        }, {
            readonly name: "usdc";
            readonly type: "address";
            readonly internalType: "contract IERC20";
        }, {
            readonly name: "core";
            readonly type: "address";
            readonly internalType: "contract ICoreWriter";
        }, {
            readonly name: "reader";
            readonly type: "address";
            readonly internalType: "contract ICoreReader";
        }, {
            readonly name: "feeCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "coreDepositWallet";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "usdcSystem";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "usdcToken";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "coreWeiPerUnit";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "lagBlocks";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "transferFeeReserve";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "activationOwed";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "applySignal";
    readonly inputs: readonly [{
        readonly name: "botId_";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "nonce";
        readonly type: "uint64";
        readonly internalType: "uint64";
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
        readonly type: "uint8";
        readonly internalType: "enum Skip";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "bootstrap";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "botId";
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
    readonly name: "checkGuard";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "reason";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "claim";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "closePosition";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "core";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ICoreWriter";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "coreDepositWallet";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "coreFunded";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "coreWeiPerUnit";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "crystallise";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "dayIndex";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "dayStartEquity";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "deposit";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "depositRequestedAt";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "detach";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "equity";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "factory";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "feeBps";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint16";
        readonly internalType: "uint16";
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
    readonly name: "guardPeak";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "hosted";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
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
    readonly name: "hwm";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initialize";
    readonly inputs: readonly [{
        readonly name: "owner_";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "botId_";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "isMaster_";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "hosted_";
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
        readonly name: "fee";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "isMaster";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lagBlocks";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lastAppliedNonce";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lastCrystallise";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lastFundActionBlock";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lastOrderBlock";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "limits";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
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
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pause";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "pendingOwner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pendingProtocolFee";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pendingSellerFee";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "reader";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ICoreReader";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "resume";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "scaleBps";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setLimits";
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
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setScale";
    readonly inputs: readonly [{
        readonly name: "bps";
        readonly type: "uint16";
        readonly internalType: "uint16";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "settle";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "state";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "enum VaultState";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "sync";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "r";
        readonly type: "uint8";
        readonly internalType: "enum Skip";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "transfer";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "kind";
        readonly type: "uint8";
        readonly internalType: "enum AgentVault.Move";
    }, {
        readonly name: "atBlock";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "prevCrystallise";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "amount";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "fee";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "equityAtRequest";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }, {
        readonly name: "spotBefore";
        readonly type: "uint128";
        readonly internalType: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "transferFeeReserve";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "unwind";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    readonly type: "function";
    readonly name: "usdcSystem";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "usdcToken";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "withdraw";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "Claimed";
    readonly inputs: readonly [{
        readonly name: "protocolPart";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "sellerPart";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "ownerPart";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "CrystalliseStarted";
    readonly inputs: readonly [{
        readonly name: "equity";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "fee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Crystallised";
    readonly inputs: readonly [{
        readonly name: "fee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "sellerPart";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "protocolPart";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "DepositCancelled";
    readonly inputs: readonly [{
        readonly name: "requested";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "landed";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Deposited";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Detached";
    readonly inputs: readonly [];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "GuardTripped";
    readonly inputs: readonly [{
        readonly name: "reason";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "uint8";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "LimitsSet";
    readonly inputs: readonly [{
        readonly name: "limits";
        readonly type: "tuple";
        readonly indexed: false;
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
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OrderSent";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly indexed: true;
        readonly internalType: "uint32";
    }, {
        readonly name: "isBuy";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }, {
        readonly name: "limitPx";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }, {
        readonly name: "sz";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }, {
        readonly name: "reduceOnly";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Paused";
    readonly inputs: readonly [];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Resumed";
    readonly inputs: readonly [];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ScaleSet";
    readonly inputs: readonly [{
        readonly name: "scaleBps";
        readonly type: "uint16";
        readonly indexed: false;
        readonly internalType: "uint16";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Settled";
    readonly inputs: readonly [{
        readonly name: "kind";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "enum AgentVault.Move";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "fee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "equityBefore";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Synced";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly indexed: true;
        readonly internalType: "uint32";
    }, {
        readonly name: "nonce";
        readonly type: "uint64";
        readonly indexed: false;
        readonly internalType: "uint64";
    }, {
        readonly name: "result";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "enum Skip";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "TransferCancelled";
    readonly inputs: readonly [{
        readonly name: "kind";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "enum AgentVault.Move";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Unwound";
    readonly inputs: readonly [{
        readonly name: "asset";
        readonly type: "uint32";
        readonly indexed: true;
        readonly internalType: "uint32";
    }, {
        readonly name: "by";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Withdrawn";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "fee";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "AlreadyInitialized";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BadLimits";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BadState";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "BelowActivation";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "HeartbeatStale";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Lagging";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NewPaused";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoPosition";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoTarget";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoValidPrice";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotFactory";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotHub";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotLanded";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotMarket";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NotOwner";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NothingPending";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Pending";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Retired";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TooEarly";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TooMuch";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "TransferFailed";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "WrongBot";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZeroAddress";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZeroAmount";
    readonly inputs: readonly [];
}];
