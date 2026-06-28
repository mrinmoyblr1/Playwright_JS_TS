# AGENTS

## Purpose
This repository contains Playwright end-to-end tests for web applications. The primary goal of this file is to help AI coding agents understand the repository layout, test conventions, and how to work safely and effectively in this codebase.

## Key repository details
- Test framework: `@playwright/test` (v1.58.2)
- Config file: `playwright.config.js`
- Test directory: `./tests`
- Example test directory: `./tests-examples`
- Manual test cases: `MANUAL_TEST_CASES.md`
- CI workflow: `.github/workflows/playwright.yml`

## How tests are run
- Install dependencies: `npm ci`
- Install browsers: `npx playwright install --with-deps`
- Run tests: `npx playwright test`
- There is no `npm test` script defined, so use the explicit Playwright command.

## Important conventions
- Tests are typically authored in CommonJS (`const { test, expect } = require('@playwright/test')`), though some examples use ES modules.
- The repository uses `playwright.config.js` to set:
  - `testDir: './tests'`
  - `headless: true`
  - `screenshot: 'on'`
  - `video: 'on'`
  - `trace: 'on'`
- Avoid inventing application source structure; the repo contains only tests, config, and GitHub Actions.
- Prefer locating selectors by visible page behavior and stable attributes.

## Font/style-related guidance
- There is no dedicated font or CSS source code in this repository.
- Some existing tests use inline style-based locators such as:
  - `page.locator("[style*='color: lightgray']")`
  - `page.locator("[style*='block']")`
- When asked to work on font or style issues, focus on:
  - test selectors and assertions around styled UI elements
  - preserving Playwright locator and assertion patterns already used in the repo
  - avoiding assumptions about external app CSS or font files not present in the repo

## Notes for agents
- Do not add unrelated application code; keep changes limited to tests, config, and repository guidance.
- Use existing Playwright patterns when modifying or adding tests.
- Validate new tests by running `npx playwright test` and ensure they are consistent with the current `playwright.config.js` settings.
- If a task mentions fonts or typography and no direct font files exist, treat it as a test/assertion issue rather than a UI implementation change.
