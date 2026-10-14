import styles from '@/styles/services/tablecontent.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { CrossIcon, TickIcon } from '@/src/app/app-constants'



const TableContent = ({ data }) => {
    return (
        <section className={`pt-100 ${styles.tableContent} `}>
            <Container>
                <Row>
                    <Col md={7}>
                        <h2>{data.title}</h2>
                        <p>{data.desc}</p>
                    </Col>
                    <Col md={12}>
                        <div className={styles.tableContainer}>
                            <div className={styles.tableHeading}>
                                {[...Object.keys(data.tabledata)].map((heading, index) => (
                                    <div className={styles.headingItem} key={index}>
                                        {heading === "sec1" ? "------" :
                                            heading === "sec2" ? "Line-Editing" :
                                                heading === "sec3" ? "Copy-Editing" :
                                                    heading === "sec4" ? "Proof-Editing" : null}

                                    </div>
                                ))}
                            </div>
                            <div className={styles.tableRow}>
                                {Object.values(data.tabledata).map((item, index) => (
                                    <div className={styles.tableCol} key={`column-${index}`}>
                                        {item.map((value, i) => (
                                            <div className={styles.tableColItem} key={`item-${index}-${i}`}>
                                                {value === "tick" ? <TickIcon /> : value === "cross" ? <CrossIcon /> : value}
                                            </div>
                                        ))}
                                    </div>
                                ))}

                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TableContent