import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import {
  InnerServicesData,
  ServicesData,
  BannerData,
  ProcessData,
  BestSellerData,
  QuoteData,
} from "@/src/app/audiobook-recording-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import GetQuote from "@/src/app/home/getquote";
import Faqs from "@/src/app/home/faq";
import { ServiceFaqData } from "@/src/app/services/faqdata";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm
        title="Think Your Book Can’t Get Better? Wait Till You Hear It."
        txt="Submit"
      />
      <BestSeller innerPage={true} data={BestSellerData} />
      <InnerServices data={InnerServicesData} />
      <Services data={ServicesData} />
      <ServicesProcess data={ProcessData} />
      <Faqs data={ServiceFaqData["/audiobook-recording-services"]} />
      <GetQuote data={QuoteData} />
    </>
  );
}
