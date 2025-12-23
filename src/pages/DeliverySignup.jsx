import React from "react";

const DeliverySignup = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Delivery Partner Sign Up</h2>
        <p>Join Medigo as a verified delivery partner.</p>

        <input placeholder="Full Name" style={styles.input} />
        <input placeholder="Phone Number" style={styles.input} />
        <input placeholder="Vehicle Details (optional)" style={styles.input} />

        <button style={styles.btn}>Register as Delivery Partner</button>

        <p style={styles.note}>
          Prototype demo • Verification flow coming later
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
    background: "#19c2a7",
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

export default DeliverySignup;
