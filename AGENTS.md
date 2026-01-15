# Agent Development Guide

This document provides essential information for AI coding agents working in this repository.

## Project Overview

**Svelte 5** portfolio site with TypeScript, Vite (rolldown-vite@7.2.5), AnimeJS (Intro only), native Svelte transitions, and @sparkjsdev/spark UI components.

## Build & Development Commands

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build
npm run check        # Type check (REQUIRED before commits)
npm run format       # Format with Prettier (REQUIRED before commits)
npm run format:check # Check formatting only
```

**No test runner configured.** If adding tests, use Vitest: `"test": "vitest"`, `"test:single": "vitest run <path>"`

## Code Style Guidelines

**Formatting:** Semicolons required, single quotes, 2 spaces, 80 char width, ES5 trailing commas
**TypeScript:** ES2022 target, ESNext modules, strict mode, checkJs enabled, noEmit true

**Import Order:** (1) Type imports from external, (2) External dependencies, (3) Type imports local, (4) Local modules/utils, (5) Components. Use `import type` for types only.

**Naming:** Components `PascalCase.svelte`, utilities `camelCase.ts`, types/interfaces/enums `PascalCase`, variables/functions `camelCase`, CSS classes `kebab-case`

## Svelte 5 Patterns

**State:** Use `$state` (not `let`), mutate directly: `navigationState.page = Page.Home`
**Props:** Define `interface Props`, use `let { page, label }: Props = $props()`
**Events:** Use `onclick` (NOT `on:click`)
**Transitions:** `<div in:fadeBlur>` or `out:` or `transition:`
**Binding:** `<div bind:this={element}>`
**Scripts:** Always `<script lang="ts">`

**Types:** No implicit `any`, use `import type`, non-null assertions `!` sparingly
**Error handling:** Use TypeScript to prevent errors, add try-catch for async/parsing
**Styles:** Scoped `<style>` blocks preferred, external CSS only for shared styles, `z-index: 1000` for overlays, colors: `#000` (bg), `#1a1a1a` (dark gray), `#fff` (white)

## Project Structure

```
src/
├── App.svelte                    # Root component
├── main.ts                       # Application entry point
├── app.css                       # Global styles
└── lib/
    ├── Main.svelte               # Main layout + router (with WIP header)
    ├── Main.css                  # Main component styles
    ├── Intro.svelte              # Intro animation (uses AnimeJS)
    ├── Home.svelte               # Home page with navigation
    ├── Blog.svelte               # Blog page (placeholder)
    ├── Personal.svelte           # Personal page (placeholder)
    ├── Academic.svelte           # Academic page (placeholder)
    ├── Projects.svelte           # Projects page (placeholder)
    ├── Button.svelte             # Navigation button component
    ├── AnimeDemo.svelte          # Animation demo component
    ├── types.ts                  # Shared TypeScript types (Page enum)
    ├── navigation.svelte.ts      # Navigation state + functions
    └── transitions/
        └── fadeBlur.ts           # Custom fade+blur transition
```

**Navigation:** Custom routing (not SvelteKit), `?page=<name>` URL sync, global `navigationState`, `Main.svelte` router with `{#if}` blocks, `Page` enum in `types.ts`

## Svelte MCP Tools

**list-sections:** Use FIRST to find relevant docs (analyze use_cases field)
**get-documentation:** Fetch ALL relevant sections after list-sections
**svelte-autofixer:** MUST use before sending Svelte code to user (iterate until clean)
**playground-link:** Ask user first, only if NOT writing to project files

## Workflows

**Before commits:** (1) `npm run check`, (2) `npm run format`, (3) test in browser
**New pages:** Update `Page` enum → create component → add to `Main.svelte` router → update `navigation.svelte.ts` → add `in:fadeBlur`
**New components:** Use `<script lang="ts">`, Svelte 5 runes, define `Props` interface, run autofixer, add scoped styles
**Animations:** Page transitions use Svelte (see `fadeBlur.ts`), complex use AnimeJS (see `Intro.svelte`), simple use CSS
