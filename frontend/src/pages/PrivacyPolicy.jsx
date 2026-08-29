import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#091928]">
      {/* =====================================================
          TOP / NAVBAR AREA
          Same visual background as Landing Page
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#091928]">
        {/* Landing-page style gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091928] via-[#142d3f] to-[#657077]" />

        {/* Soft green glow */}
        <div className="absolute top-20 right-[-80px] w-[420px] h-[420px] rounded-full bg-[#B9E92F]/10 blur-3xl" />

        {/* Small decorative dots */}
        <div className="absolute top-[45%] left-[18%] w-1 h-1 rounded-full bg-white/30" />
        <div className="absolute top-[35%] right-[28%] w-1 h-1 rounded-full bg-white/30" />
        <div className="absolute top-[55%] right-[12%] w-1 h-1 rounded-full bg-white/20" />

        {/* Navbar stays EXACTLY unchanged */}
        <Navbar />

        {/* =================================================
            PAGE HEADER
        ================================================= */}
        <div
          className="
            relative z-10
            max-w-[1000px]
            mx-auto
            px-6
            lg:px-10
            pt-[155px]
            pb-[75px]
            max-[600px]:pt-[125px]
            max-[600px]:pb-[55px]
          "
        >
          <p
            className="
              m-0
              text-[#B9E92F]
              font-bold
              text-sm
              tracking-[2.5px]
              uppercase
            "
          >
            YojnaSetu
          </p>

          <h1
            className="
              mt-3
              mb-3
              text-white
              text-[48px]
              sm:text-[54px]
              lg:text-[60px]
              leading-tight
              font-bold
              tracking-tight
              max-[600px]:text-[38px]
            "
          >
            Privacy Policy
          </h1>

          <p className="m-0 text-white/70 text-sm sm:text-base">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN PRIVACY CONTENT
      ===================================================== */}
      <main
        className="
          relative
          bg-[#eef2e3]
          px-5
          py-14
          sm:px-6
          lg:px-10
          lg:py-16
        "
      >
        <div className="max-w-[1000px] mx-auto">
          {/* =================================================
              PRIVACY CARD
          ================================================= */}
          <article
            className="
              bg-white
              rounded-[28px]
              border
              border-[#e2e7dc]
              shadow-[0_12px_35px_rgba(9,25,40,0.10)]
              p-7
              sm:p-9
              lg:p-11
            "
          >
            {/* =================================================
                SECTION 1
            ================================================= */}
            <section
              className="
                pb-8
                mb-8
                border-b
                border-[#dfe4dc]
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    shrink-0
                    w-10
                    h-10
                    rounded-xl
                    bg-[#effbd9]
                    text-[#7e9f10]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  01
                </div>

                <div>
                  <h2 className="text-[21px] sm:text-[22px] font-bold text-[#091928] mt-1 mb-3">
                    Information We Collect
                  </h2>

                  <p className="m-0 text-[#68747b] leading-[1.8] text-[15px]">
                    YojnaSetu may collect information required to understand
                    your financial requirements, eligibility and preferences
                    for scheme recommendations.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                SECTION 2
            ================================================= */}
            <section
              className="
                pb-8
                mb-8
                border-b
                border-[#dfe4dc]
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    shrink-0
                    w-10
                    h-10
                    rounded-xl
                    bg-[#effbd9]
                    text-[#7e9f10]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  02
                </div>

                <div>
                  <h2 className="text-[21px] sm:text-[22px] font-bold text-[#091928] mt-1 mb-3">
                    How We Use Information
                  </h2>

                  <p className="m-0 text-[#68747b] leading-[1.8] text-[15px]">
                    Information may be used to provide scheme recommendations,
                    financial calculations, partner discovery and improve the
                    platform experience.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                SECTION 3
            ================================================= */}
            <section
              className="
                pb-8
                mb-8
                border-b
                border-[#dfe4dc]
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    shrink-0
                    w-10
                    h-10
                    rounded-xl
                    bg-[#effbd9]
                    text-[#7e9f10]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  03
                </div>

                <div>
                  <h2 className="text-[21px] sm:text-[22px] font-bold text-[#091928] mt-1 mb-3">
                    Data Security
                  </h2>

                  <p className="m-0 text-[#68747b] leading-[1.8] text-[15px]">
                    We take reasonable measures to protect information handled
                    by the platform against unauthorized access or misuse.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                SECTION 4
            ================================================= */}
            <section
              className="
                pb-8
                mb-8
                border-b
                border-[#dfe4dc]
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    shrink-0
                    w-10
                    h-10
                    rounded-xl
                    bg-[#effbd9]
                    text-[#7e9f10]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  04
                </div>

                <div>
                  <h2 className="text-[21px] sm:text-[22px] font-bold text-[#091928] mt-1 mb-3">
                    Third-Party Services
                  </h2>

                  <p className="m-0 text-[#68747b] leading-[1.8] text-[15px]">
                    Mapping, authentication or other services may be integrated
                    into YojnaSetu where required for platform functionality.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                SECTION 5
            ================================================= */}
            <section>
              <div className="flex items-start gap-4">
                <div
                  className="
                    shrink-0
                    w-10
                    h-10
                    rounded-xl
                    bg-[#effbd9]
                    text-[#7e9f10]
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >
                  05
                </div>

                <div>
                  <h2 className="text-[21px] sm:text-[22px] font-bold text-[#091928] mt-1 mb-3">
                    Contact
                  </h2>

                  <p className="m-0 text-[#68747b] leading-[1.8] text-[15px]">
                    For privacy-related questions, please contact the YojnaSetu
                    support team.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* =================================================
              SMALL BOTTOM NOTE
          ================================================= */}
          <div className="text-center mt-8">
            <p className="text-[#68747b] text-sm">
              Your privacy and trust are important to us.
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