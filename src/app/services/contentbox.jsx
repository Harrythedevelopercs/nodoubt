import { Container, Row, Col } from "react-bootstrap"
import styles from "@/styles/services/contentbox.module.scss"
import UniqueButton from "@/src/app/components/uniquebutton"
import bgBox from "media/services/book-writing-services/bgBox.webp"
import Image from "next/image"

const ContentBox = ({ data }) => {
    return (
        <section className={`${styles.contentBox} pt-100`}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.contentContainer}>
                            <div className={styles.contentItem} style={{ backgroundImage: `url(${bgBox.src})` }}>
                                <div className={styles.contnetTxt}>
                                    <h3>{data.title}</h3>
                                    <p>{data.txt}</p>
                                    <UniqueButton txt={data?.btntxt ? data.btntxt : "Submit Your Book"} BgBlack={true} />
                                </div>
                                <div className={styles.contnetImage}>
                                    <Image src={data.img} alt="banner Image" width={440} height={569} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentBox