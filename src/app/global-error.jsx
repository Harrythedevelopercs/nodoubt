"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "80px 20px", textAlign: "center", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px" }}>Something went wrong!</h2>
          <p style={{ color: "#666", marginBottom: "24px" }}>A critical error occurred.</p>
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
      </body>
    </html>
  );
}
