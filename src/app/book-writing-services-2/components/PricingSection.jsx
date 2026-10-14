import { Container } from "react-bootstrap";
import styles from "../book-writing-2.module.scss";

export default function PricingSection() {
  const packages = [
    {
      name: "Core Ghostwriting Package",
      popular: false,
      desc: "Ideal for authors who need dedicated ghostwriting from concept outline to a fully drafted manuscript.",
      features: [
        "One-on-one author discovery interviews",
        "Detailed chapter outline & roadmap",
        "Complete manuscript ghostwriting",
        "Multiple milestone review rounds",
        "Full developmental and copy editing pass",
        "100% rights and copyright ownership",
      ],
      btnText: "Request Package Details",
    },
    {
      name: "Complete Publishing & Launch Package",
      popular: true,
      desc: "Our full-spectrum solution covering writing, editing, design, formatting, and global retail distribution.",
      features: [
        "Everything in the Ghostwriting Package",
        "Custom interior layout & typography",
        "Bespoke book cover design (Ebook & Print)",
        "ISBN assignment & barcode generation",
        "Amazon KDP, Barnes & Noble & IngramSpark setup",
        "Digital marketing launch strategy",
      ],
      btnText: "Request Full Publishing Quote",
    },
  ];

  return (
    <section className={styles.pricingSection}>
      <Container>
        <div className={styles.pricingHeader}>
          <div className={styles.sectionBadge}>Tailored Solutions</div>
          <h2>Flexible Service Packages for Every Author</h2>
          <p>
            Choose the level of support that aligns with your timeline, manuscript status,
            and publishing goals.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`${styles.pricingCard} ${
                pkg.popular ? styles.popularCard : ""
              }`}
            >
              {pkg.popular && <span className={styles.popularTag}>Most Comprehensive</span>}
              <div>
                <h3>{pkg.name}</h3>
                <p className={styles.pricingDesc}>{pkg.desc}</p>
                <ul className={styles.featureList}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.pricingBtn}>
                <a
                  href="#quote-form"
                  className={pkg.popular ? styles.orangeBtn : styles.darkBtn}
                  style={{ width: "100%" }}
                >
                  {pkg.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
