import React from "react";

export default function Footer() {
  const goTo = (path) => {
    window.location.hash = path;
    window.scrollTo(0, 0);
  };

  return (
    <footer className="w-full bg-[#091928] text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="mx-auto w-full max-w-[1380px] px-8 py-16 lg:px-12">

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* =================================================
              BRAND
              ================================================= */}

          <div className="lg:col-span-1">

            <button
              onClick={() => goTo("#/")}
              className="flex cursor-pointer items-center gap-4 border-none bg-transparent p-0 text-left"
            >
              <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/5">
                <img
                  src="/favicon.png"
                  alt="YojnaSetu Logo"
                  className="h-[58px] w-[58px] object-contain"
                />
              </div>

              <span className="text-[25px] font-bold tracking-tight">
                Yojna<span className="text-[#B9E92F]">Setu</span>
              </span>
            </button>

            <p className="mt-7 max-w-[310px] text-[14px] leading-7 text-white/65">
              YojnaSetu is designed to make financial assistance easier
              to discover, understand and access.
            </p>

            <p className="mt-5 max-w-[310px] text-[13px] leading-6 text-white/45">
              Connecting people with suitable financial assistance
              schemes and trusted channel partners.
            </p>

          </div>


          {/* =================================================
              QUICK LINKS
              ================================================= */}

          <div>

            <h3 className="text-[17px] font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-[2px] w-[55px] bg-[#B9E92F]" />

            <div className="mt-7 flex flex-col gap-4">

              <button
                onClick={() => goTo("#/home")}
                className="w-fit cursor-pointer border-none bg-transparent p-0 text-left text-[14px] text-white/65 transition hover:text-[#B9E92F]"
              >
                Home
              </button>

              <button
                onClick={() => goTo("#/schemes")}
                className="w-fit cursor-pointer border-none bg-transparent p-0 text-left text-[14px] text-white/65 transition hover:text-[#B9E92F]"
              >
                Search Schemes
              </button>

              <button
                onClick={() => goTo("#/recommended")}
                className="w-fit cursor-pointer border-none bg-transparent p-0 text-left text-[14px] text-white/65 transition hover:text-[#B9E92F]"
              >
                Recommended Schemes
              </button>

              <button
                onClick={() => goTo("#/emi")}
                className="w-fit cursor-pointer border-none bg-transparent p-0 text-left text-[14px] text-white/65 transition hover:text-[#B9E92F]"
              >
                EMI Calculator
              </button>

              <button
                onClick={() => goTo("#/partners")}
                className="w-fit cursor-pointer border-none bg-transparent p-0 text-left text-[14px] text-white/65 transition hover:text-[#B9E92F]"
              >
                Find Partners
              </button>

            </div>

          </div>


          {/* =================================================
              INFORMATION
              ================================================= */}

          <div>

            <h3 className="text-[17px] font-bold text-white">
              Information
            </h3>

            <div className="mt-3 h-[2px] w-[55px] bg-[#B9E92F]" />

            <div className="mt-7 flex flex-col gap-4">

              <button
                onClick={() => goTo("#/contact")}
                className="w-fit cursor-pointer border-none bg-transparent p-0 text-left text-[14px] text-white/65 transition hover:text-[#B9E92F]"
              >
                Contact Us
              </button>

              <button
                onClick={() => goTo("#/privacy")}
                className="w-fit cursor-pointer border-none bg-transparent p-0 text-left text-[14px] text-white/65 transition hover:text-[#B9E92F]"
              >
                Privacy Policy
              </button>

              <button
                onClick={() => goTo("#/profile")}
                className="w-fit cursor-pointer border-none bg-transparent p-0 text-left text-[14px] text-white/65 transition hover:text-[#B9E92F]"
              >
                My Profile
              </button>

              <button
                onClick={() => goTo("#/auth")}
                className="w-fit cursor-pointer border-none bg-transparent p-0 text-left text-[14px] text-white/65 transition hover:text-[#B9E92F]"
              >
                Login / Sign Up
              </button>

            </div>

          </div>


          {/* =================================================
              CONTACT
              ================================================= */}

          <div>

            <h3 className="text-[17px] font-bold text-white">
              Contact Info
            </h3>

            <div className="mt-3 h-[2px] w-[55px] bg-[#B9E92F]" />

            <div className="mt-7 flex flex-col gap-5">

              {/* PHONE */}

              <div className="flex items-start gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B9E92F] text-[16px] text-[#091928]">
                  ☎
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                    Toll Free
                  </p>

                  <p className="mt-1 text-[14px] text-white/75">
                    1800-11-2026
                  </p>

                  <p className="mt-1 text-[12px] text-white/45">
                    9 AM - 6 PM IST
                  </p>
                </div>

              </div>


              {/* EMAIL */}

              <div className="flex items-start gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B9E92F] text-[16px] text-[#091928]">
                  ✉
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                    Email
                  </p>

                  <p className="mt-1 break-all text-[14px] text-white/75">
                    support@yojnasetu.gov.in
                  </p>
                </div>

              </div>


              {/* ADDRESS */}

              <div className="flex items-start gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B9E92F] text-[16px] text-[#091928]">
                  ♙
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                    Office
                  </p>

                  <p className="mt-1 text-[14px] leading-6 text-white/75">
                    Ministry of Social Justice &
                    <br />
                    Empowerment
                    <br />
                    New Delhi, India
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
          ===================================================== */}

      <div className="border-t border-white/15">

        <div
          className="
            mx-auto
            flex
            min-h-[65px]
            max-w-[1380px]
            items-center
            justify-between
            gap-5
            px-8
            text-[12px]
            text-white/45
            lg:px-12
            max-[650px]:flex-col
            max-[650px]:justify-center
            max-[650px]:py-5
          "
        >

          <p className="m-0 text-center">
            © Copyright - YojnaSetu 2026. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">

            <button
              onClick={() => goTo("#/privacy")}
              className="cursor-pointer border-none bg-transparent p-0 text-white/45 transition hover:text-[#B9E92F]"
            >
              Privacy Policy
            </button>

            <span className="text-white/20">|</span>

            <button
              onClick={() => goTo("#/contact")}
              className="cursor-pointer border-none bg-transparent p-0 text-white/45 transition hover:text-[#B9E92F]"
            >
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}