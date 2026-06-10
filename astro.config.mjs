// GitMastery (Astro) — registers the scolta-astro integration (AI routes at
// /api/scolta/v1/* + the options virtual module) with the demo's Scolta config.
// Server output via the @astrojs/node standalone adapter (parity with the Nuxt
// demo's Nitro node-server): pages render server-side from the bundled content
// manifest, and the AI endpoints need POST.
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import scoltaAstro from "scolta-astro";
import { scoltaConfigInit } from "./lib/config.ts";

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [scoltaAstro(scoltaConfigInit)],
  vite: {
    // Keep the scolta binding a runtime require from node_modules; the
    // scolta-astro package itself is forced through Vite by the integration so
    // its options virtual module resolves.
    ssr: { external: ["scolta"] },
  },
});
