"use client";
import styles from "@/styles/components/contactform.module.scss";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useRouter } from "next/navigation";

const ContactFrom = ({ lp2, vertical, txt, popop }) => {
  const [formStatus, setFormStatus] = useState(txt || "Submit");
  const [isDisabled, setIsDisabled] = useState(false);
  const [checkboxes, setCheckboxes] = useState([]);
  const [location, setLocation] = useState({});
  const [fileName, setFileName] = useState("");
  const router = useRouter();

  const fileInputRef = useRef(null);
  const rawId = useId();
  const uniqueId = rawId.replace(/[^a-zA-Z0-9_-]/g, "");

  const honeypotId = `cf-honeypot-${uniqueId}`;
  const nameId = `cf-name-${uniqueId}`;
  const phoneId = `cf-phone-${uniqueId}`;
  const emailId = `cf-email-${uniqueId}`;
  const fileId = popop ? "fileInput" : `cf-file-${uniqueId}`;
  const commentId = `cf-comment-${uniqueId}`;

  // 🌍 Fetch IP & Location
  useEffect(() => {
    const getIPData = async () => {
      try {
        const response = await fetch("https://ipinfo.io/?token=229b1c3fa2e54c");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error("Error fetching IP data:", error);
      }
    };
    getIPData();
  }, []);

  // 📦 Checkbox handler
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) setCheckboxes([...checkboxes, value]);
    else setCheckboxes(checkboxes.filter((item) => item !== value));
  };

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
    const fileInput =
      typeof document !== "undefined" ? document.getElementById("fileInput") : null;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setFormStatus("Sending...");

    const formElData = new FormData(e.target);
    const dataObj = Object.fromEntries(formElData.entries());

    const honeypot = dataObj.honeypot?.trim() || "";
    if (honeypot) {
      console.warn("Spam bot detected via honeypot. Form submission blocked.");
      setIsDisabled(false);
      setFormStatus(txt || "Submit");
      return;
    }

    const name = dataObj.name?.trim() || "";
    const email = dataObj.email?.trim() || "";
    const phone = dataObj.phone?.trim() || "";
    const comment = dataObj.comment?.trim() || "";
    const services =
      checkboxes.length > 0 ? checkboxes.join(", ") : "General Inquiry";
    const person = dataObj.person?.trim() || "";
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const fileInput =
      fileInputRef.current ||
      (typeof document !== "undefined" ? document.getElementById("fileInput") : null);
    const file = fileInput?.files?.[0] || e.target.attachment?.files?.[0];
    const attachmentName = file?.name || fileName || "";

    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      alert("File size exceeds 250MB. Please upload a file smaller than 250MB.");
      setIsDisabled(false);
      setFormStatus(txt || "Submit");
      return;
    }

    if (!name || !email || !phone) {
      alert("Please fill in all required fields.");
      setIsDisabled(false);
      setFormStatus(txt || "Submit");
      return;
    }
    const custom_data = {
      service: services,
      who: person,
      attachment_name: attachmentName,
      ip: location?.ip || "",
      country: location?.country || "",
      city: location?.city || "",
      state: location?.region || "",
      zip_code: location?.postal || "",
      url: pageUrl,
    };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("comment", comment);
    formData.append("message", comment);
    formData.append("services", services);
    formData.append("person", person);
    formData.append("honeypot", honeypot);
    formData.append("attachment_name", attachmentName);
    formData.append("attachment", attachmentName);
    formData.append("ip", location?.ip || "");
    formData.append("country", location?.country || "");
    formData.append("city", location?.city || "");
    formData.append("state", location?.region || "");
    formData.append("zip_code", location?.postal || "");
    formData.append("page_url", pageUrl);
    formData.append("brand_id", "2");
    formData.append("brand_name", "yourbrand.com");
    formData.append("custom_data", JSON.stringify(custom_data));
    formData.append("accessKey", "Y9nkDu5HzJzw5ytKaWLL");

    if (fileInput && fileInput.files && fileInput.files[0]) {
      formData.append("attachment", fileInput.files[0]);
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/thank-you");
        e.target.reset();
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        if (fileInput) {
          fileInput.value = "";
        }
        setFileName("");
        setCheckboxes([]);
        setFormStatus("Sent Successfully");
      } else {
        const errorData = await response.json().catch(() => ({}));
        if (errorData?.error) {
          alert(errorData.error);
        }
        setFormStatus("Error ❌");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setFormStatus("Failed ❌");
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          opacity: 0,
          height: 0,
          width: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <label htmlFor={honeypotId}>Do not fill this field</label>
        <input
          id={honeypotId}
          type="text"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div
        className={`${styles.Contactbox} ${lp2 ? styles.lp2From : ""} ${
          popop ? styles.popop : ""
        } ${vertical ? styles.verticalFrom : ""} `}
      >
        <div className={styles.contactItem}>
          <input id={nameId} type="text" placeholder=" " name="name" required />
          <label htmlFor={nameId}>Name*</label>
        </div>
        <div className={styles.contactItem}>
          <input id={phoneId} type="tel" placeholder=" " name="phone" required />
          <label htmlFor={phoneId}>Phone*</label>
        </div>
        <div className={styles.contactItem}>
          <input id={emailId} type="email" placeholder=" " name="email" required />
          <label htmlFor={emailId}>Email*</label>
        </div>
        <div className={`${styles.contactItem} ${styles.fileUploadItem}`}>
          <input
            ref={fileInputRef}
            id={fileId}
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx,.txt,.epub,.rtf"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          <label htmlFor={fileId} className={styles.fileLabel} title="Upload Your Book">
            <span className={`${styles.fileName} ${fileName ? styles.fileNameActive : ""}`}>
              {fileName ? fileName : "Upload Your Book"}
            </span>
            <span className={styles.fileIcon} aria-hidden="true">
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
        <div className={`${styles.contactItem} ${vertical ? styles.messageItem : ""}`}>
          <textarea id={commentId} placeholder=" " name="comment"></textarea>
          <label htmlFor={commentId}>Message</label>
        </div>
        {!vertical ? (
          <div className={styles.para}>
            We take your privacy seriously. Read our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        ) : null}
        <div className={styles.contactBtn}>
          <button type="submit" className="commonBtn" disabled={isDisabled}>
            {formStatus}
          </button>
        </div>
      </div>
    </Form>
  );
};

export default ContactFrom;
