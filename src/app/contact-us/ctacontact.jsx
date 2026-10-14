import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/contact/ctaconttact.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import BgIMG from "media/contact/bgContact.webp"

const CtaContact = () => {
    return (
        <section className={`${styles.ctaContactSection} pt-100`}>
            <Container className={`h-100 ${styles.bgContact}`} style={{ backgroundImage: `url(${BgIMG.src})` }}>
                <Row className="h-100">
                    <Col md={6} lg={6} className="my-auto">
                        <div className={styles.ctaTxt}>
                            <h2>Your Publishing Partner: From Manuscript to Market, We’ve Got You Covered</h2>
                            <p>Ready to bring your literary vision to life? Contact us today to discover how our comprehensive publishing services can elevate your book to new heights. Let's make your publishing dreams a reality together.</p>
                            <UniqueButton txt="Submit Your Book" BgBlack={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default CtaContact