import React, { useState } from "react";
import Footer from "../Footer/footer";
import "./EMICalculator.css";

export default function EMICalculator() {
  const [form, setForm] = useState({
    scheme: "Scheme 1",
    principal: "Not more than Rs. 10 lakh",
    interest: "6.8%",
    time: "",
    moratorium: "",
    frequency: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCalculate = () => {
    setResult({
      message: "EMI calculated successfully.",
    });
  };

  const goTo = (path) => {
    window.location.hash = path;
  };

  return (
    <main className="emi-page">

      {/* ================= EMI SECTION ================= */}

      <section className="emi-section">

        {/* TOP */}
        <div className="partner-top">

          <button
            className="partner-logo"
            onClick={() => goTo("#/")}
            aria-label="YojnaSetu Home"
          >
            <img
              src="/logo.png"
              alt="YojnaSetu"
            />
          </button>

          <button
            className="partner-language"
            onClick={() => alert("Language selection")}
            aria-label="Change language"
          >
            <span>文</span>
            <span>अ</span>
          </button>

        </div>

        <h1 className="emi-title">
          EMI Calculator
        </h1>

        <div className="emi-form-card">

          {/* SCHEME */}

          <div className="emi-field">
            <label>Scheme:</label>

            <input
              type="text"
              name="scheme"
              value={form.scheme}
              onChange={handleChange}
            />
          </div>


          {/* PRINCIPAL */}

          <div className="emi-field">
            <label>Principal Amount:</label>

            <input
              type="text"
              name="principal"
              value={form.principal}
              onChange={handleChange}
            />
          </div>


          {/* INTEREST */}

          <div className="emi-field">
            <label>Interest Rate:</label>

            <input
              type="text"
              name="interest"
              value={form.interest}
              onChange={handleChange}
            />
          </div>


          {/* TIME PERIOD */}

          <div className="emi-field">
            <label>Time Period:</label>

            <input
              type="text"
              name="time"
              value={form.time}
              onChange={handleChange}
            />
          </div>


          {/* MORATORIUM */}

          <div className="emi-field">
            <label>Moratorium Period:</label>

            <input
              type="text"
              name="moratorium"
              value={form.moratorium}
              onChange={handleChange}
            />
          </div>


          {/* REPAYMENT */}

          <div className="emi-field">
            <label>Repayment Frequency:</label>

            <input
              type="text"
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
            />
          </div>


          {/* CALCULATE */}

          <button
            className="emi-calculate-button"
            onClick={handleCalculate}
          >
            Calculate
          </button>


          {/* RESULT */}

          {result && (
            <div className="emi-result">
              {result.message}
            </div>
          )}

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <Footer />

    </main>
  );
}