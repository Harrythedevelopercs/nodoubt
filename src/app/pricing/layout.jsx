
import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Click Here To Check Our Complete Book Services And Rates",
    description: "We provide top book writing service all around the world. Check Our affordable pricing for book writing, editing, publishing and marketing for every author.",
    //===== OG Tags =====
    openGraph: {
        title: "Click Here To Check Our Complete Book Services And Rates",
        description: "We provide top book writing service all around the world. Check Our affordable pricing for book writing, editing, publishing and marketing for every author.",
        url: '/pricing',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/pricing' },
}


export default function RootLayout({ children }) {
    return (
        <>
            <PageSchema path={metadata.alternates.canonical} />
            {children}
        </>
    );
}
