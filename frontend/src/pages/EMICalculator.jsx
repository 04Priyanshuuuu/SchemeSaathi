import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EMICalculator() {
  const [form, setForm] = useState({
    scheme: "Scheme 1",
    principal: "Not more than Rs. 10 lakh",
    interest: "6.8%",
    time: "",
    moratorium: "",
    frequency: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCalculate = () => {
    setResult({
      message: "EMI calculated successfully.",
    });
  };

  const goTo = (path) => {
    window.location.hash = path;
  };

  return (
    <main className="min-h-screen w-full bg-[#091928] font-['Inter','Segoe_UI',Roboto,Helvetica,Arial,sans-serif] text-[#091928]">
      <Navbar />

      {/* ================= EMI SECTION ================= */}
      <section
        className="
          relative min-h-[550px] w-full overflow-hidden
          bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.025)_25%,transparent_50%),linear-gradient(180deg,#091928_0%,#122a3c_34%,#68747a_75%,#e9e9e5_100%)]
          px-[25px] pb-9 pt-5
          max-[800px]:px-[18px]
          max-[600px]:min-h-0
          max-[600px]:px-[15px]
          max-[600px]:pt-[18px]
        "
      >
        {/* TOP */}
        <div className="mb-2 flex w-full items-center justify-between">
          <button
            className="cursor-pointer border-0 bg-transparent p-0"
            onClick={() => goTo("#/")}
            aria-label="YojnaSetu Home"
          >
            <img
              src="/logo.png"
              alt="YojnaSetu"
              className="h-auto max-h-10 w-auto object-contain"
            />
          </button>

          <button
            className="
              flex cursor-pointer items-center gap-2
              border-0 bg-transparent
              text-lg text-white
            "
            onClick={() => alert("Language selection")}
            aria-label="Change language"
          >
            <span>文</span>
            <span>अ</span>
          </button>
        </div>

        {/* TITLE */}
        <h1
          className="
            mb-[15px] mt-0 text-center
            text-[clamp(21px,2.4vw,32px)]
            font-bold leading-[1.15] text-white
            max-[600px]:mb-5 max-[600px]:text-[25px]
          "
        >
          EMI Calculator
        </h1>

        {/* FORM CARD */}
        <div
          className="
            mx-auto flex min-h-[245px] w-[min(850px,88%)]
            flex-col items-center
            rounded-[19px] bg-[#edf9d4]
            px-10 pb-[18px] pt-5
            shadow-[0_4px_10px_rgba(0,0,0,0.08)]
            max-[800px]:w-[92%]
            max-[800px]:px-7
            max-[600px]:w-full
            max-[600px]:rounded-[17px]
            max-[600px]:px-5
          "
        >
          {/* SCHEME */}
          <div
            className="
              mb-[7px] grid w-full grid-cols-[155px_1fr]
              items-center gap-[15px]
              max-[600px]:mb-[9px]
              max-[600px]:grid-cols-1
              max-[600px]:gap-1
            "
          >
            <label className="text-xs font-medium text-[#091928] max-[600px]:text-[11px]">
              Scheme:
            </label>

            <input
              type="text"
              name="scheme"
              value={form.scheme}
              onChange={handleChange}
              className="
                h-[21px] w-full rounded-[14px]
                border border-[#9ca3a4] bg-white
                px-[18px] py-[2px]
                text-[11px] font-normal text-[#50575b]
                outline-none
                focus:border-[#7e961b]
                focus:shadow-[0_0_0_2px_rgba(185,233,47,0.25)]
                max-[600px]:h-[26px]
                max-[600px]:pl-3
              "
            />
          </div>

          {/* PRINCIPAL */}
          <div
            className="
              mb-[7px] grid w-full grid-cols-[155px_1fr]
              items-center gap-[15px]
              max-[600px]:mb-[9px]
              max-[600px]:grid-cols-1
              max-[600px]:gap-1
            "
          >
            <label className="text-xs font-medium text-[#091928] max-[600px]:text-[11px]">
              Principal Amount:
            </label>

            <input
              type="text"
              name="principal"
              value={form.principal}
              onChange={handleChange}
              className="
                h-[21px] w-full rounded-[14px]
                border border-[#9ca3a4] bg-white
                px-[18px] py-[2px]
                text-[11px] font-normal text-[#50575b]
                outline-none
                focus:border-[#7e961b]
                focus:shadow-[0_0_0_2px_rgba(185,233,47,0.25)]
                max-[600px]:h-[26px]
                max-[600px]:pl-3
              "
            />
          </div>

          {/* INTEREST */}
          <div
            className="
              mb-[7px] grid w-full grid-cols-[155px_1fr]
              items-center gap-[15px]
              max-[600px]:mb-[9px]
              max-[600px]:grid-cols-1
              max-[600px]:gap-1
            "
          >
            <label className="text-xs font-medium text-[#091928] max-[600px]:text-[11px]">
              Interest Rate:
            </label>

            <input
              type="text"
              name="interest"
              value={form.interest}
              onChange={handleChange}
              className="
                h-[21px] w-full rounded-[14px]
                border border-[#9ca3a4] bg-white
                px-[18px] py-[2px]
                text-[11px] font-normal text-[#50575b]
                outline-none
                focus:border-[#7e961b]
                focus:shadow-[0_0_0_2px_rgba(185,233,47,0.25)]
                max-[600px]:h-[26px]
                max-[600px]:pl-3
              "
            />
          </div>

          {/* TIME PERIOD */}
          <div
            className="
              mb-[7px] grid w-full grid-cols-[155px_1fr]
              items-center gap-[15px]
              max-[600px]:mb-[9px]
              max-[600px]:grid-cols-1
              max-[600px]:gap-1
            "
          >
            <label className="text-xs font-medium text-[#091928] max-[600px]:text-[11px]">
              Time Period:
            </label>

            <input
              type="text"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="
                h-[21px] w-full rounded-[14px]
                border border-[#9ca3a4] bg-white
                px-[18px] py-[2px]
                text-[11px] font-normal text-[#50575b]
                outline-none
                focus:border-[#7e961b]
                focus:shadow-[0_0_0_2px_rgba(185,233,47,0.25)]
                max-[600px]:h-[26px]
                max-[600px]:pl-3
              "
            />
          </div>

          {/* MORATORIUM */}
          <div
            className="
              mb-[7px] grid w-full grid-cols-[155px_1fr]
              items-center gap-[15px]
              max-[600px]:mb-[9px]
              max-[600px]:grid-cols-1
              max-[600px]:gap-1
            "
          >
            <label className="text-xs font-medium text-[#091928] max-[600px]:text-[11px]">
              Moratorium Period:
            </label>

            <input
              type="text"
              name="moratorium"
              value={form.moratorium}
              onChange={handleChange}
              className="
                h-[21px] w-full rounded-[14px]
                border border-[#9ca3a4] bg-white
                px-[18px] py-[2px]
                text-[11px] font-normal text-[#50575b]
                outline-none
                focus:border-[#7e961b]
                focus:shadow-[0_0_0_2px_rgba(185,233,47,0.25)]
                max-[600px]:h-[26px]
                max-[600px]:pl-3
              "
            />
          </div>

          {/* REPAYMENT */}
          <div
            className="
              mb-[7px] grid w-full grid-cols-[155px_1fr]
              items-center gap-[15px]
              max-[600px]:mb-[9px]
              max-[600px]:grid-cols-1
              max-[600px]:gap-1
            "
          >
            <label className="text-xs font-medium text-[#091928] max-[600px]:text-[11px]">
              Repayment Frequency:
            </label>

            <input
              type="text"
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
              className="
                h-[21px] w-full rounded-[14px]
                border border-[#9ca3a4] bg-white
                px-[18px] py-[2px]
                text-[11px] font-normal text-[#50575b]
                outline-none
                focus:border-[#7e961b]
                focus:shadow-[0_0_0_2px_rgba(185,233,47,0.25)]
                max-[600px]:h-[26px]
                max-[600px]:pl-3
              "
            />
          </div>

          {/* CALCULATE */}
          <button
            className="
              mt-2 h-8 w-[107px]
              cursor-pointer rounded-[18px]
              border-0 bg-[#091928]
              text-sm font-bold text-white
              transition-all duration-150
              hover:-translate-y-px
              hover:shadow-[0_4px_8px_rgba(0,0,0,0.22)]
              active:translate-y-0
              max-[600px]:mt-[5px]
            "
            onClick={handleCalculate}
          >
            Calculate
          </button>

          {/* RESULT */}
          {result && (
            <div
              className="
                mt-2 rounded-xl bg-white
                px-[15px] py-[7px]
                text-[10px] font-semibold text-[#526900]
              "
            >
              {result.message}
            </div>
          )}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}
