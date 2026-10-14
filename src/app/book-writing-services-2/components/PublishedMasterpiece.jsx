import { Container } from "react-bootstrap";
import Image from "next/image";
import styles from "../book-writing-2.module.scss";

export default function PublishedMasterpiece() {
  return (
    <section className={styles.masterpieceSection}>
      <Container>
        {/* Section Header */}
        <div className={styles.masterpieceHeader}>
          <h2>Transform Your Ideas Into a Published Masterpiece</h2>
          <p>
            If you have a story in your head. Maybe it&apos;s a messy idea, maybe just notes on scraps of paper. Doesn&apos;t matter.
            <br />
            We can help you turn it into a real book.
          </p>
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Row 1 - Item 1: Card */}
          <div className={styles.bentoCard}>
            <h3 className={styles.bentoCardTitle}>
              First-Time &amp; Aspiring Authors: From Idea to Published Book
            </h3>
            <p className={styles.bentoCardDesc}>
              Got an idea or some rough notes, but don&apos;t know how to make a book out of it? We guide you every step.
            </p>
          </div>

          {/* Row 1 - Item 2: Image (Woman holding Provence book) */}
          <div className={styles.bentoImageCard}>
            <Image
              src="/services/book-writing-services-2/author-provence-master.png"
              alt="Published Author with book"
              width={500}
              height={360}
              className={styles.bentoImg}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Row 1 - Item 3: Card */}
          <div className={styles.bentoCard}>
            <h3 className={styles.bentoCardTitle}>
              First-Time &amp; Aspiring Authors: From Idea to Published Book
            </h3>
            <p className={styles.bentoCardDesc}>
              Got an idea or some rough notes, but don&apos;t know how to make a book out of it? We guide you every step.
            </p>
          </div>

          {/* Row 2 - Item 1: Card */}
          <div className={styles.bentoCard}>
            <h3 className={styles.bentoCardTitle}>
              First-Time &amp; Aspiring Authors:<br />From Idea to Published Book
            </h3>
            <p className={styles.bentoCardDesc}>
              Got an idea or some rough notes, but don&apos;t know how to make a book out of it? We guide you every step.
            </p>
          </div>

          {/* Row 2 - Item 2: Wide Image (Open book on desk) */}
          <div className={`${styles.bentoImageCard} ${styles.bentoWideImage}`}>
            <Image
              src="/services/book-writing-services-2/open-book-desk.png"
              alt="Open illustrated book on rustic wooden desk"
              width={1000}
              height={360}
              className={styles.bentoImg}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Row 3 - Item 1: Image (Hands signing book) */}
          <div className={styles.bentoImageCard}>
            <Image
              src="/services/book-writing-services-2/signing-book.png"
              alt="Author signing published book"
              width={500}
              height={360}
              className={styles.bentoImg}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Row 3 - Item 2: Card */}
          <div className={styles.bentoCard}>
            <h3 className={styles.bentoCardTitle}>
              First-Time &amp; Aspiring Authors: From Idea to Published Book
            </h3>
            <p className={styles.bentoCardDesc}>
              Got an idea or some rough notes, but don&apos;t know how to make a book out of it? We guide you every step.
            </p>
          </div>

          {/* Row 3 - Item 3: Card */}
          <div className={styles.bentoCard}>
            <h3 className={styles.bentoCardTitle}>
              First-Time &amp; Aspiring Authors: From Idea to Published Book
            </h3>
            <p className={styles.bentoCardDesc}>
              Got an idea or some rough notes, but don&apos;t know how to make a book out of it? We guide you every step.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
