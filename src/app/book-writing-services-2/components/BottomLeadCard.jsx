"use client";
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../book-writing-2.module.scss";

export default function BottomLeadCard() {
  const router = useRouter();
  const [formStatus, setFormStatus] = useState("Claim Your Consultation");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    setFormStatus("Submitting...");

    const formElData = new FormData(e.target);
    const dataObj = Object.fromEntries(formElData.entries());

    if (dataObj.honeypot) {
      setIsSubmitting(false);
      setFormStatus("Claim Your Consultation");
      return;
    }

    const file = fileInputRef.current?.files?.[0] || e.target.attachment?.files?.[0];
    const attachmentName = file?.name || fileName || "";

    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      alert("File size exceeds 250MB. Please upload a file smaller than 250MB.");
      setIsSubmitting(false);
      setFormStatus("Claim Your Consultation");
      return;
    }

    const formData = new FormData();
    formData.append("name", dataObj.name?.trim() || "");
    formData.append("email", dataObj.email?.trim() || "");
    formData.append("phone", dataObj.phone?.trim() || "");
    formData.append("message", dataObj.message?.trim() || "");
    formData.append("attachment_name", attachmentName);
    formData.append("attachment", attachmentName);
    formData.append("services", "Book Writing Service 2 - Bottom Form");
    formData.append("brand_id", "2");
    formData.append("brand_name", "yourbrand.com");
    formData.append("page_url", typeof window !== "undefined" ? window.location.href : "");
    formData.append("accessKey", "Y9nkDu5HzJzw5ytKaWLL");

    const fileInput =
      fileInputRef.current ||
      (typeof document !== "undefined" ? document.getElementById("bl-file") : null);
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
        setFormStatus("Please try again");
        setIsSubmitting(false);
      }
    } catch {
      setFormStatus("Error submitting");
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.bottomLeadSection}>
      <Container>
        <div className={styles.leadCardWrapper}>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className={styles.leadHeading}>
                <div className={styles.sectionBadge}>Get Started Today</div>
                <h2>Bring Your Book to Life with Professional Ghostwriters</h2>
                <p>
                  Don’t let your ideas stay locked in a drawer or an unfinished document.
                  Connect with our team today and let’s start writing your story.
                </p>
                <div>
                  <a href="tel:2106924850" className={styles.phoneCall}>
                    📞 Or call our team directly at (210) 692-4850
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={6} className="mt-4 mt-lg-0">
              <form onSubmit={handleSubmit}>
                <div style={{ display: "none" }} aria-hidden="true">
                  <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  className={styles.inputField}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  required
                  className={styles.inputField}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className={styles.inputField}
                />
                <div className={styles.fileUploadBox}>
                  <input
                    ref={fileInputRef}
                    id="bl-file"
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx,.txt,.epub,.rtf"
                    onChange={handleFileChange}
                    className={styles.fileInput}
                  />
                  <label htmlFor="bl-file" className={styles.fileUploadLabel} title="Upload Your Book">
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
                <textarea
                  name="message"
                  placeholder="Message..."
                  className={styles.textareaField}
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {formStatus}
                </button>
                <p className={styles.formTerms}>
                  We respect your confidentiality. Review our{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>.
                </p>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
