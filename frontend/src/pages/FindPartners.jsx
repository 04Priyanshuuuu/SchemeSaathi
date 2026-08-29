import React from "react";
import Footer from "../components/Footer";

export default function FindPartners() {
  const goTo = (path) => {
    window.location.hash = path;
  };

  return (
    <main className="min-h-screen w-full bg-[#091928] font-['Inter','Segoe_UI',Roboto,Helvetica,Arial,sans-serif] text-[#091928]">
      {/* ================= PARTNER SECTION ================= */}
      <section
        className="
          relative min-h-[545px] w-full overflow-hidden
          bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.04)_25%,transparent_48%),linear-gradient(180deg,#091928_0%,#132a3b_30%,#69747a_72%,#e9e9e5_100%)]
          px-[7%] pb-[42px] pt-[18px]
          max-[800px]:px-[5%]
          max-[600px]:min-h-0
          max-[600px]:px-[15px]
          max-[600px]:pb-[35px]
          max-[600px]:pt-[15px]
        "
      >
        {/* TOP */}
        <div className="flex w-full items-center justify-between">
          <button
            className="h-12 w-12 cursor-pointer border-0 bg-transparent p-0 max-[600px]:h-10 max-[600px]:w-10"
            onClick={() => goTo("#/")}
            aria-label="YojnaSetu Home"
          >
            <img
              src="/logo.png"
              alt="YojnaSetu"
              className="h-full w-full object-contain"
            />
          </button>

          {/* LANGUAGE */}
          <button
            className="flex cursor-pointer items-center gap-[2px] border-0 bg-transparent p-0 text-white transition-transform hover:-translate-y-px"
            onClick={() => alert("Language selection")}
            aria-label="Change language"
          >
            <span className="rounded-[3px] border-[1.5px] border-white px-[3px] text-[10px]">
              文
            </span>

            <span className="-ml-[3px] text-xs">अ</span>
          </button>
        </div>

        {/* TITLE */}
        <h1
          className="
            mx-auto mb-10 mt-[18px]
            text-center text-[clamp(22px,2.6vw,35px)]
            font-bold leading-[1.15] text-[#B9E92F]
            max-[600px]:mb-[30px]
            max-[600px]:text-2xl
          "
        >
          Find the nearest suitable Channel Partner
        </h1>

        {/* ================= PARTNER 1 ================= */}
        <article
          className="
            relative mx-auto mb-[22px]
            flex min-h-[95px] w-[min(900px,88%)]
            items-start gap-3
            rounded-[10px] bg-[#edf9d4]
            px-[14px] pb-[11px] pr-[43px] pt-[13px]
            shadow-[0_3px_8px_rgba(0,0,0,0.08)]
            transition-all duration-150
            hover:-translate-y-px
            hover:shadow-[0_5px_12px_rgba(0,0,0,0.14)]
            max-[800px]:w-[92%]
            max-[600px]:mb-[18px]
            max-[600px]:min-h-[105px]
            max-[600px]:pr-[38px]
          "
        >
          <div className="shrink-0 pt-px text-[25px] font-medium leading-none text-[#30383d] max-[600px]:text-[22px]">
            #1
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="mb-[2px] text-[13px] font-bold leading-[1.15] text-[#18242b]">
              Channel Partner 1
            </h2>

            <p className="m-0 text-[9px] leading-[1.3] text-[#28343b]">
              Address
            </p>

            <div className="mt-2 flex items-center gap-[50px] max-[800px]:gap-[25px] max-[600px]:flex-wrap max-[600px]:gap-[10px]">
              {/* Distance */}
              <button
                className="
                  h-[22px] w-[102px]
                  cursor-pointer rounded-[14px]
                  border border-[#091928]
                  bg-transparent
                  text-[9px] font-semibold text-[#091928]
                  transition-all
                  hover:bg-[#091928] hover:text-white
                  max-[600px]:w-[100px]
                "
                onClick={() => goTo("#/map")}
              >
                1.5 KM away
              </button>

              {/* Availability */}
              <button
                className="
                  h-[22px] w-[152px]
                  cursor-pointer rounded-[14px]
                  border border-[#091928]
                  bg-transparent
                  text-[9px] font-semibold text-[#64a900]
                  transition-all
                  hover:bg-[#B9E92F] hover:text-[#091928]
                  max-[600px]:w-[150px]
                "
                onClick={() => alert("Applications are being accepted")}
              >
                Accepting Applications
              </button>
            </div>
          </div>

          {/* Bookmark */}
          <button
            className="
              absolute right-[17px] top-[10px]
              h-[25px] w-5
              cursor-pointer
              border-0 bg-transparent p-0
              text-[21px] leading-none text-[#68747a]
              transition-all
              hover:scale-[1.08] hover:text-[#091928]
            "
            onClick={() => alert("Partner saved")}
            aria-label="Bookmark Channel Partner 1"
          >
            ♧
          </button>
        </article>

        {/* ================= PARTNER 2 ================= */}
        <article
          className="
            relative mx-auto mb-[22px]
            flex min-h-[95px] w-[min(900px,88%)]
            items-start gap-3
            rounded-[10px] bg-[#edf9d4]
            px-[14px] pb-[11px] pr-[43px] pt-[13px]
            shadow-[0_3px_8px_rgba(0,0,0,0.08)]
            transition-all duration-150
            hover:-translate-y-px
            hover:shadow-[0_5px_12px_rgba(0,0,0,0.14)]
            max-[800px]:w-[92%]
            max-[600px]:mb-[18px]
            max-[600px]:min-h-[105px]
            max-[600px]:pr-[38px]
          "
        >
          <div className="shrink-0 pt-px text-[25px] font-medium leading-none text-[#30383d] max-[600px]:text-[22px]">
            #2
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="mb-[2px] text-[13px] font-bold leading-[1.15] text-[#18242b]">
              Channel Partner 2
            </h2>

            <p className="m-0 text-[9px] leading-[1.3] text-[#28343b]">
              Address
            </p>

            <div className="mt-2 flex items-center gap-[50px] max-[800px]:gap-[25px] max-[600px]:flex-wrap max-[600px]:gap-[10px]">
              {/* Distance */}
              <button
                className="
                  h-[22px] w-[102px]
                  cursor-pointer rounded-[14px]
                  border border-[#091928]
                  bg-transparent
                  text-[9px] font-semibold text-[#091928]
                  transition-all
                  hover:bg-[#091928] hover:text-white
                  max-[600px]:w-[100px]
                "
                onClick={() => goTo("#/map")}
              >
                3 KM away
              </button>

              {/* Availability */}
              <button
                className="
                  h-[22px] w-[152px]
                  cursor-pointer rounded-[14px]
                  border border-[#091928]
                  bg-transparent
                  text-[9px] font-semibold text-[#ff3b30]
                  transition-all
                  hover:bg-[#ff3b30] hover:text-white
                  max-[600px]:w-[150px]
                "
                onClick={() => alert("Currently unavailable")}
              >
                Currently Unavailable
              </button>
            </div>
          </div>

          {/* Bookmark */}
          <button
            className="
              absolute right-[17px] top-[10px]
              h-[25px] w-5
              cursor-pointer
              border-0 bg-transparent p-0
              text-[21px] leading-none text-[#68747a]
              transition-all
              hover:scale-[1.08] hover:text-[#091928]
            "
            onClick={() => alert("Partner saved")}
            aria-label="Bookmark Channel Partner 2"
          >
            ♧
          </button>
        </article>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}
