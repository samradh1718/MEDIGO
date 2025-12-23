import React from "react";

const ChemistLogin = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Chemist Login</h2>
        <p>Login to verify medicine orders.</p>

        <input placeholder="Store ID / Email" style={styles.input} />
        <input placeholder="Password" type="password" style={styles.input} />

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
    background: "#0a66c2",
    color: "#fff",
    border: "none"
  }
};

export default ChemistLogin;
