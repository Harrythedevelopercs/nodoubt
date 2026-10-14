import { execFileSync } from "node:child_process";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://www.yourbrand.com";
const appRoot = path.resolve("src/app");
const excludedDirectories = new Set([
  "api", "book-writing-services-2", "components", "home", "landing", "layout", "refund-form", "seo",
  "services", "thank-you", "[slug]",
]);

function gitDate(file) {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
      encoding: "utf8",
    }).trim() || new Date().toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

const entries = await readdir(appRoot, { withFileTypes: true });
const routes = [{ route: "/", file: path.join(appRoot, "page.jsx") }];

for (const entry of entries) {
  if (!entry.isDirectory() || excludedDirectories.has(entry.name)) continue;
  const pageFile = path.join(appRoot, entry.name, "page.jsx");
  try {
    await readFile(pageFile, "utf8");
    routes.push({ route: `/${entry.name}`, file: pageFile });
  } catch {}
}

const uniqueRoutes = [...new Map(routes.map((item) => [item.route, item])).values()]
  .sort((a, b) => a.route.localeCompare(b.route));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...uniqueRoutes.map(({ route, file }) => [
    "  <url>",
    `    <loc>${siteUrl}${route}</loc>`,
    `    <lastmod>${gitDate(file)}</lastmod>`,
    "    <changefreq>daily</changefreq>",
    "    <priority>0.9</priority>",
    "  </url>",
  ].join("\n")),
  "</urlset>",
  "",
].join("\n");

await writeFile(path.resolve("public/sitemap.xml"), xml, "utf8");
console.log(`Generated sitemap with ${uniqueRoutes.length} canonical URLs.`);
