import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", Arial, sans-serif;
        }

        body {
          background: linear-gradient(135deg, #f5faff, #ffffff);
          color: #102a43;
        }

        .wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        .card {
          width: 100%;
          max-width: 900px;
          background: #ffffff;
          border-radius: 18px;
          padding: 50px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          text-align: center;
        }

        .logo {
          font-size: 28px;
          font-weight: 800;
          color: #0a66c2;
          margin-bottom: 6px;
        }

        .subtitle {
          font-size: 14px;
          color: #486581;
          margin-bottom: 40px;
        }

        h2 {
          font-size: 26px;
          margin-bottom: 30px;
        }

        .roles {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }

        .role-card {
          padding: 35px 25px;
          border-radius: 14px;
          border: 1px solid #e6eef6;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #ffffff;
        }

        .role-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
        }

        .role-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #19c2a7;
        }

        .role-desc {
          font-size: 14px;
          color: #486581;
          line-height: 1.5;
        }

        .back {
          margin-top: 35px;
          font-size: 14px;
          color: #0a66c2;
          cursor: pointer;
        }
      `}</style>

      <div className="wrapper">
        <div className="card">
          <div className="logo">Medigo</div>
          <div className="subtitle">Join the trusted medicine ecosystem</div>

          <h2>Sign Up As</h2>

          <div className="roles">
            <div
              className="role-card"
              onClick={() => alert("User signup coming next")}
            >
              <div className="role-title">User</div>
              <div className="role-desc">
                Create an account to order exact medicines with verification.
              </div>
            </div>

            <div
              className="role-card"
              onClick={() => alert("Delivery signup coming next")}
            >
              <div className="role-title">Delivery Partner</div>
              <div className="role-desc">
                Deliver medicines and ensure correct pickup and billing.
              </div>
            </div>

            <div
              className="role-card"
              onClick={() => alert("Chemist signup coming next")}
            >
              <div className="role-title">Chemist</div>
              <div className="role-desc">
                Partner as a pharmacy and ensure no substitution.
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

export default SignupPage;
