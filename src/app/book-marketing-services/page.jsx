import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import ServicesProcess from "@/src/app/services/servicesprocess";
import {
  InnerServicesData,
  ServicesData,
  BannerData,
  ProcessData,
  QuoteData,
} from "@/src/app/book-marketing-services/data/data";
import ServicesBox from "@/src/app/services/servicesbox";
import MarketingSlider from "@/src/app/services/marketingslider";
import GetQuote from "@/src/app/home/getquote";
import Faqs from "@/src/app/home/faq";
import { ServiceFaqData } from "@/src/app/services/faqdata";

export default function Page() {
  return (
    <>
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm
        title="Launch Your Book Like a Rocket, Not a Paper Airplane."
        txt="Submit"
      />
      <MarketingSlider />
      <InnerServices data={InnerServicesData} />
      <ServicesBox data={ServicesData} />
      <ServicesProcess data={ProcessData} />
      <Faqs data={ServiceFaqData["/book-marketing-services"]} />
      <GetQuote data={QuoteData} />
    </>
  );
}
