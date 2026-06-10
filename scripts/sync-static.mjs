// Copy the freshly built runtime assets + Pagefind index into the server
// build's client dir. `astro build` snapshots public/ into dist/client BEFORE
// postbuild writes public/scolta and public/pagefind, and the @astrojs/node
// adapter serves static files from dist/client only — without this step the
// first build would serve 404s for /scolta/* and /pagefind/* until rebuilt.
import * as fs from "node:fs";

if (fs.existsSync("dist/client")) {
  for (const dir of ["scolta", "pagefind"]) {
    const src = `public/${dir}`;
    const dest = `dist/client/${dir}`;
    if (!fs.existsSync(src)) continue;
    fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(src, dest, { recursive: true });
    console.log(`[scolta] Synced ${src} -> ${dest}`);
  }
}
