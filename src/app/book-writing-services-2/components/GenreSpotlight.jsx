"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../book-writing-2.module.scss";

const genres = [
  {
    name: "Drama",
    tagline: "Dramatic Storytelling that Resonates Deeply",
    desc: "Complex character relationships, emotional turning points, and unforgettable resolutions crafted with high narrative tension.",
  },
  {
    name: "Fiction",
    tagline: "Immersive Worlds & Compelling Story Arcs",
    desc: "From contemporary fiction to historical sagas, our writers craft vivid landscapes and believable protagonist journeys.",
  },
  {
    name: "Sci-Fi",
    tagline: "Futuristic Realities & Mind-Bending Concepts",
    desc: "Hard sci-fi or space opera, we build grounded technological lore and high-stakes speculative scenarios.",
  },
  {
    name: "Romance",
    tagline: "Heartfelt Chemistry & Emotional Beats",
    desc: "Captivating romantic tension, genuine dialogue, and swoon-worthy story arcs that keep readers flipping pages late into the night.",
  },
  {
    name: "Biography",
    tagline: "Memoirs & Real-Life Legacies Put into Ink",
    desc: "Capture personal triumphs, lessons, and life milestones in an authentic voice that inspires future generations.",
  },
];

export default function GenreSpotlight() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = genres[activeIdx];

  return (
    <section className={styles.genreSpotlight}>
      <Container>
        <div className={styles.genreNav}>
          {genres.map((g, i) => (
            <span
              key={g.name}
              className={activeIdx === i ? styles.activeGenre : ""}
              onClick={() => setActiveIdx(i)}
            >
              {g.name}
            </span>
          ))}
        </div>
      </Container>

      <div className={styles.canvasBox}>
        <div className={styles.bigGenreWord}>{current.name.toUpperCase()}</div>
        <div className={styles.canvasCard}>
          <div className={styles.sectionBadge}>Genre Spotlight</div>
          <h3>{current.tagline}</h3>
          <p>{current.desc}</p>
          <a href="#quote-form" className={styles.orangeBtn}>
            Discuss Your {current.name} Book
          </a>
        </div>
      </div>
    </section>
  );
}
