import { Col, Container, Row } from "react-bootstrap";

export default function Page() {
    return (
        <section className="simplePage">
            <Container>
                <Row>
                    <Col>
                        <h1>Refund Policy</h1>
                        <p>We aim to provide excellent service and ensure customer satisfaction. Our refund and cancellation policies are designed to protect both our clients and our company. Please read through the following policy to understand how refund requests are handled.</p>
                        <h4>General Refund Policy:</h4>
                        <p><strong>Cancellation:</strong> You are eligible for a full refund (less a 10% processing fee) if the order is canceled within 24 hours of order placement. Refunds are not applicable if initial content or designs are delivered or revisions are requested within this timeframe.</p>
                        <p><strong>Order Inactivity:</strong> No refund will be issued if there is no activity on the order for 30 days after the order is placed. To reactivate the project, you will need to pay a fee depending on the project scope.</p>
                        <p><strong>Final Deliverables:</strong> Refund requests will not be entertained after final files have been delivered.</p>
                        <p><strong>Refund Reasons:</strong> Refund requests must be based on valid reasons, such as non-compliance with the brief or inadequate revisions. No refunds will be issued for change of mind or if the content meets the agreed-upon requirements.</p>
                        <p><strong>Good Faith:</strong> If you have placed the same content order with multiple agencies to claim a refund, this will be considered a breach of good faith, and the refund request may be denied.</p>
                        <p><strong>Customer Feedback:</strong> Clients are expected to provide timely feedback to ensure the completion of the project. Lack of feedback may affect the project delivery and refund eligibility.</p>
                        <p><i>*** Fill out the refund form or email it to info@yourbrand.com. ***</i></p>
                        <h4>Refund Process</h4>
                        <p><strong>Submission:</strong> All refund requests must be submitted to info@yourbrand.com with the subject line Refund Request - [Book Name]</p>
                        <p><strong>Review:</strong> Our team will review your request within 7-10 business days and provide feedback.</p>
                        <p><strong>Approval or Rejection:</strong> Approved refunds will be processed within 14 business days. If denied, an explanation will be provided.</p>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}



