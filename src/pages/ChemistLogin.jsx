import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChemistLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "chemist@medigo.com" && password === "medigo123") {
      localStorage.setItem("role", "chemist");
      localStorage.setItem("chemistAuth", "true");
      navigate("/chemist/dashboard");
    } else {
      setError("Invalid chemist credentials");
    }
  };

  return (
    <div style={styles.page}>
      {/* Glow Orbs */}
      <div style={{ ...styles.glow, top: "14%", left: "8%" }} />
      <div style={{ ...styles.glow, bottom: "18%", right: "12%" }} />

      <div style={styles.container}>
        {/* LEFT – CONTEXT */}
        <div style={styles.left}>
          <h1 style={styles.heading}>Medigo Chemist Portal</h1>
          <p style={styles.description}>
            This portal is used by verified pharmacies to fulfill
            doctor-prescribed medicine orders with zero substitutions.
          </p>

          <div style={styles.trustBox}>
            <p>✔ Prescription-locked orders</p>
            <p>✔ No brand or salt substitution</p>
            <p>✔ Mandatory bill verification</p>
          </div>
        </div>

        {/* RIGHT – LOGIN */}
        <div style={styles.right}>
          <h2 style={styles.formTitle}>Chemist login</h2>

          <div style={styles.demo}>
            <strong>Demo credentials</strong><br />
            Email: chemist@medigo.com<br />
            Password: medigo123
          </div>

          <input
            style={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.cta} onClick={handleLogin}>
            Login as Chemist →
          </button>
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
    background:
      "radial-gradient(circle at top left, #1b5e20 0%, #020617 65%)",
    fontFamily: "Inter, system-ui, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "48px",
  },

  /* GLOW */
  glow: {
    position: "absolute",
    width: "380px",
    height: "380px",
    background: "rgba(102, 187, 106, 0.45)",
    filter: "blur(130px)",
    borderRadius: "50%",
    zIndex: 0,
  },

  /* CONTAINER */
  container: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "1100px",
    display: "flex",
    borderRadius: "22px",
    overflow: "hidden",
    background: "rgba(255,255,255,0.10)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
  },

  /* LEFT */
  left: {
    width: "42%",
    padding: "44px",
    background: "rgba(255,255,255,0.06)",
    borderRight: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
  },

  heading: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "16px",
  },

  description: {
    fontSize: "15px",
    lineHeight: "1.7",
    opacity: 0.85,
    marginBottom: "26px",
  },

  trustBox: {
    fontSize: "14px",
    lineHeight: "1.9",
    color: "#a5d6a7",
  },

  /* RIGHT */
  right: {
    width: "58%",
    padding: "44px",
    color: "#fff",
  },

  formTitle: {
    fontSize: "22px",
    marginBottom: "18px",
  },

  demo: {
    fontSize: "13px",
    opacity: 0.75,
    marginBottom: "20px",
    lineHeight: "1.6",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    marginBottom: "16px",
    outline: "none",
  },

  cta: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg, #66bb6a, #2e7d32)",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
    marginTop: "10px",
  },

  error: {
    color: "#ff8a80",
    fontSize: "13px",
    marginBottom: "10px",
  },
};

export default ChemistLogin;
