import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/pricing/banner.module.scss"
import UniqueButton from '@/src/app/components/uniquebutton'
import Image from 'next/image'
import BannerImg from "media/pricing/bannerImage.webp"
import BannerLogo from "media/home/bannerlogo.webp"

const Banenr = () => {
    return (
        <section className={styles.bannerSection} style={{ backgroundImage: `url(${BannerImg.src})` }}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={5} className="my-auto">
                        <div className={styles.bannerTxt}>
                            <h1>Services & Rates</h1>
                            <p>We understand that every book project is unique. Call us to discuss how we can tailor our service to achieve your publishing goals.</p>
                            <UniqueButton txt="Submit Your Book" />
                        </div>
                        <div className={styles.bannerLogo}>
                            <Image src={BannerLogo.src} alt="banner Image" height={28} width={560} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Banenr