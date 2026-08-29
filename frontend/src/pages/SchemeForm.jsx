import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const initialFormData = {
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
};

export default function SchemeForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setSubmitted(false);
  };

  const handleRecommendationSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#091928]">
      {/* =====================================================
          TOP / NAVBAR / HERO
          Same visual style as Landing Page
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#091928]">
        {/* Landing Page gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091928] via-[#142d3f] to-[#657077]" />

        {/* Soft green glow */}
        <div className="absolute top-16 right-[-80px] h-[420px] w-[420px] rounded-full bg-[#B9E92F]/10 blur-3xl" />

        {/* Decorative dots */}
        <div className="absolute top-[42%] left-[18%] h-1 w-1 rounded-full bg-white/30" />
        <div className="absolute top-[34%] right-[28%] h-1 w-1 rounded-full bg-white/30" />
        <div className="absolute top-[55%] right-[12%] h-1 w-1 rounded-full bg-white/20" />

        {/* Navbar — unchanged */}
        <Navbar />

        {/* =================================================
            PAGE HEADER
        ================================================= */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1050px]
            px-6
            pt-[150px]
            pb-[65px]
            lg:px-10
            max-[600px]:px-5
            max-[600px]:pt-[120px]
            max-[600px]:pb-[50px]
          "
        >
          <p
            className="
              m-0
              text-sm
              font-bold
              uppercase
              tracking-[2.5px]
              text-[#B9E92F]
            "
          >
            YojnaSetu Recommendation
          </p>

          <h1
            className="
              mt-3
              text-[42px]
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-[50px]
              lg:text-[56px]
              max-[600px]:text-[34px]
            "
          >
            Find the Right Scheme
          </h1>

          <p
            className="
              mt-4
              max-w-[700px]
              text-sm
              leading-relaxed
              text-white/70
              sm:text-base
            "
          >
            Tell us a little about your financial needs and background. We'll
            use this information to help identify suitable assistance schemes.
          </p>
        </div>
      </section>

      {/* =====================================================
          FORM SECTION
      ===================================================== */}
      <section className="bg-[#eef2e3] px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[900px]">
          {/* =================================================
              INTRO CARD
          ================================================= */}
          <div
            className="
              mb-7
              rounded-[24px]
              border
              border-[#d5ed8d]
              bg-[#effbd9]
              p-5
              sm:p-6
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#B9E92F]
                  text-xl
                "
              >
                🎯
              </div>

              <div>
                <h2 className="m-0 text-lg font-bold text-[#091928]">
                  Personalised Scheme Recommendation
                </h2>

                <p className="mt-1 text-sm leading-relaxed text-[#68747b]">
                  Complete the form below as accurately as possible. This helps
                  us understand which financial assistance options may be
                  relevant to you.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}
          {submitted && (
            <div
              className="
                mb-7
                rounded-[20px]
                border
                border-[#cfe78a]
                bg-[#edf7c9]
                p-4
                text-sm
                leading-relaxed
                text-[#4e6800]
              "
            >
              <span className="font-bold">✓ Recommendation request submitted.</span>{" "}
              Your information has been recorded successfully.
            </div>
          )}

          {/* =================================================
              MAIN FORM
          ================================================= */}
          <form
            onSubmit={handleRecommendationSubmit}
            className="
              rounded-[28px]
              border
              border-[#e0e6d8]
              bg-white
              p-6
              shadow-[0_12px_35px_rgba(9,25,40,0.10)]
              sm:p-8
              lg:p-10
            "
          >
            {/* =================================================
                BASIC INFORMATION
            ================================================= */}
            <FormSection
              number="01"
              title="Basic Information"
              description="Tell us about your basic financial requirement."
            >
              {/* SC CHECKBOX */}
              <label
                className="
                  mb-6
                  flex
                  cursor-pointer
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-[#e1e6dc]
                  bg-[#f7f9f3]
                  p-4
                  text-sm
                  font-medium
                  text-[#091928]
                "
              >
                <input
                  type="checkbox"
                  name="sc"
                  checked={formData.sc}
                  onChange={handleFormChange}
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    cursor-pointer
                    accent-[#91b91b]
                  "
                />

                <span>
                  I belong to a Scheduled Caste (SC) community.
                </span>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormRow
                  label="Annual Family Income"
                  name="income"
                  value={formData.income}
                  onChange={handleFormChange}
                  placeholder="e.g. ₹3,50,000"
                  required
                />

                <FormRow
                  label="Purpose of Loan"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleFormChange}
                  placeholder="e.g. Business expansion"
                  required
                />

                <FormRow
                  label="Business / Education"
                  name="businessEducation"
                  value={formData.businessEducation}
                  onChange={handleFormChange}
                  placeholder="e.g. Business"
                  required
                />
              </div>
            </FormSection>

            {/* =================================================
                BUSINESS INFORMATION
            ================================================= */}
            <FormSection
              number="02"
              title="Business-specific Information"
              description="Complete this section if you are looking for business-related assistance."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormRow
                  label="Type of Project"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleFormChange}
                  placeholder="e.g. Retail shop"
                />

                <FormRow
                  label="Estimated Project Cost"
                  name="projectCost"
                  value={formData.projectCost}
                  onChange={handleFormChange}
                  placeholder="e.g. ₹5,00,000"
                />
              </div>
            </FormSection>

            {/* =================================================
                EDUCATION INFORMATION
            ================================================= */}
            <FormSection
              number="03"
              title="Education-specific Information"
              description="Provide details if your requirement is related to education."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormRow
                  label="Course Level"
                  name="courseLevel"
                  value={formData.courseLevel}
                  onChange={handleFormChange}
                  placeholder="e.g. Undergraduate"
                />

                <FormRow
                  label="Institution Location"
                  name="institutionLocation"
                  value={formData.institutionLocation}
                  onChange={handleFormChange}
                  placeholder="e.g. Delhi"
                />

                <FormRow
                  label="Estimated Course Cost"
                  name="courseCost"
                  value={formData.courseCost}
                  onChange={handleFormChange}
                  placeholder="e.g. ₹2,00,000"
                />
              </div>
            </FormSection>

            {/* =================================================
                LOCATION
            ================================================= */}
            <FormSection
              number="04"
              title="Location"
              description="Your location helps us identify relevant schemes and assistance options."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormRow
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleFormChange}
                  placeholder="Enter your state"
                  required
                />

                <FormRow
                  label="District"
                  name="district"
                  value={formData.district}
                  onChange={handleFormChange}
                  placeholder="Enter your district"
                  required
                />
              </div>
            </FormSection>

            {/* =================================================
                PERSONAL BACKGROUND
            ================================================= */}
            <FormSection
              number="05"
              title="Personal Background"
              description="This information can help improve the relevance of your recommendations."
              last
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormRow
                  label="Education Status"
                  name="educationStatus"
                  value={formData.educationStatus}
                  onChange={handleFormChange}
                  placeholder="e.g. Graduate"
                />

                <FormRow
                  label="Employment Status"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleFormChange}
                  placeholder="e.g. Self-employed"
                />
              </div>
            </FormSection>

            {/* =================================================
                SUBMIT AREA
            ================================================= */}
            <div className="mt-8 border-t border-[#e2e6df] pt-7">
              <p className="mb-5 text-center text-xs leading-relaxed text-[#7b858a]">
                Please make sure the information provided is accurate before
                submitting your request.
              </p>

              <button
                type="submit"
                className="
                  mx-auto
                  flex
                  min-w-[190px]
                  items-center
                  justify-center
                  rounded-full
                  border-0
                  bg-[#B9E92F]
                  px-7
                  py-3.5
                  text-sm
                  font-extrabold
                  text-[#091928]
                  shadow-[0_5px_15px_rgba(9,25,40,0.12)]
                  transition
                  hover:-translate-y-0.5
                  hover:brightness-95
                  hover:shadow-[0_8px_20px_rgba(9,25,40,0.15)]
                  cursor-pointer
                "
              >
                Get Recommendations →
              </button>
            </div>
          </form>

          {/* =================================================
              BOTTOM NOTE
          ================================================= */}
          <div className="mt-7 text-center">
            <p className="m-0 text-sm text-[#68747b]">
              Your information is used to understand your requirements and
              improve scheme recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />
    </div>
  );
}

/* ============================================================
   FORM SECTION
============================================================ */

function FormSection({
  number,
  title,
  description,
  children,
  last = false,
}) {
  return (
    <fieldset
      className={`
        border-0
        p-0
        ${last ? "" : "mb-9 border-b border-[#e1e6dc] pb-9"}
      `}
    >
      {/* SECTION HEADER */}
      <div className="mb-6 flex items-start gap-4">
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#effbd9]
            text-sm
            font-extrabold
            text-[#63710d]
          "
        >
          {number}
        </div>

        <div>
          <h2
            className="
              m-0
              text-[20px]
              font-bold
              leading-tight
              text-[#091928]
              sm:text-[22px]
            "
          >
            {title}
          </h2>

          <p className="mt-1.5 text-sm leading-relaxed text-[#68747b]">
            {description}
          </p>
        </div>
      </div>

      {children}
    </fieldset>
  );
}

/* ============================================================
   FORM ROW
============================================================ */

function FormRow({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <label className="block text-[13px] font-bold text-[#091928]">
      {label}

      {required && (
        <span className="ml-1 text-[#8daf17]">*</span>
      )}

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          mt-2
          block
          w-full
          rounded-xl
          border
          border-[#d5d9d3]
          bg-[#fafcf7]
          px-3.5
          py-3
          text-sm
          font-normal
          text-[#091928]
          outline-none
          transition
          placeholder:text-[#9aa3a7]
          focus:border-[#B9E92F]
          focus:ring-2
          focus:ring-[#B9E92F]/30
        "
      />
    </label>
  );
}