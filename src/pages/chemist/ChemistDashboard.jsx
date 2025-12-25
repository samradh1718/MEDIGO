import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChemistDashboard = () => {
  const navigate = useNavigate();
  const [salesProgress, setSalesProgress] = useState(0);
  const [orderProgress, setOrderProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSalesProgress(78);
      setOrderProgress(62);
    }, 300);
  }, []);

  return (
    <div style={styles.page}>
      {/* GLOW ORBS */}
      <div style={{ ...styles.glow, top: "10%", left: "5%" }} />
      <div style={{ ...styles.glow, bottom: "15%", right: "10%" }} />

      <div style={styles.content}>
        <h1 style={styles.heading}>Pharmacy Performance</h1>
        <p style={styles.subtext}>
          Verified chemist partner • Real-time insights
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <span style={styles.label}>Total Sales</span>
            <h2 style={styles.value}>₹1,24,500</h2>
            <div style={styles.barBg}>
              <div style={{ ...styles.barFill, width: `${salesProgress}%` }} />
            </div>
          </div>

          <div style={styles.card}>
            <span style={styles.label}>Total Orders</span>
            <h2 style={styles.value}>128</h2>
            <div style={styles.barBg}>
              <div style={{ ...styles.barFill, width: `${orderProgress}%` }} />
            </div>
          </div>

          <div style={styles.card}>
            <span style={styles.label}>Top Medicine</span>
            <h2 style={styles.value}>Augmentin 625</h2>
            <p style={styles.muted}>42 units sold</p>
          </div>
        </div>

        <div style={styles.actionCard}>
          <div>
            <h3>New Prescription</h3>
            <p style={styles.muted}>Order ID: MED-1021</p>
          </div>
          <button
            style={styles.cta}
            onClick={() => navigate("/chemist/order/1021")}
          >
            Review Order →
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top left, #0d47a1, #020617 60%)",
    fontFamily: "Inter, system-ui, sans-serif",
  },

  /* Glow blobs */
  glow: {
    position: "absolute",
    width: "380px",
    height: "380px",
    background: "rgba(66, 165, 245, 0.45)",
    filter: "blur(120px)",
    borderRadius: "50%",
    zIndex: 0,
  },

  content: {
    position: "relative",
    zIndex: 1,
    padding: "48px",
    color: "#fff",
  },

  heading: {
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "6px",
  },
  subtext: {
    fontSize: "15px",
    opacity: 0.8,
    marginBottom: "32px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },

  card: {
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(14px)",
    borderRadius: "18px",
    padding: "24px",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
  },

  label: {
    fontSize: "12px",
    letterSpacing: "0.12em",
    opacity: 0.8,
    textTransform: "uppercase",
  },

  value: {
    fontSize: "30px",
    margin: "10px 0",
  },

  muted: {
    fontSize: "14px",
    opacity: 0.75,
  },

  barBg: {
    height: "8px",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "6px",
    overflow: "hidden",
  },

  barFill: {
    height: "100%",
    background: "linear-gradient(90deg,#42a5f5,#90caf9)",
    transition: "width 1.2s ease",
  },

  actionCard: {
    marginTop: "40px",
    background: "rgba(255,255,255,0.14)",
    backdropFilter: "blur(16px)",
    borderRadius: "20px",
    padding: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid rgba(255,255,255,0.2)",
  },

  cta: {
    padding: "12px 22px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg,#42a5f5,#1e88e5)",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default ChemistDashboard;
