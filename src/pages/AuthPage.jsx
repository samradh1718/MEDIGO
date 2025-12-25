import React from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* Glow Orbs */}
      <div style={{ ...styles.glow, top: "15%", left: "10%" }} />
      <div style={{ ...styles.glow, bottom: "20%", right: "12%" }} />

      <div style={styles.card}>
        <div style={styles.logo}>Medigo</div>
        <div style={styles.subtitle}>No Substitutions • Full Trust</div>

        <h2 style={styles.headline}>Continue to Medigo</h2>
        <p style={styles.desc}>
          Login or create an account to order medicines from the
          <strong> exact pharmacy you trust</strong>, verified using AI.
        </p>

        <button
          style={{ ...styles.btn, ...styles.loginBtn }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          style={{ ...styles.btn, ...styles.signupBtn }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>

        <div style={styles.divider}>
          Prototype demo • No real authentication
        </div>

        <div style={styles.back} onClick={() => navigate("/")}>
          ← Back to Home
        </div>

        <div style={styles.note}>
          Future support: User • Delivery Partner • Chemist
        </div>
      </div>
    </div>
  );
};

const styles = {
  /* PAGE */
  page: {
    minHeight: "100svh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(circle at top left, #0d47a1 0%, #020617 65%)",
    fontFamily: "Inter, system-ui, sans-serif",
    padding: "40px",
  },

  /* GLOW */
  glow: {
    position: "absolute",
    width: "380px",
    height: "380px",
    background: "rgba(66, 165, 245, 0.45)",
    filter: "blur(130px)",
    borderRadius: "50%",
    zIndex: 0,
  },

  /* CARD */
  card: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "460px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(18px)",
    borderRadius: "22px",
    padding: "48px 42px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
    color: "#fff",
  },

  logo: {
    fontSize: "30px",
    fontWeight: "800",
    color: "#90caf9",
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "13px",
    opacity: 0.85,
    marginBottom: "32px",
    letterSpacing: "0.04em",
  },

  headline: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "14px",
  },

  desc: {
    fontSize: "15px",
    lineHeight: "1.6",
    opacity: 0.85,
    marginBottom: "34px",
  },

  btn: {
    width: "100%",
    padding: "16px",
    fontSize: "16px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    marginBottom: "16px",
    transition: "transform 0.2s ease",
  },

  loginBtn: {
    background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
    color: "#fff",
  },

  signupBtn: {
    background: "linear-gradient(135deg, #66bb6a, #2e7d32)",
    color: "#fff",
  },

  divider: {
    margin: "26px 0",
    fontSize: "13px",
    opacity: 0.6,
  },

  back: {
    fontSize: "14px",
    color: "#90caf9",
    cursor: "pointer",
    marginBottom: "18px",
  },

  note: {
    fontSize: "13px",
    opacity: 0.6,
  },
};

export default AuthPage;
