import React from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
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

        .auth-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        .auth-card {
          width: 100%;
          max-width: 460px;
          background: #ffffff;
          border-radius: 16px;
          padding: 50px 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          text-align: center;
        }

        .logo {
          font-size: 28px;
          font-weight: 800;
          color: #0a66c2;
          margin-bottom: 8px;
        }

        .subtitle {
          font-size: 14px;
          color: #486581;
          margin-bottom: 30px;
        }

        .headline {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .desc {
          font-size: 15px;
          color: #486581;
          margin-bottom: 40px;
          line-height: 1.5;
        }

        .auth-btn {
          width: 100%;
          padding: 16px;
          margin-bottom: 16px;
          font-size: 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }

        .login-btn {
          background: #0a66c2;
          color: white;
        }

        .login-btn:hover {
          background: #084d99;
        }

        .signup-btn {
          background: #19c2a7;
          color: white;
        }

        .signup-btn:hover {
          background: #12a892;
        }

        .divider {
          margin: 25px 0;
          font-size: 13px;
          color: #829ab1;
        }

        .note {
          font-size: 13px;
          color: #829ab1;
          margin-top: 20px;
        }

        .back-link {
          margin-top: 25px;
          font-size: 14px;
          color: #0a66c2;
          cursor: pointer;
          display: inline-block;
        }
      `}</style>

      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="logo">Medigo</div>
          <div className="subtitle">No Substitutions. Full Trust.</div>

          <div className="headline">Continue to Medigo</div>
          <p className="desc">
            Login or create an account to order medicines from exact stores —
            verified using AI.
          </p>

          <button
  className="auth-btn login-btn"
  onClick={() => navigate("/login")}
>
  Login
</button>

<button
  className="auth-btn signup-btn"
  onClick={() => navigate("/signup")}
>
  Sign Up
</button>


          <div className="divider">Prototype demo • No real authentication</div>

          <div
            className="back-link"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </div>

          <div className="note">
            Future support: User • Delivery Partner • Admin
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
