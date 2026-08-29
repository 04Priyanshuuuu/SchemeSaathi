import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  const [language, setLanguage] = useState("EN");

  const goTo = (path) => {
    window.location.hash = path;
  };

  const handleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "हिं" : "EN"));
  };

  return (
    <div className="min-h-screen bg-[#091928] text-white">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[720px] overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#091928] via-[#142d3f] to-[#657077]" />

        <div className="absolute top-24 right-10 w-[400px] h-[400px] bg-[#B9E92F]/10 rounded-full blur-3xl" />

        <div className="absolute top-[30%] left-[55%] w-1 h-1 bg-white/50 rounded-full" />
        <div className="absolute top-[38%] left-[70%] w-1 h-1 bg-white/40 rounded-full" />
        <div className="absolute top-[27%] left-[82%] w-1 h-1 bg-white/30 rounded-full" />


        <div className="relative z-10 max-w-[1380px] mx-auto px-8 lg:px-16 pt-48 pb-28">

          <div className="grid lg:grid-cols-2 items-center gap-12">

            {/* TEXT */}

            <div>

              <p className="text-[#B9E92F] text-xl font-semibold mb-5">
                YojnaSetu
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-[68px] leading-[1.05] font-bold tracking-tight">

                Financial Aid
                <br />

                Made{" "}
                <span className="text-[#B9E92F]">
                  Easier
                </span>

                <br />

                And{" "}
                <span className="text-[#B9E92F]">
                  Simpler
                </span>

              </h1>

              <p className="mt-7 max-w-lg text-gray-300 text-base lg:text-lg leading-relaxed">
                YojnaSetu helps you discover suitable financial
                assistance schemes, understand your eligibility,
                calculate EMI and connect with nearby channel partners.
              </p>

              <button
                onClick={() => goTo("#/schemes")}
                className="mt-9 w-full max-w-[600px] h-14 rounded-full bg-[#B9E92F] text-[#091928] font-bold text-base lg:text-lg shadow-[0_5px_12px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition"
              >
                Search Financial Assistance Schemes
              </button>

            </div>


            {/* ILLUSTRATION */}

            <div className="relative h-[390px]">

              {/* CIRCLE */}

              <div className="absolute top-0 right-28 w-32 h-32 rounded-full bg-[#B9E92F]" />

              {/* RUPEE */}

              <div className="absolute top-28 right-48 w-12 h-12 rounded-full bg-white text-[#091928] flex items-center justify-center text-xl font-bold">
                ₹
              </div>

              {/* PHONE */}

              <div className="absolute top-20 right-16 w-10 h-20 rounded-md bg-white p-1">
                <div className="h-full rounded-sm bg-[#edf1df]" />
              </div>


              {/* LEFT HOUSE */}

              <div className="absolute bottom-20 left-12">

                <div className="relative w-28 h-20 bg-white">

                  <div className="absolute -top-14 left-0 border-l-[56px] border-r-[56px] border-b-[56px] border-l-transparent border-r-transparent border-b-[#B9E92F]" />

                  <div className="absolute bottom-0 left-10 w-5 h-11 bg-[#091928]" />

                  <div className="absolute bottom-10 right-4 w-3 h-3 bg-[#091928]" />

                </div>

              </div>


              {/* RIGHT BUILDING */}

              <div className="absolute bottom-20 right-2">

                <div className="relative w-32 h-20 bg-white">

                  <div className="absolute -top-14 left-0 border-l-[64px] border-r-[64px] border-b-[56px] border-l-transparent border-r-transparent border-b-white" />

                  <div className="absolute bottom-0 left-5 flex gap-3">

                    <span className="w-2 h-12 bg-[#B9E92F]" />
                    <span className="w-2 h-12 bg-[#B9E92F]" />
                    <span className="w-2 h-12 bg-[#B9E92F]" />

                  </div>

                </div>

              </div>


              {/* BRIDGE */}

              <div className="absolute bottom-32 left-28 right-20">

                <div className="h-2 bg-[#B9E92F] rounded-full" />

                <div className="border-t-2 border-dashed border-[#091928] mt-1" />

              </div>


              {/* GROUND */}

              <div className="absolute bottom-12 left-5 right-0 h-8 bg-[#091928] border-t-2 border-[#B9E92F]" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT YOJNASETU
      ===================================================== */}

      <section className="bg-white text-[#091928] py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-[#91b51c] font-semibold text-lg">
              About YojnaSetu
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-2">
              Financial Assistance,
              <br />
              Made Simple
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              YojnaSetu is a platform designed to make financial
              assistance schemes easier to discover and understand.
              We bring scheme discovery, personalised recommendations,
              EMI calculation and partner discovery together in one place.
            </p>

          </div>


          {/* FEATURE BOXES */}

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            <div className="rounded-3xl bg-[#effbd9] border border-[#d5ed8d] p-8">

              <div className="w-14 h-14 rounded-2xl bg-[#B9E92F] flex items-center justify-center text-2xl">
                🔎
              </div>

              <h3 className="text-xl font-bold mt-6">
                Easy Scheme Discovery
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                Find financial assistance schemes without having
                to search through multiple sources.
              </p>

            </div>


            <div className="rounded-3xl bg-[#effbd9] border border-[#d5ed8d] p-8">

              <div className="w-14 h-14 rounded-2xl bg-[#B9E92F] flex items-center justify-center text-2xl">
                🎯
              </div>

              <h3 className="text-xl font-bold mt-6">
                Personalised Recommendations
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                Get recommendations based on your profile,
                requirements and eligibility information.
              </p>

            </div>


            <div className="rounded-3xl bg-[#effbd9] border border-[#d5ed8d] p-8">

              <div className="w-14 h-14 rounded-2xl bg-[#B9E92F] flex items-center justify-center text-2xl">
                🤝
              </div>

              <h3 className="text-xl font-bold mt-6">
                Trusted Partner Connection
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                Find suitable channel partners and know where
                to take the next step with your application.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WEBSITE FEATURES
      ===================================================== */}

      <section className="bg-[#edf9d4] text-[#091928] py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <p className="text-[#8ba918] font-semibold">
              Our Features
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-2">
              Everything You Need
            </h2>

            <p className="text-gray-600 mt-4">
              One platform for your financial assistance journey.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">

            {/* SEARCH */}

            <button
              onClick={() => goTo("#/schemes")}
              className="text-left bg-white rounded-3xl p-7 border border-[#d5ed8d] hover:-translate-y-2 hover:shadow-xl transition"
            >

              <div className="text-3xl">
                🔍
              </div>

              <h3 className="font-bold text-lg mt-5">
                Search Schemes
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Search and explore financial assistance schemes
                available for different requirements.
              </p>

              <span className="inline-block mt-5 text-[#7e9f10] text-sm font-semibold">
                Explore →
              </span>

            </button>


            {/* RECOMMENDATION */}

            <button
              onClick={() => goTo("#/recommended")}
              className="text-left bg-white rounded-3xl p-7 border border-[#d5ed8d] hover:-translate-y-2 hover:shadow-xl transition"
            >

              <div className="text-3xl">
                🎯
              </div>

              <h3 className="font-bold text-lg mt-5">
                Scheme Recommendation
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Provide your information and discover schemes
                that may suit your needs.
              </p>

              <span className="inline-block mt-5 text-[#7e9f10] text-sm font-semibold">
                Get Started →
              </span>

            </button>


            {/* EMI */}

            <button
              onClick={() => goTo("#/emi")}
              className="text-left bg-white rounded-3xl p-7 border border-[#d5ed8d] hover:-translate-y-2 hover:shadow-xl transition"
            >

              <div className="text-3xl">
                🧮
              </div>

              <h3 className="font-bold text-lg mt-5">
                EMI Calculator
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Estimate your repayment amount and understand
                your financial commitment.
              </p>

              <span className="inline-block mt-5 text-[#7e9f10] text-sm font-semibold">
                Calculate →
              </span>

            </button>


            {/* PARTNERS */}

            <button
              onClick={() => goTo("#/partners")}
              className="text-left bg-white rounded-3xl p-7 border border-[#d5ed8d] hover:-translate-y-2 hover:shadow-xl transition"
            >

              <div className="text-3xl">
                📍
              </div>

              <h3 className="font-bold text-lg mt-5">
                Find Partners
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Locate nearby channel partners who can help
                you proceed further.
              </p>

              <span className="inline-block mt-5 text-[#7e9f10] text-sm font-semibold">
                Find Nearby →
              </span>

            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="bg-white text-[#091928] py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-[#8ba918] font-semibold">
              Simple & Transparent
            </p>

            <h2 className="text-4xl font-bold mt-2">
              How YojnaSetu Helps You
            </h2>

          </div>


          <div className="grid md:grid-cols-4 gap-6">

            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-full bg-[#B9E92F] flex items-center justify-center font-bold text-xl">
                01
              </div>

              <h3 className="font-bold mt-5">
                Tell Us Your Need
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Share your basic requirements.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-full bg-[#B9E92F] flex items-center justify-center font-bold text-xl">
                02
              </div>

              <h3 className="font-bold mt-5">
                Discover Schemes
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Explore suitable assistance schemes.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-full bg-[#B9E92F] flex items-center justify-center font-bold text-xl">
                03
              </div>

              <h3 className="font-bold mt-5">
                Understand Your Options
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Compare information and calculate EMI.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto w-16 h-16 rounded-full bg-[#B9E92F] flex items-center justify-center font-bold text-xl">
                04
              </div>

              <h3 className="font-bold mt-5">
                Connect & Proceed
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                Find a suitable partner for the next step.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#091928] py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl lg:text-5xl font-bold">
            Start Your Financial Assistance Journey
          </h2>

          <p className="text-gray-300 mt-5">
            Find the right scheme, understand your options
            and take the next step with confidence.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">

            <button
              onClick={() => goTo("#/schemes")}
              className="px-9 py-4 rounded-full bg-[#B9E92F] text-[#091928] font-bold hover:scale-105 transition"
            >
              Explore Schemes
            </button>

            <button
              onClick={() => goTo("#/auth")}
              className="px-9 py-4 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-[#091928] transition"
            >
              Create Account
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#061522]">

        <div className="max-w-6xl mx-auto px-6 py-12">

          <div className="grid md:grid-cols-2 gap-10">

            <div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl border-2 border-[#B9E92F] flex items-center justify-center">

                  <span className="text-[#B9E92F] font-bold">
                    YS
                  </span>

                </div>

                <span className="text-2xl font-bold">
                  YojnaSetu
                </span>

              </div>

              <p className="text-gray-400 text-sm max-w-md mt-5 leading-relaxed">
                Designed to make financial assistance easier
                to discover, understand and access.
              </p>

            </div>


            <div className="md:text-right">

              <h3 className="text-xl font-semibold">
                Contact Info
              </h3>

              <div className="w-40 h-px bg-white/70 md:ml-auto mt-3 mb-5" />

              <p className="text-gray-300 text-sm">
                ☎ 1800-11-2026
              </p>

              <p className="text-gray-300 text-sm mt-3">
                ✉ support@yojnasetu.gov.in
              </p>

              <p className="text-gray-300 text-sm mt-3">
                Ministry of Social Justice & Empowerment,
                New Delhi, India
              </p>

            </div>

          </div>

        </div>


        <div className="border-t border-white/60 py-4 text-center">

          <p className="text-gray-400 text-xs">
            © Copyright - YojnaSetu 2026. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}