import React from "react";

export default function PrivacyPolicy() {
  const go = (path) => {
    window.location.hash = path;
  };

  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#091928]">
      {/* ================= NAVBAR ================= */}

      <header
        className="
          h-[75px]
          px-[7%]
          bg-[#091928]
          text-white
          flex
          items-center
          justify-between
        "
      >
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
              px-[9px]
              py-[5px]
              rounded-lg
              mr-2
            "
          >
            ✓
          </b>
          YojnaSetu
        </div>

        <button
          onClick={() => go("/home")}
          className="
            border-0
            bg-[#b9e92f]
            text-[#091928]
            px-5
            py-[10px]
            rounded-[22px]
            font-bold
            cursor-pointer
            hover:brightness-95
            transition
          "
        >
          Home
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main
        className="
          max-w-[900px]
          mx-auto
          px-[25px]
          py-[60px]
          max-[600px]:px-5
          max-[600px]:py-10
        "
      >
        {/* TITLE */}

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
              text-[44px]
              font-bold
              my-2
              max-[600px]:text-[34px]
            "
          >
            Privacy Policy
          </h1>

          <span className="text-[#68747b] text-sm">
            Last updated: August 2026
          </span>
        </div>

        {/* ================= PRIVACY CARD ================= */}

        <article
          className="
            bg-white
            mt-[35px]
            p-[35px]
            rounded-[20px]
            shadow-[0_4px_15px_rgba(0,0,0,0.12)]
            max-[600px]:p-5
          "
        >
          {/* SECTION 1 */}

          <section
            className="
              pt-[10px]
              pb-[25px]
              mb-5
              border-b
              border-[#d5d9d3]
              last:border-0
            "
          >
            <h2 className="text-[20px] font-bold mt-0">
              1. Information We Collect
            </h2>

            <p
              className="
                text-[#68747b]
                leading-[1.7]
                text-[14px]
              "
            >
              YojnaSetu may collect information required to understand your
              financial requirements, eligibility and preferences for scheme
              recommendations.
            </p>
          </section>

          {/* SECTION 2 */}

          <section
            className="
              pt-[10px]
              pb-[25px]
              mb-5
              border-b
              border-[#d5d9d3]
              last:border-0
            "
          >
            <h2 className="text-[20px] font-bold mt-0">
              2. How We Use Information
            </h2>

            <p
              className="
                text-[#68747b]
                leading-[1.7]
                text-[14px]
              "
            >
              Information may be used to provide scheme recommendations,
              financial calculations, partner discovery and improve the platform
              experience.
            </p>
          </section>

          {/* SECTION 3 */}

          <section
            className="
              pt-[10px]
              pb-[25px]
              mb-5
              border-b
              border-[#d5d9d3]
              last:border-0
            "
          >
            <h2 className="text-[20px] font-bold mt-0">3. Data Security</h2>

            <p
              className="
                text-[#68747b]
                leading-[1.7]
                text-[14px]
              "
            >
              We take reasonable measures to protect information handled by the
              platform against unauthorized access or misuse.
            </p>
          </section>

          {/* SECTION 4 */}

          <section
            className="
              pt-[10px]
              pb-[25px]
              mb-5
              border-b
              border-[#d5d9d3]
              last:border-0
            "
          >
            <h2 className="text-[20px] font-bold mt-0">
              4. Third-Party Services
            </h2>

            <p
              className="
                text-[#68747b]
                leading-[1.7]
                text-[14px]
              "
            >
              Mapping, authentication or other services may be integrated into
              YojnaSetu where required for platform functionality.
            </p>
          </section>

          {/* SECTION 5 */}

          <section
            className="
              pt-[10px]
              pb-[25px]
              mb-5
              border-b
              border-[#d5d9d3]
              last:border-0
            "
          >
            <h2 className="text-[20px] font-bold mt-0">5. Contact</h2>

            <p
              className="
                text-[#68747b]
                leading-[1.7]
                text-[14px]
              "
            >
              For privacy-related questions, please contact the YojnaSetu
              support team.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
