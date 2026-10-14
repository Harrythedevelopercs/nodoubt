import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceDirectory = process.argv[2];

if (!sourceDirectory) {
  throw new Error(
    "Usage: node scripts/import-schema-scripts.mjs <schema-script-directory>",
  );
}

const schemaFilesByRoute = {
  "/": "01-homepage-schema.html",
  "/book-writing-services": "02-book-writing-services-schema.html",
  "/book-publishing-services": "03-book-publishing-services-schema.html",
  "/book-editing-services": "04-book-editing-services-schema.html",
  "/book-proofreading-services": "05-book-proofreading-services-schema.html",
  "/book-cover-design-services": "06-book-cover-design-services-schema.html",
  "/children-book-publication-services":
    "07-children-book-publication-services-schema.html",
  "/children-book-illustrator": "08-children-book-illustrator-schema.html",
  "/audiobook-recording-services":
    "09-audiobook-recording-services-schema.html",
  "/author-website-design-services":
    "10-author-website-design-services-schema.html",
  "/book-marketing-services": "11-book-marketing-services-schema.html",
  "/about-us": "12-about-us-schema.html",
  "/contact-us": "13-contact-us-schema.html",
  "/portfolio": "14-portfolio-schema.html",
  "/pricing": "15-pricing-schema.html",
  "/blogs": "16-blogs-listing-schema.html",
  "/book-trailer-services": "17-book-trailer-page-schema.html",
  "/book-writing-guide-for-first-time-authors":
    "blogs/blog-book-writing-guide-for-first-time-authors-schema.html",
  "/childrens-book-cover-designs":
    "blogs/blog-childrens-book-cover-designs-schema.html",
  "/childrens-book-illustration-styles":
    "blogs/blog-childrens-book-illustration-styles-schema.html",
  "/how-expert-proofreading-and-editing-polish-your-book":
    "blogs/blog-how-expert-proofreading-and-editing-polish-your-book-schema.html",
  "/how-to-hire-your-first-book-writing-company":
    "blogs/blog-how-to-hire-your-first-book-writing-company-schema.html",
  "/how-to-write-a-childrens-book":
    "blogs/blog-how-to-write-a-childrens-book-schema.html",
  "/scale-your-author-brand-with-multi-book-series":
    "blogs/blog-scale-your-author-brand-with-multi-book-series-schema.html",
  "/why-storyboarding-is-key-for-book-creation":
    "blogs/blog-why-storyboarding-is-key-for-book-creation-schema.html",
};

const importedSchemas = {};
const sourceSchemas = {};
const standardTopics = [
  "Book writing",
  "Ghostwriting",
  "Book editing",
  "Proofreading",
  "Book publishing",
  "Ebook publishing",
  "Audiobook production",
  "Book cover design",
  "Book formatting",
  "Children book publishing",
  "Children book illustration",
  "Video book trailer production",
  "Author website design",
  "Book marketing",
  "Book distribution",
];

for (const [route, relativeFile] of Object.entries(schemaFilesByRoute)) {
  const sourceFile = path.join(sourceDirectory, relativeFile);
  const html = await readFile(sourceFile, "utf8");
  const script = html.match(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i,
  );

  if (!script) {
    throw new Error(`No JSON-LD script found in ${sourceFile}`);
  }

  const schema = JSON.parse(script[1]);
  sourceSchemas[route] = schema;
  const graph = schema["@graph"];

  if (schema["@context"] !== "https://schema.org" || !Array.isArray(graph)) {
    throw new Error(`Unexpected schema structure in ${sourceFile}`);
  }

  const organization = graph.find(
    (node) => node["@id"] === "https://www.yourbrand.com/#organization",
  );
  const website = graph.find(
    (node) => node["@id"] === "https://www.yourbrand.com/#website",
  );

  if (!organization || !website) {
    throw new Error(`Missing shared Organization or WebSite node in ${sourceFile}`);
  }

  const organizationProfile = organization.knowsAbout
    ? JSON.stringify(organization.knowsAbout) === JSON.stringify(standardTopics)
      ? "standard"
      : "bookTrailer"
    : "minimal";

  importedSchemas[route] = {
    organizationProfile,
    ...(organization.hasOfferCatalog
      ? { organizationExtras: { hasOfferCatalog: organization.hasOfferCatalog } }
      : {}),
    graph: graph.filter(
      (node) => node["@id"] !== organization["@id"] && node["@id"] !== website["@id"],
    ),
  };
}

const {
  bookTrailerOrganizationDetails,
  organizationNode,
  organizationSameAs,
  standardOrganizationDetails,
  websiteNode,
} = await import("../src/app/seo/site.js");

