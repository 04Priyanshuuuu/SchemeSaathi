import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ============================================================
   HERO ILLUSTRATION
   ============================================================ */

function HeroIllustration() {
  return (
    <div
      className="
        absolute z-[4]
        w-[min(47vw,650px)]
        right-[clamp(35px,7vw,120px)]
        top-[clamp(145px,25vh,225px)]
        max-[1000px]:w-[49vw]
        max-[1000px]:right-[3%]
        max-[1000px]:top-[31%]
        max-[760px]:w-[75vw]
        max-[760px]:max-w-[420px]
        max-[760px]:right-[-8%]
        max-[760px]:top-[49%]
        max-[500px]:w-[92vw]
        max-[500px]:right-[-17%]
        max-[500px]:top-[48%]
      "
    >
      <svg
        viewBox="0 0 500 280"
        className="block h-auto w-full"
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
   HOME PAGE
   ============================================================ */

export default function HomePage() {
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
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
        font-[Inter,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]
        text-[#091928]
      "
    >

      {/* ======================================================
          REUSABLE NAVBAR
          ====================================================== */}

      <Navbar />

      {/* ======================================================
          HERO
          ====================================================== */}

      <section
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-[radial-gradient(circle_at_67%_22%,rgba(255,255,255,0.16)_0,rgba(255,255,255,0.05)_20%,transparent_43%),linear-gradient(180deg,#091928_0%,#102639_34%,#69737a_66%,#e9e9e5_91%,#ffffff_100%)]
          before:absolute
          before:left-[54%]
          before:top-[31%]
          before:h-[3px]
          before:w-[3px]
          before:rounded-full
          before:bg-white/60
          before:content-['']
          before:shadow-[120px_3px_0_rgba(255,255,255,0.35),198px_39px_0_rgba(255,255,255,0.42),74px_67px_0_rgba(255,255,255,0.24),280px_75px_0_rgba(255,255,255,0.2),315px_17px_0_rgba(255,255,255,0.28)]
        "
      >

        {/* HERO CONTENT */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-[1380px]
            grid-cols-1
            items-center
            gap-12
            px-8
            pb-28
            pt-48
            lg:grid-cols-2
            lg:px-16
          "
        >

          {/* TEXT */}

          <div>
            <p className="mb-5 text-xl font-semibold text-[#B9E92F]">
              YojnaSetu
            </p>

            <h1
              className="
                text-[clamp(38px,4.2vw,68px)]
                font-bold
                leading-[1.08]
                tracking-[-1.8px]
                text-[#f7f8f5]
                drop-shadow-[0_3px_4px_rgba(0,0,0,0.25)]
              "
            >
              Financial Aid
              <br />
              Made <span className="text-[#B9E92F]">Easier</span>
              <br />
              And <span className="text-[#B9E92F]">Simpler</span>
            </h1>
          </div>

          {/* ILLUSTRATION */}

          <HeroIllustration />

        </div>

        {/* HERO CTA */}

        <button
          onClick={() => goTo("#/schemes")}
          className="
            absolute
            bottom-[clamp(35px,10vh,90px)]
            left-1/2
            z-10
            h-[49px]
            w-[min(680px,calc(100%-70px))]
            -translate-x-1/2
            cursor-pointer
            rounded-[28px]
            border-none
            bg-[#B9E92F]
            text-[clamp(13px,1.2vw,17px)]
            font-bold
            text-[#091928]
            shadow-[0_5px_9px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.3)]
            transition
            hover:-translate-x-1/2
            hover:-translate-y-0.5
            hover:brightness-[1.04]
            max-[760px]:bottom-[35px]
            max-[760px]:h-[44px]
            max-[760px]:w-[calc(100%-42px)]
            max-[760px]:text-[12px]
          "
        >
          Search Financial Assistance Schemes
        </button>

      </section>

      {/* ======================================================
          PROCESS IMAGE
          ====================================================== */}

      <section className="flex w-full justify-center bg-white p-0">
        <img
          src="/scheme-process.png"
          alt="How YojnaSetu works"
          className="
            block
            h-auto
            w-full
            max-w-[1384px]
            object-contain
          "
        />
      </section>

      {/* ======================================================
          RECOMMENDATION SECTION
          ====================================================== */}

      <section
        className="
          w-full
          bg-[linear-gradient(180deg,#091928_0%,#102638_10%,#ffffff_100%)]
          px-[5%]
          pb-[42px]
          pt-8
          max-[760px]:px-[15px]
        "
      >

        <h2
          className="
            m-0
            text-center
            text-[clamp(24px,3vw,36px)]
            font-semibold
            text-white
          "
        >
          What kind of scheme are you looking for?
        </h2>

        <p className="mb-[25px] mt-2 text-center text-base text-[#B9E92F]">
          Fill out the form to get personalised scheme recommendation
        </p>

        {/* FORM */}

        <form
          onSubmit={handleRecommendationSubmit}
          className="
            mx-auto
            w-[min(850px,92%)]
            rounded-[30px]
            bg-[#edf9d4]
            px-12
            py-8
            text-[#091928]
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            max-[760px]:w-full
            max-[760px]:rounded-[20px]
            max-[760px]:px-5
            max-[760px]:py-6
          "
        >

          {/* BASIC INFO */}

          <fieldset className="mb-7 border-0 border-t border-[#091928] pt-2">
            <legend className="px-2 text-sm font-semibold">
              Basic Info
            </legend>

            <label
              className="
                mb-5
                mt-3
                flex
                items-center
                justify-center
                gap-2
                text-sm
                font-medium
              "
            >
              <input
                type="checkbox"
                name="sc"
                checked={formData.sc}
                onChange={handleFormChange}
                className="h-4 w-4 cursor-pointer"
              />

              <span>
                I belong to a Scheduled Caste (SC) community.
              </span>
            </label>

            <FormRow
              label="Annual Family Income:"
              name="income"
              value={formData.income}
              onChange={handleFormChange}
            />

            <FormRow
              label="Purpose of Loan:"
              name="purpose"
              value={formData.purpose}
              onChange={handleFormChange}
            />

            <FormRow
              label="Business/Education:"
              name="businessEducation"
              value={formData.businessEducation}
              onChange={handleFormChange}
            />
          </fieldset>

          {/* BUSINESS */}

          <fieldset className="mb-7 border-0 border-t border-[#091928] pt-2">
            <legend className="px-2 text-sm font-semibold">
              Business-specific Info
            </legend>

            <FormRow
              label="Type of Project:"
              name="projectType"
              value={formData.projectType}
              onChange={handleFormChange}
            />

            <FormRow
              label="Estimated Project Cost:"
              name="projectCost"
              value={formData.projectCost}
              onChange={handleFormChange}
            />
          </fieldset>

          {/* EDUCATION */}

          <fieldset className="mb-7 border-0 border-t border-[#091928] pt-2">
            <legend className="px-2 text-sm font-semibold">
              Education-specific Info
            </legend>

            <FormRow
              label="Course Level:"
              name="courseLevel"
              value={formData.courseLevel}
              onChange={handleFormChange}
            />

            <FormRow
              label="Institution Location:"
              name="institutionLocation"
              value={formData.institutionLocation}
              onChange={handleFormChange}
            />

            <FormRow
              label="Estimated Course Cost:"
              name="courseCost"
              value={formData.courseCost}
              onChange={handleFormChange}
            />
          </fieldset>

          {/* LOCATION */}

          <fieldset className="mb-7 border-0 border-t border-[#091928] pt-2">
            <legend className="px-2 text-sm font-semibold">
              Location
            </legend>

            <FormRow
              label="State:"
              name="state"
              value={formData.state}
              onChange={handleFormChange}
            />

            <FormRow
              label="District:"
              name="district"
              value={formData.district}
              onChange={handleFormChange}
            />
          </fieldset>

          {/* PERSONAL */}

          <fieldset className="mb-4 border-0 border-t border-[#091928] pt-2">
            <legend className="px-2 text-sm font-semibold">
              Personal Background
            </legend>

            <FormRow
              label="Education Status:"
              name="educationStatus"
              value={formData.educationStatus}
              onChange={handleFormChange}
            />

            <FormRow
              label="Employment Status:"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleFormChange}
            />
          </fieldset>

          {/* SUBMIT */}

          <button
            type="submit"
            className="
              mx-auto
              mt-6
              block
              h-10
              w-32
              cursor-pointer
              rounded-full
              border-none
              bg-[#B9E92F]
              text-sm
              font-bold
              text-[#091928]
              transition
              hover:-translate-y-0.5
              hover:brightness-105
            "
          >
            Submit
          </button>

        </form>
      </section>

      {/* ======================================================
          EMI CALCULATOR
          ====================================================== */}

      <section
        className="
          w-full
          bg-[linear-gradient(180deg,#091928_0%,#69747a_58%,#ffffff_100%)]
          px-[5%]
          pb-7
          pt-[34px]
        "
      >

        <h2 className="mb-[18px] mt-0 text-center text-[27px] font-bold text-white">
          EMI Calculator
        </h2>

        <form
          onSubmit={handleEmiSubmit}
          className="
            mx-auto
            w-[min(850px,92%)]
            rounded-[25px]
            bg-[#edf9d4]
            px-12
            py-7
            max-[760px]:w-full
            max-[760px]:px-5
          "
        >

          <EmiRow
            label="Principal Amount:"
            name="principal"
            value={emiData.principal}
            onChange={handleEmiChange}
          />

          <EmiRow
            label="Interest Rate:"
            name="interest"
            value={emiData.interest}
            onChange={handleEmiChange}
          />

          <EmiRow
            label="Time Period:"
            name="time"
            value={emiData.time}
            onChange={handleEmiChange}
          />

          <EmiRow
            label="Moratorium Period:"
            name="moratorium"
            value={emiData.moratorium}
            onChange={handleEmiChange}
          />

          <EmiRow
            label="Repayment Frequency:"
            name="frequency"
            value={emiData.frequency}
            onChange={handleEmiChange}
          />

          <button
            type="submit"
            className="
              mx-auto
              mt-6
              block
              h-10
              w-32
              cursor-pointer
              rounded-full
              border-none
              bg-[#091928]
              text-sm
              font-bold
              text-white
              transition
              hover:-translate-y-0.5
            "
          >
            Calculate
          </button>

        </form>

        <p className="mt-[14px] text-center text-[12px] text-black">
          To know the scheme specific EMI, select a scheme from{" "}
          <button
            type="button"
            onClick={() => goTo("#/schemes")}
            className="
              cursor-pointer
              border-none
              bg-transparent
              p-0
              text-[#8eb400]
            "
          >
            here
          </button>
        </p>

      </section>

      {/* ======================================================
          PARTNER MAP
          ====================================================== */}

      <section
        className="
          w-full
          bg-white
          px-[5%]
          pb-[38px]
          pt-[30px]
          max-[760px]:px-[15px]
        "
      >

        <button
          onClick={() => goTo("#/partners")}
          className="
            mx-auto
            block
            w-[min(850px,92%)]
            cursor-pointer
            rounded-[22px]
            border-2
            border-[#B9E92F]
            bg-white
            px-[22px]
            pb-6
            pt-[18px]
            transition
            hover:-translate-y-0.5
            hover:shadow-[0_5px_12px_rgba(0,0,0,0.12)]
            max-[760px]:w-full
            max-[760px]:p-[13px]
          "
        >

          <h2
            className="
              mb-[15px]
              mt-0
              text-center
              text-[23px]
              font-medium
              text-black
              max-[760px]:text-[19px]
            "
          >
            Find the nearest Channel Partners
          </h2>

          <img
            src="/partner-map.png"
            alt="Nearest Channel Partners"
            className="
              mx-auto
              block
              h-auto
              w-[90%]
              max-w-[760px]
              max-[760px]:w-full
            "
          />

        </button>

      </section>

      {/* ======================================================
          REUSABLE FOOTER
          ====================================================== */}

      <Footer />

    </main>
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
}) {
  return (
    <div
      className="
        grid
        grid-cols-[minmax(180px,1fr)_minmax(220px,1fr)]
        items-center
        gap-6
        py-2
        max-[760px]:grid-cols-1
        max-[760px]:gap-1
      "
    >

      <label
        htmlFor={name}
        className="
          text-right
          text-[13px]
          font-medium
          text-[#091928]
          max-[760px]:text-left
          max-[760px]:text-[11px]
        "
      >
        {label}
      </label>

      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="
          h-9
          w-full
          rounded-full
          border
          border-[#9ba4a4]
          bg-white
          px-4
          text-sm
          text-[#091928]
          outline-none
          transition
          focus:border-[#91b91b]
          focus:shadow-[0_0_0_2px_rgba(185,233,47,0.25)]
        "
      />

    </div>
  );
}

/* ============================================================
   EMI ROW
   ============================================================ */

function EmiRow({
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div
      className="
        grid
        grid-cols-[minmax(180px,1fr)_minmax(220px,1fr)]
        items-center
        gap-6
        py-2
        max-[760px]:grid-cols-1
        max-[760px]:gap-1
      "
    >

      <label
        htmlFor={name}
        className="
          text-right
          text-[13px]
          font-medium
          text-[#091928]
          max-[760px]:text-left
          max-[760px]:text-[11px]
        "
      >
        {label}
      </label>

      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="
          h-9
          w-full
          rounded-full
          border
          border-[#9ba4a4]
          bg-white
          px-4
          text-sm
          text-[#091928]
          outline-none
          focus:border-[#91b91b]
          focus:shadow-[0_0_0_2px_rgba(185,233,47,0.25)]
        "
      />

    </div>
  );
}