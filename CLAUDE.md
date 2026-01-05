# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Router 7 full-stack web application with server-side rendering (SSR), TypeScript, and Tailwind CSS.

## Commands

```bash
npm run dev       # Start dev server with HMR (http://localhost:5173)
npm run build     # Production build (outputs to /build)
npm start         # Run production server
npm run typecheck # TypeScript type checking + generate React Router types
```

No test or lint scripts are configured.

## Architecture

- **`app/`** - Main application source
  - `root.tsx` - Root layout with error boundary, font loading, meta tags
  - `routes.ts` - Route configuration (file-based routing)
  - `routes/` - Route components (e.g., `home.tsx` for index route)
  - `app.css` - Global styles with Tailwind CSS theme variables
- **`build/`** - Generated production output (client + server bundles)
- **`.react-router/`** - Auto-generated React Router types

## Key Configuration

- **Path alias**: `~/*` maps to `./app/*` (use `~/routes/home` instead of relative paths)
- **SSR**: Enabled by default in `react-router.config.ts` (set `ssr: false` for SPA mode)
- **Tailwind CSS**: Configured via Vite plugin, supports dark mode via CSS variables
