import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
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
          background: #ffffff;
          color: #102a43;
        }

        /* ---------------- NAVBAR ---------------- */
        .navbar {
          width: 100%;
          padding: 20px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e6eef6;
          background: #ffffff;
        }

        .logo {
          font-size: 26px;
          font-weight: 800;
          color: #0a66c2;
        }

        .tagline {
          font-size: 14px;
          color: #486581;
        }

        /* ---------------- HERO ---------------- */
        .hero {
          width: 100%;
          padding: 120px 20px;
          text-align: center;
          background: linear-gradient(
            135deg,
            #0a66c2 0%,
            #0e8ef1 60%,
            #19c2a7 100%
          );
          color: white;
        }

        .hero h1 {
          font-size: 44px;
          max-width: 950px;
          margin: auto;
          margin-bottom: 24px;
          font-weight: 800;
          line-height: 1.2;
        }

        .hero span {
          color: #eafff9;
        }

        .hero p {
          max-width: 720px;
          margin: auto;
          font-size: 18px;
          line-height: 1.7;
          color: #f0f8ff;
        }

        /* ---------------- SECTION ---------------- */
        .section {
          width: 100%;
          padding: 90px 20px;
          background: #ffffff;
        }

        .section.alt {
          background: #f5faff;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .section h2 {
          font-size: 32px;
          margin-bottom: 30px;
          font-weight: 700;
          color: #102a43;
        }

        /* ---------------- PROBLEM ---------------- */
        .problem-list {
          list-style: none;
        }

        .problem-list li {
          padding-left: 28px;
          margin-bottom: 14px;
          position: relative;
          font-size: 17px;
          color: #334e68;
        }

        .problem-list li::before {
          content: "⚠";
          position: absolute;
          left: 0;
          color: #d64545;
          font-size: 16px;
        }

        /* ---------------- STEPS ---------------- */
        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .step {
          background: #ffffff;
          border-radius: 16px;
          padding: 36px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          border-top: 6px solid #19c2a7;
        }

        .step h3 {
          font-size: 20px;
          margin-bottom: 12px;
          color: #0a66c2;
        }

        .step p {
          font-size: 16px;
          line-height: 1.6;
          color: #486581;
        }

        /* ---------------- TRUST ---------------- */
        .trust-list {
          list-style: none;
        }

        .trust-list li {
          padding-left: 30px;
          margin-bottom: 16px;
          position: relative;
          font-size: 17px;
          color: #334e68;
        }

        .trust-list li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #19c2a7;
          font-weight: bold;
        }

        /* ---------------- CTA ---------------- */
        .cta {
          width: 100%;
          padding: 110px 20px;
          background: linear-gradient(
            135deg,
            #083b7a,
            #0a66c2
          );
          color: white;
          text-align: center;
        }

        .cta h2 {
          font-size: 34px;
          margin-bottom: 18px;
          font-weight: 800;
        }

        .cta p {
          max-width: 760px;
          margin: auto;
          margin-bottom: 36px;
          font-size: 17px;
          line-height: 1.6;
          color: #e6f2ff;
        }

        .order-btn {
          padding: 18px 42px;
          font-size: 17px;
          border-radius: 8px;
          border: none;
          background: #19c2a7;
          color: #ffffff;
          font-weight: 700;
          cursor: pointer;
        }

        .order-btn:hover {
          background: #12a892;
        }

        /* ---------------- FOOTER ---------------- */
        footer {
          padding: 28px;
          text-align: center;
          font-size: 14px;
          color: #829ab1;
          border-top: 1px solid #e6eef6;
        }
      `}</style>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Medigo</div>
        <div className="tagline">No Substitutions. Full Trust.</div>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>
          Order exact medicines from exact stores —
          <span> no substitutions</span>
        </h1>
        <p>
          Medigo is building a trust layer for medicine delivery, ensuring patients
          receive exactly what their doctor prescribed, verified using AI.
        </p>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="container">
          <h2>The Problem with Medicine Delivery Today</h2>
          <ul className="problem-list">
            <li>Doctors prescribe specific medicine brands and trusted stores</li>
            <li>Online platforms silently substitute medicines</li>
            <li>Patients lose safety, accuracy, and trust</li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section alt">
        <div className="container">
          <h2>How Medigo Works</h2>
          <div className="steps">
            <div className="step">
              <h3>1. Select Exactly</h3>
              <p>
                Users choose the exact medicine, brand, and store mentioned in the
                prescription.
              </p>
            </div>
            <div className="step">
              <h3>2. Umbrella Delivery</h3>
              <p>
                Orders are assigned to Swiggy, Dunzo, or internal delivery partners
                (simulated).
              </p>
            </div>
            <div className="step">
              <h3>3. AI Verification</h3>
              <p>
                OCR + AI verifies medicine and store from bill and prescription
                before delivery completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section">
        <div className="container">
          <h2>Trust Layer — Our Core Innovation</h2>
          <ul className="trust-list">
            <li>Prescription and bill are OCR-verified</li>
            <li>Medicine and store are AI-matched</li>
            <li>No substitution is enforced, not promised</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Trust Isn’t Promised. It’s Verified.</h2>
        <p>
          Medigo ensures patients receive exactly what was prescribed —
          from the store they choose — verified by AI.
        </p>
        <button className="order-btn" onClick={() => navigate("/auth")}>
          Order Now
        </button>
      </section>

      <footer>
        © 2025 Medigo — Hackathon Prototype
      </footer>
    </>
  );
};

export default LandingPage;
