import React, { useState } from "react";
import "./SchemeForm.css";

// ---- Small reusable bits ------------------------------------------------

function SectionDivider({ label }) {
  return (
    <div className="section-divider">
      <span>{label}</span>
    </div>
  );
}

function TextField({ label, name, value, onChange, disabled, error }) {
  return (
    <div className="form-field-wrap">
      <div className="form-field">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="form-field__input"
        />
      </div>
      <ErrorText>{error}</ErrorText>
    </div>
  );
}

function ErrorText({ children }) {
  if (!children) return null;
  return <p className="field-error">{children}</p>;
}

// ---- Main form -----------------------------------------------------------

const initialState = {
  annualIncome: "",
  purpose: "", // "" | "business" | "education"
  typeOfProject: "",
  estimatedProjectCost: "",
  courseLevel: "",
  institutionLocation: "",
  estimatedCourseCost: "",
  state: "",
  district: "",
  educationStatus: "",
  employmentStatus: "",
};

export default function SchemeForm() {
  const [belongsToSC, setBelongsToSC] = useState(false);
  const [fields, setFields] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
  };

  const isBusinessDisabled = fields.purpose === "education";
  const isEducationDisabled = fields.purpose === "business";

  const isPositiveNumber = (v) => v.trim() !== "" && !isNaN(v) && Number(v) > 0;

  const validate = () => {
    const errs = {};

    if (!isPositiveNumber(fields.annualIncome)) {
      errs.annualIncome = "Enter a valid annual income.";
    }
    if (!fields.purpose) {
      errs.purpose = "Please select business or education.";
    }

    if (fields.purpose === "business") {
      if (!fields.typeOfProject.trim()) errs.typeOfProject = "Type of project is required.";
      if (!isPositiveNumber(fields.estimatedProjectCost)) {
        errs.estimatedProjectCost = "Enter a valid project cost.";
      }
    }

    if (fields.purpose === "education") {
      if (!fields.courseLevel.trim()) errs.courseLevel = "Course level is required.";
      if (!fields.institutionLocation.trim()) errs.institutionLocation = "Institution location is required.";
      if (!isPositiveNumber(fields.estimatedCourseCost)) {
        errs.estimatedCourseCost = "Enter a valid course cost.";
      }
    }

    if (!fields.state.trim()) errs.state = "State is required.";
    if (!fields.district.trim()) errs.district = "District is required.";
    if (!fields.educationStatus.trim()) errs.educationStatus = "Education status is required.";
    if (!fields.employmentStatus.trim()) errs.employmentStatus = "Employment status is required.";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!belongsToSC) return; // extra guard; button is already disabled in this state

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Wire this up to your Django recommendation endpoint.
    // e.g. POST /api/schemes/recommend with { ...fields, belongsToSC }
    console.log("Submitting scheme form:", { ...fields, belongsToSC });
  };

  return (
    <section className="scheme-form-section">
      <div className="scheme-form-header">
        <h2>What kind of scheme are you looking for?</h2>
        <p>Fill out the form to get personalised scheme recommendation</p>
      </div>

      <form className="scheme-form-card" onSubmit={handleSubmit}>
        {/* ---- Basic Info ---- */}
        <SectionDivider label="Basic Info" />

        <label className="sc-checkbox-row">
          <input
            type="checkbox"
            checked={belongsToSC}
            onChange={(e) => setBelongsToSC(e.target.checked)}
          />
          I belong to a Scheduled Caste (SC) community.
        </label>

        {!belongsToSC && (
          <p className="gate-hint">
            Check the box above to fill out the rest of the form.
          </p>
        )}

        <fieldset className="form-fieldset form-fieldset--gate" disabled={!belongsToSC}>
          <TextField
            label="Annual Family Income"
            name="annualIncome"
            value={fields.annualIncome}
            onChange={handleChange}
            error={errors.annualIncome}
          />

          <div className="form-field-wrap">
            <div className="form-field">
              <label htmlFor="purpose">Purpose of Loan</label>
              <select
                id="purpose"
                name="purpose"
                value={fields.purpose}
                onChange={handleChange}
                className="form-field__input"
              >
                <option value="">Select an option</option>
                <option value="business">Business</option>
                <option value="education">Education</option>
              </select>
            </div>
            <ErrorText>{errors.purpose}</ErrorText>
          </div>

          {/* ---- Business-specific Info ---- */}
          <SectionDivider label="Business-specific Info" />
          <fieldset
            className={`form-fieldset ${isBusinessDisabled ? "form-fieldset--disabled" : ""}`}
            disabled={isBusinessDisabled}
          >
            <TextField
              label="Type of Project"
              name="typeOfProject"
              value={fields.typeOfProject}
              onChange={handleChange}
              disabled={isBusinessDisabled}
              error={errors.typeOfProject}
            />
            <TextField
              label="Estimated Project Cost"
              name="estimatedProjectCost"
              value={fields.estimatedProjectCost}
              onChange={handleChange}
              disabled={isBusinessDisabled}
              error={errors.estimatedProjectCost}
            />
          </fieldset>

          {/* ---- Education-specific Info ---- */}
          <SectionDivider label="Education-specific Info" />
          <fieldset
            className={`form-fieldset ${isEducationDisabled ? "form-fieldset--disabled" : ""}`}
            disabled={isEducationDisabled}
          >
            <TextField
              label="Course Level"
              name="courseLevel"
              value={fields.courseLevel}
              onChange={handleChange}
              disabled={isEducationDisabled}
              error={errors.courseLevel}
            />
            <TextField
              label="Institution Location"
              name="institutionLocation"
              value={fields.institutionLocation}
              onChange={handleChange}
              disabled={isEducationDisabled}
              error={errors.institutionLocation}
            />
            <TextField
              label="Estimated Course Cost"
              name="estimatedCourseCost"
              value={fields.estimatedCourseCost}
              onChange={handleChange}
              disabled={isEducationDisabled}
              error={errors.estimatedCourseCost}
            />
          </fieldset>

          {/* ---- Location ---- */}
          <SectionDivider label="Location" />
          <TextField label="State" name="state" value={fields.state} onChange={handleChange} error={errors.state} />
          <TextField label="District" name="district" value={fields.district} onChange={handleChange} error={errors.district} />

          {/* ---- Personal Background ---- */}
          <SectionDivider label="Personal Background" />
          <TextField
            label="Education Status"
            name="educationStatus"
            value={fields.educationStatus}
            onChange={handleChange}
            error={errors.educationStatus}
          />
          <TextField
            label="Employment Status"
            name="employmentStatus"
            value={fields.employmentStatus}
            onChange={handleChange}
            error={errors.employmentStatus}
          />

          <button type="submit" className="scheme-form__submit" disabled={!belongsToSC}>
            Submit
          </button>
        </fieldset>
      </form>
    </section>
  );
}