const organizationDetailsByProfile = {
  minimal: {},
  standard: standardOrganizationDetails,
  bookTrailer: bookTrailerOrganizationDetails,
};

const generatedSchemasByRoute = {
  "/privacy-policy": {
    organizationProfile: "standard",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://www.yourbrand.com/privacy-policy#webpage",
        url: "https://www.yourbrand.com/privacy-policy",
        name: "Privacy policy - Book Writing Company in US",
        description:
          "Learn how Book Writing collects, uses, and protects your data. Our privacy policy details information handling, security, cookies, and your rights.",
        isPartOf: {
          "@id": "https://www.yourbrand.com/#website",
        },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.yourbrand.com/logo.png",
        },
        about: {
          "@id": "https://www.yourbrand.com/#organization",
        },
        breadcrumb: {
          "@id": "https://www.yourbrand.com/privacy-policy#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yourbrand.com/privacy-policy#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: {
              "@type": "WebPage",
              "@id": "https://www.yourbrand.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy Policy",
            item: {
              "@type": "WebPage",
              "@id": "https://www.yourbrand.com/privacy-policy",
              name: "Privacy Policy",
            },
          },
        ],
      },
    ],
  },
  "/terms-of-use": {
    organizationProfile: "standard",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://www.yourbrand.com/terms-of-use#webpage",
        url: "https://www.yourbrand.com/terms-of-use",
        name: "Terms of use - Book Writing Company in US",
        description:
          "Review Book Writing's Terms of Use to understand site conditions, content rights, electronic communications, and important disclaimers for using our services.",
        isPartOf: {
          "@id": "https://www.yourbrand.com/#website",
        },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://www.yourbrand.com/logo.png",
        },
        about: {
          "@id": "https://www.yourbrand.com/#organization",
        },
        breadcrumb: {
          "@id": "https://www.yourbrand.com/terms-of-use#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.yourbrand.com/terms-of-use#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: {
              "@type": "WebPage",
              "@id": "https://www.yourbrand.com/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Terms of Use",
            item: {
              "@type": "WebPage",
              "@id": "https://www.yourbrand.com/terms-of-use",
              name: "Terms of Use",
            },
          },
        ],
      },
    ],
  },
};

const buildPageSchema = (pageData) => {
  const organization =
    pageData.organization ?? {
      ...organizationNode,
      ...organizationDetailsByProfile[pageData.organizationProfile],
      sameAs: organizationSameAs,
      ...pageData.organizationExtras,
    };
  const website = pageData.website ?? websiteNode;

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, ...pageData.graph],
  };
};

for (const [route, pageData] of Object.entries(importedSchemas)) {
  const sourceGraph = sourceSchemas[route]["@graph"];
  const reconstructedSchema = buildPageSchema(pageData);

  if (
    JSON.stringify(reconstructedSchema["@graph"][0]) !==
    JSON.stringify(sourceGraph[0])
  ) {
    pageData.organization = sourceGraph[0];
  }

  if (
    JSON.stringify(reconstructedSchema["@graph"][1]) !==
    JSON.stringify(sourceGraph[1])
  ) {
    pageData.website = sourceGraph[1];
  }

  assert.deepStrictEqual(
    buildPageSchema(pageData),
    sourceSchemas[route],
    `Imported schema does not exactly match the supplied script for ${route}`,
  );
}

Object.assign(importedSchemas, generatedSchemasByRoute);

const targetSchemas = Object.fromEntries(
  Object.entries(importedSchemas).map(([route, pageData]) => [
    route,
    buildPageSchema(pageData),
  ]),
);

const outputFile = path.resolve("src/app/seo/page-schema-data.json");
await mkdir(path.dirname(outputFile), { recursive: true });
await writeFile(outputFile, `${JSON.stringify(importedSchemas, null, 2)}\n`, "utf8");

console.log(
  `Imported ${Object.keys(sourceSchemas).length} supplied schemas and ${Object.keys(generatedSchemasByRoute).length} generated schemas into ${outputFile}.`,
);

