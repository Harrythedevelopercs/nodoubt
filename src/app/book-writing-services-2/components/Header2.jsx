"use client";
import Link from "next/link";
import { MainLogo } from "@/src/app/app-constants";
import styles from "../book-writing-2.module.scss";

export default function Header2() {
  return (
    <header className={styles.customHeader}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logoLink} aria-label="Heritage Leaf Books Home">
          <MainLogo />
        </Link>

        <nav>
          <ul className={styles.navMenu}>
            <li>
              <Link href="/book-writing-services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <a href="tel:2106924850" className={styles.phoneLink}>
            📞 (210) 692-4850
          </a>
          <a href="#quote-form" className={styles.ctaButton}>
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
