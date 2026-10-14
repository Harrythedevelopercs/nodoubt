import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../book-writing-2.module.scss";
import TypewriterImg from "media/companylogo.webp";

export default function ComprehensiveServices() {
  const services = [
    {
      num: "01",
      title: "Ghostwriting Services",
      desc: "Work with veteran ghostwriters who translate your vision, research, and life experiences into complete, compelling book drafts matching your voice.",
      link: "/book-writing-services",
    },
    {
      num: "02",
      title: "Book Editing & Proofreading",
      desc: "Our substantive editors and proofreaders polish every line, eliminating errors while improving structural flow, narrative pacing, and tone.",
      link: "/book-editing-services",
    },
    {
      num: "03",
      title: "Book Publishing & Distribution",
      desc: "From ISBN setup and interior typesetting to global distribution across Amazon KDP, Barnes & Noble, and IngramSpark, we handle the full release.",
      link: "/book-publishing-services",
    },
    {
      num: "04",
      title: "Book Marketing & Promotion",
      desc: "Elevate your author platform with targeted digital marketing campaigns, PR releases, social promotions, and bestseller launch strategies.",
      link: "/book-marketing-services",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <Container>
        <div className={styles.serviceHeader}>
          <div className={styles.typewriterIcon}>
            <Image
              src={TypewriterImg.src}
              alt="Book Writing Cube"
              width={140}
              height={140}
            />
          </div>
          <div className={styles.sectionBadge}>End-to-End Solutions</div>
          <h2>Comprehensive Book Writing Services Tailored for You</h2>
          <p>
            Whether starting from an unwritten idea or polishing an existing manuscript,
            our team provides end-to-end expertise at every production milestone.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="#quote-form" className={styles.orangeBtn}>
              Talk to an Expert
            </a>
            <a href="tel:2106924850" className={styles.darkBtn}>
              Call (210) 692-4850
            </a>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((srv, idx) => (
            <div className={styles.serviceCard} key={idx}>
              <div>
                <div className={styles.cardNum}>{srv.num}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
              <div>
                <Link href={srv.link} className={styles.cardLink}>
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
