# Isometry interfaces

ABIs, addresses and TypeScript exports for the Isometry contracts on HyperEVM (chain 999).

The ABIs are exported `as const`, so viem and wagmi infer every argument and return type.

## Install

```bash
npm install github:Isometryme/interfaces
```

## Use

```ts
import { createPublicClient, http } from 'viem';
import { botHubAbi, protocolBoundsAbi, hyperEvm } from 'isometry-interfaces';

const client = createPublicClient({ transport: http('https://rpc.hyperliquid.xyz/evm') });

const bots = await client.readContract({
  address: hyperEvm.contracts.botHub,
  abi: botHubAbi,
  functionName: 'botCount',
});

const bounds = await client.readContract({
  address: hyperEvm.contracts.protocolBounds,
  abi: protocolBoundsAbi,
  functionName: 'bounds',
});
```

## Contents

| Path | What it holds |
| --- | --- |
| `abi/<Contract>.json` | Plain JSON ABI for each contract |
| `deployments/999.json` | Addresses on HyperEVM, the USDC and CoreDepositWallet the vaults use, and the HyperCore asset index of each tradable market |
| `src/` | TypeScript sources: one `<name>Abi` export per contract and `hyperEvm` with the addresses |
| `dist/` | Compiled ES modules and type declarations |

| Export | Contract |
| --- | --- |
| `botHubAbi` | BotHub |
| `copyMarketAbi` | CopyMarket |
| `vaultFactoryAbi` | VaultFactory |
| `agentVaultAbi` | AgentVault (every copy and bot vault is a clone of it) |
| `protocolBoundsAbi` | ProtocolBounds |
| `hostedOperatorAbi` | HostedOperator |
| `feeCollectorAbi` | FeeCollector |
| `precompileReaderAbi` | PrecompileReader |

The sources these ABIs come from are in [Isometryme/contracts](https://github.com/Isometryme/contracts).

## License

[MIT](LICENSE)
