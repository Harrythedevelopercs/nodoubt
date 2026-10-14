import Banner from "@/src/app/landing/components/banner";
import ServicesForm from "@/src/app/services/servicesform";
import BestSeller from "@/src/app/home/bestseller";
import { ServicesData, BestSellerData, ContentBox1, ContentBox2, ContentBox3, ProcessData, ChooseUsData, JourneyData, JourneyData1, QuoteData } from "@/src/app/landing/lp1/data/data";
import Services from "@/src/app/home/services";
import Journey from "@/src/app/landing/components/journey";
import ContentBox from "@/src/app/landing/components/content";
import ServicesProcess from "@/src/app/services/servicesprocess";
import WhyChoose from "@/src/app/landing/components/whychoose";
import Reviews from "@/src/app/home/reviews";
import GetQuote from "@/src/app/home/getquote";


export default function Page() {
    return (
        <>
            <Banner />
            <ServicesForm txt="Connect with a Book Consultant" title="You don’t get a second chance at first impression. Get a quote and publish with confidence." />
            <BestSeller data={BestSellerData} landing={true} />
            <Services data={ServicesData} landing={true} />
            <Journey data={JourneyData} data1={JourneyData1} />
            <ContentBox data={ContentBox1} />
            <ContentBox data={ContentBox2} alternet={true} />
            <ServicesProcess data={ProcessData} />
            <ServicesForm bg={true} txt="Submit" title="You Could Spend Months Figuring Out KDP… <span>Or Hire Us</span>" />
            <Reviews />
            <GetQuote data={QuoteData} />

        </>
    );
}
