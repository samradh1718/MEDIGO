import React from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // LOGIN STATE SET HERE
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "user");

    navigate("/user/dashboard");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>User Login</h2>
        <p>Login to order medicines from exact stores.</p>

        <input placeholder="Email" style={styles.input} />
        <input placeholder="Password" type="password" style={styles.input} />

        <button style={styles.btn} onClick={handleLogin}>
          Login
        </button>

        <p style={styles.note}>Prototype only • No real authentication</p>
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
    background: "#fff",
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
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  note: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#666",
  },
};

export default UserLogin;
