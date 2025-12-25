import React from "react";

const ChemistSignup = () => {
  return (
    <div style={styles.page}>
      {/* Glow Orbs */}
      <div style={{ ...styles.glow, top: "15%", left: "8%" }} />
      <div style={{ ...styles.glow, bottom: "20%", right: "12%" }} />

      <div style={styles.card}>
        <h2 style={styles.heading}>Register your pharmacy</h2>
        <p style={styles.subtext}>
          Join Medigo to fulfill doctor-prescribed medicine orders
          with zero substitutions.
        </p>

        <input
          placeholder="Pharmacy Name"
          style={styles.input}
        />
        <input
          placeholder="Store ID / Email"
          style={styles.input}
        />
        <input
          placeholder="GST / Drug License Number"
          style={styles.input}
        />

        <button style={styles.cta}>
          Register Pharmacy →
        </button>

        <p style={styles.note}>
          Prototype demo • Manual verification will be added later
        </p>
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
      "radial-gradient(circle at top left, #1b5e20 0%, #020617 65%)",
    fontFamily: "Inter, system-ui, sans-serif",
    padding: "40px",
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

  /* CARD */
  card: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(18px)",
    borderRadius: "22px",
    padding: "46px 40px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
    color: "#fff",
  },

  heading: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "15px",
    lineHeight: "1.6",
    opacity: 0.85,
    marginBottom: "30px",
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
    marginTop: "6px",
  },

  note: {
    marginTop: "18px",
    fontSize: "13px",
    opacity: 0.65,
  },
};

export default ChemistSignup;
