import React from "react";

const UserSignup = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>User Sign Up</h2>
        <p>Create an account to order exact medicines from exact stores.</p>

        <input placeholder="Full Name" style={styles.input} />
        <input placeholder="Email" style={styles.input} />
        <input placeholder="Password" type="password" style={styles.input} />

        <button style={styles.btn}>Create Account</button>

        <p style={styles.note}>
          Prototype only • No real authentication
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

export default UserSignup;
