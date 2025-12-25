import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DeliveryDashboard = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(82), 300);
  }, []);

  return (
    <div style={styles.page}>
      <div style={{ ...styles.glow, top: "12%", left: "8%" }} />
      <div style={{ ...styles.glow, bottom: "18%", right: "12%" }} />

      <div style={styles.content}>
        <h1 style={styles.heading}>Delivery Performance</h1>
        <p style={styles.subtext}>Live operational overview</p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <span style={styles.label}>Orders Delivered</span>
            <h2 style={styles.value}>94</h2>
            <div style={styles.barBg}>
              <div style={{ ...styles.barFill, width: `${progress}%` }} />
            </div>
          </div>

          <div style={styles.card}>
            <span style={styles.label}>Revenue</span>
            <h2 style={styles.value}>₹18,750</h2>
            <p style={styles.muted}>Delivery earnings</p>
          </div>

          <div style={styles.card}>
            <span style={styles.label}>Top Location</span>
            <h2 style={styles.value}>Sector 18</h2>
            <p style={styles.muted}>32 deliveries</p>
          </div>
        </div>

        <div style={styles.actionCard}>
          <div>
            <h3>Assigned Order</h3>
            <p style={styles.muted}>MED-1021</p>
          </div>
          <button
            style={styles.cta}
            onClick={() => navigate("/delivery/order/1021")}
          >
            View Order →
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100svh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top left, #1b5e20, #020617 60%)",
    fontFamily: "Inter, system-ui, sans-serif",
  },

  glow: {
    position: "absolute",
    width: "360px",
    height: "360px",
    background: "rgba(102, 187, 106, 0.45)",
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
    background: "linear-gradient(90deg,#66bb6a,#2e7d32)",
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
    background: "linear-gradient(135deg,#66bb6a,#2e7d32)",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default DeliveryDashboard;
