import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Book Covers That Sell: Get Yours Designed in 7 Days!",
    description: "Get your book picked and read. Design original and creative book covers by hiring our book cover designers as we have the expertise to get your book sold!",
    //===== OG Tags =====
    openGraph: {
        title: "Book Covers That Sell: Get Yours Designed in 7 Days!",
        description: "Get your book picked and read. Design original and creative book covers by hiring our book cover designers as we have the expertise to get your book sold!",
        url: '/book-cover-design-services',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/book-cover-design-services' },
     others : {
        "DC.title": "book cover design services",
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
