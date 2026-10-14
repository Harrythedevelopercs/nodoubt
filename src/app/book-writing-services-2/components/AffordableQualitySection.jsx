import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../book-writing-2.module.scss";

const checklist1 = [
  "Professional book writing services from experienced writers",
  "Fully confidential custom book writing services with full rights transferred to you",
  "Expert book editing and writing services for clear, polished manuscripts",
  "Complete nonfiction and fiction book writing support",
];

const checklist2 = [
  "Idea development and structuring",
  "Writing, editing, and formatting support",
  "Publishing guidance for major platforms",
];

export default function AffordableQualitySection() {
  return (
    <section className={styles.affordableQualitySection}>
      <Container>
        <Row className="align-items-start justify-content-between gx-lg-5">
          {/* Left Column: Heading, Subtitle, Author Image */}
          <Col lg={6} md={12} className={styles.affordableLeftCol}>
            <h2 className={styles.affordableHeading}>
              Affordable Book Writing Service with<br className="d-none d-sm-inline" /> Uncompromised Quality
            </h2>
            <p className={styles.affordableSubtitle}>
              Our company aims to stand among the best book writing service companies in the USA offering professional, reliable, and fully guided support.
            </p>
            <div className={styles.authorPhotoCard}>
              <Image
                src="/services/book-writing-services-2/author-provence.webp"
                alt="Author holding book An American in Provence"
                width={936}
                height={947}
                className={styles.authorImg}
                priority
              />
            </div>
          </Col>

          {/* Right Column: Top Para, Checklist 1, Subheading, Mid Paras, Checklist 2, Buttons */}
          <Col lg={6} md={12} className={styles.affordableRightCol}>
            <p className={styles.rightTopPara}>
              You need someone to edit, write your story, fiction or nonfiction or perhaps you want the complete publishing package, our USA-based team offers you solutions that serve your vision.
            </p>

            <ul className={styles.checklist}>
              {checklist1.map((item, idx) => (
                <li key={idx}>
                  <span className={styles.checkIcon}>
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8.5L6.5 12L13 4" stroke="#4b542a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className={styles.authorStageHeading}>
              Complete Book Writing Service Support at<br className="d-none d-sm-inline" /> Every Author Stage
            </h3>

            <div className={styles.authorStageParas}>
              <p>
                Every author&#39;s journey looks different, and our online book writing services adapt to where you are. Some clients come with a clear outline, others only have an idea.
              </p>
              <p>
                We provide support at any stage, from early brainstorming to final publishing preparation. Our custom book writing services are flexible, private, and easy to follow.
              </p>
            </div>

            <ul className={styles.checklist}>
              {checklist2.map((item, idx) => (
                <li key={idx}>
                  <span className={styles.checkIcon}>
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8.5L6.5 12L13 4" stroke="#4b542a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.affordableBtns}>
              <a href="#quote-form" className={styles.talkBtn}>
                Submit Your Book
              </a>
              <a href="tel:2106924850" className={styles.phonePill}>
                (210) 692-4850
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
