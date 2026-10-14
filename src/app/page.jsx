import Banner from "@/src/app/home/banner";
import Clients from "@/src/app/home/clients";
import Story from "@/src/app/home/story";
import Services from "@/src/app/home/services";
import WhyChoose from "@/src/app/home/whychoose";
import BestSeller from "@/src/app/home/bestseller";
import CTA from "@/src/app/home/cta";
import Reviews from "@/src/app/home/reviews";
import GetQuote from "@/src/app/home/getquote";
import PageSchema from "@/src/app/seo/page-schema";
import {
  ServicesData,
  ProcessData,
  CtaData,
  BestSellerData,
  QuoteData,
} from "@/src/app/home/data/data";

export default function Home() {
  return (
    <>
      <PageSchema path="/" />
      <Banner />
      <Clients />
      <Story />
      <Services data={ServicesData} />
      <WhyChoose data={ProcessData} />
      <BestSeller data={BestSellerData} />
      <CTA data={CtaData} />
      <Reviews />
      <GetQuote data={QuoteData} />
    </>
  );
}
