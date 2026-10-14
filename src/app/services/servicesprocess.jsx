import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/services/servicesprocess.module.scss"
import Image from "next/image"

const ServicesProcess = ({ data }) => {
    const ItemTitleTag = data.itemTitleTag || "h4";

    return (
        <section className={`${styles.servicesProcess} pt-100`}>
            <Container>
                <Row >
                    <Col md={8} className="m-auto text-center">
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        {data.ProcessDataItem1.map((item, index) => (
                            <div className={styles.processItem} key={index}>
                                <ItemTitleTag>{item.title}</ItemTitleTag>
                                <p>{item.txt}</p>
                            </div>
                        ))}
                    </Col>
                    <Col md={4} className="m-auto">
                        <div className={styles.processLogo}>
                            <Image src={data.img} alt="Company Logo Image" height={524} width={524} />
                        </div>
                    </Col>
                    <Col md={4}>
                        {data.ProcessDataItem2.map((item, index) => (
                            <div className={styles.processItem} key={index}>
                                <ItemTitleTag>{item.title}</ItemTitleTag>
                                <p>{item.txt}</p>
                            </div>
                        ))}
                    </Col>
                    <Col md={8} lg={6} className="mx-auto">
                        {data.ProcessDataItem3.map((item, index) => (
                            <div className={`${styles.processItem} ${styles.processLast}`} key={index}>
                                <ItemTitleTag>{item.title}</ItemTitleTag>
                                <p>{item.txt}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServicesProcess
