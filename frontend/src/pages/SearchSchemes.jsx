import React, { useState } from "react";

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
    <div
      className="
        min-h-screen
        bg-[#eef2e3]
        text-[#091928]
      "
    >
      {/* ================= NAVBAR ================= */}

      <header
        className="
          h-[75px]
          px-[6%]
          bg-[#091928]
          flex
          items-center
          justify-between
          text-white
        "
      >
        {/* LOGO */}

        <div
          onClick={() => go("/")}
          className="
            font-extrabold
            cursor-pointer
            flex
            items-center
          "
        >
          <b
            className="
              text-[#b9e92f]
              border-2
              border-[#b9e92f]
              px-[10px]
              py-[6px]
              rounded-lg
              mr-2
            "
          >
            ✓
          </b>
          YojnaSetu
        </div>

        {/* NAV */}

        <nav
          className="
            border
            border-white/60
            rounded-[25px]
            p-[3px]
            flex
            max-[800px]:hidden
          "
        >
          <button
            onClick={() => go("/home")}
            className="
              border-0
              bg-transparent
              text-white
              px-[15px]
              py-[9px]
              rounded-[20px]
              text-[12px]
              cursor-pointer
              hover:bg-white/[0.13]
            "
          >
            Home
          </button>

          <button
            className="
              border-0
              bg-white/[0.13]
              text-white
              px-[15px]
              py-[9px]
              rounded-[20px]
              text-[12px]
              cursor-pointer
            "
          >
            Search Schemes
          </button>

          <button
            onClick={() => go("/emi")}
            className="
              border-0
              bg-transparent
              text-white
              px-[15px]
              py-[9px]
              rounded-[20px]
              text-[12px]
              cursor-pointer
              hover:bg-white/[0.13]
            "
          >
            Calculate EMI
          </button>

          <button
            onClick={() => go("/partners")}
            className="
              border-0
              bg-transparent
              text-white
              px-[15px]
              py-[9px]
              rounded-[20px]
              text-[12px]
              cursor-pointer
              hover:bg-white/[0.13]
            "
          >
            Find Partners
          </button>
        </nav>

        {/* LOGIN */}

        <button
          onClick={() => go("/auth")}
          className="
            bg-[#b9e92f]
            border-0
            px-[18px]
            py-[9px]
            rounded-[20px]
            text-[#091928]
            font-bold
            cursor-pointer
            hover:brightness-95
            transition
          "
        >
          Login
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main
        className="
          max-w-[1150px]
          mx-auto
          px-[25px]
          py-[60px]
          max-[600px]:px-5
          max-[600px]:py-10
        "
      >
        {/* HEADING */}

        <div>
          <p
            className="
              m-0
              text-[#8daf17]
              font-extrabold
              tracking-[2px]
            "
          >
            YOJNASETU
          </p>

          <h1
            className="
              text-[42px]
              font-bold
              my-2
              max-[600px]:text-[32px]
            "
          >
            Find Financial Assistance
          </h1>

          <span className="text-[#68747b]">
            Search and explore schemes according to your financial needs.
          </span>
        </div>

        {/* ================= SEARCH ================= */}

        <div
          className="
            my-[35px]
            flex
            gap-3
            max-[600px]:flex-col
          "
        >
          <input
            placeholder="Search schemes, business, education..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              flex-1
              border
              border-[#d5d9d3]
              bg-white
              px-[17px]
              py-[14px]
              rounded-xl
              outline-none
              focus:border-[#91b91b]
              focus:ring-2
              focus:ring-[#b9e92f]/30
            "
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="
              border
              border-[#d5d9d3]
              bg-white
              px-[17px]
              py-[14px]
              rounded-xl
              outline-none
              cursor-pointer
              focus:border-[#91b91b]
            "
          >
            <option>All</option>
            <option>Business</option>
            <option>Education</option>
          </select>
        </div>

        {/* ================= SCHEME GRID ================= */}

        <div
          className="
            grid
            grid-cols-3
            gap-5
            max-[800px]:grid-cols-1
          "
        >
          {filtered.map((scheme) => (
            <article
              key={scheme.title}
              className="
                bg-white
                rounded-[18px]
                p-[25px]
                shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                transition
                duration-150
                hover:-translate-y-1
                hover:shadow-[0_7px_18px_rgba(0,0,0,0.15)]
              "
            >
              {/* CARD TOP */}

              <div
                className="
                  flex
                  justify-between
                  items-center
                "
              >
                <span
                  className="
                    text-[#63710d]
                    bg-[#edf7c9]
                    px-[10px]
                    py-[5px]
                    rounded-[20px]
                    text-[11px]
                    font-bold
                  "
                >
                  {scheme.type}
                </span>

                <b
                  className="
                    bg-[#b9e92f]
                    w-[30px]
                    h-[30px]
                    grid
                    place-items-center
                    rounded-full
                    text-[#091928]
                  "
                >
                  ✓
                </b>
              </div>

              {/* TITLE */}

              <h2
                className="
                  text-[21px]
                  font-bold
                  mt-[22px]
                  mb-0
                "
              >
                {scheme.title}
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  text-[#68747b]
                  leading-[1.5]
                  text-[14px]
                  mt-3
                "
              >
                {scheme.text}
              </p>

              {/* INFO */}

              <div
                className="
                  my-[25px]
                  grid
                  gap-3
                "
              >
                <div
                  className="
                    p-[10px]
                    bg-[#f4f6ef]
                    rounded-[9px]
                  "
                >
                  <small
                    className="
                      block
                      text-[#7d878d]
                      text-[11px]
                    "
                  >
                    Loan Amount
                  </small>

                  <strong className="block">{scheme.amount}</strong>
                </div>

                <div
                  className="
                    p-[10px]
                    bg-[#f4f6ef]
                    rounded-[9px]
                  "
                >
                  <small
                    className="
                      block
                      text-[#7d878d]
                      text-[11px]
                    "
                  >
                    Interest
                  </small>

                  <strong className="block">{scheme.rate}</strong>
                </div>
              </div>

              {/* ELIGIBILITY */}

              <button
                onClick={() => go("/recommended")}
                className="
                  w-full
                  border-0
                  bg-[#091928]
                  text-white
                  py-3
                  rounded-[22px]
                  font-semibold
                  cursor-pointer
                  hover:bg-[#10283c]
                  transition
                "
              >
                Check Eligibility →
              </button>
            </article>
          ))}
        </div>

        {/* NO RESULTS */}

        {filtered.length === 0 && (
          <div
            className="
              text-center
              py-16
              text-[#68747b]
            "
          >
            No schemes found.
          </div>
        )}
      </main>
    </div>
  );
}
