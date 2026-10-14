import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "100px 20px", textAlign: "center", minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "72px", fontWeight: 800, color: "#111", margin: "0 0 10px" }}>404</h1>
      <h2 style={{ fontSize: "24px", fontWeight: 600, color: "#333", margin: "0 0 16px" }}>Page Not Found</h2>
      <p style={{ color: "#666", maxWidth: "460px", margin: "0 0 28px" }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        style={{
          padding: "12px 28px",
          borderRadius: "50px",
          background: "#4b542a",
          color: "#ffffff",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
