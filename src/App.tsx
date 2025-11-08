import { Link, Route, Routes } from "react-router-dom";
import { BentoGrid } from "./components/BentoGrid";
import TestPage from "./pages/TestPage";

function NotFound() {
  return (
    <div
      style={{
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        background: "radial-gradient(circle at top, #1f1f3a, #050510)",
        fontFamily: "Space Grotesk, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}>
        Page not found
      </h1>
      <p style={{ maxWidth: "32rem", opacity: 0.8 }}>
        The page you were looking for has drifted off our bento grid. Use the
        link below to return to the experience.
      </p>
      <Link
        to="/"
        style={{
          padding: "0.75rem 1.5rem",
          borderRadius: "999px",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          background: "rgba(8, 8, 18, 0.6)",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Back to home
      </Link>
    </div>
  );
}

function Navigation() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "1.5rem",
        right: "1.5rem",
        zIndex: 100,
        display: "flex",
        gap: "0.75rem",
        padding: "0.6rem 1rem",
        borderRadius: "999px",
        background: "rgba(8, 8, 18, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "0.95rem",
          letterSpacing: "0.02em",
          color: "white",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Home
      </Link>
      <Link
        to="/test"
        style={{
          fontSize: "0.95rem",
          letterSpacing: "0.02em",
          color: "white",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Test Page
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<BentoGrid />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
