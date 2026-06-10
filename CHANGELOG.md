# Changelog

## Unreleased

- Initial GitMastery (Astro) demo: the Astro port of the multilingual Git
  documentation site (285 EN docs + 1 About + es/fr/it/de translations = 1,426
  indexable pages), URL-compatible with the Drupal, Django, Next.js, and Nuxt
  GitMastery demos. Server output via the `@astrojs/node` standalone adapter;
  pages render from a build-time content manifest bundled into the server.
- GitMastery theme parity: sticky header with brand + collapsible language
  switcher, sidebar section nav with active-page highlighting, hero + section
  grid on the home page, themed per-type article rendering with the `.doc-meta`
  badge row, and the full theme CSS (Inter + Fira Code, Git-orange accent,
  GitHub-dark code blocks).
- The Scolta search widget (`ScoltaSearch.astro` from scolta-astro) lives in
  the global header on every page. The active content language is derived from
  the URL (EN at `/<slug>/`, translations at `/<lang>/<slug>/`) and injected as
  `currentLanguage`, and `auto_language_filter` is enabled, so search results
  and the AI overview lock to that page's language.
- Unknown doc slugs render the not-found article under an HTTP 404 response
  status (parity with the Next/Nuxt/Drupal/Django demos).
- Scolta AI enabled out of the box via `ai_provider: "amazee"` — a free LiteLLM
  trial is auto-provisioned on first use (no key). Set `SCOLTA_AI_PROVIDER` +
  `SCOLTA_API_KEY` to use a custom provider instead.
- DDEV rig (`gitmastery-astro`): generic webserver, monorepo packages mount +
  container-only node_modules volume, post-start production build gated by a
  readiness sentinel, and an `@astrojs/node` daemon serving port 3000.
