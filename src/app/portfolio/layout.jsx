
import PageSchema from "@/src/app/seo/page-schema";
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Check Our Portfolio To See Top Selling Books Published By Us",
    description: "Take a tour to our portfolio and check the quality of the work you will get from Book Writing where creativity meets storytelling.",
    //===== OG Tags =====
    openGraph: {
        title: "Check Our Portfolio To See Top Selling Books Published By Us",
        description: "Take a tour to our portfolio and check the quality of the work you will get from Book Writing where creativity meets storytelling.",
        url: '/portfolio',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/portfolio' },
}


export default function RootLayout({ children }) {
    return (
        <>
            <PageSchema path={metadata.alternates.canonical} />
            {children}
        </>
    );
}
