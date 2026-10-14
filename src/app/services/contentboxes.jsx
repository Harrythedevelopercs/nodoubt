import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/services/contentboxes.module.scss";
import UniqueButton from "@/src/app/components/uniquebutton";

const ContentBoxes = ({ data }) => {
    return (
        <section className={`${styles.contentBoxes}`}>
            <Container className="h-100">
                <Row className="h-100 d-flex">
                    {data.map((item, index) => (
                        <Col md={6} key={index} className="d-flex">
                            <div className={`${styles.contentContainer} d-flex flex-column justify-content-between`}>
                                <h5>{item.title}</h5>
                                <p>{item.txt}</p>
                                <UniqueButton txt="Submit Your Book" BgBlack={true} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ContentBoxes;
