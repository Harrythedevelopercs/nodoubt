"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: "80px 20px", textAlign: "center", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px" }}>Something went wrong!</h2>
      <p style={{ color: "#666", marginBottom: "24px" }}>An unexpected error occurred. Please try again.</p>
      <button
        onClick={() => reset()}
        style={{
          padding: "12px 28px",
          borderRadius: "50px",
          background: "#4b542a",
          color: "#ffffff",
          border: "none",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}
