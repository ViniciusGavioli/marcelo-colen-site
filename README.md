# Marcelo Colen — Site

Next.js (App Router) site + landing pages.

## Quickstart

```bash
npm ci
npm run dev
```

Open http://localhost:3000

## Key routes

- `/recurso-heteroidentificacao` (LP principal)
- `/consulta` (conversão / contato)
- `/consulta-racismo`
- `/defesa`
- `/criminal`

## Environment

Copy `.env.example` to `.env.local` and fill required values.

> Never commit `.env.local`.

## QA

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy

This repo is designed to be deployed on Vercel.
- PRs should generate Preview Deploys.
- `master` deploys to Production.

## Operations

See OpenClaw workspace reports:
- `reports/changes_queue.md`
- `reports/changelog.md`
