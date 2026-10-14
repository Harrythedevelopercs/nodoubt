import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/pricing/selfpricing.module.scss"
import Image from 'next/image'
import UniqueButton from '@/src/app/components/uniquebutton'

const SelfPricing = ({ data }) => {
    return (
        <section className={`${styles.selfServices}`} >
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={11} className="m-auto">
                        <div className={styles.selfServicesContainer}>

                            {data.map((item, index) => (
                                <div className={styles.selfItem} key={index}>
                                    <div className={styles.selfImage}>
                                        <Image src={item.img} alt={`${item.subtitle} ${item.title} service example`} fill />
                                    </div>
                                    <div className={styles.selfContent}>
                                        <div className={styles.category}><span>0{index + 1}</span>{item.subtitle}</div>
                                        <h4>{item.title}</h4>
                                        <p>{item.txt}</p>
                                        <UniqueButton txt="Get a Quote" BgBlack={true} />
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

export default SelfPricing