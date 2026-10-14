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
  GenreData,
  FaqData,
  QuoteData,
} from "@/src/app/book-trailer-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";
import GetQuote from "@/src/app/home/getquote";
import { BookTrailerFaqs } from "@/src/app/book-trailer-services/content";
import PageSchema from "@/src/app/seo/page-schema";

export default function Page() {
  return (
    <>
      <PageSchema path="/book-trailer-services" />
      <Banenr data={BannerData} />
      <Clients />
      <ServicesForm title="Hit play on your book's success" txt="Submit" />
      <BestSeller innerPage={true} data={BestSellerData} />
      <InnerServices data={InnerServicesData} />
      <Services data={GenreData} offer={true} />
      <Services data={ServicesData} />
      <ServicesProcess data={ProcessData} />
      <BookTrailerFaqs data={FaqData} />
      <GetQuote data={QuoteData} />
    </>
  );
}
