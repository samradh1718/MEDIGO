import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChemistOrderDetails = () => {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div style={styles.page}>
      {/* Glow Orbs */}
      <div style={{ ...styles.glow, top: "12%", left: "6%" }} />
      <div style={{ ...styles.glow, bottom: "18%", right: "10%" }} />

      <div style={styles.container}>
        {/* LEFT – CONTEXT */}
        <div style={styles.left}>
          <div style={styles.step}>ORDER VERIFICATION</div>
          <h1 style={styles.heading}>Prescription details</h1>

          <p style={styles.description}>
            This order is locked exactly as per the doctor’s prescription.
            Please verify every detail carefully before proceeding.
          </p>

          <div style={styles.trustBox}>
            <p>✔ Medicine, brand & quantity are fixed</p>
            <p>✔ No substitutions allowed</p>
            <p>✔ Actions are logged for audit & compliance</p>
          </div>
        </div>

        {/* RIGHT – DETAILS */}
        <div style={styles.right}>
          <h2 style={styles.formTitle}>Order summary</h2>

          <div style={styles.lockedField}>
            <span>Medicine</span>
            <strong>Augmentin 625</strong>
          </div>

          <div style={styles.lockedField}>
            <span>Brand</span>
            <strong>GSK</strong>
          </div>

          <div style={styles.lockedField}>
            <span>Quantity</span>
            <strong>2 strips</strong>
          </div>

          <div style={styles.checkbox}>
            <input
              type="checkbox"
              checked={confirmed}
              onChange={() => setConfirmed(!confirmed)}
            />
            <label>
              I confirm that the medicine, brand, and quantity exactly match
              the prescription.
            </label>
          </div>

          <button
            style={{
              ...styles.cta,
              opacity: confirmed ? 1 : 0.6,
            }}
            disabled={!confirmed}
            onClick={() => navigate("/chemist/order/1021/bill")}
          >
            Proceed to bill upload →
          </button>

          <p style={styles.note}>
            Once confirmed, order details cannot be modified.
          </p>
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
    "radial-gradient(circle at top left, #0d47a1, #020617 60%)",
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
    background: "#0d47a1",
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

  step: {
    fontSize: "12px",
    letterSpacing: "0.15em",
    opacity: 0.8,
    marginBottom: "14px",
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
    color: "rgba(255, 255, 255, 1)",
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

  checkbox: {
    marginTop: "24px",
    marginBottom: "24px",
    fontSize: "14px",
    display: "flex",
    gap: "10px",
    alignItems: "flex-start",
  },

  cta: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg,#42a5f5,#1e88e5)",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },

  note: {
    marginTop: "14px",
    fontSize: "13px",
    opacity: 0.75,
  },
};

export default ChemistOrderDetails;
