"use client"
import useEmblaCarousel from 'embla-carousel-react'
import SliderArrow from "@/src/app/components/sliderarrow";
import Autoplay from 'embla-carousel-autoplay'
import styles from "@/styles/home/clientsreviews.module.scss"
import Img01 from "media/home/ClientReviews/1.webp"
import Img02 from "media/home/ClientReviews/2.webp"
import Img03 from "media/home/ClientReviews/3.webp"
import Img04 from "media/home/ClientReviews/4.webp"
import Img05 from "media/home/ClientReviews/5.webp"
import Image from "next/image"



const OPTIONS = { loop: true, align: 'center' }
const clientReviews = [
    {
        txt: "I had the idea, but I couldn't find the right words. The ghostwriter did an amazing job! She was super easy to work with and always kept me in the loop, so the final product felt like it was really my story.",
        image: Img01.src,
        namee: "Mark D",
        job: "Author of Chasing Dreams",
    },
    {
        txt: "I was really stuck with my manuscript, and the editing team helped me get it together. They didn’t just fix the grammar, they made sure the flow of my story worked. My book now feels more cohesive, and I feel so much better about putting it out there.",
        image: Img02.src,
        namee: "Sarah L.",
        job: "Author of Heart's Journey",
    },
    {
        txt: "The book marketing team helped me set up everything from social media posts to launching ads. I didn't have huge expectations, but my book actually got attention and I definitely sold a lot of copies. Absolutely worth the investment!",
        image: Img03.src,
        namee: "Rachel W.",
        job: "Author of The Last Song",
    },
    {
        txt: "I was totally lost when it came to publishing on Amazon. The team helped me format my manuscript, upload it to Kindle Direct Publishing, and make sure everything was in order. They also helped optimize my book description and keywords, which really made a difference in visibility. The process was much smoother than I expected, and I’m thrilled with how it turned out.",
        image: Img04.src,
        namee: "Chris B.",
        job: "Author of Code Breaker",
    }
]

const clientReviewsLp = [
    {
        txt: "I had tons of ideas but no clue how to structure them into a book. They made the process simple, guided me through every step, and the final product was beyond my expectations.",
        image: Img01.src,
        namee: "Mark T.",
        job: "Business Consultant",
    },
    {
        txt: "Writing a book always felt overwhelming, but they broke it down into clear steps and handled the heavy lifting. It still sounds like me, just way more polished!",
        image: Img02.src,
        namee: "Jessica L.",
        job: "Wellness Coach",
    },
    {
        txt: "I was stuck halfway through my manuscript and didn’t know how to finish. They stepped in, tightened the structure, and made my book actually readable. Couldn’t have done it without them!",
        image: Img03.src,
        namee: "David R.",
        job: "First-Time Author",
    },
    {
        txt: "I was worried a ghostwriter wouldn’t capture my voice, but they absolutely nailed it. The book sounds like me, but better, clearer, more engaging, and well-structured.",
        image: Img04.src,
        namee: "Sarah B.",
        job: "Entrepreneur",
    },
    {
        txt: "English isn’t my first language, and I needed my book to sound professional. They transformed my rough draft into something I’m truly proud of.",
        image: Img04.src,
        namee: "Luis M.",
        job: "Thought Leader",
    },
    {
        txt: "Deadlines were my biggest enemy. They kept me on track, handled all the details, and now my book is actually finished. Hiring them was the best decision I made!",
        image: Img04.src,
        namee: "Amanda C.",
        job: "Speaker & Author",
    },
]

const ClientReviews = ({ lp2 }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })]);

    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };

    return (
        <div className={styles.clientsReviews}>
            <div className={styles.clientsReviewsHeader}>
                <ul>
                    {clientReviews.map((item, index) => (
                        <li key={index}>
                            <Image src={item.image} alt={item.namee} fill />
                        </li>
                    ))}
                </ul>
                <div className={styles.clientTrust}>
                    Trusted by <span>world leading companies</span>
                </div>
            </div>
            <div className={styles.clientsReviewsBody}>
                <div className={styles.embla}>
                    <div className={styles.embla__viewport} ref={emblaRef}>
                        <div className={styles.embla__container}>
                            {lp2 ? (
                                clientReviewsLp.map((item, index) => (
                                    <div className={styles.embla__slide} key={index}>
                                        <div className={styles.clientsComments}>
                                            <p>{item.txt}</p>
                                            <div className={styles.info}>
                                                {item.namee}
                                                <span>{item.job}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                clientReviews.map((item, index) => (
                                    <div className={styles.embla__slide} key={index}>
                                        <div className={styles.clientsComments}>
                                            <p>{item.txt}</p>
                                            <div className={styles.info}>
                                                {item.namee}
                                                <span>{item.job}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <SliderArrow
                    onPrev={prevButtonHandler}
                    onNext={nextButtonHandler}
                />
            </div>
        </div>
    );
};

export default ClientReviews;
