import HeroBanner from "./components/HeroBanner";
import IntroFeature from "./components/IntroFeature";
import PortfolioSection from "./components/PortfolioSection";
import SkipStruggleSection from "./components/SkipStruggleSection";
import GenreShowcaseSection from "./components/GenreShowcaseSection";
import AffordableQualitySection from "./components/AffordableQualitySection";
import FullWidthCta from "./components/FullWidthCta";
import WhyTrustUs from "./components/WhyTrustUs";
import CircularFramework from "./components/CircularFramework";
import SelfPublishingServices from "./components/SelfPublishingServices";
import PublishedMasterpiece from "./components/PublishedMasterpiece";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import GetQuote from "@/src/app/home/getquote";
import Footer from "@/src/app/layout/footer";
import { QuoteData } from "./data/data";
import styles from "./book-writing-2.module.scss";

export default function Page() {
  return (
    <div className={styles.pageWrapper}>
      <HeroBanner />
      <IntroFeature />
      <PortfolioSection />
      <SkipStruggleSection />
      <GenreShowcaseSection />
      <AffordableQualitySection />
      <FullWidthCta />
      <WhyTrustUs />
      <CircularFramework />
      <SelfPublishingServices />
      <PublishedMasterpiece />
      <TestimonialsSection />
      <FaqSection />
      <GetQuote data={QuoteData} />
      <Footer />
    </div>
  );
}







