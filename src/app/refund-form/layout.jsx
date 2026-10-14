
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: `Refund and Return Policy - ${SITE_NAME}`,
    description: `Learn about ${SITE_NAME} refund policy and easily submit your refund request. Find details on cancellations, eligibility, and how to get your refund.`,
    //===== OG Tags =====
    openGraph: {
        title: `Refund and Return Policy - ${SITE_NAME}`,
        description: `Learn about ${SITE_NAME} refund policy and easily submit your refund request. Find details on cancellations, eligibility, and how to get your refund.`,
        url: '/refund-form',
        siteName: SITE_NAME,
        locale: 'en_US',
        type: 'website',
        images: "https://www.yourbrand.com/logo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/refund-form' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    }
}


export default function RootLayout({ children }) {
    return (
        children
    );
}
