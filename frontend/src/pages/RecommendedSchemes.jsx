import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RecommendedSchemes() {
  const goTo = (path) => {
    window.location.hash = path;
  };

  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#091928]">
      {/* =====================================================
          TOP / NAVBAR / HERO
          Same visual style as Landing Page
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#091928]">
        {/* Landing Page style gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091928] via-[#142d3f] to-[#657077]" />

        {/* Soft green glow */}
        <div className="absolute top-16 right-[-80px] w-[420px] h-[420px] rounded-full bg-[#B9E92F]/10 blur-3xl" />

        {/* Decorative dots */}
        <div className="absolute top-[42%] left-[18%] w-1 h-1 rounded-full bg-white/30" />
        <div className="absolute top-[34%] right-[28%] w-1 h-1 rounded-full bg-white/30" />
        <div className="absolute top-[55%] right-[12%] w-1 h-1 rounded-full bg-white/20" />

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
            lg:px-10
            pt-[150px]
            pb-[65px]
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
            YojnaSetu
          </p>

          <h1
            className="
              mt-3
              text-[44px]
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-[52px]
              lg:text-[58px]
              max-[600px]:text-[36px]
            "
          >
            Recommended Schemes
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
            Explore financial assistance schemes that may match your needs and
            discover the next steps available to you.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main
        className="
          bg-[#eef2e3]
          px-5
          py-12
          sm:px-6
          lg:px-10
          lg:py-16
        "
      >
        <div className="mx-auto max-w-[1050px]">
          {/* =================================================
              TOP INFO / COMPARE
          ================================================= */}
          <div
            className="
              mb-8
              flex
              items-center
              justify-between
              gap-4
              max-[600px]:items-start
            "
          >
            <div>
              <p className="m-0 text-sm font-semibold text-[#8daf17]">
                PERSONALIZED RESULTS
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-bold
                  text-[#091928]
                  sm:text-3xl
                "
              >
                Schemes For You
              </h2>

              <p className="mt-1 text-sm text-[#68747b]">
                Compare your options and take the next step.
              </p>
            </div>

            <button
              onClick={() => alert("Compare Schemes")}
              className="
                shrink-0
                rounded-full
                border
                border-[#d5d9d3]
                bg-white
                px-5
                py-2.5
                text-sm
                font-bold
                text-[#091928]
                shadow-[0_4px_12px_rgba(9,25,40,0.06)]
                transition
                hover:-translate-y-0.5
                hover:border-[#B9E92F]
                hover:shadow-[0_7px_18px_rgba(9,25,40,0.10)]
                cursor-pointer
                max-[600px]:px-4
                max-[600px]:py-2
                max-[600px]:text-xs
              "
            >
              Compare Schemes
            </button>
          </div>

          {/* =================================================
              SCHEME 1
          ================================================= */}
          <SchemeCard
            number="01"
            title="Scheme 1"
            description="Here goes the scheme description. This scheme may provide financial assistance based on your eligibility and requirements."
            goTo={goTo}
          />

          {/* =================================================
              SCHEME 2
          ================================================= */}
          <SchemeCard
            number="02"
            title="Scheme 2"
            description="Here goes the scheme description. Review the available benefits and eligibility requirements before proceeding."
            goTo={goTo}
          />

          {/* =================================================
              HELPFUL NOTE
          ================================================= */}
          <div
            className="
              mt-8
              rounded-[22px]
              border
              border-[#d5ed8d]
              bg-[#effbd9]
              p-5
              text-center
            "
          >
            <p className="m-0 text-sm leading-relaxed text-[#52620d]">
              <span className="font-bold">💡 Tip:</span>{" "}
              Check your eligibility before applying and use the EMI calculator
              to understand your repayment commitment.
            </p>
          </div>
        </div>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />
    </div>
  );
}

/* ============================================================
   REUSABLE SCHEME CARD
============================================================ */

function SchemeCard({ number, title, description, goTo }) {
  return (
    <article
      className="
        group
        relative
        mb-6
        rounded-[26px]
        border
        border-[#dce5ce]
        bg-white
        p-6
        shadow-[0_8px_25px_rgba(9,25,40,0.07)]
        transition
        duration-200
        hover:-translate-y-1
        hover:shadow-[0_14px_32px_rgba(9,25,40,0.11)]
        sm:p-7
        lg:p-8
      "
    >
      <div
        className="
          flex
          items-start
          gap-5
          max-[600px]:gap-4
        "
      >
        {/* =================================================
            NUMBER
        ================================================= */}
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-[#B9E92F]
            text-sm
            font-extrabold
            text-[#091928]
            sm:h-14
            sm:w-14
            sm:text-base
          "
        >
          {number}
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}
        <div className="min-w-0 flex-1">
          {/* TOP ROW */}
          <div
            className="
              flex
              items-start
              justify-between
              gap-4
              max-[600px]:pr-7
            "
          >
            <div>
              <span
                className="
                  inline-block
                  rounded-full
                  border
                  border-[#d5ed8d]
                  bg-[#effbd9]
                  px-3
                  py-1
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-[#63710d]
                "
              >
                Recommended
              </span>

              <h2
                className="
                  mt-3
                  text-[21px]
                  font-bold
                  leading-snug
                  text-[#091928]
                  sm:text-2xl
                "
              >
                {title}
              </h2>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              max-w-[800px]
              text-sm
              leading-[1.7]
              text-[#68747b]
            "
          >
            {description}
          </p>

          {/* =================================================
              SCHEME DETAILS
          ================================================= */}
          <div
            className="
              mt-6
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
            "
          >
            <div
              className="
                rounded-xl
                border
                border-[#e5e9e0]
                bg-[#f7f9f3]
                p-3
              "
            >
              <span className="block text-[10px] font-medium uppercase tracking-wide text-[#7d878d]">
                Match
              </span>

              <strong className="mt-1 block text-sm text-[#091928]">
                Suitable
              </strong>
            </div>

            <div
              className="
                rounded-xl
                border
                border-[#e5e9e0]
                bg-[#f7f9f3]
                p-3
              "
            >
              <span className="block text-[10px] font-medium uppercase tracking-wide text-[#7d878d]">
                Assistance
              </span>

              <strong className="mt-1 block text-sm text-[#091928]">
                Financial
              </strong>
            </div>

            <div
              className="
                rounded-xl
                border
                border-[#e5e9e0]
                bg-[#f7f9f3]
                p-3
                max-[500px]:col-span-2
                sm:col-span-1
              "
            >
              <span className="block text-[10px] font-medium uppercase tracking-wide text-[#7d878d]">
                Status
              </span>

              <strong className="mt-1 block text-sm text-[#63710d]">
                Recommended
              </strong>
            </div>
          </div>

          {/* =================================================
              ACTION BUTTONS
          ================================================= */}
          <div
            className="
              mt-6
              flex
              items-center
              gap-3
              max-[600px]:flex-col
              max-[600px]:items-stretch
            "
          >
            {/* CALCULATE EMI */}
            <button
              onClick={() => goTo("#/emi")}
              className="
                rounded-full
                border-0
                bg-[#091928]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-[#142d3f]
                hover:shadow-md
                cursor-pointer
                max-[600px]:w-full
              "
            >
              Calculate EMI
            </button>

            {/* CHANNEL PARTNERS */}
            <button
              onClick={() => goTo("#/partners")}
              className="
                rounded-full
                border-0
                bg-[#B9E92F]
                px-6
                py-3
                text-sm
                font-bold
                text-[#091928]
                transition
                hover:brightness-95
                hover:shadow-md
                cursor-pointer
                max-[600px]:w-full
              "
            >
              Find Suitable Channel Partners →
            </button>
          </div>
        </div>

        {/* =================================================
            BOOKMARK
        ================================================= */}
        <button
          onClick={() => alert("Scheme saved")}
          className="
            absolute
            right-6
            top-6
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#dce3d7]
            bg-[#f7f9f3]
            text-lg
            text-[#68747a]
            transition
            hover:border-[#B9E92F]
            hover:bg-[#effbd9]
            hover:text-[#091928]
            cursor-pointer
          "
          aria-label={`Bookmark ${title}`}
        >
          ♡
        </button>
      </div>
    </article>
  );
}