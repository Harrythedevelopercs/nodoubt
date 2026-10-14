"use client";
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MainLogo } from "@/src/app/app-constants";
import PartnerLogos from "./PartnerLogos";
import styles from "../book-writing-2.module.scss";

export default function HeroBanner() {
  const router = useRouter();
  const [formStatus, setFormStatus] = useState("Submit Your Book");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE_BYTES = 250 * 1024 * 1024; // 250MB

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        alert("File size exceeds 250MB. Please choose a smaller file.");
        e.target.value = "";
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setFileName("");
        return;
      }
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleClearFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("Sending...");

    const formElData = new FormData(e.target);
    const dataObj = Object.fromEntries(formElData.entries());

    if (dataObj.honeypot) {
      setIsSubmitting(false);
      setFormStatus("Submit Your Book");
      return;
    }

    const file = fileInputRef.current?.files?.[0] || e.target.attachment?.files?.[0];
    const attachmentName = file?.name || fileName || "";

    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      alert("File size exceeds 250MB. Please upload a file smaller than 250MB.");
      setIsSubmitting(false);
      setFormStatus("Submit Your Book");
      return;
    }

    const formData = new FormData();
    formData.append("name", dataObj.name?.trim() || "");
    formData.append("email", dataObj.email?.trim() || "");
    formData.append("phone", dataObj.phone?.trim() || "");
    formData.append("message", dataObj.message?.trim() || "");
    formData.append("attachment_name", attachmentName);
    formData.append("attachment", attachmentName);
    formData.append("services", "Book Writing Services 2 - Hero Form");
    formData.append("brand_id", "2");
    formData.append("brand_name", "yourbrand.com");
    formData.append("page_url", typeof window !== "undefined" ? window.location.href : "");
    formData.append("accessKey", "Y9nkDu5HzJzw5ytKaWLL");

    const fileInput =
      fileInputRef.current ||
      (typeof document !== "undefined" ? document.getElementById("hf-file") : null);
    if (fileInput && fileInput.files && fileInput.files[0]) {
      formData.append("attachment", fileInput.files[0]);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setFileName("");
        router.push("/thank-you");
      } else {
        const errorData = await res.json().catch(() => ({}));
        if (errorData?.error) {
          alert(errorData.error);
        }
        setFormStatus("Error - Try Again");
        setIsSubmitting(false);
      }
    } catch {
      setFormStatus("Error Submitting");
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.heroBanner}>
      {/* Top Floating Navbar matching screenshot */}
      <div className={styles.heroTopNav}>
        <Link href="/" className={styles.heroLogo} aria-label="Heritage Leaf Books Home">
          <MainLogo />
        </Link>

        <ul className={styles.heroNavPill}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/book-writing-services">Services</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>

        <a href="tel:2106924850" className={styles.heroCallBtn}>
          (210) 692-4850
        </a>
      </div>

      {/* Main Hero Content */}
      <div className={styles.heroBody}>
        <Container>
          <Row className="align-items-start">
            <Col lg={6} xl={6}>
              <h1 className={styles.heroTitle}>
                Turn Your Dream of Becoming a Published Writer into Reality!
              </h1>
              <p className={styles.heroDesc}>
                Dream of becoming a published author? Our professional book writing services
                can bring your story to life. Talk to our consultant today and get started!
              </p>
              <div className={styles.heroBtns}>
                <a href="#quote-form" className={styles.talkBtn}>
                  Submit Your Book
                </a>
                <a href="tel:2106924850" className={styles.phonePill}>
                  (210) 692-4850
                </a>
              </div>
            </Col>

            <Col lg={6} xl={6} className="mt-4 mt-lg-0">
              <div className={styles.glassFormCard} id="quote-form">
                <div className={styles.formHeader}>
                  <h3>Contact Us</h3>
                  <p>
                    We provide a range of services to authors who need book writing services.
                  </p>
                </div>
                <div className={styles.formDivider} />

                <form onSubmit={handleSubmit}>
                  <div style={{ display: "none" }} aria-hidden="true">
                    <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className={styles.formRow2}>
                    <div className={styles.formGroup}>
                      <label htmlFor="hf-name">
                        Full Name<span>*</span>
                      </label>
                      <input
                        id="hf-name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="hf-phone">
                        Enter Your Phone<span>*</span>
                      </label>
                      <input
                        id="hf-phone"
                        type="tel"
                        name="phone"
                        placeholder="+1 1235 678 900"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="hf-email">
                      Enter Your Email<span>*</span>
                    </label>
                    <input
                      id="hf-email"
                      type="email"
                      name="email"
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="hf-file">
                      Upload Your Book
                    </label>
                    <div className={styles.fileUploadBox}>
                      <input
                        ref={fileInputRef}
                        id="hf-file"
                        type="file"
                        name="attachment"
                        accept=".pdf,.doc,.docx,.txt,.epub,.rtf"
                        onChange={handleFileChange}
                        className={styles.fileInput}
                      />
                      <label htmlFor="hf-file" className={styles.fileUploadLabel} title="Upload Your Book">
                        <span className={`${styles.fileUploadText} ${fileName ? styles.fileUploadTextActive : ""}`}>
                          {fileName ? fileName : "Upload Your Book"}
                        </span>
                        <span className={styles.fileUploadIcon} aria-hidden="true">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                          </svg>
                        </span>
                      </label>
                      {fileName ? (
                        <button
                          type="button"
                          className={styles.clearFileBtn}
                          onClick={handleClearFile}
                          title="Remove file"
                          aria-label="Remove attached file"
                        >
                          ×
                        </button>
                      ) : null}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="hf-desc">
                      Message
                    </label>
                    <textarea
                      id="hf-desc"
                      name="message"
                      placeholder=""
                    ></textarea>
                  </div>

                  <div className={styles.checkboxWrap}>
                    <input
                      type="checkbox"
                      id="hf-terms"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      required
                    />
                    <label htmlFor="hf-terms">
                      I have read and agree to the{" "}
                      <strong>Terms &amp; Conditions</strong> and{" "}
                      <strong>Privacy Policy</strong>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.formSubmitBtn}
                  >
                    {formStatus}
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Floating Glass Logos Bar */}
      <PartnerLogos />
    </section>
  );
}
