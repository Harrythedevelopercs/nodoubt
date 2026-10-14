import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/banner.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import Logo from "media/landing/lp1/Logo.webp"
import BannerImage from "media/landing/lp1/bannerImg.webp"
import bannerBg from "media/landing/lp1/bannerBg.webp"
import Image from "next/image"

const Banner = () => {
    return (
        <section className={styles.landingBanner} style={{ backgroundImage: `url(${bannerBg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} lg={12} className="mx-auto mt-auto">
                        <div className={styles.banenrContainer}>
                            <div className={styles.bannerImg}>
                                <Image src={BannerImage.src} alt="Banner Logo" width={577} height={1024} />
                            </div>
                            <div className={styles.bannerTxt}>
                                <h1>Struggling with Amazon KDP Publishing?<br /> Let the Experts Take Over!</h1>
                                <p>Tired of endless YouTube tutorials and bad advice on Amazon book publishing? We cut through the nonsense and get your book published the right way; formatted, optimized, and set up for sales.</p>
                                <UniqueButton txt="Submit Your Book" />
                                <div className={styles.logoImg}>
                                    <Image src={Logo.src} alt="Banner Logo" width={2228} height={112} />
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
