import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/ctachild.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import BgIMG from "media/services/children-book-illustrator/childBg.webp"
import ChildIMG from "media/services/children-book-illustrator/childImg.webp"
import Image from "next/image"

const CtaChild = () => {
    return (
        <section className={`${styles.ctaChildSection} pt-100`}>
            <Container className={styles.bgChild} style={{ backgroundImage: `url(${BgIMG.src})` }}>
                <Row>
                    <Col md={12} lg={12}>
                        <div className={styles.ctaContainer} >
                            <div className={styles.ctaTxt}>
                                <h2>The best stories deserve<br />
                                    the best illustrations
                                </h2>
                                <p>Ready to create something unforgettable? Let’s discuss your book illustration!</p>
                                <UniqueButton txt="Submit Your Book" BgBlack={true} />
                            </div>
                            <div className={styles.ctaImg}>
                                <Image src={ChildIMG.src} alt="Talk To Us Today" fill />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default CtaChild