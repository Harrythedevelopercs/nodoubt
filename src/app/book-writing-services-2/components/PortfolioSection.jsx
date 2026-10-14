"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import styles from "../book-writing-2.module.scss";

import F1 from "media/portfolio/fiction/F1.webp";
import F2 from "media/portfolio/fiction/F2.webp";
import F3 from "media/portfolio/fiction/F3.webp";
import F4 from "media/portfolio/fiction/F4.webp";
import F5 from "media/portfolio/fiction/F5.webp";
import F6 from "media/portfolio/fiction/F6.webp";
import F7 from "media/portfolio/fiction/F7.webp";
import F8 from "media/portfolio/fiction/F8.webp";
import F9 from "media/portfolio/fiction/F9.webp";
import F10 from "media/portfolio/fiction/F10.webp";
import F11 from "media/portfolio/fiction/F11.webp";
import F12 from "media/portfolio/fiction/F12.webp";
import F13 from "media/portfolio/fiction/F13.webp";
import F14 from "media/portfolio/fiction/F14.webp";

import NF1 from "media/portfolio/non-fiction/NF1.webp";
import NF2 from "media/portfolio/non-fiction/NF2.webp";
import NF3 from "media/portfolio/non-fiction/NF3.webp";
import NF4 from "media/portfolio/non-fiction/NF4.webp";
import NF5 from "media/portfolio/non-fiction/NF5.webp";
import NF6 from "media/portfolio/non-fiction/NF6.webp";
import NF7 from "media/portfolio/non-fiction/NF7.webp";
import NF8 from "media/portfolio/non-fiction/NF8.webp";
import NF9 from "media/portfolio/non-fiction/NF9.webp";
import NF10 from "media/portfolio/non-fiction/NF10.webp";
import NF11 from "media/portfolio/non-fiction/NF11.webp";
import NF12 from "media/portfolio/non-fiction/NF12.webp";

import A1 from "media/portfolio/biographies/A1.webp";
import A2 from "media/portfolio/biographies/A2.webp";
import A3 from "media/portfolio/biographies/A3.webp";
import A4 from "media/portfolio/biographies/A4.webp";
import A5 from "media/portfolio/biographies/A5.webp";
import A6 from "media/portfolio/biographies/A6.webp";
import A7 from "media/portfolio/biographies/A7.webp";

import C1 from "media/portfolio/children-books/C1.webp";
import C2 from "media/portfolio/children-books/C2.webp";
import C3 from "media/portfolio/children-books/C3.webp";
import C4 from "media/portfolio/children-books/C4.webp";
import C5 from "media/portfolio/children-books/C5.webp";
import C6 from "media/portfolio/children-books/C6.webp";
import C7 from "media/portfolio/children-books/C7.webp";
import C8 from "media/portfolio/children-books/C8.webp";

import P1 from "media/portfolio/personal-stories/P1.webp";
import P2 from "media/portfolio/personal-stories/P2.webp";
import P3 from "media/portfolio/personal-stories/P3.webp";
import P4 from "media/portfolio/personal-stories/P4.webp";
import P5 from "media/portfolio/personal-stories/P5.webp";
import P6 from "media/portfolio/personal-stories/P6.webp";
import P8 from "media/portfolio/personal-stories/P8.webp";
import P9 from "media/portfolio/personal-stories/P9.webp";
import P10 from "media/portfolio/personal-stories/P10.webp";
import PS1 from "media/portfolio/personal-stories/PS1.webp";

const genreTabs = [
  { label: "Religion", val: "religion" },
  { label: "Self Help", val: "self-help" },
  { label: "Memoirs", val: "memoirs" },
  { label: "Children", val: "children" },
  { label: "Fantasy", val: "fantasy" },
  { label: "Horror", val: "horror" },
  { label: "Romance", val: "romance" },
  { label: "Adventure", val: "adventure" },
  { label: "Non-Fiction", val: "non-fiction" },
];

const genreData = {
  fantasy: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14, F1],
  religion: [NF2, NF5, NF7, NF9, NF11, A1, A2, A3, P3, P5, P8, NF1, NF3, NF4, NF6],
  "self-help": [NF1, NF3, NF4, NF6, NF8, NF10, NF12, A4, A5, A6, A7, P2, P4, P6, P9],
  memoirs: [A1, A2, A3, A4, A5, A6, A7, P1, P2, P3, P4, P5, P6, P8, PS1],
  children: [C1, C2, C3, C4, C5, C6, C7, C8, C1, C2, C3, C4, C5, C6, C7],
  horror: [F3, F5, F7, F8, F10, F11, F12, F13, F14, F1, F2, F4, F6, F9, F2],
  romance: [P1, P2, P3, P4, P5, P6, P8, P9, P10, PS1, F2, F4, F6, F9, F11],
  adventure: [F1, F2, F5, F7, F8, F12, F14, NF1, NF2, NF3, NF4, NF5, NF6, NF7, NF8],
  "non-fiction": [NF1, NF2, NF3, NF4, NF5, NF6, NF7, NF8, NF9, NF10, NF11, NF12, NF1, NF2, NF3],
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("fantasy");

  const currentBooks = genreData[activeFilter] || genreData.fantasy;

  return (
    <section className={styles.portfolioSection}>
      <Container>
        {/* Giant Watermark Title & Year Tag */}
        <div className={styles.portfolioHeader}>
          <Image
            src="/services/book-writing-services-2/portfolio-title.webp"
            alt="Portfolio"
            width={1024}
            height={234}
            priority
            className={styles.titleImage}
          />
          <span className={styles.yearTag}>2026</span>
        </div>

        {/* Orange Ribbon Card */}
        <div className={styles.ribbonBar}>
          <div>
            <h3>
              Our Latest<br />
              Book Publishing Projects
            </h3>
          </div>
          <p>
            Dream of becoming a published author? Our professional book writing
            services can bring your story to life. Talk to our consultant today
            and get started!
          </p>
        </div>

        {/* Category Tabs */}
        <div className={styles.portfolioTabs}>
          {genreTabs.map((tab) => (
            <button
              key={tab.val}
              type="button"
              className={activeFilter === tab.val ? styles.activeTab : ""}
              onClick={() => setActiveFilter(tab.val)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 5x3 Book Covers Grid (15 Covers) */}
        <div className={styles.portfolioGrid}>
          {currentBooks.map((item, idx) => (
            <div className={styles.bookCard} key={`${activeFilter}-${idx}`}>
              <Image
                src={item.src}
                alt={`Published Book Cover ${idx + 1}`}
                width={280}
                height={420}
                sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>

        {/* Full-width Bottom Button */}
        <div className={styles.bottomCtaWrap}>
          <a href="#quote-form" className={styles.fullWidthCtaBtn}>
            Talk To An Expert
          </a>
        </div>
      </Container>
    </section>
  );
}

