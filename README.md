# CI/CD Demo API

A minimal Node.js API with automated tests and a GitHub Actions CI pipeline.

![CI](https://github.com/RCanevy/software-engineering-ci-demo/actions/workflows/ci.yml/badge.svg)

## Tech stack

- Node.js + Express
- Jest + Supertest
- GitHub Actions (CI)

## Features

- `/` health endpoint returning `{ status: "ok" }`
- `/hello?name=John` returns a personalised greeting
- Automated test suite run on every push via GitHub Actions

## How to run locally

```bash
npm install
npm test          # run tests
node server.js    # start API on http://localhost:3000
