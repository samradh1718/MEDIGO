import React from "react";

const DeliveryLogin = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Delivery Partner Login</h2>
        <p>Login to manage assigned deliveries.</p>

        <input placeholder="Phone Number" style={styles.input} />
        <input placeholder="OTP / Password" style={styles.input} />

        <button style={styles.btn}>Login</button>
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
    background: "#f5faff"
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px"
  },
  btn: {
    width: "100%",
    padding: "12px",
    background: "#19c2a7",
    color: "#fff",
    border: "none"
  }
};

export default DeliveryLogin;
