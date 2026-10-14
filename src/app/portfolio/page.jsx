import Banenr from "@/src/app/services/banner";
import { BannerData, QuoteData } from "@/src/app/portfolio/data/data";
import BookTabs from "@/src/app/portfolio/booktabs";
import GetQuote from "@/src/app/home/getquote";

export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <BookTabs />
            <GetQuote data={QuoteData} />
        </>
    );
}
