"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import styles from "../book-writing-2.module.scss";

import Img01 from "media/home/ClientReviews/1.webp";
import Img02 from "media/home/ClientReviews/2.webp";
import Img03 from "media/home/ClientReviews/3.webp";
import Img04 from "media/home/ClientReviews/4.webp";
import Img05 from "media/home/ClientReviews/5.webp";

const clientReviews = [
  {
    quote:
      "Alex John praises our book writing services for turning his vision into a captivating masterpiece with unmatched professionalism and creativity!",
    name: "Alex John",
    role: "Assistant Project Manager",
  },
  {
    quote:
      "Working with this team turned my chaotic outline into a cohesive, beautifully paced book. Their editorial precision and prompt communication made self-publishing completely stress-free.",
    name: "Sarah Jenkins",
    role: "Memoir Author & Entrepreneur",
  },
  {
    quote:
      "Their ghostwriting specialists captured my voice and philosophy with remarkable authenticity. The manuscript surpassed every milestone we established.",
    name: "David Vance",
    role: "Keynote Speaker & Author",
  },
  {
    quote:
      "From formatting and cover design to launch strategy on Amazon KDP, their guidance was invaluable. My book achieved #1 release status within two weeks.",
    name: "Elena Rostova",
    role: "Independent Novelist",
  },
];

const bookReviews = [
  {
    quote:
      "An exceptional narrative triumph. The prose is evocative and gripping, expertly weaving character depth with memorable thematic resonance from start to finish.",
    name: "Literary Review Weekly",
    role: "Editorial Book Critic",
  },
  {
    quote:
      "A brilliantly structured piece of storytelling that captivates the reader immediately. A true testament to exceptional craftsmanship in modern publication.",
    name: "Reader's Choice Circle",
    role: "Independent Book Awards",
  },
  {
    quote:
      "Rich in emotion, exquisitely edited, and pacing that never wavers. This book sets a remarkable benchmark for aspiring authors across the genre.",
    name: "The Novelist Gazette",
    role: "Featured Fiction Reviewer",
  },
  {
    quote:
      "Crisply written, impeccably edited, and utterly unputdownable. This title represents independent storytelling at the peak of creative excellence.",
    name: "BookSpotlight Magazine",
    role: "Senior Literature Reviewer",
  },
];

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState("client");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const activeReviews = activeTab === "client" ? clientReviews : bookReviews;
  const currentReview = activeReviews[currentIndex];

  const triggerSlide = (nextIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsFading(false);
    }, 180);
  };

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? activeReviews.length - 1 : currentIndex - 1;
    triggerSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % activeReviews.length;
    triggerSlide(nextIdx);
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setCurrentIndex(0);
      setIsFading(false);
    }, 180);
  };

  return (
    <section className={styles.reviewSliderSection}>
      <Container>
        {/* Top Header Row */}
        <div className={styles.reviewTopRow}>
          <div className={styles.leftTitleWrap}>
            <span className={styles.pillBadge}>
              {activeTab === "client" ? "Book Reviews" : "Client Reviews"}
            </span>
            <h2 className={styles.sectionHeading}>Let’s hear what they have to say!</h2>
          </div>

          {/* Dual Toggle Pill */}
          <div className={styles.reviewToggle}>
            <button
              type="button"
              className={`${styles.toggleBtn} ${activeTab === "client" ? styles.activeToggle : ""}`}
              onClick={() => handleTabChange("client")}
            >
              Client Reviews
            </button>
            <button
              type="button"
              className={`${styles.toggleBtn} ${activeTab === "book" ? styles.activeToggle : ""}`}
              onClick={() => handleTabChange("book")}
            >
              Book Reviews
            </button>
          </div>
        </div>

        {/* Social Proof Avatars */}
        <div className={styles.socialProofRow}>
          <div className={styles.avatarsGroup}>
            <div className={styles.avatarImg}>
              <Image src={Img01} alt="Client 1" width={48} height={48} />
            </div>
            <div className={styles.avatarImg}>
              <Image src={Img02} alt="Client 2" width={48} height={48} />
            </div>
            <div className={styles.avatarImg}>
              <Image src={Img03} alt="Client 3" width={48} height={48} />
            </div>
            <div className={styles.avatarImg}>
              <Image src={Img04} alt="Client 4" width={48} height={48} />
            </div>
            <div className={styles.avatarImg}>
              <Image src={Img05} alt="Client 5" width={48} height={48} />
            </div>
          </div>
          <div className={styles.trustedText}>
            <strong>Trusted by</strong>
            <span>world leading companies</span>
          </div>
        </div>

        {/* Review Quote Display */}
        <div className={styles.quoteWrapper}>
          <p className={`${styles.reviewQuoteText} ${isFading ? styles.fadingOut : ""}`}>
            {currentReview.quote}
          </p>
        </div>

        {/* Reviewer Details and Arrow Controls */}
        <div className={styles.reviewBottomRow}>
          <div className={`${styles.reviewerInfo} ${isFading ? styles.fadingOut : ""}`}>
            <h4 className={styles.reviewerName}>{currentReview.name}</h4>
            <span className={styles.reviewerRole}>{currentReview.role}</span>
          </div>

          <div className={styles.sliderControls}>
            <button
              type="button"
              className={styles.prevBtn}
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.nextBtn}
              onClick={handleNext}
              aria-label="Next review"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
