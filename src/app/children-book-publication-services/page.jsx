import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import CTA from "@/src/app/home/cta";
import {
  ServicesData,
  BannerData,
  ProcessData,
  CtaData,
  BestSellerData,
  QuoteData,
} from "@/src/app/children-book-publication-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import GetQuote from "@/src/app/home/getquote";
import Faqs from "@/src/app/home/faq";
import { ServiceFaqData } from "@/src/app/services/faqdata";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm title="Publish a Children's Book" txt="Submit" />
      <BestSeller innerPage={true} data={BestSellerData} />
      <CTA data={CtaData} big={true} />
      <Services data={ServicesData} />
      <ServicesProcess data={ProcessData} />
      <Faqs data={ServiceFaqData["/children-book-publication-services"]} />
      <GetQuote data={QuoteData} />
    </>
  );
}
