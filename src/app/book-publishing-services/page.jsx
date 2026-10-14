import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import ServicesBox from "@/src/app/services/servicesbox";
import GetQuote from "@/src/app/home/getquote";
import Faqs from "@/src/app/home/faq";
import { ServiceFaqData } from "@/src/app/services/faqdata";
import ServicesProcess from "@/src/app/services/servicesprocess";
import {
  InnerServicesData,
  ServicesData,
  BannerData,
  ProcessData,
  OfferData,
  BestSellerData,
  QuoteData,
} from "@/src/app/book-publishing-services/data/data";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm title="Wrote a book? Great. Now finish the job! Get it published." />
      <BestSeller innerPage={true} data={BestSellerData} />
      <InnerServices data={InnerServicesData} />
      <ServicesBox data={ServicesData} />
      <Services data={OfferData} offer={true} />
      <ServicesProcess data={ProcessData} />
      <Faqs data={ServiceFaqData["/book-publishing-services"]} />
      <GetQuote data={QuoteData} />
    </>
  );
}
