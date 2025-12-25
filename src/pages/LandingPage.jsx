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
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont;
        }

        body {
          background: #020617;
          color: #ffffff;
        }

        /* ---------------- BACKGROUND GLOW ---------------- */
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

        /* ---------------- NAVBAR ---------------- */
        .navbar {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 22px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          backdrop-filter: blur(16px);
          background: rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .logo {
          font-size: 26px;
          font-weight: 800;
          color: #90caf9;
        }

        .tagline {
          font-size: 14px;
          opacity: 0.85;
        }

        /* ---------------- HERO ---------------- */
        .hero {
          position: relative;
          z-index: 1;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 140px 20px 100px;
          text-align: center;
        }

        .hero h1 {
          font-size: 48px;
          max-width: 980px;
          margin-bottom: 24px;
          font-weight: 800;
          line-height: 1.15;
        }

        .hero span {
          color: #a5d6ff;
        }

        .hero p {
          max-width: 760px;
          font-size: 18px;
          line-height: 1.7;
          opacity: 0.9;
        }

        /* ---------------- SECTIONS ---------------- */
        .section {
          position: relative;
          z-index: 1;
          padding: 100px 20px;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .section h2 {
          font-size: 34px;
          margin-bottom: 32px;
          font-weight: 700;
        }

        /* ---------------- PROBLEM ---------------- */
        .problem-list {
          list-style: none;
        }

        .problem-list li {
          padding-left: 30px;
          margin-bottom: 16px;
          position: relative;
          font-size: 17px;
          opacity: 0.9;
        }

        .problem-list li::before {
          content: "⚠";
          position: absolute;
          left: 0;
          color: #ff8a80;
        }

        /* ---------------- STEPS ---------------- */
        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .step {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(16px);
          border-radius: 22px;
          padding: 36px;
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }

        .step h3 {
          font-size: 20px;
          margin-bottom: 12px;
          color: #90caf9;
        }

        .step p {
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.85;
        }

        /* ---------------- TRUST ---------------- */
        .trust-list {
          list-style: none;
        }

        .trust-list li {
          padding-left: 30px;
          margin-bottom: 18px;
          position: relative;
          font-size: 17px;
          opacity: 0.9;
        }

        .trust-list li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: #66bb6a;
          font-weight: bold;
        }

        /* ---------------- CTA ---------------- */
        .cta {
          padding: 120px 20px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cta h2 {
          font-size: 36px;
          margin-bottom: 18px;
          font-weight: 800;
        }

        .cta p {
          max-width: 780px;
          margin: auto;
          margin-bottom: 40px;
          font-size: 17px;
          line-height: 1.6;
          opacity: 0.9;
        }

        .order-btn {
          padding: 18px 46px;
          font-size: 17px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #66bb6a, #2e7d32);
          color: #ffffff;
          font-weight: 700;
          cursor: pointer;
        }

        /* ---------------- FOOTER ---------------- */
        footer {
          padding: 30px;
          text-align: center;
          font-size: 14px;
          opacity: 0.6;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
      `}</style>

      {/* GLOW BACKGROUND */}
      <div className="glow" style={{ top: "10%", left: "5%" }} />
      <div className="glow green" style={{ bottom: "15%", right: "10%" }} />

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
      <section className="section">
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
