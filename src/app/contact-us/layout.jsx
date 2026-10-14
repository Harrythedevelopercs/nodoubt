
import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Contact Us - " + SITE_NAME,
    description: "Have questions or need a quote? Contact us today to discuss your book writing project.",
    //===== OG Tags =====
    openGraph: {
        title: "Contact Us - " + SITE_NAME,
        description: "Have questions or need a quote? Contact us today to discuss your book writing project.",
        url: '/contact-us',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/contact-us' },
  
}


export default function RootLayout({ children }) {
    return (
        <>
            <PageSchema path={metadata.alternates.canonical} />
            {children}
        </>
    );
}
