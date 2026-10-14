export const SITE_URL = "https://www.yourbrand.com";

export const SITE_NAME = "Heritage Leaf Books";
export const SITE_PHONE_DISPLAY = "(210) 692-4850";
export const SITE_PHONE_E164 = "+12106924850";
export const SITE_EMAIL = "info@yourbrand.com";

export const SITE_ADDRESS = {
  streetAddress: "11826 Gardner park ln",
  addressLocality: "Sugar Land",
  addressRegion: "TX",
  postalCode: "77498",
  addressCountry: "US",
};

export const SITE_SOCIAL_PROFILES = [
  "https://www.facebook.com/yourbrand/",
  "https://www.instagram.com/yourbrand/",
  "https://www.linkedin.com/company/yourbrand/",
  "https://x.com/yourbrand",
  "https://www.pinterest.com/yourbrand/",
  "https://www.youtube.com/@yourbrand",
  "https://www.tiktok.com/@yourbrand",
];

export const SITE_TOPICS = [
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

export const HOW_HEARD_OPTIONS = [
  "Google Search",
  "Bing Search",
  "ChatGPT or another AI assistant",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Online review site",
  "Friend or colleague referral",
  "Returning customer",
  "Other",
];

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationNode = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },
  email: SITE_EMAIL,
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE_EMAIL,
    contactType: "sales",
    areaServed: "US",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    ...SITE_ADDRESS,
  },
};

export const organizationSameAs = SITE_SOCIAL_PROFILES;

export const standardOrganizationDetails = {
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: SITE_TOPICS,
};

export const bookTrailerOrganizationDetails = {
  areaServed: standardOrganizationDetails.areaServed,
  knowsAbout: [
    "Video book trailer production",
    "Book trailer scriptwriting",
    "Storyboarding for book trailers",
    "2D animation",
    "3D animation",
    "Motion graphics",
    "Voiceover casting",
    "Sound design",
    "Book writing",
    "Book editing",
    "Book publishing",
    "Book cover design",
    "Audiobook production",
    "Book marketing",
  ],
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: {
    "@id": ORGANIZATION_ID,
  },
  inLanguage: "en-US",
};
