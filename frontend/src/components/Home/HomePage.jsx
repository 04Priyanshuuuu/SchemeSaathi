import React from "react";
import { ShieldCheck, FileText, MapPin, ClipboardEdit, ArrowRight } from "lucide-react";
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

// ---- Process strip -----------------------------------------------------
// The 4-step journey strip below the hero. Icons are built with
// lucide-react rather than image files — swap for <img> tags if you'd
// rather use your own icon assets here too.

const STEPS = [
  {
    icon: ShieldCheck,
    caption: "Check eligibility — income within the prescribed limit",
  },
  {
    icon: FileText,
    caption: "Pick the scheme type — Micro Finance, Term Loan, or Education",
  },
  {
    icon: MapPin,
    caption: "Locate the SCA, PSB, RRB or NBFC-MFI that handles that scheme",
  },
  {
    icon: ClipboardEdit,
    caption: "Visit the district office — form, caste certificate, income proof",
  },
];

function ProcessStrip() {
  return (
    <section className="process-strip">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        return (
          <React.Fragment key={i}>
            <div className="process-step">
              <div className="process-step__icon">
                <Icon size={26} strokeWidth={2} />
              </div>
              <p className="process-step__caption">{step.caption}</p>
            </div>
            {i < STEPS.length - 1 && (
              <ArrowRight className="process-step__arrow" size={22} strokeWidth={2.5} />
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
}

// ---- Page --------------------------------------------------------------

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <ProcessStrip />
    </div>
  );
}