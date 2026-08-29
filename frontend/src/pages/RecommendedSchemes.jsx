import React from "react";
import Footer from "../components/Footer";

export default function RecommendedSchemes() {
  const goTo = (path) => {
    window.location.hash = path;
  };

  return (
    <main
      className="
        w-full
        min-h-screen
        bg-[#091928]
        text-[#091928]
        font-[Inter,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]
      "
    >
      {/* ======================================================
          SCHEME CONTENT
          ====================================================== */}

      <section
        className="
          relative
          w-full
          min-h-[540px]
          px-[7%]
          pt-5
          pb-10
          overflow-hidden

          bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.04)_25%,transparent_48%),linear-gradient(180deg,#091928_0%,#172c3c_28%,#68747a_68%,#e9e9e5_100%)]

          max-[800px]:px-[5%]

          max-[600px]:min-h-auto
          max-[600px]:px-[15px]
          max-[600px]:pt-[15px]
          max-[600px]:pb-[35px]
        "
      >
        {/* ================= TOP LOGO + LANGUAGE ================= */}

        <div
          className="
            w-full
            flex
            items-center
            justify-between
          "
        >
          <button
            className="
              w-12
              h-12
              p-0
              border-0
              bg-transparent
              cursor-pointer

              max-[600px]:w-10
              max-[600px]:h-10
            "
            onClick={() => goTo("#/")}
            aria-label="YojnaSetu Home"
          >
            <img
              src="/logo.png"
              alt="YojnaSetu"
              className="
                w-full
                h-full
                object-contain
              "
            />
          </button>

          <button
            className="
              flex
              items-center
              gap-[2px]
              p-0
              border-0
              bg-transparent
              text-white
              text-[15px]
              cursor-pointer
              transition-transform
              duration-150
              hover:-translate-y-px
            "
            onClick={() => alert("Language selection")}
            aria-label="Change language"
          >
            <span
              className="
                border-[1.5px]
                border-white
                rounded-[3px]
                px-[3px]
                text-[11px]
              "
            >
              文
            </span>

            <span
              className="
                -ml-[3px]
                text-[12px]
              "
            >
              अ
            </span>
          </button>
        </div>

        {/* ================= TITLE ================= */}

        <h1
          className="
            m-[20px_0]
            text-center
            text-[#B9E92F]
            text-[clamp(25px,3vw,39px)]
            leading-[1.1]
            font-bold

            max-[600px]:mt-[18px]
          "
        >
          Recommended Schemes
        </h1>

        {/* ================= COMPARE BUTTON ================= */}

        <div
          className="
            w-full
            flex
            justify-end
            pr-[3%]

            max-[600px]:pr-[2%]
          "
        >
          <button
            className="
              min-w-[125px]
              h-[31px]
              px-4
              border-0
              rounded-[18px]
              bg-white
              text-[#24323c]
              text-[10px]
              font-bold
              cursor-pointer
              shadow-[0_2px_5px_rgba(0,0,0,0.15)]
              transition-all
              duration-150
              hover:-translate-y-px
              hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]

              max-[600px]:min-w-[110px]
              max-[600px]:h-7
              max-[600px]:text-[9px]
            "
            onClick={() => alert("Compare Schemes")}
          >
            Compare Schemes
          </button>
        </div>

        {/* ================= SCHEME 1 ================= */}

        <SchemeCard
          number="#1"
          title="Scheme 1"
          description="Here goes the scheme description."
          goTo={goTo}
        />

        {/* ================= SCHEME 2 ================= */}

        <SchemeCard
          number="#2"
          title="Scheme 2"
          description="Here goes the scheme description."
          goTo={goTo}
        />
      </section>

      {/* ================= FOOTER ================= */}

      <Footer />
    </main>
  );
}

/* ============================================================
   REUSABLE SCHEME CARD
   ============================================================ */

function SchemeCard({ number, title, description, goTo }) {
  return (
    <article
      className="
        relative
        w-[min(900px,88%)]
        min-h-[110px]
        mx-auto
        mt-4
        px-[14px]
        pt-[13px]
        pb-[10px]

        flex
        items-start
        gap-3

        rounded-[11px]
        bg-[#edf9d4]

        shadow-[0_3px_8px_rgba(0,0,0,0.08)]

        transition-all
        duration-150

        hover:-translate-y-px
        hover:shadow-[0_5px_12px_rgba(0,0,0,0.13)]

        max-[800px]:w-[92%]

        max-[600px]:w-full
        max-[600px]:min-h-[115px]
        max-[600px]:pr-[38px]
      "
    >
      {/* NUMBER */}

      <div
        className="
          shrink-0
          text-[25px]
          leading-none
          font-medium
          text-[#30383d]
          pt-px

          max-[600px]:text-[22px]
        "
      >
        {number}
      </div>

      {/* CONTENT */}

      <div className="flex-1 min-w-0">
        <h2
          className="
            m-0
            mb-[3px]
            text-[13px]
            font-bold
            text-[#18242b]
          "
        >
          {title}
        </h2>

        <p
          className="
            m-0
            text-[9px]
            leading-[1.3]
            text-[#28343b]
          "
        >
          {description}
        </p>

        {/* ACTION BUTTONS */}

        <div
          className="
            mt-[10px]
            flex
            items-center
            gap-9

            max-[800px]:gap-5

            max-[600px]:gap-[10px]
            max-[600px]:flex-wrap
          "
        >
          <button
            className="
              w-[105px]
              h-[23px]
              border-0
              rounded-[15px]
              bg-[#091928]
              text-white
              text-[9px]
              font-semibold
              cursor-pointer

              transition-all
              duration-150

              hover:-translate-y-px
              hover:brightness-[1.04]

              max-[600px]:w-[100px]
            "
            onClick={() => goTo("#/emi")}
          >
            Calculate EMI
          </button>

          <button
            className="
              w-[245px]
              h-[23px]
              border-0
              rounded-[15px]
              bg-[#B9E92F]
              text-[#091928]
              text-[9px]
              font-semibold
              cursor-pointer

              transition-all
              duration-150

              hover:-translate-y-px
              hover:brightness-[1.04]

              max-[800px]:w-[210px]

              max-[600px]:w-[190px]
            "
            onClick={() => goTo("#/partners")}
          >
            Find suitable Channel Partners
          </button>
        </div>
      </div>

      {/* BOOKMARK */}

      <button
        className="
          absolute
          top-[10px]
          right-[17px]

          w-5
          h-[25px]
          p-0

          border-0
          bg-transparent

          text-[#68747a]
          text-[22px]
          leading-none

          cursor-pointer

          rotate-180

          transition-all
          duration-150

          hover:text-[#091928]
          hover:rotate-180
          hover:scale-[1.08]
        "
        onClick={() => alert("Scheme saved")}
        aria-label={`Bookmark ${title}`}
      >
        ♧
      </button>
    </article>
  );
}
