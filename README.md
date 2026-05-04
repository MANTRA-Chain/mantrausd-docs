# mantraUSD Documentation

Documentation site for mantraUSD, an ecosystem stablecoin built on M0's universal stablecoin platform.

## Overview

mantraUSD is an ecosystem stablecoin built on **M0's universal stablecoin platform**, designed to become the primary medium of exchange for tokenized Real World Assets (RWAs). As an extension of **$M** (M0's base stablecoin), mantraUSD inherits M0's security and operational framework. M0 is the same building block used by several of the largest stablecoins (e.g., mUSD), and **all collateralization is handled by M0**. This documentation site provides comprehensive technical information, integration guides, and resources for developers and users.

## Contract Information

- **Contract Address**: `0xd2b95283011E47257917770D28Bb3EE44c849f6F`
- **Network**: MANTRA Chain
- **Explorer**: [View on Blockscout](https://blockscout.mantrascan.io/address/0xd2b95283011E47257917770D28Bb3EE44c849f6F?tab=contract_code)

## Tech Stack

This site is built with [Unmint](https://www.unmint.dev/) — a free, open-source, self-hosted alternative to Mintlify that uses:

- [Next.js](https://nextjs.org) (App Router)
- [Fumadocs](https://fumadocs.dev/) for MDX content + search
- [Tailwind CSS](https://tailwindcss.com) v4
- [MDX](https://mdxjs.com) for content authoring

It is deployed to [Cloudflare Workers](https://workers.cloudflare.com/) via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

## Local Development

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

View your local preview at `http://localhost:3000`.

### Production build

```bash
npm run build
npm start
```

### Tests

```bash
npm test
```

## Deployment (Cloudflare Workers)

The site is deployed to Cloudflare Workers using OpenNext.

### Preview locally with Workers runtime

```bash
npm run preview:worker
```

### Deploy

```bash
npm run deploy:worker
```

Configuration lives in [`wrangler.jsonc`](./wrangler.jsonc) and [`open-next.config.ts`](./open-next.config.ts).

## Documentation Structure

Source content lives under [`content/docs/`](./content/docs):

- **Getting Started**: Introduction and quick start guides
- **How It Works**: Stability mechanisms, minting/burning, collateral
- **Smart Contracts**: Contract address, ABI, security information
- **Integration**: Developer guides and code examples
- **Resources**: Whitepaper, FAQ, useful links

The sidebar/section ordering is configured in [`content/docs/meta.json`](./content/docs/meta.json), and global site/theme configuration lives in [`lib/theme-config.ts`](./lib/theme-config.ts).

## Contributing

Contributions are welcome! Please ensure all documentation follows the existing style and includes the contract address where relevant.

## License

MIT License

## Links

- [mantraUSD Website](https://mantrausd.com)
- [MANTRA Chain](https://mantrachain.io)
- [Discord Community](https://discord.gg/mantra)
