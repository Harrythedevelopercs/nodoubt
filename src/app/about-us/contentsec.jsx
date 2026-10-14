
import styles from "@/styles/about/contentsection.module.scss"
import { Container, Row, Col } from 'react-bootstrap'
import UniqueButton from '@/src/app/components/uniquebutton'
import Image from 'next/image'


const ContentSec = ({ data, alternet }) => {
    return (
        <section className={styles.contentSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={7} className={`${alternet ? "my-auto order-md-2" : "my-auto"}`}>
                        <div className={styles.txtBox}>
                            <h3>{data.title}</h3>
                            {data.txt}
                            <UniqueButton txt="Submit Your Book" BgBlack={true} />
                        </div>
                    </Col>
                    <Col md={6} lg={5} className={`${alternet ? "my-auto order-md-1" : "my-auto"}`}>
                        <div className={styles.txtImage}>
                            <Image src={data.image} alt="banner Image" fill />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec