import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Professional Book Editing Services",
    description: "Book Editing Service that transforms your book from Fine to Great. Your book’s got potential, and we make sure it reaches it with our book editing services.",
    //===== OG Tags =====
    openGraph: {
        title: "Professional Book Editing Services",
        description: "Book Editing Service that transforms your book from Fine to Great. Your book’s got potential, and we make sure it reaches it with our book editing services.",
        url: '/book-editing-services',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/book-editing-services' },
     others : {
        "DC.title": "book editing services",
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
