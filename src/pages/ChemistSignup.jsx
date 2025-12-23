import React from "react";

const ChemistSignup = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Chemist Sign Up</h2>
        <p>Register your pharmacy to ensure no substitution.</p>

        <input placeholder="Pharmacy Name" style={styles.input} />
        <input placeholder="Store ID / Email" style={styles.input} />
        <input placeholder="GST / License No." style={styles.input} />

        <button style={styles.btn}>Register Pharmacy</button>

        <p style={styles.note}>
          Prototype demo • Store verification coming later
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5faff",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
  },
  btn: {
    width: "100%",
    padding: "12px",
    background: "#0a66c2",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
  },
  note: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#666",
  },
};

export default ChemistSignup;
