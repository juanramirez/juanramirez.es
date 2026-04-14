# juanramirez.es

Personal website built with Astro and Tailwind CSS.

## Stack

- Astro (static-first)
- Tailwind CSS
- Markdown content collections (no external CMS)

## Project structure

```text
src/
  components/
  content/
    blog/         # Markdown posts
    portfolio/    # Markdown project entries
    config.ts     # Frontmatter schemas
  layouts/
  pages/
    blog/
    portfolio/
  styles/
```

## Development

```bash
npm install
npm run dev
```

## Blog frontmatter format

Markdown files in `src/content/blog` must include:

```yaml
---
title: "Post title"
date: 2026-04-14
tags:
  - tech
  - writing
excerpt: "A short summary shown on the blog index."
---
```

## Portfolio frontmatter format

Markdown files in `src/content/portfolio` must include:

```yaml
---
name: "Project name"
description: "What this project is about"
status: "in-development" # or "published"
url: "https://example.com" # optional
---
```

## Migrating from Jekyll Markdown

1. Copy existing `.md` posts into `src/content/blog`.
2. Ensure each file has `title`, `date`, `tags`, and `excerpt` in frontmatter.
3. Keep the article body as standard Markdown.

## Vercel deployment

This project builds static output by default.

```bash
npm run build
```

Vercel should use:

- Build command: `npm run build`
- Output directory: `dist`

## Future SSR activation

When you want SSR/hybrid rendering later:

1. Install the adapter: `npm install @astrojs/vercel`.
2. Update `astro.config.mjs` to use `output: "server"` and add the Vercel adapter.