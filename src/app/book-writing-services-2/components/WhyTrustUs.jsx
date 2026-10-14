import { Container } from "react-bootstrap";
import styles from "../book-writing-2.module.scss";

export default function WhyTrustUs() {
  const cards = [
    {
      title: "We Capture Your Voice",
      desc: "We understand that you are concerned about preserving your unique voice. Don't worry; we protect your voice and vision.",
      btnText: "Submit Your Book",
      link: "#quote-form",
    },
    {
      title: "We Capture Your Voice",
      desc: "We understand that you are concerned about preserving your unique voice. Don't worry; we protect your voice and vision.",
      btnText: "Submit Your Book",
      link: "#quote-form",
    },
    {
      title: "We Capture Your Voice",
      desc: "We understand that you are concerned about preserving your unique voice. Don't worry; we protect your voice and vision.",
      btnText: "Submit Your Book",
      link: "#quote-form",
    },
  ];

  return (
    <section className={styles.whyTrustSection}>
      <Container>
        <div className={styles.trustHeader}>
          <h2 className={styles.trustMainTitle}>
            Trusted by 8 Out of 10 First Time<br className={styles.titleBreak} />
            Authors Here Is Why
          </h2>
          <p className={styles.trustSubtext}>
            As a first-time author, it is not easy to put your heart in someone&apos;s hand. You put your story in
            our hands to bring it to life. It seems difficult. But we make it easy through real conversations,
            deep listening, and a process designed to reflect you.
          </p>
        </div>

        <div className={styles.trustGrid}>
          {cards.map((card, idx) => (
            <div className={styles.trustCard} key={idx}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
              <a href={card.link} className={styles.connectBtn}>
                {card.btnText}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

