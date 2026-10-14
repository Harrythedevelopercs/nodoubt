import BannerImg from "media/services/book-editing-services/bannerImage.webp"
export const BannerData = {
    title: (<>
        Rough to Refined,<br />
        Book Editing Services<br />
        Worth Every Dime.
    </>),
    txt: "A great book needs more than a good idea, it requires a book editor who polishes your writing, strengthens your plot, and ensures a flawless read.",
    img: BannerImg.src
}
export const BestSellerData = {
    title: "Peek at Our Book Editing Portfolio",
    txt: "Our book editing portfolio showcases how we turn good writing into great storytelling."
}

export const InnerServicesData = {
    title: (<>Readers Love a Plot Twist,<br />
        Not a Typo.</>),
    txt: "Readers notice everything, so should your editor. Our professional book editing eliminates awkward phrasing, enhances clarity, and refines every sentence, making your book impossible to put down.",
    InnerServicesItem: [
        {
            title: "Fix Grammar & Typos",
            txt: "Nothing ruins a good book faster than careless mistakes. Even the best writers miss small errors, and readers notice. A professional editor ensures your book is free from typos, grammar slip-ups, and awkward phrasing, making it polished and professional."
        },
        {
            title: "Improve Clarity & Flow",
            txt: "Great ideas need clear writing. If your book feels choppy or confusing, readers will lose interest. An editor smooths out rough patches, restructures your sentences, and ensures your writing flows naturally from start to finish throughout the book."
        },
        {
            title: "Strengthen the Story",
            txt: "A good story isn’t just about words, it’s about structure, pacing, and engagement. A book editor helps refine your plot, develop your characters, and ensure every scene serves a purpose, making your book more compelling."
        },
        {
            title: "Ensure Professional Quality",
            txt: "Self-editing can only take you so far. A professionally edited book stands out, whether you're self-publishing or pitching to agents. High-quality editing gives your work the credibility it needs to succeed in a competitive market."
        },
        {
            title: "Get Objective Feedback",
            txt: "You know your story inside out, but that can make it hard to see what’s not working. An editor offers a fresh, unbiased perspective, pointing out weak spots, inconsistencies, and areas that need improvement, helping you make your book the best it can be."
        },
        {
            title: "Meet Publishing Standards",
            txt: "Traditional publishers, self-publishing platforms, and bookstores all have high standards. A professional editor ensures your manuscript meets industry expectations, so it’s formatted correctly, free of errors, and ready for publication."
        },
        {
            title: "Save Time & Frustration",
            txt: "Revising your own work can be overwhelming and never-ending. A book editor helps you move forward with confidence, handling the heavy lifting so you can focus on what matters-sharing your story with the world."
        }

    ]
}

//Services
import Image01 from "media/services/book-marketing-services/services/img01.webp"
import Image02 from "media/services/book-marketing-services/services/img02.webp"
import Image03 from "media/services/book-marketing-services/services/img03.webp"
import Image04 from "media/services/book-marketing-services/services/img04.webp"


export const ServicesData = {
    subtitle: "Why Hire Us",
    title: (<>Because ‘Their, They’re, and There’ Still Confuses You.</>),
    txt: "Your draft’s not perfect (yet), but our book editing company will get it there.",
    ServicesItem: [
        {
            title: "Developmental Editing",
            txt: (<>
                <p>We take a deep dive into your story’s structure, pacing, character arcs, and themes. Our professional book editors analyze your manuscript’s big-picture elements, ensuring your plot is engaging, characters feel real, and everything flows seamlessly. If something’s not working, we’ll offer clear, actionable feedback and suggestions to refine your story while keeping your unique writing style intact.</p >
            </>),
            img: Image01.src
        },
        {
            title: "Line Editing",
            txt: (<>
                <p>Good writing isn’t just about the words you choose, it’s about how they flow. Our professional line editing makes your sentences clearer, smoother, and more engaging while keeping your unique style. We fix awkward wording, trim unnecessary fluff, and improve transitions so your writing is easy to read.</p>
            </>),
            img: Image02.src
        },
        {
            title: "Copy Editing",
            txt: (<>
                <p>Even the best stories can be undermined by grammar mistakes and inconsistencies. Our copy editing service focuses on correcting spelling, punctuation, syntax, and stylistic errors while ensuring consistency in tone and formatting. We adhere to professional style guides to make sure your book meets industry standards.</p>
            </>),
            img: Image03.src
        },
        {
            title: "Structural Editing",
            txt: (<>
                <p>Sometimes, a story needs to be rearranged to make it better. Our structural editing checks how your book is organized, making sure everything flows smoothly and makes sense. We find parts that need more detail, should be cut, or moved around to keep readers hooked from beginning to end.</p>
            </>),
            img: Image04.src
        },
    ]
}
import Img01 from "media/services/book-writing-services/Image01.webp"
export const ContentBoxData = {
    title: (<>
        Good writing? You’re close.<br />
        Great writing? We’ll get you there.
    </>),
    txt: "Readers judge. Make sure they’re impressed. Get an editing quote!",
    img: Img01.src,
    btntxt: "Schedule a consultation"
}

