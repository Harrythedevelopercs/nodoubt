import { Container, Row, Col } from "react-bootstrap";
import styles from "../book-writing-2.module.scss";

export default function SelfPublishingServices() {
  const cards = [
    {
      title: "Developmental Editing",
      desc: "We know that every word counts, so we're committed to crafting captivating stories for any length and style. Our talented teams of book writing editor will take on your project from start to finish because no task is too big when you have people like us working together as part of such fantastic Book Editing & formatting services.",
      btnText: "Submit Your Book",
      link: "#quote-form",
    },
    {
      title: "Developmental Editing",
      desc: "We know that every word counts, so we're committed to crafting captivating stories for any length and style. Our talented teams of book writing editor will take on your project from start to finish because no task is too big when you have people like us working together as part of such fantastic Book Editing & formatting services.",
      btnText: "Submit Your Book",
      link: "#quote-form",
    },
  ];

  return (
    <section className={styles.selfPublishingSection}>
      <Container>
        <Row className="align-items-stretch">
          {/* Left Column */}
          <Col lg={5} xl={5} className={styles.selfPublishingLeftCol}>
            <div className={styles.leftColContent}>
              <h2 className={styles.selfPublishingTitle}>
                Why Choose <span className={styles.orangeText}>Our Self<br />Publishing Services?</span>
              </h2>
              <p className={styles.selfPublishingSubtext}>
                As a first-time author, it is not easy to put your heart in someone&apos;s hand. You put your story in
                our hands to bring it to life. It seems difficult.
              </p>
            </div>
          </Col>

          {/* Right Column - Paperclip Cards */}
          <Col lg={7} xl={7} className={styles.selfPublishingRightCol}>
            <div className={styles.paperclipCardsWrapper}>
              {cards.map((card, idx) => (
                <div className={styles.paperclipCard} key={idx}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <div className={styles.titleDivider} />
                  </div>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <div className={styles.cardBtnWrap}>
                    <a href={card.link} className={styles.specialistBtn}>
                      {card.btnText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
