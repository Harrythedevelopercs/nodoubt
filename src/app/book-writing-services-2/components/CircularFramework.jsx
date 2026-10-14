import { Container } from "react-bootstrap";
import Image from "next/image";
import styles from "../book-writing-2.module.scss";

export default function CircularFramework() {
  return (
    <section className={styles.processSection}>
      <Container>
        <div className={styles.processHeader}>
          <h2>
            What Is Our<br />
            <span className={styles.orangeText}>Children Book Publication</span> Process?
          </h2>
          <p className={styles.processSubtext}>
            Our professional book writing services is a collaborative process between our client and
            our team that has the following steps:
          </p>
        </div>

        <div className={styles.orbitContainer}>
          <div className={styles.orbitLayout}>
            {/* Left Column Steps */}
            <div className={styles.orbitColLeft}>
              <div className={styles.processStep}>
                <h4>Book Writing Consultancy</h4>
                <p>
                  Allow our consultant to educate and brief you entirely on the nature of your
                  project and what time it would take. Get a quote of the price and then proceed.
                </p>
              </div>

              <div className={styles.processStep}>
                <h4>Final Draft &amp; QA</h4>
                <p>
                  Once we done writing the book, we do not just abandon you. We sent to our QA
                  team that fact-checks and scans the draft for errors that may have missed
                  your or our team&apos;s keen eye.
                </p>
              </div>
            </div>

            {/* Center Circle with Logo */}
            <div className={styles.orbitCenterCircle}>
              <div className={styles.circleGraphic}>
                <Image
                  src="/services/book-writing-services-2/circular-logo-b.png"
                  alt="Book Writing Logo"
                  width={220}
                  height={220}
                  className={styles.centerLogo}
                />
              </div>
            </div>

            {/* Right Column Steps */}
            <div className={styles.orbitColRight}>
              <div className={styles.processStep}>
                <h4>Receive &amp; Feedback</h4>
                <p>
                  Once the draft is submitted, it entirely depends on the communication as we
                  need your feedback to proceed. Prompt feedback would mean a prompt
                  delivery of the next draft.
                </p>
              </div>

              <div className={styles.processStep}>
                <h4>Final Reviewing &amp; Cover Design</h4>
                <p>
                  As soon as you approve the changes, Our team implements then, and then
                  sends it back to you for a final review. Once we get your go-ahead, we
                  schedule a meeting with our design team and get your book a cover that
                  you want
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Center Step 5 */}
          <div className={styles.orbitBottomStep}>
            <div className={styles.processStepCenter}>
              <h4>Completing The Project &amp; Reassuring Further Assistance</h4>
              <p>
                With that, our book writing comes to an end. In case you need
                further assistance with editing, publishing and, and/or marketing, our team
                will further connect you to our publishing and marketing team
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

