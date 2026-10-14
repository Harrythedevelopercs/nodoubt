import Banenr from "@/src/app/pricing/banner";
import ContentBox from "@/src/app/pricing/contentbox";
import { ContentData, SelfPricingData, QuoteData } from "@/src/app/pricing/data/data";
import SelfPricing from "@/src/app/pricing/selfpricing";
import GetQuote from "@/src/app/home/getquote";

export default function Page() {
    return (
        <>
            <Banenr />
            <ContentBox data={ContentData} />
            <SelfPricing data={SelfPricingData} />
            <GetQuote data={QuoteData} />
        </>
    );
}
