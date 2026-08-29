import React from "react";

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-[#091928]
        text-white
        font-[Inter,'Segoe_UI',Roboto,Arial,sans-serif]
      "
    >
      {/* ================= MAIN FOOTER ================= */}

      <div
        className="
          min-h-[245px]
          px-[46px]
          pt-8
          pb-7
          flex
          justify-between
          gap-[60px]

          max-[800px]:px-[30px]
          max-[800px]:pt-[30px]
          max-[800px]:pb-[25px]
          max-[800px]:gap-[30px]

          max-[600px]:flex-col
          max-[600px]:px-[25px]
          max-[600px]:py-[30px]
          max-[600px]:gap-[35px]
        "
      >
        {/* ================= LEFT SECTION ================= */}

        <div
          className="
            flex
            flex-col
            min-w-[45%]

            max-[600px]:min-w-full
          "
        >
          {/* BRAND */}

          <div
            className="
              flex
              items-center
              gap-3
              text-[18px]
              font-bold
            "
          >
            <img
              src="/logo.png"
              alt="YojnaSetu Logo"
              className="
                w-[55px]
                h-[55px]
                object-contain
                block
              "
            />

            <span>YojnaSetu</span>
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              m-[19px_0_0]
              text-[12px]
              leading-[1.25]
              font-medium
              text-white
            "
          >
            Designed to eliminate financial
            <br />
            misrepresentation and opaque approvals
            <br />
            in welfare distribution.
          </p>
        </div>

        {/* ================= RIGHT SECTION ================= */}

        <div
          className="
            min-w-[42%]
            pr-[42px]

            max-[800px]:pr-0

            max-[600px]:min-w-full
          "
        >
          <h3
            className="
              mt-[7px]
              mb-2
              text-center
              text-[16px]
              font-semibold

              max-[600px]:text-left
            "
          >
            Contact Info
          </h3>

          {/* LINE */}

          <div
            className="
              w-[155px]
              h-[2px]
              mx-auto
              mb-[14px]
              bg-white

              max-[600px]:ml-0
              max-[600px]:mr-0
            "
          />

          {/* CONTACT */}

          <div
            className="
              flex
              flex-col
              gap-[9px]
            "
          >
            {/* PHONE */}

            <div
              className="
                flex
                items-start
                gap-[14px]
                text-[12px]
                leading-[1.25]
                font-medium

                max-[600px]:text-[11px]
              "
            >
              <span
                className="
                  w-[15px]
                  shrink-0
                  text-center
                  text-[14px]
                "
              >
                ☎
              </span>

              <span>
                1800-11-2026 (Toll-Free, 9 AM - 6 PM IST)
              </span>
            </div>

            {/* EMAIL */}

            <div
              className="
                flex
                items-start
                gap-[14px]
                text-[12px]
                leading-[1.25]
                font-medium

                max-[600px]:text-[11px]
              "
            >
              <span
                className="
                  w-[15px]
                  shrink-0
                  text-center
                  text-[14px]
                "
              >
                ✉
              </span>

              <span>
                support@yojnasetu.gov.in
              </span>
            </div>

            {/* ADDRESS */}

            <div
              className="
                flex
                items-start
                gap-[14px]
                text-[12px]
                leading-[1.25]
                font-medium

                max-[600px]:text-[11px]
              "
            >
              <span
                className="
                  w-[15px]
                  shrink-0
                  text-center
                  text-[14px]
                "
              >
                ♙
              </span>

              <span>
                Ministry of Social Justice &amp;
                <br />
                Empowerment, New Delhi, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}

      <div
        className="
          min-h-[40px]
          border-t-[3px]
          border-white
          flex
          items-center
          justify-center
          text-center
          text-[11px]
          text-white

          max-[600px]:px-[15px]
          max-[600px]:py-3
          max-[600px]:text-[9px]
        "
      >
        © Copyright - YojnaSetu 2026. All Rights Reserved.
      </div>
    </footer>
  );
}