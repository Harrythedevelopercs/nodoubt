import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/cta.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"


const CTA = ({ data, big }) => {
    return (
        <section className={`${big ? styles.bigBox : ""} ${styles.ctaSection} `}>
            <Container className={`${styles.ctaContainer} h-100`} style={{ backgroundImage: `url(${data.img})` }}>
                <Row className="h-100">
                    <Col xs={12} md={8} lg={8} className="my-auto">
                        <div className={styles.boxBlur}>
                            <h2>{data.title}</h2>
                            {data.txt}
                            <UniqueButton txt="Schedule a Consultation" whiteBtn={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default CTA