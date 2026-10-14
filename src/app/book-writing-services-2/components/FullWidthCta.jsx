import { Container } from "react-bootstrap";
import styles from "../book-writing-2.module.scss";

export default function FullWidthCta() {
  return (
    <section className={styles.fullCtaBanner}>
      <Container>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>
            From “Wish I Could Write”<br />
            to “I Have Launched My<br />
            Book”
          </h2>
          <div className={styles.ctaBtns}>
            <a href="#quote-form" className={styles.talkBtn}>
              Submit Your Book
            </a>
            <a href="tel:2106924850" className={styles.phoneBtn}>
              (210) 692-4850
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

