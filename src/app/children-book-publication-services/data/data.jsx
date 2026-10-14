import BannerImg from "media/services/children-book-publication-services/bannerImage.webp"
export const BannerData = {
    title: (<>Write the tale, we’ll do the rest,<br />
        Children Book Publication at its best!
    </>),
    txt: "Publish a children’s book & be the reason a child falls in love with reading.",
    img: BannerImg.src
}
export const BestSellerData = {
    title: "See our published works & imagine yours on the shelf. ",
    txt: "Our work in children book publishing, where stories turn into beautifully crafted books. From charming illustrations to engaging narratives, we help authors create books that captivate young readers."

}
//Services
export const ServicesData = {
    subtitle: "",
    title: (<>Creating Childhood Favorites,<br />
        The Books We Publish
    </>),
    desc: "From picture books to early readers and educational books, we handle everything, editing, design, and printing, to ensure your book engages and inspires young readers. ",
    ServicesItem: [
        {
            title: "Picture Books",
            txt: "We bring your picture book to life with captivating storytelling and vibrant illustrations that engage young readers. From concept development to layout design and final printing, we ensure your book is visually stunning and perfectly suited for early childhood audiences.",
        },
        {
            title: "Early Readers",
            txt: "Our team crafts early reader books with simple, engaging text and supportive illustrations that help children develop confidence in reading. We focus on age-appropriate language, structured narratives, and professional formatting to make your book both educational and enjoyable.",
        },
        {
            title: "Educational Books",
            txt: "We create educational books that make learning fun and accessible for children. Whether it's interactive activity books, STEM guides, or concept-based learning materials, we develop engaging content with clear visuals and expert design to ensure an enriching reading experience. ",
        }
    ]
}
// CTA
import CtaImage from "@/public/services/children-book-publication-services/ctaImage.webp"
export const CtaData = {
    title: (<>
        Little Readers Are Waiting,<br />
        Will Your Book Be Their Favorite?
    </>),
    txt: (<>
        <p>Your story has the power to inspire young minds, spark imagination, and create lifelong readers. But how do you take it from an idea to a published book? Let’s make it happen together.</p>
        <h5>What’s Your Story?</h5>
        <p>Picture your book on a child’s shelf. What kind of story are you telling?</p>
        <ul className="CustomUl whiteColor">
            <li><CheckedIcon /> A bedtime adventure that soothes little ones to sleep?</li>
            <li><CheckedIcon />A heartwarming tale that teaches an important lesson?</li>
            <li><CheckedIcon />A fun-filled journey with characters that make children laugh?</li>
        </ul>
        <p>Whatever your vision, we’re here to guide you through every step.</p>
    </>),
    bg: false,
    img: CtaImage.src

}
import BookImg from "media/companylogo.webp"
import { CheckedIcon } from "../../app-constants"
export const ProcessData = {
    subtitle: "Publishing Made Simple",
    title: "Our Book Publishing Process",
    txt: "We start with manuscript refinement, followed by professional illustrations and design. Once polished, we handle formatting, printing, and distribution, ensuring your children’s book is market-ready. From idea to bookshelf, we make publishing simple!",
    img: BookImg.src,
    ProcessDataItem1: [
        {
            title: "Manuscript Formatting",
            txt: "We prepare your story for professional publishing with proper structure and layout."
        },
        {
            title: "Illustration & Book Design",
            txt: "High-quality illustrations and layouts are finalized for a polished look."
        },
    ],
    ProcessDataItem2: [
        {
            title: "Typesetting & Proofing",
            txt: "We refine text placement, fonts, and page flow to meet publishing standards."
        },
        {
            title: "Printing & Production ",
            txt: "Your book is professionally printed with premium materials and finishes."
        },
    ],
    ProcessDataItem3: [
        {
            title: "Publishing & Distribution",
            txt: "We publish your book and make it available across major platforms."
        }
    ]
}

export const QuoteData = {
    subtitle: "",
    title: "Want to Be an Author?",
    txt: (<>
        Step One: Stop Hoarding Drafts.<br />
        Step Two: Connect With Us
    </>),
    formtitle: "Tell us about your book!",
} 