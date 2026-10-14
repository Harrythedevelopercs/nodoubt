import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/banner.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import Logo from "media/landing/lp1/Logo.webp"
import BannerImage from "media/landing/lp2/bannerImg.webp"
import bannerBg from "media/landing/lp1/bannerBg.webp"
import Image from "next/image"

const BannerLp2 = ({ lp2 }) => {
    return (
        <section className={styles.landingBanner} style={{ backgroundImage: `url(${bannerBg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} lg={12} className="mx-auto mt-auto">
                        <div className={`${styles.banenrContainer} ${lp2 ? styles.bannerLp2 : ""}`}>
                            <div className={styles.bannerTxt}>
                                <h1>The Words You Swallowed,<br />
                                    Our Book Writers Spill Them.
                                </h1>
                                <p>Memories fade, words go unspoken; but not anymore! At Book Writing Company, our ghostwriters etch it in ink for the world to read, for your heart to heal, and for your story to finally be told. </p>
                                <UniqueButton txt="Submit Your Book" />
                                <div className={styles.logoImg}>
                                    <Image src={Logo.src} alt="Banner Logo" width={2228} height={112} />
                                </div>
                            </div>
                            <div className={styles.bannerImg}>
                                <Image src={BannerImage.src} alt="Banner Logo" width={504} height={792} />
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BannerLp2
