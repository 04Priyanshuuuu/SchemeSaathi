import React, { useState } from "react";
import "./EMIcalculator.css";

function FieldError({ children }) {
  if (!children) return null;
  return <p className="emi-field-error">{children}</p>;
}

const initialState = {
  principalAmount: "",
  interestRate: "",
  timePeriod: "",
  moratoriumPeriod: "",
  repaymentFrequency: "",
};

export default function EMIcalculator() {
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
  };

  const isPositiveNumber = (v) => v.trim() !== "" && !isNaN(v) && Number(v) > 0;

  const validate = () => {
    const errs = {};
    if (!isPositiveNumber(fields.principalAmount)) errs.principalAmount = "Enter a valid amount.";
    if (!isPositiveNumber(fields.interestRate)) errs.interestRate = "Enter a valid interest rate.";
    if (!isPositiveNumber(fields.timePeriod)) errs.timePeriod = "Enter a valid time period.";
    if (fields.moratoriumPeriod.trim() !== "" && (isNaN(fields.moratoriumPeriod) || Number(fields.moratoriumPeriod) < 0)) {
      errs.moratoriumPeriod = "Enter a valid number of months, or leave blank.";
    }
    if (!fields.repaymentFrequency) errs.repaymentFrequency = "Please select a repayment frequency.";
    return errs;
  };

  const scrollToSchemeForm = (e) => {
    e.preventDefault();
    document.getElementById("scheme-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Standard reducing-balance EMI, applied over the tenure remaining
  // after the moratorium period (moratorium is entered in months).
  const calculateEMI = () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setResult(null);
      return;
    }

    const P = Number(fields.principalAmount);
    const annualRate = Number(fields.interestRate);
    const tenureYears = Number(fields.timePeriod);
    const moratoriumMonths = Number(fields.moratoriumPeriod || 0);

    const periodsPerYear =
      fields.repaymentFrequency === "monthly" ? 12 : fields.repaymentFrequency === "quarterly" ? 4 : 2; // half-yearly

    const r = annualRate / 100 / periodsPerYear;
    const totalMonths = tenureYears * 12 - moratoriumMonths;
    const n = Math.max(1, Math.round((totalMonths / 12) * periodsPerYear));

    const emi = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setResult({ emi: emi.toFixed(2), installments: n });
  };

  return (
    <section className="emi-section">
      <h2 className="emi-section__title">EMI Calculator</h2>

      <div className="emi-card">
        <div className="emi-field-wrap">
          <div className="emi-field">
            <label htmlFor="principalAmount">Principal Amount:</label>
            <input
              id="principalAmount"
              name="principalAmount"
              type="text"
              value={fields.principalAmount}
              onChange={handleChange}
              className="emi-field__input"
            />
          </div>
          <FieldError>{errors.principalAmount}</FieldError>
        </div>

        <div className="emi-field-wrap">
          <div className="emi-field">
            <label htmlFor="interestRate">Interest Rate:</label>
            <input
              id="interestRate"
              name="interestRate"
              type="text"
              value={fields.interestRate}
              onChange={handleChange}
              className="emi-field__input"
            />
          </div>
          <FieldError>{errors.interestRate}</FieldError>
        </div>

        <div className="emi-field-wrap">
          <div className="emi-field">
            <label htmlFor="timePeriod">Time Period:</label>
            <input
              id="timePeriod"
              name="timePeriod"
              type="text"
              value={fields.timePeriod}
              onChange={handleChange}
              className="emi-field__input"
            />
          </div>
          <FieldError>{errors.timePeriod}</FieldError>
        </div>

        <div className="emi-field-wrap">
          <div className="emi-field">
            <label htmlFor="moratoriumPeriod">Moratorium Period:</label>
            <input
              id="moratoriumPeriod"
              name="moratoriumPeriod"
              type="text"
              value={fields.moratoriumPeriod}
              onChange={handleChange}
              className="emi-field__input"
            />
          </div>
          <FieldError>{errors.moratoriumPeriod}</FieldError>
        </div>

        <div className="emi-field-wrap">
          <div className="emi-field">
            <label htmlFor="repaymentFrequency">Repayment Frequency:</label>
            <select
              id="repaymentFrequency"
              name="repaymentFrequency"
              value={fields.repaymentFrequency}
              onChange={handleChange}
              className="emi-field__input"
            >
              <option value="">Select frequency</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="half-yearly">Half-yearly</option>
            </select>
          </div>
          <FieldError>{errors.repaymentFrequency}</FieldError>
        </div>

        <button type="button" className="emi-card__calculate" onClick={calculateEMI}>
          Calculate
        </button>

        {result && (
          <p className="emi-result">
            Instalment: ₹{result.emi} &nbsp;·&nbsp; {result.installments} payments
          </p>
        )}
      </div>

      <p className="emi-section__note">
        To know the scheme specific EMI, select a scheme from{" "}
        <a href="#scheme-form" className="emi-section__link" onClick={scrollToSchemeForm}>
          here
        </a>
      </p>
    </section>
  );
}