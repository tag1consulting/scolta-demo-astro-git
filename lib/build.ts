/**
 * Build the GitMastery Pagefind index from the content source using the
 * in-process TS indexer (via scolta-astro). Used by `scripts/build-index.ts`
 * (the `scolta:build` script) and by the test suite (with temp dirs).
 */

import { buildIndex, AstroScoltaConfig, type AstroScoltaConfigInit } from "scolta-astro/core";
import { getConfig, scoltaConfigInit } from "./config.js";
import { GitMasterySource } from "./source.js";

export interface BuildOpts {
  mode?: "fresh" | "resume" | "restart";
  force?: boolean;
  configOverrides?: Partial<AstroScoltaConfigInit>;
  logger?: { info(m: string, ...a: unknown[]): void; warn(m: string, ...a: unknown[]): void; error(m: string, ...a: unknown[]): void };
}

export async function buildGitMasteryIndex(opts: BuildOpts = {}) {
  const config = opts.configOverrides
    ? AstroScoltaConfig.fromEnv({ ...scoltaConfigInit, ...opts.configOverrides })
    : getConfig();
  return buildIndex(config, {
    source: new GitMasterySource(),
    mode: opts.mode,
    force: opts.force,
    logger: opts.logger,
  });
}
