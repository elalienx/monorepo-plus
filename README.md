# MonorepoPlus

Additional NX information: [NX Guide](NX_GUIDE.md)

## Table of contents

1. [Run commands](#run-commands)
1. [Tech stack](#tech-stack)
1. [To do](#to-do)

## Run commands

```sh
# Start projects:
npx nx serve admin
npx nx serve inbox
npx nx serve landing
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

1. Monorepo: [NX]("https://nx.dev")
1. Linter: [ESLint]("https://eslint.org)
1. Formatter: [Prettier]("https://prettier.io")
1. Unit tests: [Jest]("https://jestjs.io")
1. End to End test (E2E): [Playwright]("https://playwright.dev")
