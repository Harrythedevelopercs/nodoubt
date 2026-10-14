import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Video Book Trailer Services For Authors - " + SITE_NAME,
    description: "Custom video book trailer services for authors. Pick teaser, character-driven, narrative or author-centric formats, in live action, 2D or 3D animation.",
    //===== OG Tags =====
    openGraph: {
        title: "Video Book Trailer Services For Authors - " + SITE_NAME,
        description: "Custom video book trailer services for authors. Pick teaser, character-driven, narrative or author-centric formats, in live action, 2D or 3D animation.",
        url: '/book-trailer-services',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/book-trailer-services' },
     others : {
        "DC.title": "book trailer services",
        "geo.region": "US",
        "geo.position": "39.78373;-100.445882",
        "ICBM": "39.78373, -100.445882"
      }      
}


export default function RootLayout({ children }) {
    return children;
}
