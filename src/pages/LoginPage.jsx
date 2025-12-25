import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont;
        }

        body {
          background: #020617;
          color: #ffffff;
        }

        /* ---------- GLOW ---------- */
        .glow {
          position: absolute;
          width: 420px;
          height: 420px;
          background: rgba(66, 165, 245, 0.45);
          filter: blur(140px);
          border-radius: 50%;
          z-index: 0;
        }

        .glow.green {
          background: rgba(102, 187, 106, 0.45);
        }

        /* ---------- WRAPPER ---------- */
        .wrapper {
          min-height: 100svh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px 20px;
          position: relative;
          overflow: hidden;
        }

        /* ---------- CARD ---------- */
        .card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 920px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
          border-radius: 26px;
          padding: 52px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.18);
          text-align: center;
        }

        .logo {
          font-size: 30px;
          font-weight: 800;
          color: #90caf9;
          margin-bottom: 6px;
        }

        .subtitle {
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 42px;
        }

        h2 {
          font-size: 28px;
          margin-bottom: 36px;
          font-weight: 700;
        }

        /* ---------- ROLES ---------- */
        .roles {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 28px;
        }

        .role-card {
          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(16px);
          border-radius: 22px;
          padding: 36px 28px;
          border: 1px solid rgba(255,255,255,0.18);
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }

        .role-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.45);
        }

        .role-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #90caf9;
        }

        .role-desc {
          font-size: 15px;
          line-height: 1.6;
          opacity: 0.85;
        }

        /* ---------- BACK ---------- */
        .back {
          margin-top: 42px;
          font-size: 14px;
          color: #90caf9;
          cursor: pointer;
        }
      `}</style>

      {/* GLOW */}
      <div className="glow" style={{ top: "12%", left: "6%" }} />
      <div className="glow green" style={{ bottom: "16%", right: "10%" }} />

      <div className="wrapper">
        <div className="card">
          <div className="logo">Medigo</div>
          <div className="subtitle">
            Secure login • No substitution guarantee
          </div>

          <h2>Login As</h2>

          <div className="roles">
            <div
              className="role-card"
              onClick={() => navigate("/login/user")}
            >
              <div className="role-title">User</div>
              <div className="role-desc">
                Order medicines from the exact store prescribed by your doctor.
              </div>
            </div>

            <div
              className="role-card"
              onClick={() => navigate("/login/delivery")}
            >
              <div className="role-title">Delivery Partner</div>
              <div className="role-desc">
                Pick up medicines and deliver them without substitution.
              </div>
            </div>

            <div
              className="role-card"
              onClick={() => navigate("/login/chemist")}
            >
              <div className="role-title">Chemist</div>
              <div className="role-desc">
                Verify prescriptions, bills, and ensure compliance.
              </div>
            </div>
          </div>

          <div className="back" onClick={() => navigate("/auth")}>
            ← Back
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
