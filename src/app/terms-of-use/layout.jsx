
import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Terms of Use - " + SITE_NAME,
    description: "Review Book Writing's Terms of Use to understand site conditions, content rights, electronic communications, and important disclaimers for using our services.",
    //===== OG Tags =====
    openGraph: {
        title: "Terms of Use - " + SITE_NAME,
        description: "Review Book Writing's Terms of Use to understand site conditions, content rights, electronic communications, and important disclaimers for using our services.",
        url: '/terms-of-use',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/terms-of-use' },
}


export default function RootLayout({ children }) {
    return (
        <>
            <PageSchema path={metadata.alternates.canonical} />
            {children}
        </>
    );
}
