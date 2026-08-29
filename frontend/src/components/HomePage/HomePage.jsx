import React, { useState } from "react";
import Footer from "../Footer/footer";
import "./HomePage.css";

export default function HomePage() {
  const goTo = (path) => {
    window.location.hash = path;
  };

  const [formData, setFormData] = useState({
    sc: false,
    income: "",
    purpose: "",
    businessEducation: "",
    projectType: "",
    projectCost: "",
    courseLevel: "",
    institution: "",
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

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEmiChange = (e) => {
    setEmiData({
      ...emiData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    goTo("#/recommended");
  };

  const handleEmiSubmit = (e) => {
    e.preventDefault();
    goTo("#/emi");
  };

  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        {/* NAVBAR */}

        <header className="home-navbar">

          <button
            className="home-logo-button"
            onClick={() => goTo("#/")}
          >
            <img
              src="/logo.png"
              alt="YojnaSetu"
            />
          </button>

          <nav className="home-nav">

            <button
              className="home-nav-item home-nav-active"
              onClick={() => goTo("#/")}
            >
              Home
            </button>

            <button
              className="home-nav-item"
              onClick={() => goTo("#/schemes")}
            >
              Search Schemes
            </button>

            <button
              className="home-nav-item"
              onClick={() => goTo("#/emi")}
            >
              Calculate EMI
            </button>

            <button
              className="home-nav-item"
              onClick={() => goTo("#/partners")}
            >
              Find Partners
            </button>

          </nav>

          <div className="home-nav-right">

            <button
              className="home-language"
              onClick={() => alert("Language selection")}
            >
              <span>A</span>
              <span>अ</span>
            </button>

            <button
              className="home-auth"
              onClick={() => goTo("#/auth")}
            >
              Sign up
            </button>

            <button
              className="home-auth"
              onClick={() => goTo("#/auth")}
            >
              Log in
            </button>

          </div>

        </header>


        {/* HERO CONTENT */}

        <div className="home-hero-content">

          <div className="home-brand">
            YojnaSetu
          </div>

          <h1>
            Financial Aid
            <br />
            Made <span>Easier</span>
            <br />
            And <span>Simpler</span>
          </h1>

        </div>


        {/* HERO IMAGE */}

        <img
          className="home-hero-image"
          src="/schemesaathi_hero_option_d.png"
          alt="Financial assistance"
        />


        {/* HERO BUTTON */}

        <button
          className="home-hero-button"
          onClick={() => goTo("#/schemes")}
        >
          Search Financial Assistance Schemes
        </button>

      </section>


      {/* =====================================================
          PROCESS / HOW IT WORKS
      ===================================================== */}

      <section className="home-process-section">

        <img
          src="/scheme-process.png"
          alt="YojnaSetu scheme process"
          className="home-process-image"
        />

      </section>


      {/* =====================================================
          SCHEME RECOMMENDATION FORM
      ===================================================== */}

      <section className="home-recommendation-section">

        <h2>
          What kind of scheme are you looking for?
        </h2>

        <p>
          Fill out the form to get personalised scheme recommendation
        </p>


        <form
          className="home-recommendation-form"
          onSubmit={handleSubmit}
        >

          {/* BASIC INFO */}

          <fieldset>

            <legend>
              Basic Info
            </legend>

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
                name="income"
                value={formData.income}
                onChange={handleFormChange}
              />
            </div>


            <div className="form-row">
              <label>Purpose of Loan:</label>

              <input
                name="purpose"
                value={formData.purpose}
                onChange={handleFormChange}
              />
            </div>


            <div className="form-row">
              <label>Business/Education:</label>

              <input
                name="businessEducation"
                value={formData.businessEducation}
                onChange={handleFormChange}
              />
            </div>

          </fieldset>


          {/* BUSINESS */}

          <fieldset>

            <legend>
              Business-specific Info
            </legend>

            <div className="form-row">
              <label>Type of Project:</label>

              <input
                name="projectType"
                value={formData.projectType}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-row">
              <label>Estimated Project Cost:</label>

              <input
                name="projectCost"
                value={formData.projectCost}
                onChange={handleFormChange}
              />
            </div>

          </fieldset>


          {/* EDUCATION */}

          <fieldset>

            <legend>
              Education-specific Info
            </legend>

            <div className="form-row">
              <label>Course Level:</label>

              <input
                name="courseLevel"
                value={formData.courseLevel}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-row">
              <label>Institution Location:</label>

              <input
                name="institution"
                value={formData.institution}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-row">
              <label>Estimated Course Cost:</label>

              <input
                name="courseCost"
                value={formData.courseCost}
                onChange={handleFormChange}
              />
            </div>

          </fieldset>


          {/* LOCATION */}

          <fieldset>

            <legend>
              Location
            </legend>

            <div className="form-row">
              <label>State:</label>

              <input
                name="state"
                value={formData.state}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-row">
              <label>District:</label>

              <input
                name="district"
                value={formData.district}
                onChange={handleFormChange}
              />
            </div>

          </fieldset>


          {/* PERSONAL */}

          <fieldset>

            <legend>
              Personal Background
            </legend>

            <div className="form-row">
              <label>Education Status:</label>

              <input
                name="educationStatus"
                value={formData.educationStatus}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-row">
              <label>Employment Status:</label>

              <input
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


      {/* =====================================================
          EMI
      ===================================================== */}

      <section className="home-emi-section">

        <h2>
          EMI Calculator
        </h2>

        <form
          className="home-emi-card"
          onSubmit={handleEmiSubmit}
        >

          <div className="emi-home-row">
            <label>Principal Amount:</label>

            <input
              name="principal"
              value={emiData.principal}
              onChange={handleEmiChange}
            />
          </div>


          <div className="emi-home-row">
            <label>Interest Rate:</label>

            <input
              name="interest"
              value={emiData.interest}
              onChange={handleEmiChange}
            />
          </div>


          <div className="emi-home-row">
            <label>Time Period:</label>

            <input
              name="time"
              value={emiData.time}
              onChange={handleEmiChange}
            />
          </div>


          <div className="emi-home-row">
            <label>Moratorium Period:</label>

            <input
              name="moratorium"
              value={emiData.moratorium}
              onChange={handleEmiChange}
            />
          </div>


          <div className="emi-home-row">
            <label>Repayment Frequency:</label>

            <input
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
          <button onClick={() => goTo("#/schemes")}>
            here
          </button>
        </p>

      </section>


      {/* =====================================================
          PARTNERS MAP
      ===================================================== */}

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
            alt="Channel Partners Map"
          />

        </button>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}