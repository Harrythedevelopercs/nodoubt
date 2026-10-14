import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../book-writing-2.module.scss";
import AuthorImg from "media/landing/lp2/Image01.webp";

export default function AuthorCaseStudy() {
  return (
    <section className={styles.caseStudySection}>
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className={styles.authorPhotoCard}>
              <Image
                src={AuthorImg.src}
                alt="Published author spotlight"
                width={500}
                height={600}
                sizes="(max-width: 992px) 100vw, 500px"
              />
            </div>
          </Col>

          <Col lg={7}>
            <div className={styles.caseStudyContent}>
              <div className={styles.sectionBadge}>Author Spotlight</div>
              <h2>How We Turned Sarah’s Vision into a Published Masterpiece</h2>

              <div className={styles.metricsRow}>
                <div className={styles.metricBox}>
                  <div className={styles.metricNum}>6 Months</div>
                  <div className={styles.metricLabel}>From Concept to Printed Book</div>
                </div>
                <div className={styles.metricBox}>
                  <div className={styles.metricNum}>Multi-Format</div>
                  <div className={styles.metricLabel}>Hardcover, Paperback & Ebook</div>
                </div>
                <div className={styles.metricBox}>
                  <div className={styles.metricNum}>100% Rights</div>
                  <div className={styles.metricLabel}>All Royalties Retained by Author</div>
                </div>
              </div>

              <blockquote className={styles.authorQuote}>
                “I had spent over two years sitting on chapters that went nowhere. Partnering with
                this writing team was the breakthrough I needed. They listened carefully to my
                interviews, matched my voice completely, and held my hand all the way through
                final distribution.”
              </blockquote>

              <div className={styles.caseBtns}>
                <a href="#quote-form" className={styles.orangeBtn}>
                  Start Your Author Journey
                </a>
                <a href="tel:2106924850" className={styles.darkBtn}>
                  Schedule Free Consultation
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
