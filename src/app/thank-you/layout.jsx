
import { SITE_NAME } from "@/src/app/seo/site";

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Thank You for Contacting " + SITE_NAME,
  description: `Your inquiry has been received by ${SITE_NAME}. A team member will review the information you submitted and follow up using the contact details provided.`,
  //===== OG Tags =====
  openGraph: {
    title: "Thank You for Contacting " + SITE_NAME,
    description: `Your inquiry has been received by ${SITE_NAME}. A team member will review the information you submitted and follow up using the contact details provided.`,
    url: '/thank-you',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: "https://www.yourbrand.com/logo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/thank-you' },
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
