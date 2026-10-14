import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Make Your Book Audible With Audiobook Recording Service",
    description: "Your audience doesn't got the time to read books? Narrate your story to them in the form of perfectly recorded audiobooks. Hire us today!",
    //===== OG Tags =====
    openGraph: {
        title: "Make Your Book Audible With Audiobook Recording Service",
        description: "Your audience doesn't got the time to read books? Narrate your story to them in the form of perfectly recorded audiobooks. Hire us today!",
        url: '/audiobook-recording-services',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/audiobook-recording-services' },
      //===== GEO Tags =====

      
    other: {
        "DC.title": "audiobook recording services",
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
