
import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "About Us - " + SITE_NAME,
    description: "We help aspiring writers to become published authors with expert publishing, writing, and marketing services backed by 10+ years of experience.",
    //===== OG Tags =====
    openGraph: {
        title: "About Us - " + SITE_NAME,
        description: "We help aspiring writers to become published authors with expert publishing, writing, and marketing services backed by 10+ years of experience.",
        url: '/about-us',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/about-us' },
    
}


export default function RootLayout({ children }) {
    return (
        <>
            <PageSchema path={metadata.alternates.canonical} />
            {children}
        </>
    );
}
