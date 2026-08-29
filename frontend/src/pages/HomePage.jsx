import React, { useState } from "react";
import Footer from "../components/Footer";

/* ============================================================
   BRAND LOGO
   ============================================================ */

function BrandLogo() {
  return (
    <div className="flex h-[38px] w-[38px] items-center justify-center">
      <svg
        className="block h-[38px] w-[38px]"
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
    <div className="flex items-center justify-center">
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
        <circle cx="340" cy="62" r="43" fill="#B9E92F" />

        <circle cx="314" cy="106" r="17" fill="#ffffff" />

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

        <rect x="356" y="77" width="27" height="48" rx="4" fill="#ffffff" />

        <rect x="360" y="84" width="19" height="27" rx="2" fill="#eef2e3" />

        <circle cx="369.5" cy="119" r="2" fill="#091928" />

        <path d="M123 168L165 133L207 168V218H123V168Z" fill="#B9E92F" />

        <rect x="130" y="168" width="70" height="50" fill="#ffffff" />

        <rect x="151" y="184" width="16" height="34" fill="#091928" />

        <rect x="177" y="181" width="12" height="12" fill="#091928" />

        <path d="M381 168L423 134L466 168V218H381V168Z" fill="#ffffff" />

        <rect x="389" y="168" width="69" height="50" fill="#ffffff" />

        <rect x="402" y="181" width="8" height="37" fill="#B9E92F" />

        <rect x="419" y="181" width="8" height="37" fill="#B9E92F" />

        <rect x="436" y="181" width="8" height="37" fill="#B9E92F" />

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

        <path d="M102 218H475V245H102V218Z" fill="#091928" />

        <path d="M105 218H476" stroke="#B9E92F" strokeWidth="3" />
      </svg>
    </div>
  );
}

/* ============================================================
   HOME PAGE
   ============================================================ */

