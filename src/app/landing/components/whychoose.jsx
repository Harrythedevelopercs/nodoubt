import styles from "@/styles/landing/components/whychoose.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


const WhyChoose = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.whychooseSection}`}>
            <Container>
                <Row>
                    <Col md={7} className="text-center mx-auto">
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={4} className={styles.colChange}>
                        {data.Content1.map((item, index) => (
                            <div
                                className={`${styles.whychooseBox} ${styles[`Box${index + 1}`]}`}
                                key={index}
                            >
                                <div className={styles.whychooseContainer}>
                                    <div className={styles.title}>{item.title}</div>
                                    <div className={styles.txt}>{item.txt}</div>
                                </div>
                                <div className={styles.count}>0{index + 1}</div>
                            </div>
                        ))}


                    </Col>
                    <Col md={12} lg={4} className={styles.colChange}>
                        {data.Content2.map((item, index) => (
                            <div
                                className={`${styles.whychooseBox} ${styles[`Box${index + 3}`]}`}
                                key={index}
                            >
                                <div className={styles.whychooseContainer}>
                                    <div className={styles.title}>{item.title}</div>
                                    <div className={styles.txt}>{item.txt}</div>
                                </div>
                                <div className={styles.count}>0{index + 3}</div>
                            </div>
                        ))}
                    </Col>
                    <Col md={12} lg={4} className={styles.colChange}>
                        {data.Content3.map((item, index) => (
                            <div
                                className={`${styles.whychooseBox} ${styles[`Box${index + 4}`]}`}
                                key={index}
                            >
                                <div className={styles.whychooseContainer}>
                                    <div className={styles.title}>{item.title}</div>
                                    <div className={styles.txt}>{item.txt}</div>
                                </div>
                                <div className={styles.count}>0{index + 4}</div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChoose