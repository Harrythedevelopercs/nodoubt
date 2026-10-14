
import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Privacy Policy - " + SITE_NAME,
    description: "Learn how Book Writing collects, uses, and protects your data. Our privacy policy details information handling, security, cookies, and your rights.",
    //===== OG Tags =====
    openGraph: {
        title: "Privacy Policy - " + SITE_NAME,
        description: "Learn how Book Writing collects, uses, and protects your data. Our privacy policy details information handling, security, cookies, and your rights.",
        url: '/privacy-policy',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/privacy-policy' },
}


export default function RootLayout({ children }) {
    return (
        <>
            <PageSchema path={metadata.alternates.canonical} />
            {children}
        </>
    );
}
