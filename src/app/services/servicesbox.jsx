import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/servicesbox.module.scss"
import UniqueButton from "../components/uniquebutton"
import Image from "next/image"

const ServicesBox = ({ data }) => {
    return (
        <section className={`${styles.servicesBox} pt-100`}>
            <Container>
                <Row>
                    <Col md={10} lg={8} className="text-center m-auto">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.servicesContainer}>
                            {data.ServicesItem.map((item, idx) => (
                                <div className={styles.servicesItem} key={idx}>
                                    <div className={styles.servicesTxt}>
                                        <h4>{item.title}</h4>
                                        {item.txt}
                                        <UniqueButton txt="Submit Your Book" BgBlack={true} />
                                    </div>
                                    <div className={styles.servicesImage}>
                                        <div className={styles.imgBox}>
                                            <Image src={item.img} alt="banner Image" fill />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServicesBox