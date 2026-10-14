export const BestSellerData = {
    title: (<>Pages were written,<br />
        Stories were told<br />
        Our Amazon publishing portfolio? Pure gold.
    </>),
    txt: "Our Amazon book publishing company turned these manuscripts into money."
}

//Services
export const ServicesData = {
    title: (<>Amazon Publishing, Simplified<br /> eBooks, Print, Audiobooks; We’ll Get You on Amazon!</>),
    desc: (<>We are Amazon publishing experts who get your book published in any format-eBook, paperback, hardcover, or audiobook. We handle the entire publishing process, making sure your book is professionally formatted, uploaded, and ready to sell on Amazon.</>),
    ServicesItem: [
        {
            title: "Kindle Direct Publishing",
            txt: (<>Amazon KDP is the go-to platform for self-publishing e books. Authors can upload their manuscripts, format them for Kindle, and sell them globally on Amazon. With flexible pricing and up to <strong>70% royalties,</strong> KDP lets authors keep full control over their work while reaching millions of readers.</>),
        },
        {
            title: "KDP Print (Paperback Books)",
            txt: (<>KDP Print allows authors to self-publish paperback books without upfront printing costs. Using print-on-demand, Amazon prints books only when they are ordered, ensuring no wasted inventory. Authors earn around 60% royalties after printing costs, with global distribution options available.</>),
        },
        {
            title: "Amazon Hardcover Printing",
            txt: (<>For authors seeking a premium publishing option, KDP now offers hardcover printing with a sleek, durable, and professional case laminate finish. This high-quality format gives books a polished look, making them perfect for collectors and serious readers. </>),
        },
        {
            title: "Amazon ACX (Audiobooks)",
            txt: (<>Amazon Audiobook Creation Exchange is the publishing platform for turning books into audiobooks. Authors can narrate their own books or hire professional voice actors. Audiobooks are sold on Audible, Amazon, and Apple Books, with royalties of 40% (exclusive) or 25% (non-exclusive).</>),
        },
        {
            title: "Amazon Advantage & Seller Central",
            txt: (<>Amazon Advantage is designed for traditional publishers and larger self-publishers who want to sell books in bulk to Amazon. Meanwhile, Amazon Seller Central lets independent authors and publishers sell their books directly, handling their own pricing and inventory. </>),
        },
        {
            title: "Amazon Ignite",
            txt: (<>Amazon Ignite is an invite-only marketplace for educators and content creators to sell teaching materials, such as lesson plans, worksheets, and classroom activities. Sellers can upload PDFs, PowerPoints, and other digital resources, earning 70% royalties on every sale.</>),
        },

    ]
}
export const JourneyData = {
    title: (<>99% of authors struggle with book publishing,<br />
        The other 1% hire us.
    </>),
    desc: "",
}
import Img01 from "@/public/landing/lp1/slider/Img01.webp"
import Img02 from "@/public/landing/lp1/slider/Img02.webp"
import Img03 from "@/public/landing/lp1/slider/Img03.webp"

export const JourneyData1 = {
    title: (<>Struggling with Amazon Publishing?<br />
        Let us handle it!
    </>),
    desc: "Most books fail because of poor publishing execution. We fix that by offering expert-level formatting, category and keyword research, pricing strategy, and executing marketing campaigns. We ensure your book meets industry standards, ranks higher, and sells better.",

    JourneyItem: [
        {
            title: "Manuscript Formatting & Uploading",
            txt: "We format your book for Kindle, paperback, hardcover, and audiobook to meet Amazon’s strict guidelines. From margins and spacing to fonts and images, we ensure your book looks flawless on every device. Plus, we fix errors that could lead to Amazon rejection, so your book gets approved the first time.",
            img: Img01.src,
        },
        {
            title: "Cover Design & Book Layout",
            txt: "Your cover is the first thing readers see, we make sure it grabs attention. Our professional designs meet Amazon’s size, resolution, and formatting requirements for eBooks and print versions, including spine and back cover layout for paperbacks and hardcovers.",
            img: Img02.src,
        },
        {
            title: "Pricing & Royalties Strategy",
            txt: "Maximizing earnings means understanding Amazon’s 70% vs. 35% royalty options and selecting the best pricing strategy. We help you price competitively while leveraging KDP Select and Kindle Unlimited for greater reach and additional revenue streams.",
            img: Img03.src,
        },
        {
            title: "Marketing & Promotions",
            txt: "Publishing is just the first step, getting sales requires smart marketing. We run Amazon Ads (AMS), manage KDP Free Promotions & Kindle Countdown Deals, and help you secure verified Amazon reviews (ethically) to boost visibility and credibility.",
            img: Img01.src,
        },
    ]
}

