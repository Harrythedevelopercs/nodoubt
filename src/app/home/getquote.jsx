import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/getquote.module.scss"
import Image from "next/image"
import ContactImg from "media/home/contactus.webp"
import ContactFrom from "@/src/app/components/contactfrom"


const GetQuote = ({ data }) => {
    return (
        <section className={`${styles.getquoteSection} pt-100`}>
            <Container className={styles.bgGrayColor}>
                <Row>
                    <Col md={6} lg={7}>
                        <h2>{data.title}</h2>
                        <p>{data.txt}</p>
                        <Image src={ContactImg.src} alt="Contact Image" width={745} height={360} />
                    </Col>
                    <Col md={6} lg={5} >
                        <h4>{data.formtitle}</h4>
                        <ContactFrom />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GetQuote