"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/journey.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import useEmblaCarousel from 'embla-carousel-react'

import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay'

const OPTIONS = { loop: true, align: 'start' }

const Journey = ({ data, data1 }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 3000 })])
    return (
        <>
            <section className={`${styles.journeyTitle} p-100`}>
                <Container>
                    <Row>
                        <Col md={10} lg={9} className="m-auto text-center">
                            <h2>{data.title}</h2>
                            <p>{data.desc}</p>
                            <UniqueButton txt="Submit Your Book" center={true} BgBlack={true} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={`${styles.journeySection} pt-100`}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={12}>
                            <div className={styles.journeyContainer}>
                                <div className={styles.contentSection}>
                                    <h2>{data1.title}</h2>
                                    <p>{data1.desc}</p>
                                    <UniqueButton txt="Submit Your Book" />
                                </div>
                                <div className={styles.sliderSection}>
                                    <div className={styles.embla}>
                                        <div className={styles.embla__viewport} ref={emblaRef}>
                                            <div className={styles.embla__container}>
                                                {data1.JourneyItem.map((item, index) => (
                                                    <div className={styles.embla__slide} key={index}>
                                                        <div className={styles.imgBox}>
                                                            <Image src={item.img} alt={item.title} fill />
                                                        </div>
                                                        <div className={styles.txtBox}>
                                                            <h4>{item.title}</h4>
                                                            <p>{item.txt}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Journey