export const ContentBoxesData = [
    {
        title: "Keep Readers Hooked",
        txt: "If your writing feels choppy or doesn’t flow smoothly, readers can get distracted or lose interest. Sentences that feel disconnected or awkward can make your message unclear. Strong writing should feel effortless to read, with ideas flowing naturally from one to the next. If your book feels a bit rough or hard to follow, professional book editing can help polish it into an engaging read. A well-edited book keeps readers immersed in the story, not struggling to understand it.",
    },
    {
        title: "Speak to Your Audience",
        txt: "Different books need different voices to connect with their readers. A thriller should keep readers on the edge of their seats with sharp, suspenseful language. A memoir should feel personal and real, capturing emotions and experiences with honesty. A self-help book needs to sound confident and clear, offering guidance in a way that builds trust. We fine-tune your tone and word choice to match your genre, making sure your book speaks directly to its audience in the most powerful and engaging way possible.",
    }
]

import BookImg from "media/companylogo.webp"
export const ProcessData = {
    subtitle: "Our Editing Process",
    title: "How We Edit Your Book",
    txt: "",
    img: BookImg.src,
    ProcessDataItem1: [
        {
            title: "Manuscript Review & Evaluation",
            txt: "We start by understanding your book’s purpose, audience, and writing style. This helps us determine the level of editing needed, whether it’s deep structural changes or editing sentences."
        },
        {
            title: "Structural & Developmental Edits",
            txt: "We edit your story, its flow, and how everything fits together. If something feels off or unfinished, we give clear advice to make your book stronger and more engaging."
        }
    ],
    ProcessDataItem2: [
        {
            title: "Line & Copy Editing",
            txt: "Next, we refine the language. We improve clarity, fix awkward phrasing, enhance tone, and ensure consistency, so every sentence flows effortlessly."
        },
        {
            title: "Final Proofreading",
            txt: "Once the major edits are done, we give your book a last polish. This includes catching typos, grammar mistakes, and formatting errors to ensure a flawless final draft."
        }
    ],
    ProcessDataItem3: [
        {
            title: "Ready for Readers",
            txt: "Your manuscript is now crisp, professional, and ready for publishing. Whether you’re submitting to agents or self-publishing, your book will be its best version."
        }
    ]
}


//Table Content

export const TableContetData = {
    title: "Expert Book Editing and Formatting Services to Elevate Your Manuscript",
    desc: "Our Book Editing team enhances readability, maintains your unique voice, and ensure your story flows without altering your original vision or plot. Whether it's structural improvements, grammar corrections, or formatting for various publishing platforms, we’re here to make your book stand out.",
    tabledata: {
        sec1: [
            "Price",
            "Typos",
            "US or UK",
            "Punctuation",
            "Grammar",
            "Fact-checking",
            "Consistency",
            "Repetitions",
            "Clarity",
            "Style & flow",
            "Cutting",
            "Rewriting",
        ],
        sec2: [
            "From $30/1000 words",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "Some",

        ],
        sec3: [
            "From $25/1000 words",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "tick",
            "Some",
            "cross",
            "cross",
            "cross",
        ],
        sec4: [
            "From $20/1000 words",
            "tick",
            "tick",
            "tick",
            "Some",
            "cross",
            "cross",
            "cross",
            "cross",
            "cross",
            "cross",
            "cross",
        ],
    },
};


export const QuoteData = {
    subtitle: "",
    title: (<>If your writing stumbles,<br />
        so will your readers.
    </>),
    txt: (<>
        Your book’s got potential, and we make sure it reaches it with<br />
        Our professional book editing services.

    </>),
    formtitle: "Tell us about your Book!",
} 