"use client"
import { useState } from 'react';
import styles from "@/styles/home/bookreviews.module.scss";
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Pause, Play } from '@/src/app/app-constants';
import SliderArrow from "@/src/app/components/sliderarrow";
import Autoplay from 'embla-carousel-autoplay'

import Test1 from "media/home/BookReviews/1.webp"
import Test2 from "media/home/BookReviews/2.webp"
import Test3 from "media/home/BookReviews/3.webp"
import Test4 from "media/home/BookReviews/4.webp"
import Test5 from "media/home/BookReviews/5.webp"
import Test6 from "media/home/BookReviews/6.webp"
import Test7 from "media/home/BookReviews/7.webp"
import Test8 from "media/home/BookReviews/8.webp"



export const ClientsReview = [
    {
        img: Test1.src,
        name: "Mike",
        job: "SVP, Head of Marketing",
        video: "https://player.vimeo.com/progressive_redirect/playback/995491814/rendition/1080p/file.mp4?loc=external&log_user=0&signature=32fe5036b11e17c727db995a5a67fe5098346f64653f47797f928275a64a0cf1"
    },
    {
        img: Test2.src,
        name: "Will Anderson",
        job: "CEO & Senior Wealth Advisor",
        video: "https://player.vimeo.com/progressive_redirect/playback/995491850/rendition/1080p/file.mp4?loc=external&log_user=0&signature=4bb8389f1131ddfd34f8e6115ecc8ad4089c8a452c57c4110b124c7c7708d99e"
    },
    {
        img: Test3.src,
        name: "Scott Goldberg",
        job: "Sr. Manager Product Marketing",
        video: "https://player.vimeo.com/progressive_redirect/playback/995490632/rendition/1080p/file.mp4?loc=external&log_user=0&signature=da4b9c78eb55e44ce0f14ba5ea87506c35140ea87ba6172b1f0879f3d8d29777"
    },
    {
        img: Test4.src,
        name: "Roland Morgan",
        job: "CEO - Board Member",
        video: "https://player.vimeo.com/progressive_redirect/playback/995490780/rendition/1080p/file.mp4?loc=external&log_user=0&signature=84cdd3a1c8f2859cf2d7df977f4285720c7ee9a302cd647eb38dfe51ec0e3e58"
    },
    {
        img: Test5.src,
        name: "Linda S, Cunningham",
        job: "Marketing Manager",
        video: "https://player.vimeo.com/progressive_redirect/playback/995490750/rendition/1080p/file.mp4?loc=external&log_user=0&signature=db936b7294f495525237d512018f1c20f298a94bed04c630e59ac0c0e85a0b87"
    },
    {
        img: Test6.src,
        name: "Tyrone Henderson",
        job: "Founder at Good Gateway",
        video: "https://player.vimeo.com/progressive_redirect/playback/995490592/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6be17f4d8bbea91c94bf414a9784c21a4762ea2251e11f7a5fab422d0f8ed35d"
    },
    {
        img: Test7.src,
        name: "Ana L.",
        job: "Founder at Good Gateway",
        video: "https://player.vimeo.com/progressive_redirect/playback/999622973/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a54acea0fcb9cfbb74ab338136fecba3e4deeefae9e5408588a9dc01d2361fe3"
    },
    {
        img: Test8.src,
        name: "Tim Loperz",
        job: "Founder at Good Gateway",
        video: "https://player.vimeo.com/progressive_redirect/playback/999623002/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d7d47ac629c0251f60aa53aa5a4c5828c9e0b8b92aafcae0d36522163771c58b"
    },
]


const OPTIONS = { loop: true, align: 'start' }

const BookReviews = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })]);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggleVideo = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };



    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`${styles.testimonialSection}`}>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {ClientsReview.map((item, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <div className={`${styles.testimonialBox} ${activeIndex === index ? styles.active : ""}`}>
                                    <div className={styles.testimonialContent}>
                                        <div className={styles.testimonialButton} onClick={() => handleToggleVideo(index)}>
                                            {activeIndex === index ? <Pause /> : <Play />}
                                        </div>
                                    </div>
                                    {activeIndex === index ? (
                                        <video
                                            autoPlay
                                            loop
                                            preload="auto"
                                            aria-label="Background video"
                                            className={styles.testVideo}
                                        >
                                            <source src={item.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <Image src={item.img} alt={item.name} fill />
                                    )}
                                </div>
                                <div className={styles.testimonialHeading}>
                                    <div className={styles.testimonialName}>{item.name}</div>
                                    <div className={styles.testimonialJob}>{item.job}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <SliderArrow
                    onPrev={prevButtonHandler}
                    onNext={nextButtonHandler}
                />
            </div>
        </section >
    );
};

export default BookReviews;
