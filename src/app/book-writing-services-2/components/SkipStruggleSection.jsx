import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "../book-writing-2.module.scss";

const standardsData = [
  {
    number: "01",
    titleLine1: "You Need to",
    titleLine2: "Meet Publishing Standards",
    desc: "Book publishers and self-publishing platforms have strict formatting and quality requirements. We write and format your book to meet these standards, increasing your chances of success.",
  },
  {
    number: "02",
    titleLine1: "You Need to",
    titleLine2: "Meet Publishing Standards",
    desc: "Book publishers and self-publishing platforms have strict formatting and quality requirements. We write and format your book to meet these standards, increasing your chances of success.",
  },
  {
    number: "03",
    titleLine1: "You Need to",
    titleLine2: "Meet Publishing Standards",
    desc: "Book publishers and self-publishing platforms have strict formatting and quality requirements. We write and format your book to meet these standards, increasing your chances of success.",
  },
  {
    number: "04",
    titleLine1: "You Need to",
    titleLine2: "Meet Publishing Standards",
    desc: "Book publishers and self-publishing platforms have strict formatting and quality requirements. We write and format your book to meet these standards, increasing your chances of success.",
  },
];

export default function SkipStruggleSection() {
  return (
    <section className={styles.skipStruggleSection}>
      <Container>
        <Row className="align-items-start justify-content-between">
          {/* Left Column: Heading & Typewriter */}
          <Col lg={7} md={7} className={styles.struggleLeftCol}>
            <h2 className={styles.struggleHeading}>
              Skip the Struggle<br />
              Get Experts for Writing a Book
            </h2>

            <div className={styles.typewriterWrapper}>
              <Image
                src="/services/book-writing-services-2/typewriter.png"
                alt="Vintage Black and Gold Typewriter"
                width={835}
                height={622}
                className={styles.typewriterImg}
                priority={true}
                unoptimized
              />
            </div>
          </Col>

          {/* Right Column: Paragraph & CTA Buttons */}
          <Col lg={5} md={5} className={styles.struggleRightCol}>
            <p className={styles.struggleDesc}>
              Writing a book is no small task, it requires creativity, structure,
              and a skilled hand to craft a compelling narrative. That&#39;s why you
              need our book writing company to turn your thoughts into a
              well-written, professional book. We make sure your story is clear,
              engaging, and ready to publish. No stress, no writer&#39;s block,
              just a great book with your name on it.
            </p>

            <div className={styles.struggleBtns}>
              <a href="#quote-form" className={styles.talkBtn}>
                Submit Your Book
              </a>
              <a href="tel:2106924850" className={styles.phonePill}>
                (210) 692-4850
              </a>
            </div>
          </Col>
        </Row>

        {/* 4-Card Grid (Rectangle 30828) */}
        <div className={styles.standardsGrid}>
          {standardsData.map((item) => (
            <div key={item.number} className={styles.standardCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  {item.titleLine1}
                  <br />
                  {item.titleLine2}
                </h3>
                <span className={styles.cardNumber}>{item.number}</span>
              </div>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
