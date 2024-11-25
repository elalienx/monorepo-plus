# MonorepoPlus

This project is a "learn by doing" spike with these goals:

1. Get confortable working in monorepos.
1. Understand the Business Application page by recreating it.
1. Learn to document multi-projects setups.
1. Use the documentation as a refactor guideline.

Additional NX information: [NX Guide](NX_GUIDE.md)

## Table of contents

1. [Run commands](#run-commands)
1. [Tech stack](#tech-stack)
1. [To do](#to-do)

## Run commands

You need to have Node installed before running these commands. (I used Node 20 LTS)

```sh
# Install dependencies
npm install
```

```sh
# Start projects:
npx nx serve admin
npx nx serve inbox
npx nx serve landing
```

```sh
# End to End (E2E) test:
npx nx e2e admin-e2e
npx nx e2e inbox-e2e
npx nx e2e landing-e2e
```

```sh
# Create production bundles:
npx nx build admin
npx nx build inbox
npx nx build landing
```

```sh
# See projects available targets:
npx nx show project admin
npx nx show project inbox
npx nx show project landing
```

## Tech stack

This is the global tech stack for the monorepo, for each indivual app, check their readme files.

1. Monorepo: [NX](https://nx.dev)
1. Bundler: [Vite](https://vite.dev)
1. Linter: [ESLint](https://eslint.org)
1. Formatter: [Prettier](https://prettier.io)
1. Unit tests: [Jest](https://jestjs.io)
1. E2E test: [Playwright](https://playwright.dev)

## Todo

1. Run E2E tests ✅
1. Move E2E folders ✅
1. Install a UI components folder as a package ✅
1. Remove Vite CJS warning on serve and e2e testing
1. Document folder structure (add "integrations" for BankId, Optimizely, etc.)
