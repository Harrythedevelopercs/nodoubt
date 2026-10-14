import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../book-writing-2.module.scss";

export default function IntroFeature() {
  return (
    <section className={styles.introSection}>
      <Container>
        {/* Top Header Row */}
        <Row className={`align-items-end justify-content-between ${styles.topHeaderRow}`}>
          <Col lg={7} xl={7}>
            <h2 className={styles.introMainHeading}>
              Ready to Share Your Story?<br />
              We&apos;ve Got You Covered.
            </h2>
          </Col>
          <Col lg={5} xl={5} className="d-flex justify-content-lg-end mt-3 mt-lg-0">
            <p className={styles.introTopSubtext}>
              Dream of becoming a published author? Our professional book writing
              services can bring your story to life. Talk to our consultant today
              and get started!
            </p>
          </Col>
        </Row>

        {/* Main Content Row */}
        <Row className={`align-items-center ${styles.introContentRow}`}>
          <Col lg={5} xl={5}>
            <h3 className={styles.introSubheading}>
              Not Sure If Your Work Is Good Enough To Get Published?
            </h3>
            <div className={styles.introBadge}>DON&apos;T WORRY!</div>
            <div>
              <a href="#quote-form" className={styles.introDarkBtn}>
                Talk To An Expert
              </a>
            </div>
          </Col>

          <Col lg={7} xl={7} className="mt-4 mt-lg-0">
            <div className={styles.introImgCard}>
              <Image
                src="/services/book-writing-services-2/introBooks.webp"
                alt="Book publishing and editing samples"
                width={1024}
                height={601}
                priority
                sizes="(max-width: 992px) 100vw, 65vw"
              />
            </div>
            <p className={styles.introFootnote}>
              Every great author starts somewhere. Our team of meticulous proofreaders
              and expert book editors will refine your manuscript, ensuring flawless
              content that captivates readers and meets industry standards. Let us
              polish your gem with our dedicated editing and formatting services.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

