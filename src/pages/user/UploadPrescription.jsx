import React, { useState } from "react";

const UploadPrescription = () => {
  const [file, setFile] = useState(null);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT */}
        <div style={styles.left}>
          <div style={styles.step}>Step 3 of 3</div>
          <h1 style={styles.heading}>Upload prescription</h1>
          <p style={styles.description}>
            Your prescription will be used to verify the medicine and pharmacy
            before delivery.
          </p>

          <div style={styles.trustBox}>
            <p>✔ Prescription matched with order</p>
            <p>✔ Bill verification before delivery</p>
            <p>✔ No substitution enforced</p>
          </div>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <h2 style={styles.formTitle}>Prescription file</h2>

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginBottom: "20px" }}
          />

          <button
            style={{
              ...styles.cta,
              background: "#2e7d32",
              opacity: file ? 1 : 0.6,
            }}
            disabled={!file}
            onClick={() => alert("Order placed (Prototype)")}
          >
            Place verified order
          </button>

          <p style={styles.note}>
            This order will be verified before delivery.
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
    display: "flex",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },
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
  right: {
    width: "60%",
    padding: "40px",
  },
  formTitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  cta: {
    width: "100%",
    padding: "14px",
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

export default UploadPrescription;
