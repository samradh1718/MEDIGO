import React from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT – CONTEXT */}
        <div style={styles.left}>
          <h1 style={styles.heading}>Welcome to Medigo</h1>
          <p style={styles.description}>
            Medigo ensures you receive the exact medicine prescribed by your
            doctor, from the pharmacy you trust — with no substitutions.
          </p>

          <div style={styles.trustBox}>
            <p>✔ Prescription-based ordering</p>
            <p>✔ Exact store selection</p>
            <p>✔ AI-verified delivery</p>
          </div>

          <button style={styles.logoutBtn} onClick={logout}>
            Logout
          </button>
        </div>

        {/* RIGHT – ACTION */}
        <div style={styles.right}>
          <h2 style={styles.formTitle}>Create a verified order</h2>
          <p style={styles.note}>
            You will select medicine, pharmacy, and upload prescription.
          </p>

          <button
            style={styles.cta}
            onClick={() => navigate("/user/order/medicine")}
          >
            Start new medicine order
          </button>
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
  heading: {
    fontSize: "26px",
    marginBottom: "16px",
    color: "#1e88e5",
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
    marginBottom: "30px",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid #ccc",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  right: {
    width: "60%",
    padding: "40px",
  },
  formTitle: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  note: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "30px",
  },
  cta: {
    padding: "14px 26px",
    background: "#1e88e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default UserDashboard;
