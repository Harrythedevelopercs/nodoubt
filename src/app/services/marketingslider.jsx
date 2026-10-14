"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/marketingslider.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import SliderArrow from "@/src/app/components/sliderarrow";
import Logo from "media/services/book-marketing-services/logo.webp"
//Industries 
import Img01 from "media/services/book-marketing-services/books/img01.webp"
import Img02 from "media/services/book-marketing-services/books/img02.webp"
import Img03 from "media/services/book-marketing-services/books/img03.webp"
import Img04 from "media/services/book-marketing-services/books/img04.webp"
import Image from "next/image";

const OPTIONS = { loop: true, align: 'start' }
export const data = [
    {
        subtitle: "Tiffany",
        title: "This One’s For You",
        txt: "Losing a loved one is never easy. I've spent a lot of time trying to figure out how to make it easier. Reminiscing of the good times spent together is what I found to be the most helpful. So one day, I decided to write them down. This book serves to highlight the happier memories I hold of my loved ones who've departed. A book that was initially intended to share my favorite moments with...",
        Img: Img01.src,
    },
    {
        subtitle: "Adam Musselmani",
        title: "VIP FRUITS",
        txt: "Adam Musselmani is a fifth-grader in Norfolk, Virginia. The youngest in his family, Musselmani has two brothers, a sister, and two cats. He is passionate about drawing and creating comic books and animation. He also plays soccer, tennis, and violin for the Bay Youth Orchestra. His superpower is speed-solving the Rubik’s Cube, which he can do in less than twenty-four seconds. vip-fruits.com.",
        Img: Img02.src,
    },
    {
        subtitle: "Jeffrey Bradley​",
        title: "Running With Rollie",
        txt: "Rollie, a real-life Golden Retriever, inspired West Point graduate Jeffrey Bradley to write “Running with Rollie” based on their experiences together and Jeff’s observations of Soldiers returning from war without family support. Jeff picked Rollie up at the animal shelter in Rolla, Missouri after returning from Operation Iraqi Freedom in 2003 and the pair started.",
        Img: Img03.src,
    },
    {
        subtitle: "Dante S Amato​",
        title: "Say Thanks: Today and Everyday",
        txt: "We gather together for the special moments in Life whether it's a holiday, a wedding, or even a birthday.Document countless life moments for present and future generations.Recognize the abundance of value around you.Appreciate yourself and others through realizations and memories........not only today, but everyday.",
        Img: Img04.src,
    },
]
const MarketingSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };
    return (
        <section className={`${styles.marketingSection} pt-100`}>
            <Container><Row>
                <Col md={8}>
                    <h2>Our Book Marketing Portfolio</h2>
                    <p>See the Books We Made Impossible to Ignore.</p>
                </Col>
                <Col md={4} className="mt-auto d-none d-md-block">
                    <SliderArrow
                        onPrev={prevButtonHandler}
                        onNext={nextButtonHandler}
                    />
                </Col>
            </Row>
                <Row>
                    <Col md={12} lg={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.sliderContainer}>
                                                <div className={styles.sliderImg}>
                                                    <Image src={item.Img} alt="Talk To Us Today" fill />
                                                </div>
                                                <div className={styles.sliderTxt}>
                                                    <div className="subtitle">{item.subtitle}</div>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.txt}</p>
                                                    <Image src={Logo.src} alt="Logo" width={527} height={50} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className="mt-auto d-sm-block d-md-none">
                        <SliderArrow
                            onPrev={prevButtonHandler}
                            onNext={nextButtonHandler}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MarketingSlider