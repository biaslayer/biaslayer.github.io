# Bias Layer

A premium-feeling developer blog built with Astro, Tailwind CSS, and MDX for fast static publishing on GitHub Pages.

## Stack

- Astro static site
- Tailwind CSS
- MDX content collection
- GitHub Pages deployment via Actions

## Local development

```bash
npm install
npm run dev
```

## Publishing a new post

1. Create a new file in `src/content/blog/` with `.md` or `.mdx`.
2. Add frontmatter:

```md
---
title: "Your Title"
date: "2026-04-14"
excerpt: "A short, sharp summary."
tags:
  - Engineering
  - Notes
---
```

3. Write the post body.
4. Run `npm run build` to verify the static output.

Posts are added automatically to:

- The homepage archive
- The left sidebar navigation
- The RSS feed

## GitHub Pages

This repo includes [.github/workflows/deploy.yml](./.github/workflows/deploy.yml) for GitHub Pages deployment.

If this repository is your user site (`biaslayer.github.io`), the current `site` value in `astro.config.mjs` is already correct.

If you deploy as a project site instead, update `site` and add `base` in `astro.config.mjs`.
