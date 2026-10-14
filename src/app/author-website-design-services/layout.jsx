import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Create Your Author Website Today – No Design Skills Needed!",
    description: "We create beautiful Author Websites that engage and convert viewers into readers. So, anchor your literary identity with our author website design services.",
    //===== OG Tags =====
    openGraph: {
        title: "Create Your Author Website Today – No Design Skills Needed!",
        description: "We create beautiful Author Websites that engage and convert viewers into readers. So, anchor your literary identity with our author website design services.",
        url: '/author-website-design-services',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/author-website-design-services' },
      //===== GEO Tags =====
    others: {
        "DC.title": "author website design services",
        "geo.region": "US",
        "geo.position": "39.78373;-100.445882",
        "ICBM": "39.78373, -100.445882"
      }
}


export default function RootLayout({ children }) {
    return (
        <>
            <PageSchema path={metadata.alternates.canonical} />
            {children}
        </>
    )
}
