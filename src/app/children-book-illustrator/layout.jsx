import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Top Illustrators for Your Children’s Book",
    description: "If you want your book to be in the imagination of young readers, then we are the ones who will make it. Get your book illustrated with children book illustration!",
    //===== OG Tags =====
    openGraph: {
        title: "Top Illustrators for Your Children’s Book",
        description: "If you want your book to be in the imagination of young readers, then we are the ones who will make it. Get your book illustrated with children book illustration!",
        url: '/children-book-illustrator',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/children-book-illustrator' },
    others: {
        "DC.title": "children book illustrator",
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