export default function HomePage() {
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
    setLanguage((current) => (current === "EN" ? "हिं" : "EN"));
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
        w-full min-h-screen overflow-x-hidden
        font-[Inter,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]
        text-white bg-white
      "
    >
      {/* ======================================================
          1. HERO
          ====================================================== */}

      <section
        className="
          relative w-full min-h-screen overflow-hidden
          bg-[radial-gradient(circle_at_67%_22%,rgba(255,255,255,0.16)_0,rgba(255,255,255,0.05)_20%,transparent_43%),linear-gradient(180deg,#091928_0%,#102639_34%,#69737a_66%,#e9e9e5_91%,#ffffff_100%)]
          before:content-['']
          before:absolute before:w-[3px] before:h-[3px]
          before:top-[31%] before:left-[54%]
          before:rounded-full
          before:bg-white/60
          before:shadow-[120px_3px_0_rgba(255,255,255,0.35),198px_39px_0_rgba(255,255,255,0.42),74px_67px_0_rgba(255,255,255,0.24),280px_75px_0_rgba(255,255,255,0.2),315px_17px_0_rgba(255,255,255,0.28)]
        "
      >
        {/* NAVBAR */}

        <header
          className="
            absolute top-[18px] left-1/2 z-20
            -translate-x-1/2
            w-[calc(100%-56px)] max-w-[1380px]
            flex items-center justify-between gap-5
            max-[1000px]:w-[calc(100%-36px)]
            max-[760px]:top-[14px]
            max-[760px]:w-[calc(100%-24px)]
          "
        >
          <div
            className="
              flex items-center gap-[22px] min-w-0
              max-[760px]:gap-[9px]
              max-[500px]:gap-0
            "
          >
            <button
              className="cursor-pointer border-none bg-transparent p-0"
              onClick={() => goTo("#/")}
              aria-label="YojnaSetu Home"
            >
              <BrandLogo />
            </button>

            <nav
              className="
                flex h-[39px] items-center rounded-[22px]
                border border-white/80 bg-[rgba(8,24,38,0.58)] p-[3px]
                backdrop-blur-[8px]
                max-[1000px]:gap-0
                max-[760px]:h-[34px]
                max-[500px]:hidden
              "
            >
              <button
                className="
                  h-[31px] rounded-[17px] border-none
                  bg-white/[0.11] px-[15px]
                  text-[11px] font-medium text-white
                  cursor-pointer
                  max-[1000px]:px-[10px]
                  max-[760px]:h-[27px]
                  max-[760px]:px-[7px]
                  max-[760px]:text-[8px]
                "
                onClick={() => goTo("#/home")}
              >
                Home
              </button>

              <button
                className="
                  h-[31px] rounded-[17px] border-none
                  bg-transparent px-[15px]
                  text-[11px] font-medium text-white/80
                  cursor-pointer
                  hover:bg-white/[0.08] hover:text-white
                  max-[1000px]:px-[10px]
                  max-[760px]:h-[27px]
                  max-[760px]:px-[7px]
                  max-[760px]:text-[8px]
                "
                onClick={() => goTo("#/schemes")}
              >
                Search Schemes
              </button>

              <button
                className="
                  h-[31px] rounded-[17px] border-none
                  bg-transparent px-[15px]
                  text-[11px] font-medium text-white/80
                  cursor-pointer
                  hover:bg-white/[0.08] hover:text-white
                  max-[1000px]:px-[10px]
                  max-[760px]:h-[27px]
                  max-[760px]:px-[7px]
                  max-[760px]:text-[8px]
                "
                onClick={() => goTo("#/emi")}
              >
                Calculate EMI
              </button>

              <button
                className="
                  h-[31px] rounded-[17px] border-none
                  bg-transparent px-[15px]
                  text-[11px] font-medium text-white/80
                  cursor-pointer
                  hover:bg-white/[0.08] hover:text-white
                  max-[1000px]:px-[10px]
                  max-[760px]:h-[27px]
                  max-[760px]:px-[7px]
                  max-[760px]:text-[8px]
                "
                onClick={() => goTo("#/partners")}
              >
                Find Partners
              </button>
            </nav>
          </div>

          <div
            className="
              flex shrink-0 items-center gap-[10px]
              max-[760px]:gap-1
            "
          >
            <button
              className="
                flex h-[32px] w-[32px] items-center justify-center
                border-none bg-transparent p-0 cursor-pointer
                max-[760px]:w-[25px]
              "
              aria-label="Change Language"
              onClick={handleLanguage}
            >
              <LanguageIcon />
            </button>

            <button
              className="
                h-[31px] rounded-[18px]
                border border-white/80 bg-white
                px-4 text-[11px] font-semibold text-[#091928]
                cursor-pointer hover:-translate-y-px
                max-[760px]:h-[27px]
                max-[760px]:px-[9px]
                max-[760px]:text-[8px]
              "
              onClick={() => goTo("#/auth")}
            >
              Sign up
            </button>

            <button
              className="
                h-[31px] rounded-[18px]
                border border-white/80 bg-white
                px-4 text-[11px] font-semibold text-[#091928]
                cursor-pointer hover:-translate-y-px
                max-[760px]:h-[27px]
                max-[760px]:px-[9px]
                max-[760px]:text-[8px]
              "
              onClick={() => goTo("#/auth")}
            >
              Log in
            </button>
          </div>
        </header>

        {/* HERO TEXT */}

        <div
          className="
            absolute z-[5]
            left-[clamp(35px,8vw,145px)]
            top-[clamp(100px,25vh,220px)]
            w-[500px]
            max-[1000px]:left-[7%]
            max-[1000px]:top-[26%]
            max-[1000px]:w-[46%]
            max-[760px]:left-[9%]
            max-[760px]:top-[25%]
            max-[760px]:w-[82%]
            max-[500px]:top-[24%]
          "
        >
          <p
            className="
              mb-[14px] mt-0
              text-[clamp(17px,1.6vw,25px)]
              font-semibold text-[#B9E92F]
              max-[760px]:mb-2
              max-[760px]:text-[16px]
            "
          >
            YojnaSetu
          </p>

          <h1
            className="
              m-0
              text-[clamp(38px,4.2vw,68px)]
              font-bold leading-[1.08]
              tracking-[-1.8px]
              text-[#f7f8f5]
              drop-shadow-[0_3px_4px_rgba(0,0,0,0.25)]
              max-[1000px]:text-[clamp(34px,5vw,52px)]
              max-[760px]:text-[clamp(35px,10vw,48px)]
              max-[760px]:tracking-[-1px]
            "
          >
            Financial Aid
            <br />
            Made <span className="text-[#B9E92F]">Easier</span>
            <br />
            And <span className="text-[#B9E92F]">Simpler</span>
          </h1>
        </div>

        <HeroIllustration />

        <button
          className="
            absolute bottom-[clamp(35px,10vh,90px)] left-1/2 z-10
            h-[49px] w-[min(680px,calc(100%-70px))]
            -translate-x-1/2 rounded-[28px] border-none
            bg-[#B9E92F] text-[clamp(13px,1.2vw,17px)]
            font-bold text-[#091928]
            cursor-pointer
            shadow-[0_5px_9px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.3)]
            hover:-translate-x-1/2 hover:-translate-y-0.5
            hover:brightness-[1.04]
            max-[760px]:bottom-[35px]
            max-[760px]:h-[44px]
            max-[760px]:w-[calc(100%-42px)]
            max-[760px]:text-[12px]
          "
          onClick={() => goTo("#/schemes")}
        >
          Search Financial Assistance Schemes
        </button>
      </section>

      {/* PROCESS IMAGE */}

      <section className="flex w-full justify-center bg-white p-0">
        <img
          src="/scheme-process.png"
          alt="How YojnaSetu works"
          className="block h-auto w-full max-w-[1384px] object-contain"
        />
      </section>

      {/* RECOMMENDATION */}

      <section
        className="
          w-full bg-[linear-gradient(180deg,#091928_0%,#102638_10%,#ffffff_100%)]
          px-[5%] pb-[42px] pt-8
          max-[760px]:px-[15px]
        "
      >
        <h2
          className="
            m-0 text-center
            text-[clamp(24px,3vw,36px)]
            font-semibold text-white
            max-[760px]:text-[23px]
          "
        >
          What kind of scheme are you looking for?
        </h2>

        <p
          className="
            mb-[25px] mt-2 text-center
            text-base text-[#B9E92F]
            max-[760px]:text-[11px]
          "
        >
          Fill out the form to get personalised scheme recommendation
        </p>

        <form
          onSubmit={handleRecommendationSubmit}
          className="
            mx-auto w-[min(850px,90%)]
            rounded-[30px] bg-[#edf9d4]
            px-[55px] py-[30px] text-[#091928]
            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
            max-[760px]:w-full
            max-[760px]:rounded-[20px]
            max-[760px]:px-[18px]
            max-[760px]:py-[25px]
          "
        >
          <fieldset className="mb-[18px] border-0 border-t-[1.5px] border-[#091928] px-[10px] pb-[7px]">
            <legend className="px-[6px] text-[14px] font-medium">
              Basic Info
            </legend>

            <label className="my-[9px] mb-4 flex items-center justify-center gap-[9px] text-[13px]">
              <input
                type="checkbox"
                name="sc"
                checked={formData.sc}
                onChange={handleFormChange}
                className="h-4 w-4"
              />

              <span>I belong to a Scheduled Caste (SC) community.</span>
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

          <fieldset className="mb-[18px] border-0 border-t-[1.5px] border-[#091928] px-[10px] pb-[7px]">
            <legend className="px-[6px] text-[14px] font-medium">
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

          <fieldset className="mb-[18px] border-0 border-t-[1.5px] border-[#091928] px-[10px] pb-[7px]">
            <legend className="px-[6px] text-[14px] font-medium">
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

          <fieldset className="mb-[18px] border-0 border-t-[1.5px] border-[#091928] px-[10px] pb-[7px]">
            <legend className="px-[6px] text-[14px] font-medium">
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

          <fieldset className="mb-[18px] border-0 border-t-[1.5px] border-[#091928] px-[10px] pb-[7px]">
            <legend className="px-[6px] text-[14px] font-medium">
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

          <button
            type="submit"
            className="
              mx-auto mt-[22px] block h-[35px] w-[115px]
              rounded-[20px] border-none
              bg-[#B9E92F] text-[14px] font-bold text-black
              cursor-pointer hover:-translate-y-px
            "
          >
            Submit
          </button>
        </form>
      </section>

      {/* EMI */}

      <section
        className="
          w-full
          bg-[linear-gradient(180deg,#091928_0%,#69747a_58%,#ffffff_100%)]
          px-[5%] pb-7 pt-[34px]
        "
      >
        <h2 className="mb-[18px] mt-0 text-center text-[27px] font-bold text-white">
          EMI Calculator
        </h2>

        <form
          onSubmit={handleEmiSubmit}
          className="
            mx-auto w-[min(850px,90%)]
            rounded-[25px] bg-[#edf9d4]
            px-[55px] py-[25px]
            max-[760px]:w-full
            max-[760px]:px-[18px]
            max-[760px]:py-[23px]
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
              mx-auto mt-5 block h-[38px] w-[125px]
              rounded-[22px] border-none
              bg-[#091928] text-[15px] font-bold text-white
              cursor-pointer
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
            className="border-none bg-transparent p-0 text-[#8eb400] cursor-pointer"
          >
            here
          </button>
        </p>
      </section>

      {/* PARTNER MAP */}

      <section className="w-full bg-white px-[5%] pb-[38px] pt-[30px] max-[760px]:px-[15px]">
        <button
          onClick={() => goTo("#/partners")}
          className="
            mx-auto block w-[min(850px,90%)]
            rounded-[22px] border-2 border-[#B9E92F]
            bg-white px-[22px] pb-6 pt-[18px]
            cursor-pointer
            transition-all
            hover:-translate-y-0.5
            hover:shadow-[0_5px_12px_rgba(0,0,0,0.12)]
            max-[760px]:w-full
            max-[760px]:p-[13px]
          "
        >
          <h2 className="mb-[15px] mt-0 text-center text-[23px] font-medium text-black max-[760px]:text-[19px]">
            Find the nearest Channel Partners
          </h2>

          <img
            src="/partner-map.png"
            alt="Nearest Channel Partners"
            className="mx-auto block h-auto w-[90%] max-w-[760px] max-[760px]:w-full"
          />
        </button>
      </section>

      <Footer />
    </main>
  );
}

/* ============================================================
   FORM ROW
   ============================================================ */

function FormRow({ label, name, value, onChange }) {
  return (
    <div
      className="
        my-2 grid grid-cols-2 items-center gap-[22px]
        max-[760px]:grid-cols-1
        max-[760px]:gap-1
      "
    >
      <label
        className="
          text-right text-[13px] text-[#091928]
          max-[760px]:text-left
          max-[760px]:text-[11px]
        "
      >
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="
          h-[27px] w-full rounded-[18px]
          border border-[#9ba4a4]
          bg-white px-[13px]
          outline-none
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

function EmiRow({ label, name, value, onChange }) {
  return (
    <div
      className="
        my-2 grid grid-cols-2 items-center gap-[25px]
        max-[760px]:grid-cols-1
        max-[760px]:gap-1
      "
    >
      <label
        className="
          text-right text-[13px] text-[#091928]
          max-[760px]:text-left
          max-[760px]:text-[11px]
        "
      >
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="
          h-[26px] w-full rounded-[18px]
          border border-[#9ba4a4]
          bg-white px-[13px]
          outline-none
        "
      />
    </div>
  );
}
