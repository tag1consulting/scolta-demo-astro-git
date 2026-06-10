// Minimal config the `scolta-build` CLI and the injected routes read (they
// can't import the TS config in lib/config.ts). This content-mode demo serves
// the index from public/, so the CLI's `assets` subcommand must copy the
// runtime bundle into public/scolta to sit alongside public/pagefind. The full
// Scolta config lives in lib/config.ts and reaches the routes through the
// scolta-astro integration options (astro.config.mjs), which take precedence
// over this file.
export default { outputDir: "public", assetsPublicPath: "/scolta" };
