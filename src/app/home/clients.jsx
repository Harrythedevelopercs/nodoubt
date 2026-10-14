"use client";
import { useEffect } from "react";
import styles from "@/styles/home/clients.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
const options = { loop: true }

//Clients
import Client01 from "media/home/clientsLogo/01.webp";
import Client02 from "media/home/clientsLogo/02.webp";
import Client03 from "media/home/clientsLogo/03.webp";
import Client04 from "media/home/clientsLogo/04.webp";
import Client05 from "media/home/clientsLogo/05.webp";
import Client06 from "media/home/clientsLogo/06.webp";
import Client07 from "media/home/clientsLogo/07.webp";
import Client08 from "media/home/clientsLogo/06.webp";
import Client09 from "media/home/clientsLogo/09.webp";
import Client10 from "media/home/clientsLogo/10.webp";
import Client11 from "media/home/clientsLogo/11.webp";
import Client12 from "media/home/clientsLogo/12.webp";


export const ClientImages = [
    {
        Img: Client01.src,
    },
    {
        Img: Client02.src,
    },
    {
        Img: Client03.src,
    },
    {
        Img: Client04.src,
    },
    {
        Img: Client05.src,
    },
    {
        Img: Client06.src,
    },
    {
        Img: Client07.src,
    },
    {
        Img: Client08.src,
    },
    {
        Img: Client09.src,
    },
    {
        Img: Client10.src,
    },
    {
        Img: Client11.src,
    },
    {
        Img: Client12.src,
    },

]
const Clients = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options,
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: false,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            }),
        ]
    );

    useEffect(() => {
        if (!emblaApi) return;
        const timer = setTimeout(() => {
            const autoScroll = emblaApi.plugins()?.autoScroll;
            if (autoScroll && !autoScroll.isPlaying()) {
                autoScroll.play();
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [emblaApi]);

    return (
        <>
            <section className={styles.clientSlider}>
                <Container className={`${styles.clientContainer} h-100`}>
                    <Row className="h-100">
                        <Col md={12} className="my-auto">
                            <div className={styles.embla}>
                                <div className={styles.embla__viewport} ref={emblaRef}>
                                    <div className={styles.embla__container}>
                                        {ClientImages.map((item, index) => (
                                            <div className={styles.embla__slide} key={index}>
                                                <div className={styles.imgBox}>
                                                    <Image src={item.Img} alt={`Client ${index}`} fill />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Clients;
