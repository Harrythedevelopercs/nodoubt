"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../book-writing-2.module.scss";

const GENRES = [
  {
    id: "action",
    label: "Action",
    title: "ACTION",
    desc: "High stakes, breathless pacing, and unforgettable adrenaline. Our action writers craft pulse-pounding plots that keep readers on the edge of their seats from the first chapter to the final showdown.",
  },
  {
    id: "children",
    label: "Children",
    title: "CHILDREN",
    desc: "Captivate young minds with heartwarming stories and vivid imagination. We craft delightful, age-appropriate children's books that inspire curiosity, wonder, and lifelong reading habits.",
  },
  {
    id: "erotic",
    label: "Erotic",
    title: "EROTIC",
    desc: "Passionate chemistry, sensual narratives, and emotional depth. Our seasoned writers handle intimate storytelling with sophistication, captivating voice, and powerful character dynamics.",
  },
  {
    id: "suspense",
    label: "Suspense",
    title: "SUSPENSE",
    desc: "Twists you never see coming and tension that grips until the final page. We structure psychological thrillers and mystery novels that keep readers guessing through every dark turn.",
  },
  {
    id: "drama",
    label: "Drama",
    title: "DRAMA",
    desc: "A truly great drama stays with a reader long after the final page. If you've been holding onto a story of human connection or conflict, we are here to help you release it. Start your journey with our book writing agency and bring your drama to life for a global audience.",
  },
  {
    id: "novel",
    label: "Novel",
    title: "NOVEL",
    desc: "Rich characters, sprawling arcs, and deep thematic resonance. We help novelists transform expansive concepts into polished, page-turning literature ready for worldwide publishing.",
  },
  {
    id: "fiction",
    label: "Fiction",
    title: "FICTION",
    desc: "From contemporary dramas to speculative worlds, our fiction ghostwriters turn your vision into compelling literary works crafted to the highest industry standards.",
  },
  {
    id: "romantic",
    label: "Romantic",
    title: "ROMANTIC",
    desc: "Timeless love stories, heartfelt emotional journeys, and unforgettable chemistry. We craft romance novels that resonate deeply with passionate readers worldwide.",
  },
  {
    id: "fantasy",
    label: "Fantasy",
    title: "FANTASY",
    desc: "Immersive world-building, intricate lore, and epic stakes. Bring your mythical realms, magic systems, and legendary quests to life with seasoned fantasy writers.",
  },
];

export default function GenreShowcaseSection() {
  const [activeGenre, setActiveGenre] = useState("drama");

  const current = GENRES.find((g) => g.id === activeGenre) || GENRES[4];

  return (
    <section className={styles.genreShowcaseSection}>
      {/* Black Header Banner */}
      <div className={styles.genreHeaderBanner}>
        <Container>
          <h2 className={styles.genreMainHeading}>
            Book Writing Experts Specializing In Every<br className="d-none d-sm-inline" /> Genre For Global Readers
          </h2>
        </Container>
      </div>

      {/* Genre Navigation Tabs Bar */}
      <div className={styles.genreTabsBar}>
        <Container className="p-0">
          <div className={styles.genreTabsWrapper}>
            {GENRES.map((g) => (
              <button
                key={g.id}
                type="button"
                className={`${styles.genreTabBtn} ${activeGenre === g.id ? styles.activeTab : ""}`}
                onClick={() => setActiveGenre(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Active Genre Showcase Banner */}
      <div className={styles.genreActiveBanner}>
        <Container className={styles.genreBannerInner}>
          <div className={styles.genreTitleCol}>
            <h3 className={styles.genreDisplayTitle}>{current.title}</h3>
          </div>

          <div className={styles.genreContentCol}>
            <p className={styles.genreDesc}>{current.desc}</p>
            <a href="#quote-form" className={styles.genreCtaBtn}>
              Submit Your Book
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}