import IMG01 from "media/landing/lp1/Img01.webp"
export const ContentBox1 = {
    title: (<>Sell Books, Not Your Sanity; We’ve Got This!</>),
    txt: (<>
        <p>Amazon self publishing is a billion-dollar industry where smart authors turn books into income. But most fail due to formatting issues, poor cover designs, bad keywords, weak pricing strategies, and zero marketing kill book sales before they even start.</p>
        <p>That’s why top self-published authors trust us. We’re the experts in Amazon publishing, handling everything from formatting and cover design to pricing strategy, audiobooks, and Amazon Ads. We don’t just publish books, we position them for success.</p>
        <p><i>Don’t gamble with your book’s success, hire amazon book publishing experts and start selling today!</i></p>
    </>),
    img: IMG01.src,
}

import IMG02 from "media/landing/lp1/Img02.webp"
export const ContentBox2 = {
    title: (<>Why Play Small?<br />
        We Put Your Book on the VIP List.
    </>),
    txt: (<>
        <p>KDP is great, but let’s be real! more platforms mean more readers, and more readers mean more money. We showcase your book everywhere with our publishing partners; </p>
    </>),
    img: IMG02.src,
    contentPoints: [
        "Amazon Kindle Direct Publishing",
        "Apple Books",
        "Barnes & Noble Press",
        "IngramSpark",
        "Kobo Writing Life",
        "Google Play Books "
    ]
}


import IMG03 from "media/landing/lp1/Img03.webp"
export const ContentBox3 = {
    title: (<>Self-Publishing: A Billion-Dollar Opportunity for Authors</>),
    txt: (<><p>Self-publishing has become a financially rewarding avenue for authors, generating approximately $1.25 billion in annual earnings. With the rise of digital platforms, independent authors now have direct access to global audiences, eliminating traditional barriers. Amazon, a dominant player in the industry, alone distributes $520 million in royalties each year, allowing self-published writers to earn substantial revenue while maintaining creative control over their work.</p></>),
    img: IMG03.src,
}

import BookImg from "media/companylogo.webp"
export const ProcessData = {
    subtitle: "Publishing Made Simple",
    title: "Our Book Publishing Process",
    txt: (<>Readers judge books in seconds; by their covers, layouts, and readability.<br />
        A poorly formatted book doesn’t just cost you sales; it risks your reputation as an author.<br />
        We don’t just publish books, we attract readers and sell them!<br />
        Your book deserves to stand alongside bestsellers. Let’s make it happen.
    </>),
    img: BookImg.src,
    ProcessDataItem1: [
        {
            title: "Editing & Proofreading",
            txt: "Good writing deserves great editing. We refine your manuscript to eliminate errors, improve clarity, and ensure it’s publication-ready."
        },
        {
            title: "Cover Design & Interior Formatting",
            txt: "An impressive cover and clean formatting make all the difference. We create a bookstore-quality look for both print and digital versions."
        },
    ],
    ProcessDataItem2: [
        {
            title: "Hassle-Free Publishing",
            txt: "No confusing platforms or tech hurdles; we handle ISBNs, book blurbs, and getting your book live on Amazon, Apple Books, and more."
        },
        {
            title: "Strategic Marketing & Promotion",
            txt: "We optimize your book for Amazon’s algorithm, set up ads, and launch campaigns to get readers and drive sales."
        },
    ],
    ProcessDataItem3: [
        {
            title: "Author Branding",
            txt: "For professionals, a book is more than content, it’s currency. We ensure yours positions you as an industry leader and attracts high-value clients."
        }
    ]
}

// Why Choose Us
export const ChooseUsData = {
    title: "What Makes Us the Right Choice for Your Book?",
    txt: "Selecting the right publishing partner is crucial to your book's success.",
    Content1: [
        {
            title: "Comprehensive Expertise",
            txt: "Our team comprises seasoned professionals with extensive experience in writing, editing, design, and marketing, ensuring your book excels in every aspect."
        },
        {
            title: "Tailored Publishing Strategies",
            txt: "We recognize that each book is unique. We develop customized publishing plans that align with your specific goals and target audience."
        }
    ],
    Content2: [
        {
            title: "Transparent Communication",
            txt: "We maintain open and honest communication throughout the process, keeping you informed and involved at every stage."
        }
    ],
    Content3: [
        {
            title: "Proven Track Record",
            txt: "Our portfolio showcases a diverse range of successful projects across various genres, reflecting our commitment to quality and author satisfaction."
        },
        {
            title: "Post-Publication Support",
            txt: "Our relationship doesn't end at publication. We offer ongoing support to help you navigate marketing, sales, and future projects, ensuring sustained success."
        }
    ]


}

export const QuoteData = {
    subtitle: "",
    title: (<>Writing was the hard part.<br />
        Publishing? That’s our job.
    </>),
    txt: (<>
        Ready to see your book on Amazon?<br />
        Let’s make it happen, no stress!

    </>),
    formtitle: "Tell us about your book! ",
} 