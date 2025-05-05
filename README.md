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
This project is divided in 3 groups: our websites inside 📁 apps, business units inside 📁 products, and third party libraries inside 📁 packages.

### 📁 apps

- 👩‍💼 Admin: Control panel for customer support and sales teams to manage customers loans.
- 📥 Inbox: Control panel for customers to manage their loans.
- 🌎 Landing: Homepage designed to attract customers to apply for a loan.

### 📁 products

- 💼 Business loans: Loans for small to medium business.
- 👨🏻 Consumer loans: Loans for the general public.
- 🏥 Insurances: Add-ons sell on top of the consumer loans. (example)
- 🏠 Mortgages: Loans for home properties. (example)

### 📁 packages

- 🏛️ Aphrodite: The shared UI library used across apps.
- 🏦 Bank ID: To authentificate users with their personnummer (SSN).

It also has several libraries such as:

- 🏛️ Aphrodite: The shared UI library used across apps.
- 🏦 Bank ID: To securely login users. (pending ⏱️)
- 🆎 Optimizely: To perform A/B testing and controlled feature releases. (pending ⏱️)

## Installation

Install Node before running these commands. (tested on Node 20 LTS)

Then run these commands in the following order:

```sh
# 1. Install dependencies consistently across teams
pnpm install --frozen-lockfile

# 2. Allow NX commands globally
pnpm add --global nx@latest

# 3. Web browsers required for E2E
pnpm add playwright
```

## Main commands

The apps 👩‍💼 Admin, 📥 Inbox, and 🌎 Landing share the same commands, replace `admin` with `inbox` or `landing` to run those.

```sh
# Start project
nx serve admin

# Unit testing:
nx test admin

# Create production bundle:
nx build admin

# Lint and format code with Biome:
nx biome-check admin

# View UI component gallery:
nx run admin:cosmos

# End to End (E2E) test:
nx e2e admin-e2e
```

## Support commands

```sh
# Show graph
nx graph

# Create an app project
nx g @nx/react:app apps/my_app

# Create a business unit or third party library
nx g @nx/react:lib shared/my_lib

# Move project
nx g @nx/workspace:move --project my_project --destination folder/my_project

# Remove project
nx g remove my_project
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
