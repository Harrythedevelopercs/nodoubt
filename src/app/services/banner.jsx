import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/services/banner.module.scss"
import UniqueButton from '@/src/app/components/uniquebutton'
import Image from 'next/image'
import BannerLogo from "media/home/bannerlogo.webp"

const Banenr = ({ data }) => {
    return (
        <section
            className={`${styles.bannerSection} ${data.bgImg && styles.bgImage}`}
            style={{ backgroundImage: data.bgImg ? `url(${data.bgImg})` : 'none' }}
        >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <div className={styles.bannerTxt}>
                            <h1>{data.title}</h1>
                            <p>{data.txt}</p>
                            <UniqueButton txt="Submit Your Book" BgBlack={true} />
                        </div>
                        <div className={styles.bannerLogo}>
                            <Image src={BannerLogo.src} alt="banner Image" height={28} width={560} />
                        </div>
                    </Col>
                    <Col md={6} lg={6} className="my-auto text-center">
                        <div className={styles.banneerImage}>
                            <Image src={data.img} alt="banner Image" height={1442} width={1656} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Banenr