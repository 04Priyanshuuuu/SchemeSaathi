import React, { useState } from "react";
import "./LandingPage.css";
import Footer from "../Footer/footer";

/* ============================================================
   BRAND LOGO
   ============================================================ */

function BrandLogo() {
  return (
    <div className="brand-logo" aria-label="YojnaSetu">
      <svg
        className="brand-logo__icon"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4L41 13.5V34.5L24 44L7 34.5V13.5L24 4Z"
          stroke="#B9E92F"
          strokeWidth="2.2"
        />

        <path
          d="M15 25.5L20.5 31L33.5 17.5"
          stroke="#B9E92F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M13 15L24 9L35 15"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle
          cx="24"
          cy="24"
          r="4"
          fill="#091928"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}


/* ============================================================
   LANGUAGE ICON
   ============================================================ */

function LanguageIcon() {
  return (
    <div className="language-icon">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="3"
          width="13"
          height="14"
          rx="2"
          stroke="white"
          strokeWidth="1.5"
        />

        <path
          d="M5 8H11"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <path
          d="M8 6V12"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <path
          d="M6 12C7.2 10.9 8.1 9.3 8.5 7.5"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <path
          d="M6.5 9.5C7.3 10.5 8.5 11.4 10 12"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <path
          d="M17 8.5C19 8.5 21 9.8 21 11.8C21 13.7 19.5 14.8 17.5 14.8C16.8 14.8 16.2 14.7 15.6 14.5L14.5 16.5L14.8 13.7C13.7 13 13 12 13 11C13 9.6 14.5 8.5 17 8.5Z"
          stroke="white"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}


/* ============================================================
   HERO ILLUSTRATION
   ============================================================ */

function HeroIllustration() {
  return (
    <div className="hero-illustration">
      <svg
        viewBox="0 0 500 280"
        className="hero-illustration__svg"
        xmlns="http://www.w3.org/2000/svg"
      >

        <circle
          cx="340"
          cy="62"
          r="43"
          fill="#B9E92F"
        />

        <circle
          cx="314"
          cy="106"
          r="17"
          fill="#ffffff"
        />

        <text
          x="314"
          y="112"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill="#091928"
        >
          ₹
        </text>

        <rect
          x="356"
          y="77"
          width="27"
          height="48"
          rx="4"
          fill="#ffffff"
        />

        <rect
          x="360"
          y="84"
          width="19"
          height="27"
          rx="2"
          fill="#eef2e3"
        />

        <circle
          cx="369.5"
          cy="119"
          r="2"
          fill="#091928"
        />

        <path
          d="M123 168L165 133L207 168V218H123V168Z"
          fill="#B9E92F"
        />

        <rect
          x="130"
          y="168"
          width="70"
          height="50"
          fill="#ffffff"
        />

        <rect
          x="151"
          y="184"
          width="16"
          height="34"
          fill="#091928"
        />

        <rect
          x="177"
          y="181"
          width="12"
          height="12"
          fill="#091928"
        />

        <path
          d="M381 168L423 134L466 168V218H381V168Z"
          fill="#ffffff"
        />

        <rect
          x="389"
          y="168"
          width="69"
          height="50"
          fill="#ffffff"
        />

        <rect
          x="402"
          y="181"
          width="8"
          height="37"
          fill="#B9E92F"
        />

        <rect
          x="419"
          y="181"
          width="8"
          height="37"
          fill="#B9E92F"
        />

        <rect
          x="436"
          y="181"
          width="8"
          height="37"
          fill="#B9E92F"
        />

        <path
          d="M194 187C250 168 316 166 391 184"
          stroke="#B9E92F"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M204 193C264 177 326 176 386 190"
          stroke="#091928"
          strokeWidth="2"
          strokeDasharray="5 7"
          opacity="0.8"
        />

        <path
          d="M102 218H475V245H102V218Z"
          fill="#091928"
        />

        <path
          d="M105 218H476"
          stroke="#B9E92F"
          strokeWidth="3"
        />

      </svg>
    </div>
  );
}


/* ============================================================
   LANDING / HOME PAGE
   ============================================================ */

export default function LandingPage() {

  const [language, setLanguage] = useState("EN");

  const [formData, setFormData] = useState({
    sc: false,
    income: "",
    purpose: "",
    businessEducation: "",
    projectType: "",
    projectCost: "",
    courseLevel: "",
    institutionLocation: "",
    courseCost: "",
    state: "",
    district: "",
    educationStatus: "",
    employmentStatus: "",
  });

  const [emiData, setEmiData] = useState({
    principal: "",
    interest: "",
    time: "",
    moratorium: "",
    frequency: "",
  });


  /* ==========================================================
     NAVIGATION
     ========================================================== */

  const goTo = (path) => {
    window.location.hash = path;
  };


  /* ==========================================================
     LANGUAGE
     ========================================================== */

  const handleLanguage = () => {
    setLanguage((current) =>
      current === "EN" ? "हिं" : "EN"
    );
  };


  /* ==========================================================
     RECOMMENDATION FORM
     ========================================================== */

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleRecommendationSubmit = (e) => {
    e.preventDefault();

    goTo("#/recommended");
  };


  /* ==========================================================
     EMI
     ========================================================== */

  const handleEmiChange = (e) => {
    setEmiData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };


  const handleEmiSubmit = (e) => {
    e.preventDefault();

    goTo("#/emi");
  };


  return (
    <main className="landing-page">

      {/* ======================================================
          1. HERO
          ====================================================== */}

      <section className="hero-section">

        {/* ================= NAVBAR ================= */}

        <header className="landing-navbar">

          <div className="landing-navbar__left">

            <button
              className="brand-logo-button"
              onClick={() => goTo("#/")}
              aria-label="YojnaSetu Home"
            >
              <BrandLogo />
            </button>


            <nav className="landing-nav">

              <button
                className="landing-nav__item landing-nav__item--active"
                onClick={() => goTo("#/")}
              >
                Home
              </button>

              <button
                className="landing-nav__item"
                onClick={() => goTo("#/schemes")}
              >
                Search Schemes
              </button>

              <button
                className="landing-nav__item"
                onClick={() => goTo("#/emi")}
              >
                Calculate EMI
              </button>

              <button
                className="landing-nav__item"
                onClick={() => goTo("#/partners")}
              >
                Find Partners
              </button>

            </nav>

          </div>


          <div className="landing-navbar__right">

            <button
              className="language-button"
              aria-label="Change Language"
              onClick={handleLanguage}
            >
              <LanguageIcon />

              <span className="language-text">
                {language}
              </span>
            </button>


            <button
              className="nav-auth-button nav-auth-button--signup"
              onClick={() => goTo("#/auth")}
            >
              Sign up
            </button>


            <button
              className="nav-auth-button nav-auth-button--login"
              onClick={() => goTo("#/auth")}
            >
              Log in
            </button>

          </div>

        </header>


        {/* HERO TEXT */}

        <div className="hero-content">

          <p className="hero-brand">
            YojnaSetu
          </p>

          <h1 className="hero-title">
            Financial Aid
            <br />
            Made <span>Easier</span>
            <br />
            And <span>Simpler</span>
          </h1>

        </div>


        <HeroIllustration />


        <button
          className="hero-cta"
          onClick={() => goTo("#/schemes")}
        >
          Search Financial Assistance Schemes
        </button>

      </section>


      {/* ======================================================
          2. PROCESS IMAGE
          ====================================================== */}

      <section className="home-process-section">

        <img
          src="/scheme-process.png"
          alt="How YojnaSetu works"
          className="home-process-image"
        />

      </section>


      {/* ======================================================
          3. RECOMMENDATION FORM
          ====================================================== */}

      <section className="home-recommendation-section">

        <h2>
          What kind of scheme are you looking for?
        </h2>

        <p>
          Fill out the form to get personalised scheme recommendation
        </p>


        <form
          className="home-recommendation-form"
          onSubmit={handleRecommendationSubmit}
        >

          {/* BASIC INFO */}

          <fieldset>

            <legend>Basic Info</legend>

            <label className="checkbox-row">

              <input
                type="checkbox"
                name="sc"
                checked={formData.sc}
                onChange={handleFormChange}
              />

              <span>
                I belong to a Scheduled Caste (SC) community.
              </span>

            </label>


            <div className="form-row">
              <label>Annual Family Income:</label>

              <input
                type="text"
                name="income"
                value={formData.income}
                onChange={handleFormChange}
              />
            </div>


            <div className="form-row">
              <label>Purpose of Loan:</label>

              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleFormChange}
              />
            </div>


            <div className="form-row">
              <label>Business/Education:</label>

              <input
                type="text"
                name="businessEducation"
                value={formData.businessEducation}
                onChange={handleFormChange}
              />
            </div>

          </fieldset>


          {/* BUSINESS */}

          <fieldset>

            <legend>Business-specific Info</legend>

            <div className="form-row">
              <label>Type of Project:</label>

              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleFormChange}
              />
            </div>


            <div className="form-row">
              <label>Estimated Project Cost:</label>

              <input
                type="text"
                name="projectCost"
                value={formData.projectCost}
                onChange={handleFormChange}
              />
            </div>

          </fieldset>


          {/* EDUCATION */}

          <fieldset>

            <legend>Education-specific Info</legend>

            <div className="form-row">
              <label>Course Level:</label>

              <input
                type="text"
                name="courseLevel"
                value={formData.courseLevel}
                onChange={handleFormChange}
              />
            </div>


            <div className="form-row">
              <label>Institution Location:</label>

              <input
                type="text"
                name="institutionLocation"
                value={formData.institutionLocation}
                onChange={handleFormChange}
              />
            </div>


            <div className="form-row">
              <label>Estimated Course Cost:</label>

              <input
                type="text"
                name="courseCost"
                value={formData.courseCost}
                onChange={handleFormChange}
              />
            </div>

          </fieldset>


          {/* LOCATION */}

          <fieldset>

            <legend>Location</legend>

            <div className="form-row">
              <label>State:</label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleFormChange}
              />
            </div>


            <div className="form-row">
              <label>District:</label>

              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleFormChange}
              />
            </div>

          </fieldset>


          {/* PERSONAL */}

          <fieldset>

            <legend>Personal Background</legend>

            <div className="form-row">
              <label>Education Status:</label>

              <input
                type="text"
                name="educationStatus"
                value={formData.educationStatus}
                onChange={handleFormChange}
              />
            </div>


            <div className="form-row">
              <label>Employment Status:</label>

              <input
                type="text"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleFormChange}
              />
            </div>

          </fieldset>


          <button
            type="submit"
            className="home-submit-button"
          >
            Submit
          </button>

        </form>

      </section>


      {/* ======================================================
          4. EMI CALCULATOR
          ====================================================== */}

      <section className="home-emi-section">

        <h2>
          EMI Calculator
        </h2>


        <form
          className="home-emi-card"
          onSubmit={handleEmiSubmit}
        >

          <div className="emi-home-row">

            <label>
              Principal Amount:
            </label>

            <input
              type="text"
              name="principal"
              value={emiData.principal}
              onChange={handleEmiChange}
            />

          </div>


          <div className="emi-home-row">

            <label>
              Interest Rate:
            </label>

            <input
              type="text"
              name="interest"
              value={emiData.interest}
              onChange={handleEmiChange}
            />

          </div>


          <div className="emi-home-row">

            <label>
              Time Period:
            </label>

            <input
              type="text"
              name="time"
              value={emiData.time}
              onChange={handleEmiChange}
            />

          </div>


          <div className="emi-home-row">

            <label>
              Moratorium Period:
            </label>

            <input
              type="text"
              name="moratorium"
              value={emiData.moratorium}
              onChange={handleEmiChange}
            />

          </div>


          <div className="emi-home-row">

            <label>
              Repayment Frequency:
            </label>

            <input
              type="text"
              name="frequency"
              value={emiData.frequency}
              onChange={handleEmiChange}
            />

          </div>


          <button
            type="submit"
            className="home-calculate-button"
          >
            Calculate
          </button>

        </form>


        <p className="emi-note">
          To know the scheme specific EMI, select a scheme from{" "}

          <button
            type="button"
            onClick={() => goTo("#/schemes")}
          >
            here
          </button>

        </p>

      </section>


      {/* ======================================================
          5. PARTNER MAP
          ====================================================== */}

      <section className="home-partner-section">

        <button
          className="home-partner-box"
          onClick={() => goTo("#/partners")}
        >

          <h2>
            Find the nearest Channel Partners
          </h2>

          <img
            src="/partner-map.png"
            alt="Nearest Channel Partners"
          />

        </button>

      </section>


      {/* ======================================================
          6. FOOTER
          ====================================================== */}

      <Footer />

    </main>
  );
}