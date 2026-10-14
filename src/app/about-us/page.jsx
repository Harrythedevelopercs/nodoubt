import Banenr from "@/src/app/about-us/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import ContentSec from "@/src/app/about-us/contentsec";
import { ContentBox1, ContentBox2, CtaData, BestSellerData, QuoteData } from "@/src/app/about-us/data/data";
import CTA from "@/src/app/home/cta";
import Reviews from "@/src/app/home/reviews";
import GetQuote from "@/src/app/home/getquote";

export default function Page() {
    return (
        <>
            <Banenr />
            <Clients />
            <BestSeller innerPage={true} data={BestSellerData} />
            <ContentSec data={ContentBox1} />
            <ContentSec data={ContentBox2} alternet={true} />
            <CTA data={CtaData} />
            <Reviews />
            <GetQuote data={QuoteData} />

        </>
    );
}
