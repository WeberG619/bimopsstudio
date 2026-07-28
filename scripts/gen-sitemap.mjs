#!/usr/bin/env node
/**
 * Generate public/sitemap.xml from the actual pages/ directory.
 *
 * Runs as a prebuild step so the sitemap can never drift from the site again.
 * The old hand-maintained sitemap listed 12 URLs, all without the trailing
 * slash the site actually serves (next.config.js sets trailingSlash: true),
 * so every entry was a 301 — and it omitted the highest-traffic pages.
 */
import { readdirSync, writeFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://www.bimopsstudio.com";

// Directories under pages/ that must never be indexed.
const EXCLUDE_DIRS = new Set(["account", "admin", "auth", "api"]);

// Individual routes that are transactional, gated, or internal.
const EXCLUDE_ROUTES = new Set([
  "/success/",
  "/thank-you/",
  "/thank-you-beta/",
  "/verify-analytics/",
  "/live-support/",
]);

// Higher = more important. Anything unlisted defaults to 0.6.
const PRIORITY = {
  "/": 1.0,
  "/services/": 0.9,
  "/ai-renderings/": 0.9,
  "/3d-mapping/": 0.9,
  "/projects/": 0.8,
  "/studio-copilot/": 0.8,
  "/ai-services/": 0.8,
  "/pricing/": 0.8,
  "/contact/": 0.8,
  "/book-consultation/": 0.8,
  "/about/": 0.7,
  "/free-tools/": 0.7,
  "/compliance/": 0.7,
  "/privacy/": 0.3,
  "/terms/": 0.3,
};

const CHANGEFREQ = {
  "/": "weekly",
  "/ai-renderings/": "weekly",
  "/projects/": "weekly",
  "/blog/": "weekly",
  "/privacy/": "yearly",
  "/terms/": "yearly",
};

function walk(dir, prefix = "") {
  const routes = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (EXCLUDE_DIRS.has(entry)) continue;
      routes.push(...walk(full, `${prefix}/${entry}`));
      continue;
    }
    if (!entry.endsWith(".tsx") || entry.startsWith("_")) continue;
    const name = entry.replace(/\.tsx$/, "");
    const route = name === "index" ? `${prefix}/` : `${prefix}/${name}/`;
    routes.push(route.replace(/\/{2,}/g, "/"));
  }
  return routes;
}

const today = new Date().toISOString().slice(0, 10);

const routes = [...new Set(walk(join(ROOT, "pages")))]
  .filter((r) => !EXCLUDE_ROUTES.has(r))
  .sort((a, b) => (PRIORITY[b] ?? 0.6) - (PRIORITY[a] ?? 0.6) || a.localeCompare(b));

const body = routes
  .map((r) => {
    const priority = (PRIORITY[r] ?? 0.6).toFixed(1);
    const changefreq = CHANGEFREQ[r] ?? "monthly";
    return [
      "  <url>",
      `    <loc>${SITE}${r}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(join(ROOT, "public", "sitemap.xml"), xml);
console.log(`sitemap.xml — ${routes.length} URLs, lastmod ${today}`);
