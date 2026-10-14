import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/services/booktrailercontent.module.scss";

export function BookTrailerFaqs({ data }) {
    return (
        <section className={`${styles.faqSection} pt-100`}>
            <Container>
                <Row>
                    <Col lg={10}>
                        <div className="subtitle">{data.subtitle}</div>
                        <h2>{data.title}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className={styles.faqList}>
                            {data.items.map((item, index) => (
                                <details className={styles.faqItem} key={item.title} open={index === 0}>
                                    <summary>
                                        <h3>{index + 1}. {item.title}</h3>
                                        <span aria-hidden="true">+</span>
                                    </summary>
                                    <p>{item.txt}</p>
                                </details>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
