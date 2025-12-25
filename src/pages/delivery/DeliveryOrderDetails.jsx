import React, { useState } from "react";

const DeliveryOrderDetails = () => {
  const [pickedUp, setPickedUp] = useState(false);
  const [delivered, setDelivered] = useState(false);

  return (
    <div style={styles.page}>
      {/* Glow Orbs */}
      <div style={{ ...styles.glow, top: "14%", left: "6%" }} />
      <div style={{ ...styles.glow, bottom: "20%", right: "10%" }} />

      <div style={styles.container}>
        {/* LEFT – CONTEXT */}
        <div style={styles.left}>
          <h1 style={styles.heading}>Order details</h1>
          <p style={styles.description}>
            Ensure pickup strictly from the pharmacy selected by the user.
            Medicines from any other store must not be accepted.
          </p>

          <div style={styles.trustBox}>
            <p>✔ Pharmacy locked by user</p>
            <p>✔ Bill verified by chemist</p>
            <p>✔ Zero substitution policy</p>
          </div>
        </div>

        {/* RIGHT – ACTION */}
        <div style={styles.right}>
          <h2 style={styles.formTitle}>Pickup & delivery</h2>

          <div style={styles.lockedField}>
            <span>Pharmacy</span>
            <strong>Gupta Medical Store, Sector 18</strong>
          </div>

          <div style={styles.lockedField}>
            <span>Order ID</span>
            <strong>MED-1021</strong>
          </div>

          <button
            style={{
              ...styles.ctaPrimary,
              opacity: !pickedUp ? 1 : 0.5,
            }}
            disabled={pickedUp}
            onClick={() => setPickedUp(true)}
          >
            Mark as picked up
          </button>

          <button
            style={{
              ...styles.ctaSuccess,
              opacity: pickedUp && !delivered ? 1 : 0.5,
            }}
            disabled={!pickedUp || delivered}
            onClick={() => setDelivered(true)}
          >
            Mark as delivered
          </button>

          {delivered && (
            <div style={styles.success}>
              ✅ Order delivered successfully
            </div>
          )}
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
    width: "360px",
    height: "360px",
    background: "rgba(102, 187, 106, 0.45)",
    filter: "blur(120px)",
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
    marginBottom: "22px",
  },

  lockedField: {
    background: "rgba(255,255,255,0.12)",
    padding: "16px",
    borderRadius: "14px",
    marginBottom: "16px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    border: "1px solid rgba(255,255,255,0.18)",
  },

  ctaPrimary: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
    marginBottom: "14px",
  },

  ctaSuccess: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg, #66bb6a, #2e7d32)",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },

  success: {
    marginTop: "20px",
    background: "rgba(46, 125, 50, 0.25)",
    padding: "16px",
    borderRadius: "14px",
    color: "#a5d6a7",
    fontSize: "14px",
    fontWeight: "600",
    border: "1px solid rgba(102, 187, 106, 0.4)",
  },
};

export default DeliveryOrderDetails;
