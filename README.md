# Staking Dapp Sample Frontend for Starknet and ERC6551 Tokenbound accounts

This repository contains frontend code for a basic staking dapp. It contains the necessary code to get started with starknet integration and specifically Starknet Tokenbound (ERC6551) Integration. This is a boilerplate and does not imply completeness.
You should extend on this to build you own design.

- [Live Link](https://starknet-tokenbound-staking-ui.vercel.app/)

This project uses `yarn` package manager.

## Technologies Used

- [starknet-react](https://starknet-react.com/docs/getting-started)
- [starknet-tokenbound](https://tokenbound.gitbook.io/starknet-tokenbound)
- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `yarn`:

```bash
yarn
```

### Run the development server

```bash
yarn dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
