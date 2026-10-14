import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/about/banner.module.scss"
import UniqueButton from '@/src/app/components/uniquebutton'
import Image from 'next/image'
import BannerImg from "media/about/bannerImg.webp"
import BannerLogo from "media/home/bannerlogo.webp"

const Banenr = () => {
    return (
        <section className={styles.bannerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={5} className="my-auto">
                        <div className={styles.bannerTxt}>
                            <h1>About us</h1>
                            <p>We are more than just a book writing and publishing company. We are your partners in storytelling. Our team of  writers, editors, and publishing experts is dedicated to turning your ideas into stories that attract readers around the globe.  With a commitment to quality, creativity, and professionalism, we have helped thousands of authors publish books across diverse genres. From ghostwriting and editing to book formatting and marketing, we ensure that your book not only meets industry standards but also stands out in the competition.</p>
                            <UniqueButton txt="Submit Your Book" BgBlack={true} />
                        </div>
                        <div className={styles.bannerLogo}>
                            <Image src={BannerLogo.src} alt="banner Image" height={28} width={560} />
                        </div>
                    </Col>
                    <Col md={6} lg={7} className="mt-auto text-center">
                        <div className={styles.banneerImage}>
                            <Image src={BannerImg.src} alt="banner Image" height={747} width={667} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banenr