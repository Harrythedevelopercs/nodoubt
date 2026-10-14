import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const key = process.env.INDEXNOW_KEY?.trim();
if (!key) throw new Error("INDEXNOW_KEY is required.");
if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) throw new Error("INDEXNOW_KEY has an invalid format.");

const sitemap = await readFile(path.resolve("public/sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
await writeFile(path.resolve("public", `${key}.txt`), key, "utf8");

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "www.yourbrand.com",
    key,
    keyLocation: `https://www.yourbrand.com/${key}.txt`,
    urlList,
  }),
});

if (!response.ok) throw new Error(`IndexNow returned HTTP ${response.status}.`);
console.log(`Submitted ${urlList.length} URLs to IndexNow.`);
