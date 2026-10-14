import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/landing/components/content.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import Image from "next/image"
import { TickBox } from "@/src/app/app-constants"

const ContentBox = ({ data, alternet }) => {
    return (
        <section className={`${styles.contentSection} ${alternet ? styles.alternetSec : ""}`}>
            <Container>
                <Row>
                    <Col md={6} lg={6} className={`${alternet ? "order-md-2 my-auto" : "my-auto"}`}>
                        <div className={styles.imgBox}>
                            <Image src={data.img} alt="Banner Logo" width={700} height={700} />
                        </div>
                    </Col>
                    <Col md={6} lg={alternet ? 6 : 5} className={`${alternet ? "order-md-1 my-auto " : "my-auto offset-lg-1"}`}>
                        <h2>{data.title}</h2>
                        {data.txt}
                        {data.contentPoints ?
                            <ul>
                                {data.contentPoints.map((item, index) => (
                                    <li key={index}><TickBox />{item}</li>
                                ))}
                            </ul>
                            : null
                        }
                        <UniqueButton txt="Submit Your Book" BgBlack={alternet ? false : true} />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default ContentBox
