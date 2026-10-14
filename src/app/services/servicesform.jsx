
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/servicesform.module.scss"
import ContactFrom from "@/src/app/components/contactfrom"
import FromBg from "media/landing/lp1/contactBg.webp"
import Image01 from "media/landing/lp2/Image01.webp"
import Image from "next/image"


const ServicesForm = ({ bg, txt, paratxt, title, lp2, para }) => {
    return (
        <section className={`${styles.serviceSection}  pt-100`}>
            <Container
                className={`${bg ? styles.bgImg : ""}`}
                style={{ backgroundImage: bg ? `url(${FromBg.src})` : null }}
            >
                <Row className="h-100">
                    <Col md={12} lg={lp2 ? 8 : 8} className={`${lp2 ? "my-auto" : "m-auto text-center"}`}>
                        <div className={styles.contentFrom}>
                            <h2>
                                {bg ? (
                                    <div dangerouslySetInnerHTML={{ __html: title }} />
                                ) : (
                                    <div dangerouslySetInnerHTML={{ __html: title || "Get a No-Obligation Quote for Your Publishing Project" }} />
                                )}
                            </h2>
                            {para ?
                                <p>Get a Free Quote</p>
                                :
                                <p>{paratxt}</p>
                            }
                            <ContactFrom vertical={true} txt={txt} lp2={lp2} />
                        </div>
                    </Col>

                    {lp2 ?
                        <Col md={4} className="my-auto text-center">
                            <div className={styles.imgBox}>
                                <Image src={Image01.src} alt="Banner Logo" width={440} height={569} />
                            </div>
                        </Col>
                        :
                        null
                    }
                </Row>
            </Container>
        </section>
    )
}

export default ServicesForm