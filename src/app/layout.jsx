import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/src/app/globals.scss";
import ConditionalLayout from "@/src/app/conditionallayout";
import Script from "next/script";
import Scripts from "@/src/app/Scripts";
import { SITE_NAME, SITE_URL } from "@/src/app/seo/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Book Writing Company: Start Your Bestseller in 3 Easy Steps | " + SITE_NAME,
  description:
    "Making books from concept to bestseller, we offer best book writing, editing, publishing, and marketing services in US. Expert book services at affordable prices.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  //===== OG Tags =====
  openGraph: {
    title: "Book Writing Company: Start Your Bestseller in 3 Easy Steps | " + SITE_NAME,
    description:
      "Making books from concept to bestseller, we offer best book writing, editing, publishing, and marketing services in US. Expert book services at affordable prices.",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: `${SITE_URL}/logo.png`,
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": [],
    },
  },
  //===== GEO Tags =====
  other: {
    "DC.title": "book writing company",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.variable}`}>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1669339764842692');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1669339764842692&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <Scripts />
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
