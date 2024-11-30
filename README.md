# MonorepoPlus

This project is a "learn by doing" spike with these goals:

1. Get confortable working in monorepos.
1. Understand the Business Application page by recreating it.
1. Learn to document multi-projects setups.
1. Use the documentation as a refactor guideline.

Additional NX information: [NX Guide](NX_GUIDE.md)

## Table of contents

1. [Installation](#installation)
1. [Run commands](#run-commands)
1. [Tech stack](#tech-stack)
1. [To do](#to-do)

## Installation

You need to have Node installed before running these commands. (I used Node 20 LTS)

```sh
# Install dependencies
npm install

# web browsers required for E2E (optional)
npx playwright install
```

## Main commands

```sh
# Start projects (one per terminal tab):
npx nx serve admin
npx nx serve inbox
npx nx serve landing
```

```sh
# Unit testing:
npx nx test admin
npx nx test inbox
npx nx test landing
```

```sh
# End to End (E2E) test:
npx nx e2e admin-e2e
npx nx e2e inbox-e2e
npx nx e2e landing-e2e
```

```sh
# Lint and format code with Biome:
npx nx biome-check admin
npx nx biome-check inbox
npx nx biome-check landing
```

```sh
# View UI component gallery:
npx nx run admin:cosmos
npx nx run inbox:cosmos
npx nx run landing:cosmos
```

```sh
# Create production bundles:
npx nx build admin
npx nx build inbox
npx nx build landing
```

## Support commands

```sh
# Show graph
npx nx graph

# Move project
npx nx g @nx/workspace:move --project my_project --destination folder/my_project

# Remove project
npx nx g remove my_project

# Create project app
npx nx g @nx/react:app apps/my_app

# Create project lib
npx nx g @nx/react:lib shared/my_lib
```

## Tech stack

This is the global tech stack for the monorepo, for each indivual app, check their readme files.

1. Monorepo: [NX](https://nx.dev)
1. Bundler: [Vite](https://vite.dev)
1. Linter: [Biome](https://biomejs.dev)
1. Formatter: Biome as well.
1. Unit tests: [Vitest](https://vitest.dev)
1. E2E test: [Playwright](https://playwright.dev)
1. UI gallery: [React Cosmos](https://reactcosmos.org)

## Todo

### Infrastructure

1. Create 3 apps. ✅
1. Create separated E2E folders for apps. ✅
1. Rename E2E command for easier use. ✅
1. Create basic HTML for apps. ✅
1. Create shared folder for components. ✅
1. Set up a CI pipeline to run on feature branches instead of relying on main. ✅
1. Replace dependencies using CommonJS to ones using ES imports. ✅
1. Fix folder structure blocking NX to understand the E2E folders. ✅
1. Replace ESlint for Biome. ✅
1. Remove Babel. ✅
1. Replace Jest for Vitest. ✅
1. Add Cosmos. ✅
1. Replace NPM with PNPM

### Busines app page

1. Create navigation sidebar
1. Create page
1. Add form handling
1. Add state management
1. Add fetching
