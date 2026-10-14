import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/pricing/contentbox.module.scss"
import UniqueButton from '@/src/app/components/uniquebutton'

const ContentBox = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.serviceContentBox}`} >
            <Container className="h-100">
                <Row className="h-100">
                    {data.map((item, index) => (
                        <Col md={item.colum ? 12 : 6} key={index} >
                            <div className={`${styles.txtContainer} ${item.colum ? styles.itemColum : ""}`} style={{ backgroundImage: `url(${item.img})` }}>
                                <div className={styles.txtContent}>
                                    {item.subtitle ? <div className="subtitle">{item.subtitle}</div> : ""}
                                    <h4>{item.title}</h4>
                                    <p>{item.txt}</p>
                                    <UniqueButton txt="Submit Your Book" />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

    )
}

export default ContentBox