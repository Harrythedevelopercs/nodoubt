"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/bestseller.module.scss";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import SliderArrow from "@/src/app/components/sliderarrow";
import Autoplay from 'embla-carousel-autoplay';
import { usePathname } from "next/navigation";

// Books
import Img01 from "media/home/book/book1.webp";
import Img02 from "media/home/book/book2.webp";
import Img03 from "media/home/book/book3.webp";
import Img04 from "media/home/book/book4.webp";
import Img05 from "media/home/book/book5.webp";
import Img06 from "media/home/book/book6.webp";
import Img07 from "media/home/book/book7.webp";
import Img08 from "media/home/book/book8.webp";
import Img09 from "media/home/book/book9.webp";
import Img10 from "media/home/book/book10.webp";

// Industries
import ImgInd01 from "media/portfolio/illustrator/1.webp";
import ImgInd02 from "media/portfolio/illustrator/2.webp";
import ImgInd03 from "media/portfolio/illustrator/3.webp";
import ImgInd04 from "media/portfolio/illustrator/4.webp";
import ImgInd05 from "media/portfolio/illustrator/5.webp";
import ImgInd06 from "media/portfolio/illustrator/6.webp";
import ImgInd07 from "media/portfolio/illustrator/7.webp";

const OPTIONS = { loop: true, align: 'start' };

export const IndustryItem = [
    { title: "Alice's Adventures in Wonderland", Img: Img01.src, url: "#" },
    { title: "Twelve Years a Slave", Img: Img02.src, url: "#" },
    { title: "The Marvelous Land of Oz", Img: Img03.src, url: "#" },
    { title: "The Little Prince", Img: Img04.src, url: "#" },
    { title: "The Jungle Book", Img: Img05.src, url: "#" },
    { title: "Peter Pan", Img: Img06.src, url: "#" },
    { title: "Harry Potter and the Philosopher's Stone", Img: Img07.src, url: "#" },
    { title: "The Night Before Christmas", Img: Img08.src, url: "#" },
    { title: "Harry Potter and the Chamber of Secrets", Img: Img09.src, url: "#" },
    { title: "Harry Potter and the Prisoner of Azkaban", Img: Img10.src, url: "#" },
];

export const IndustryItem1 = [
    { title: "Alice's Adventures in Wonderland", Img: ImgInd01.src, url: "#" },
    { title: "A Christmas Carol", Img: ImgInd02.src, url: "#" },
    { title: "The Wonderful Wizard of Oz", Img: ImgInd03.src, url: "#" },
    { title: "Gulliver's Travels", Img: ImgInd04.src, url: "#" },
    { title: "A Midsummer Night's Dream", Img: ImgInd05.src, url: "#" },
    { title: "Through the Looking-Glass", Img: ImgInd06.src, url: "#" },
    { title: "The Wind in the Willows", Img: ImgInd07.src, url: "#" },
];



const BestSeller = ({ innerPage, landing, data }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })]);
    const pathname = usePathname();

    // Check URL and select data
    const sliderData = pathname?.includes("children-book-illustrator")
        ? IndustryItem1
        : IndustryItem;

    const prevButtonHandler = () => {
        if (emblaApi) emblaApi.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (emblaApi) emblaApi.scrollNext();
    };

    return (
        <section className={`${styles.bestsellerSection} ${innerPage ? styles.innerPageSection : ""} ${landing ? styles.landingSection : ""} pt-100`}>
            <Container>
                <Row>
                    <Col md={10} className={landing ? "text-center m-auto" : ""}>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                    {!landing && (
                        <Col md={2} className="mt-auto d-none d-md-block">
                            <SliderArrow onPrev={prevButtonHandler} onNext={nextButtonHandler} />
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {sliderData.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.industriesImage}>
                                                <Image src={item.Img} alt={`Image ${index}`} width={1800} height={2700} />
                                                <div className={styles.industriesContent}>
                                                    <h4>{item.title}</h4>
                                                    {!landing && (
                                                        <div className={styles.btnReaMore}>Visit Amazon</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                    {!landing && (
                        <Col md={12} className="mt-auto d-sm-block d-md-none">
                            <SliderArrow onPrev={prevButtonHandler} onNext={nextButtonHandler} />
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default BestSeller;
