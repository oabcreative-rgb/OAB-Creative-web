// Generates public/sitemap.xml from scripts/sitemap-routes.json.
// Runs automatically before every `npm run build` (see package.json
// "prebuild"). Re-run manually with `node scripts/generate-sitemap.mjs`
// after editing the route list.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Keep in sync with src/seo/config.ts SITE_URL.
const SITE_URL = "https://www.oabcreative.com";

const { routes } = JSON.parse(readFileSync(resolve(__dirname, "sitemap-routes.json"), "utf-8"));

const today = new Date().toISOString().slice(0, 10);

const urlEntries = routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml generated with ${routes.length} URLs`);