if (process.argv.includes("--verify-build")) {
  const buildDirectory = path.resolve(".next/server/app");
  let propertyOrderMatches = 0;
  let generatedMatches = 0;

  for (const [route, sourceSchema] of Object.entries(sourceSchemas)) {
    const relativeHtmlFile =
      route === "/"
        ? "index.html"
        : `${route.slice(1).split("/").join(path.sep)}.html`;
    const htmlFile = path.join(buildDirectory, relativeHtmlFile);
    const html = await readFile(htmlFile, "utf8");
    const renderedScripts = [
      ...html.matchAll(
        /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
      ),
    ];

    assert.equal(
      renderedScripts.length,
      1,
      `${route} must render exactly one JSON-LD script`,
    );

    const renderedSchema = JSON.parse(renderedScripts[0][1]);
    assert.deepStrictEqual(
      renderedSchema,
      sourceSchema,
      `Rendered schema does not match the supplied script for ${route}`,
    );

    if (JSON.stringify(renderedSchema) === JSON.stringify(sourceSchema)) {
      propertyOrderMatches += 1;
    }
  }

  for (const [route, generatedSchema] of Object.entries(generatedSchemasByRoute)) {
    const relativeHtmlFile = `${route.slice(1).split("/").join(path.sep)}.html`;
    const htmlFile = path.join(buildDirectory, relativeHtmlFile);
    const html = await readFile(htmlFile, "utf8");
    const renderedScripts = [
      ...html.matchAll(
        /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
      ),
    ];

    assert.equal(
      renderedScripts.length,
      1,
      `${route} must render exactly one JSON-LD script`,
    );

    assert.deepStrictEqual(
      JSON.parse(renderedScripts[0][1]),
      buildPageSchema(generatedSchema),
      `Rendered generated schema does not match expected data for ${route}`,
    );
    generatedMatches += 1;
  }

  console.log(
    `Verified ${Object.keys(sourceSchemas).length}/${Object.keys(sourceSchemas).length} supplied rendered schemas as exact JSON data matches; ${propertyOrderMatches}/${Object.keys(sourceSchemas).length} also preserve the supplied property order. Verified ${generatedMatches}/${Object.keys(generatedSchemasByRoute).length} generated rendered schemas.`,
  );
}

const verifyUrlIndex = process.argv.indexOf("--verify-url");

if (verifyUrlIndex !== -1) {
  const baseUrl = new URL(process.argv[verifyUrlIndex + 1] || "http://localhost:3000/");
  const sitemap = await readFile(path.resolve("public/sitemap.xml"), "utf8");
  const sitemapRoutes = [...sitemap.matchAll(/<loc>https:\/\/www\.yourbrand\.com(\/[^<]*)<\/loc>/g)]
    .map((match) => match[1] || "/");
  const noindexRoutes = [
    "/landing/lp1",
    "/landing/lp2",
    "/refund-form",
    "/thank-you",
  ];
  const allRoutes = [...new Set([...sitemapRoutes, ...noindexRoutes])];
  let exactMatches = 0;
  let headMatches = 0;
  let nonTargetMatches = 0;

  for (const route of allRoutes) {
    const response = await fetch(new URL(route, baseUrl));
    assert.equal(response.status, 200, `${route} returned HTTP ${response.status}`);
    const html = await response.text();
    const renderedScripts = [
      ...html.matchAll(
        /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
      ),
    ];

    if (targetSchemas[route]) {
      assert.equal(
        renderedScripts.length,
        1,
        `${route} must render exactly one JSON-LD script`,
      );
      const renderedSchema = JSON.parse(renderedScripts[0][1]);
      if (sourceSchemas[route]) {
        assert.deepStrictEqual(
          renderedSchema,
          sourceSchemas[route],
          `Live schema does not match the supplied script for ${route}`,
        );
        assert.equal(
          JSON.stringify(renderedSchema),
          JSON.stringify(sourceSchemas[route]),
          `Live schema does not preserve supplied property order for ${route}`,
        );
      } else {
        assert.deepStrictEqual(
          renderedSchema,
          targetSchemas[route],
          `Live schema does not match generated data for ${route}`,
        );
      }
      exactMatches += 1;

      const scriptPosition = html.indexOf(renderedScripts[0][0]);
      const headEnd = html.indexOf("</head>");
      assert.ok(
        scriptPosition !== -1 && headEnd !== -1 && scriptPosition < headEnd,
        `${route} renders its JSON-LD outside <head>`,
      );
      headMatches += 1;
    } else {
      assert.equal(
        renderedScripts.length,
        0,
        `${route} renders an unexpected legacy JSON-LD script`,
      );
      nonTargetMatches += 1;
    }
  }

  const notFoundResponse = await fetch(new URL("/__schema-verification-not-found__", baseUrl));
  assert.equal(notFoundResponse.status, 404, "Unknown route must return HTTP 404");
  const notFoundHtml = await notFoundResponse.text();
  assert.equal(
    [...notFoundHtml.matchAll(/type=["']application\/ld\+json["']/gi)].length,
    0,
    "404 response renders an unexpected JSON-LD script",
  );

  console.log(
    `Live verification passed: ${exactMatches}/${Object.keys(targetSchemas).length} target matches in <head>; ${nonTargetMatches}/${nonTargetMatches} non-target pages and the 404 response contain zero legacy schemas.`,
  );
}
