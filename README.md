# MonorepoPlus

This project is a "learn by doing" spike with these goals:

1. Get confortable working in monorepos.
1. Learn to document multi-projects setups.
1. Use the documentation as a refactor guideline.

## Table of contents

1. [Project structure](#project-structure)
1. [Installation](#installation)
1. [Run commands](#run-commands)
1. [Tech stack](#tech-stack)

## Project structure

This project has 3 apps and 1 shared library.

- 👩‍💼 Admin: Control panel for customer support and sales teams to manage customers loans.
- 📥 Inbox: Control panel for customers to manage their loans.
- 🌎 Landing: Homepage designed to attract customers to apply for a loan.
- 🏛️ Aphrodite: The shared UI library used across apps.

## Installation

You need to have Node installed before running these commands. (I used Node 20 LTS)

```sh
# Install dependencies
npm install

# web browsers required for E2E (optional)
npx playwright install
```

## Main commands

The apps 👩‍💼 Admin, 📥 Inbox, and 🌎 Landing share the same commands, replace `admin` for `inbox`, and `landing` to run those as well.

```sh
# Start projects (one per terminal tab):
npx nx serve admin

# Unit testing:
npx nx test admin

# Create production bundles:
npx nx build admin

# Lint and format code with Biome:
npx nx biome-check admin

# View UI component gallery:
npx nx run admin:cosmos

# End to End (E2E) test:
npx nx e2e admin-e2e
```

## Support commands

```sh
# Show graph
npx nx graph

# Move project
npx nx g @nx/workspace:move --project my_project --destination folder/my_project

# Remove project
npx nx g remove my_project

# Create an app project
npx nx g @nx/react:app apps/my_app

# Create a library project
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
1. Add fetching.
