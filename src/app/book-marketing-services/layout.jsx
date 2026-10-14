import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Boost Your Book Sales with Expert Marketing Service",
    description: "Bring your book from being last to Most Recommended and Best Seller with our book marketing service. We bring your book to the screens of relevant readers.",
    //===== OG Tags =====
    openGraph: {
        title: "Boost Your Book Sales with Expert Marketing Service",
        description: "Bring your book from being last to Most Recommended and Best Seller with our book marketing service. We bring your book to the screens of relevant readers.",
        url: '/book-marketing-services',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/book-marketing-services' },
    others : {
        "DC.title": "book marketing services",
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
