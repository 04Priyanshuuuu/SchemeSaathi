import React from "react";
import SchemeForm from "./SchemeForm";
import "./HomePage.css";

// ---- Navbar ---------------------------------------------------------

function Navbar() {
  return (
    <header className="navbar">
      <img src="/logo.png" alt="YojnaSetu logo" className="navbar__logo" />

      <nav className="navbar__pill">
        <a href="#home">Home</a>
        <a href="#schemes">Search Schemes</a>
        <a href="#emi">Calculate EMI</a>
        <a href="#partners">Find Partners</a>
      </nav>

      <div className="navbar__actions">
        <button className="translator-btn" aria-label="Translate">
          <img src="/translator.png" alt="Translate" />
        </button>
        <button className="navbar__ghost-btn">Sign up</button>
        <button className="navbar__ghost-btn">Log in</button>
      </div>
    </header>
  );
}

// ---- Hero ------------------------------------------------------------

function Hero() {
  return (
    <section className="hero">
      <div className="hero__decor hero__decor--one" />
      <div className="hero__decor hero__decor--two" />

      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">YojnaSetu</p>
          <h1 className="hero__heading">
            Financial Aid
            <br />
            Made <span className="hero__accent">Easier</span>
            <br />
            And <span className="hero__accent">Simpler</span>
          </h1>
        </div>

        <img src="/hero.png" alt="Illustration of a home connected to a bank by a bridge" className="hero__image" />
      </div>

      <button className="hero__cta">Search Financial Assistance Schemes</button>
    </section>
  );
}

// ---- Process flowchart --------------------------------------------------
// This whole 8-step journey graphic (Eligibility → Scheme Match →
// Partner Match → Submission → Scrutiny → Sanction → Reimbursement →
// Repayment) is one exported image, not built from individual icons.
// Swap the src below for your actual filename.

function ProcessFlowchart() {
  return (
    <section className="process-flowchart">
      <img
        src="/process-flowchart.png"
        alt="Step-by-step process to avail a financial scheme: eligibility check, scheme match, partner match, submission, scrutiny, sanction, reimbursement, and repayment"
        className="process-flowchart__image"
      />
    </section>
  );
}

// ---- Page --------------------------------------------------------------

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <ProcessFlowchart />
      <SchemeForm />
    </div>
  );
}