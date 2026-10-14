import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/home/banner.module.scss"
import UniqueButton from '@/src/app/components/uniquebutton'
import BannerImg from "media/home/bannerImg.webp"
import BannerLogo from "media/home/bannerlogo.webp"
import Image from 'next/image'

const Banner = () => {
    return (
        <section className={styles.mainBanner} >
            <Image
                src={BannerImg}
                alt="Banner Background"
                priority
                fetchPriority="high"
                sizes="(max-width: 992px) 100vw, 800px"
                className={styles.bannerMainImage}
            />
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={7} lg={6} className="my-auto">
                        <div className={styles.bannerTxt}>
                            <h1>Don’t Stress the Writing,<br className="d-md-block d-none" />
                                We’ll Make It Exciting!</h1>
                            <p>You’ve carried this story in your heart for too long, it’s time to put it into words!
                                As a leading book writing company, we don’t just write books; we translate your emotions into words, your thoughts into sentences, and your ideas into bestsellers.<br />
                                Let’s create something powerful, meaningful, and truly impactful together-something that’s yours to share with the world.  </p>
                        </div>
                        <UniqueButton txt="Submit Your Book" BgBlack={true} />
                        <div className={styles.bannerLogo}>
                            <Image src={BannerLogo.src} alt="banner Image" height={28} width={560} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Banner