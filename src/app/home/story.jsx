"use client";

import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/story.module.scss";
import storyImg from "media/home/storyImg.webp";

const Story = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVideoSrc("/static/hero-video.webm");
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={storyImg.src}
        fetchPriority="high"
      />
      <section className={`${styles.storySection} pt-100`} ref={containerRef}>
        <Container>
          <Row>
            <Col md={10} lg={10} className="mx-auto text-center">
              <div className="subtitle">We See You, Dreamer.</div>
              <h2>Let’s Make Your Idea a Book Worth Publishing.</h2>
            </Col>
            <Col md={12}>
              <div className={styles.storyVideo}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  fetchPriority="high"
                  aria-label="Background video"
                  poster={storyImg.src}
                >
                  {videoSrc && <source src={videoSrc} type="video/webm" />}
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Story;
