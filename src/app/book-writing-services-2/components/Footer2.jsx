import Link from "next/link";
import { MainLogo } from "@/src/app/app-constants";
import styles from "../book-writing-2.module.scss";

export default function Footer2() {
  return (
    <footer className={styles.customFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.footerLogo} aria-label="Heritage Leaf Books Home">
              <MainLogo />
            </Link>
            <p>
              From the initial idea to retail launch, our team of ghostwriters, editors,
              and book marketing specialists help authors build their literary legacy.
            </p>
            <div className={styles.contactDetails}>
              <div>📞 Toll Free: <a href="tel:2106924850">(210) 692-4850</a></div>
              <div>✉️ Email: <a href="mailto:info@yourbrand.com">info@yourbrand.com</a></div>
              <div>📍 11826 Gardner park ln, Sugar Land, TX 77498</div>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h5>Our Services</h5>
            <ul>
              <li><Link href="/book-writing-services">Book Writing</Link></li>
              <li><Link href="/book-editing-services">Book Editing</Link></li>
              <li><Link href="/book-publishing-services">Book Publishing</Link></li>
              <li><Link href="/book-marketing-services">Book Marketing</Link></li>
              <li><Link href="/book-cover-design-services">Cover Design</Link></li>
              <li><Link href="/audiobook-recording-services">Audiobook Production</Link></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/pricing">Pricing Plans</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h5>Legal & Policies</h5>
            <ul>
              <li><Link href="/terms-of-use">Terms of Use</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/refund-form">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottomBar}>
          <p>© 2026 Heritage Leaf Books. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-use">Terms</Link>
            <Link href="/refund-form">Refunds</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
