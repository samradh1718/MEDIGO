import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectMedicine = () => {
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT PANEL – CONTEXT */}
        <div style={styles.left}>
          <div style={styles.step}>Step 1 of 3</div>

          <h1 style={styles.heading}>Select prescribed medicine</h1>

          <p style={styles.description}>
            Please enter the medicine exactly as written by your doctor.
            Medigo does not allow substitutions to ensure treatment accuracy.
          </p>

          <div style={styles.trustBox}>
            <p>✔ Doctor-prescribed medicine only</p>
            <p>✔ No brand or salt substitution</p>
            <p>✔ Verified before delivery</p>
          </div>
        </div>

        {/* RIGHT PANEL – ACTION */}
        <div style={styles.right}>
          <h2 style={styles.formTitle}>Medicine details</h2>

          <label style={styles.label}>Medicine name</label>
          <input
            style={styles.input}
            placeholder="e.g. Augmentin 625"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />

          <label style={styles.label}>Brand / manufacturer</label>
          <input
            style={styles.input}
            placeholder="e.g. GSK"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />

          <label style={styles.label}>
            Quantity <span style={{ color: "#666" }}>(as per prescription)</span>
          </label>
          <select
            style={styles.select}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="">Select quantity</option>
            <option value="1 strip">1 strip</option>
            <option value="2 strips">2 strips</option>
            <option value="3 strips">3 strips</option>
            <option value="1 bottle">1 bottle</option>
            <option value="Other">As mentioned in prescription</option>
          </select>

          <button
            style={{
              ...styles.cta,
              opacity: medicine && brand && quantity ? 1 : 0.6,
            }}
            disabled={!medicine || !brand || !quantity}
            onClick={() => navigate("/user/order/store")}
          >
            Continue to pharmacy selection
          </button>

          <p style={styles.note}>
            Quantity will be verified against prescription and store bill.
          </p>
        </div>

      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f9fbfd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },

  container: {
    width: "100%",
    maxWidth: "1100px",
    background: "#ffffff",
    display: "flex",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },

  /* LEFT */
  left: {
    width: "40%",
    padding: "40px",
    background: "#f4f9ff",
  },

  step: {
    fontSize: "13px",
    color: "#1e88e5",
    fontWeight: "600",
    marginBottom: "12px",
  },

  heading: {
    fontSize: "26px",
    marginBottom: "16px",
  },

  description: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#444",
    marginBottom: "24px",
  },

  trustBox: {
    fontSize: "14px",
    lineHeight: "1.8",
    color: "#2e7d32",
  },

  /* RIGHT */
  right: {
    width: "60%",
    padding: "40px",
  },

  formTitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },

  label: {
    display: "block",
    fontSize: "13px",
    marginBottom: "6px",
    color: "#333",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "18px",
    fontSize: "14px",
  },

  select: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "22px",
    fontSize: "14px",
    background: "#fff",
  },

  cta: {
    width: "100%",
    padding: "14px",
    background: "#1e88e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },

  note: {
    marginTop: "12px",
    fontSize: "13px",
    color: "#666",
  },
};

export default SelectMedicine;
