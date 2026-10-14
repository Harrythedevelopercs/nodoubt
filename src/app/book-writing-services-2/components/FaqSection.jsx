"use client";
import { useState } from "react";
import styles from "../book-writing-2.module.scss";

const faqs = [
  {
    q: "What is included in a professional book writing service?",
    a: "Our book writing service covers the complete creative and production journey. We begin with structured outlining and character or concept mapping, progress through in-depth chapter drafting, and follow with developmental editing, line editing, and publication formatting.",
  },
  {
    q: "Who owns the rights and royalties to the completed book?",
    a: "You retain 100% full ownership of all intellectual property, copyrights, and royalties. We operate strictly as confidential ghostwriters; our names will not appear on the work unless you explicitly choose to credit us.",
  },
  {
    q: "How do your ghostwriters capture my unique voice and vision?",
    a: "Before drafting starts, we conduct comprehensive interviews, review your existing notes, drafts, or speech recordings, and create a voice profile. The first chapter is submitted as an early milestone for your direct review and calibration before proceeding.",
  },
  {
    q: "Can writing, formatting, and publishing be handled together?",
    a: "Yes. Coordinating manuscript development alongside publishing ensures that interior typesetting, chapter styling, trim sizes, and cover specifications are aligned from day one for seamless distribution on major platforms like Amazon KDP.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>Frequently Asked Question?</h2>
        </div>

        <div className={styles.faqAccordion}>
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestionBtn}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{f.q}</span>
                  <span className={`${styles.faqToggleIcon} ${isOpen ? styles.iconOpen : styles.iconClosed}`}>
                    {isOpen ? (
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                        <line x1="2" y1="2" x2="12" y2="12" />
                        <line x1="12" y1="2" x2="2" y2="12" />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                        <line x1="7" y1="1" x2="7" y2="13" />
                        <line x1="1" y1="7" x2="13" y2="7" />
                      </svg>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
