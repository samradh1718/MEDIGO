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
    <div style={styles.page}>
      {/* Glow Orbs */}
      <div style={{ ...styles.glow, top: "14%", left: "8%" }} />
      <div style={{ ...styles.glow, bottom: "18%", right: "12%" }} />

      <div style={styles.card}>
        <h2 style={styles.heading}>User Login</h2>
        <p style={styles.subtext}>
          Login to order medicines from the exact pharmacy
          prescribed by your doctor — no substitutions.
        </p>

        <input
          placeholder="Email"
          style={styles.input}
        />

        <input
          placeholder="Password"
          type="password"
          style={styles.input}
        />

        <button style={styles.cta} onClick={handleLogin}>
          Login →
        </button>

        <p style={styles.note}>
          Prototype demo • No real authentication
        </p>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(circle at top left, #0d47a1 0%, #020617 65%)",
    fontFamily: "Inter, system-ui, sans-serif",
    padding: "40px",
  },

  /* GLOW */
  glow: {
    position: "absolute",
    width: "380px",
    height: "380px",
    background: "rgba(66, 165, 245, 0.45)",
    filter: "blur(130px)",
    borderRadius: "50%",
    zIndex: 0,
  },

  /* CARD */
  card: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(18px)",
    borderRadius: "22px",
    padding: "46px 40px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
    color: "#fff",
  },

  heading: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  subtext: {
    fontSize: "15px",
    lineHeight: "1.6",
    opacity: 0.85,
    marginBottom: "30px",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.25)",
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    marginBottom: "16px",
    outline: "none",
  },

  cta: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
    marginTop: "6px",
  },

  note: {
    marginTop: "18px",
    fontSize: "13px",
    opacity: 0.65,
  },
};

export default UserLogin;
