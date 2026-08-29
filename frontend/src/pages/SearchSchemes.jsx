import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const schemes = [
  {
    title: "Micro Finance Scheme",
    type: "Business",
    amount: "Up to ₹1.40 Lakh",
    rate: "Concessional Interest",
    text: "Suitable for small business and micro-enterprise requirements.",
  },
  {
    title: "Term Loan Scheme",
    type: "Business",
    amount: "Up to ₹50 Lakh",
    rate: "Concessional Interest",
    text: "Designed for larger business and project requirements.",
  },
  {
    title: "Educational Loan Scheme",
    type: "Education",
    amount: "As per eligibility",
    rate: "Concessional Interest",
    text: "Financial support for eligible higher education requirements.",
  },
];

export default function SearchSchemes() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");

  const filtered = schemes.filter((scheme) => {
    const search =
      scheme.title.toLowerCase().includes(query.toLowerCase()) ||
      scheme.text.toLowerCase().includes(query.toLowerCase());

    return search && (type === "All" || scheme.type === type);
  });

  const go = (path) => {
    window.location.hash = path;
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
            max-w-[1150px]
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
            Find Financial Assistance
          </h1>

          <p
            className="
              mt-4
              max-w-[650px]
              text-sm
              leading-relaxed
              text-white/70
              sm:text-base
            "
          >
            Search and explore schemes according to your financial needs.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN SEARCH AREA
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
        <div className="mx-auto max-w-[1150px]">
          {/* =================================================
              SEARCH BOX
          ================================================= */}
          <section
            className="
              rounded-[28px]
              border
              border-[#e0e6d8]
              bg-white
              p-5
              shadow-[0_10px_30px_rgba(9,25,40,0.08)]
              sm:p-7
              lg:p-8
            "
          >
            <div className="mb-5">
              <p className="m-0 text-sm font-semibold text-[#8daf17]">
                SCHEME DISCOVERY
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#091928] sm:text-3xl">
                What are you looking for?
              </h2>
            </div>

            <div
              className="
                flex
                gap-3
                max-[650px]:flex-col
              "
            >
              {/* SEARCH INPUT */}
              <div className="relative flex-1">
                <span
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-lg
                  "
                >
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search schemes, business, education..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="
                    block
                    w-full
                    rounded-xl
                    border
                    border-[#d5d9d3]
                    bg-[#fafcf7]
                    py-3.5
                    pl-11
                    pr-4
                    text-sm
                    text-[#091928]
                    outline-none
                    transition
                    placeholder:text-[#9aa3a7]
                    focus:border-[#B9E92F]
                    focus:ring-2
                    focus:ring-[#B9E92F]/30
                  "
                />
              </div>

              {/* CATEGORY SELECT */}
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="
                  min-w-[170px]
                  cursor-pointer
                  rounded-xl
                  border
                  border-[#d5d9d3]
                  bg-[#fafcf7]
                  px-4
                  py-3.5
                  text-sm
                  text-[#091928]
                  outline-none
                  transition
                  focus:border-[#B9E92F]
                  focus:ring-2
                  focus:ring-[#B9E92F]/30
                  max-[650px]:w-full
                "
              >
                <option value="All">All Categories</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
              </select>
            </div>

            {/* RESULT COUNT */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="m-0 text-sm text-[#68747b]">
                Showing{" "}
                <span className="font-bold text-[#091928]">
                  {filtered.length}
                </span>{" "}
                {filtered.length === 1 ? "scheme" : "schemes"}
              </p>

              {(query || type !== "All") && (
                <button
                  onClick={() => {
                    setQuery("");
                    setType("All");
                  }}
                  className="
                    rounded-full
                    border
                    border-[#d5d9d3]
                    bg-white
                    px-4
                    py-1.5
                    text-xs
                    font-semibold
                    text-[#68747b]
                    transition
                    hover:border-[#B9E92F]
                    hover:text-[#091928]
                    cursor-pointer
                  "
                >
                  Clear Filters
                </button>
              )}
            </div>
          </section>

          {/* =================================================
              SCHEME GRID
          ================================================= */}
          <div
            className="
              mt-8
              grid
              grid-cols-3
              gap-6
              max-[950px]:grid-cols-2
              max-[650px]:grid-cols-1
            "
          >
            {filtered.map((scheme) => (
              <article
                key={scheme.title}
                className="
                  group
                  flex
                  flex-col
                  rounded-[24px]
                  border
                  border-[#e0e6d8]
                  bg-white
                  p-6
                  shadow-[0_8px_25px_rgba(9,25,40,0.07)]
                  transition
                  duration-200
                  hover:-translate-y-1.5
                  hover:shadow-[0_15px_32px_rgba(9,25,40,0.11)]
                "
              >
                {/* CARD TOP */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="
                      rounded-full
                      border
                      border-[#d5ed8d]
                      bg-[#effbd9]
                      px-3
                      py-1.5
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#63710d]
                    "
                  >
                    {scheme.type}
                  </span>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B9E92F]
                      font-bold
                      text-[#091928]
                    "
                  >
                    ✓
                  </div>
                </div>

                {/* TITLE */}
                <h2
                  className="
                    mt-6
                    text-[21px]
                    font-bold
                    leading-snug
                    text-[#091928]
                  "
                >
                  {scheme.title}
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-3
                    min-h-[65px]
                    text-sm
                    leading-[1.7]
                    text-[#68747b]
                  "
                >
                  {scheme.text}
                </p>

                {/* INFO */}
                <div className="my-6 grid gap-3">
                  {/* LOAN AMOUNT */}
                  <div
                    className="
                      rounded-xl
                      border
                      border-[#e6e9e2]
                      bg-[#f7f9f3]
                      p-3
                    "
                  >
                    <small
                      className="
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-wide
                        text-[#7d878d]
                      "
                    >
                      Loan Amount
                    </small>

                    <strong className="mt-1 block text-sm text-[#091928]">
                      {scheme.amount}
                    </strong>
                  </div>

                  {/* INTEREST */}
                  <div
                    className="
                      rounded-xl
                      border
                      border-[#e6e9e2]
                      bg-[#f7f9f3]
                      p-3
                    "
                  >
                    <small
                      className="
                        block
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-wide
                        text-[#7d878d]
                      "
                    >
                      Interest
                    </small>

                    <strong className="mt-1 block text-sm text-[#091928]">
                      {scheme.rate}
                    </strong>
                  </div>
                </div>

                {/* ELIGIBILITY */}
                <button
                  onClick={() => go("/recommended")}
                  className="
                    mt-auto
                    w-full
                    rounded-full
                    border-0
                    bg-[#091928]
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#142d3f]
                    hover:shadow-md
                    cursor-pointer
                  "
                >
                  Check Eligibility →
                </button>
              </article>
            ))}
          </div>

          {/* =================================================
              NO RESULTS
          ================================================= */}
          {filtered.length === 0 && (
            <div
              className="
                mt-8
                rounded-[24px]
                border
                border-[#e0e6d8]
                bg-white
                px-6
                py-16
                text-center
                shadow-[0_8px_25px_rgba(9,25,40,0.06)]
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#effbd9]
                  text-2xl
                "
              >
                🔍
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#091928]">
                No schemes found
              </h3>

              <p className="mt-2 text-sm text-[#68747b]">
                Try a different search term or category.
              </p>

              <button
                onClick={() => {
                  setQuery("");
                  setType("All");
                }}
                className="
                  mt-5
                  rounded-full
                  bg-[#B9E92F]
                  px-6
                  py-2.5
                  text-sm
                  font-bold
                  text-[#091928]
                  transition
                  hover:brightness-95
                  cursor-pointer
                "
              >
                Reset Search
              </button>
            </div>
          )}

          {/* =================================================
              HELPFUL NOTE
          ================================================= */}
          <div
            className="
              mt-10
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
              Explore the schemes that match your requirement and check your
              eligibility before proceeding.
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