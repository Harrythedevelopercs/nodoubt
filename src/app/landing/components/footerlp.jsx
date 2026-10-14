import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/footerlp.module.scss"

const Footerlp = () => {
    return (
        <section className={`${styles.copyRightSection}`}>
            <Container className={`${styles.bgGrayColor} h-100`}>
                <Row className="h-100">
                    <Col md={12} lg={12} className="my-auto text-center">
                        <div className={styles.copyItem}>
                            <p>© 2026 - All Rights Reserved Dreamweave Media INC</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footerlp