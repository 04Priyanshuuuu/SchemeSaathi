import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#091928]">
      {/* =====================================================
          TOP / NAVBAR AREA
          Same visual style as Landing Page
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#091928]">
        {/* Landing Page style gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091928] via-[#142d3f] to-[#657077]" />

        {/* Soft green glow */}
        <div className="absolute top-20 right-[-80px] w-[420px] h-[420px] rounded-full bg-[#B9E92F]/10 blur-3xl" />

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
            relative z-10
            max-w-[1050px]
            mx-auto
            px-6
            lg:px-10
            pt-[155px]
            pb-[70px]
            max-[750px]:pt-[125px]
            max-[750px]:pb-[55px]
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
            YojnaSetu Support
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
            We're Here to Help.
          </h1>

          <p
            className="
              m-0
              max-w-[650px]
              text-white/70
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            Have a question about schemes, eligibility or channel partners?
            Send us a message and our support team will help you.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT AREA
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
        <div
          className="
            mx-auto
            grid
            max-w-[1050px]
            grid-cols-2
            items-start
            gap-10
            lg:gap-[50px]
            max-[750px]:grid-cols-1
          "
        >
          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}
          <section>
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#d5ed8d]
                bg-[#effbd9]
                px-4
                py-2
                text-sm
                font-semibold
                text-[#6f8d0d]
              "
            >
              <span className="text-base">💬</span>
              YojnaSetu Support
            </div>

            <h2
              className="
                text-[34px]
                sm:text-[40px]
                lg:text-[44px]
                font-bold
                leading-tight
                text-[#091928]
              "
            >
              Let's Talk
            </h2>

            <p
              className="
                mt-4
                max-w-[500px]
                text-[#68747b]
                leading-[1.8]
                text-[15px]
              "
            >
              Whether you need help understanding a scheme, checking
              eligibility or finding a nearby channel partner, we're here to
              make your financial assistance journey easier.
            </p>

            {/* =================================================
                CONTACT CARDS
            ================================================= */}
            <div className="mt-8 grid gap-4">
              {/* EMAIL */}
              <div
                className="
                  group
                  rounded-[20px]
                  border
                  border-[#e0e6d8]
                  bg-white
                  p-5
                  shadow-[0_6px_20px_rgba(9,25,40,0.06)]
                  transition
                  hover:-translate-y-1
                  hover:shadow-[0_12px_28px_rgba(9,25,40,0.10)]
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#B9E92F]
                      text-xl
                    "
                  >
                    ✉
                  </div>

                  <div>
                    <h3 className="font-bold text-[#091928]">
                      Email Support
                    </h3>

                    <p className="mt-1 text-sm text-[#68747b]">
                      support@yojnasetu.in
                    </p>
                  </div>
                </div>
              </div>

              {/* SUPPORT */}
              <div
                className="
                  group
                  rounded-[20px]
                  border
                  border-[#e0e6d8]
                  bg-white
                  p-5
                  shadow-[0_6px_20px_rgba(9,25,40,0.06)]
                  transition
                  hover:-translate-y-1
                  hover:shadow-[0_12px_28px_rgba(9,25,40,0.10)]
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#B9E92F]
                      text-xl
                    "
                  >
                    ⌖
                  </div>

                  <div>
                    <h3 className="font-bold text-[#091928]">
                      Scheme & Partner Assistance
                    </h3>

                    <p className="mt-1 text-sm text-[#68747b]">
                      Get help with schemes, eligibility and partner discovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SMALL TRUST NOTE */}
            <div
              className="
                mt-6
                rounded-[18px]
                border
                border-[#d5ed8d]
                bg-[#effbd9]
                p-5
              "
            >
              <p className="m-0 text-sm leading-relaxed text-[#52620d]">
                <span className="font-bold">💡 Need quick help?</span>{" "}
                Tell us what you're looking for and we'll guide you toward the
                right information.
              </p>
            </div>
          </section>

          {/* =================================================
              CONTACT FORM
          ================================================= */}
          <form
            onSubmit={submit}
            className="
              rounded-[28px]
              border
              border-[#e0e6d8]
              bg-white
              p-7
              sm:p-8
              lg:p-9
              shadow-[0_12px_35px_rgba(9,25,40,0.10)]
            "
          >
            <div className="mb-7">
              <p className="m-0 text-sm font-semibold text-[#8daf17]">
                SEND A MESSAGE
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#091928]">
                How can we help?
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-[#68747b]">
                Fill in the details below and send your query to our support
                team.
              </p>
            </div>

            {/* FULL NAME */}
            <label className="mb-5 block text-[13px] font-bold text-[#091928]">
              Full Name

              <input
                required
                type="text"
                placeholder="Enter your name"
                className="
                  mt-2
                  block
                  w-full
                  rounded-xl
                  border
                  border-[#091928]/15
                  bg-[#fafcf7]
                  p-3.5
                  text-sm
                  font-normal
                  text-[#091928]
                  outline-none
                  transition
                  placeholder:text-[#9aa3a7]
                  focus:border-[#B9E92F]
                  focus:ring-2
                  focus:ring-[#B9E92F]/30
                "
              />
            </label>

            {/* EMAIL */}
            <label className="mb-5 block text-[13px] font-bold text-[#091928]">
              Email Address

              <input
                required
                type="email"
                placeholder="Enter your email"
                className="
                  mt-2
                  block
                  w-full
                  rounded-xl
                  border
                  border-[#091928]/15
                  bg-[#fafcf7]
                  p-3.5
                  text-sm
                  font-normal
                  text-[#091928]
                  outline-none
                  transition
                  placeholder:text-[#9aa3a7]
                  focus:border-[#B9E92F]
                  focus:ring-2
                  focus:ring-[#B9E92F]/30
                "
              />
            </label>

            {/* MESSAGE */}
            <label className="mb-5 block text-[13px] font-bold text-[#091928]">
              Message

              <textarea
                required
                placeholder="How can we help?"
                className="
                  mt-2
                  block
                  min-h-[140px]
                  w-full
                  resize-y
                  rounded-xl
                  border
                  border-[#091928]/15
                  bg-[#fafcf7]
                  p-3.5
                  text-sm
                  font-normal
                  text-[#091928]
                  outline-none
                  transition
                  placeholder:text-[#9aa3a7]
                  focus:border-[#B9E92F]
                  focus:ring-2
                  focus:ring-[#B9E92F]/30
                "
              />
            </label>

            {/* SUCCESS MESSAGE */}
            {sent && (
              <div
                className="
                  mb-5
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-[#cfe78a]
                  bg-[#edf7c9]
                  p-3.5
                  text-sm
                  leading-relaxed
                  text-[#4e6800]
                "
              >
                <span className="text-base">✓</span>

                <span>
                  Your message has been submitted successfully.
                </span>
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="
                w-full
                rounded-full
                border-0
                bg-[#B9E92F]
                px-5
                py-3.5
                font-extrabold
                text-[#091928]
                shadow-[0_5px_12px_rgba(0,0,0,0.12)]
                transition
                hover:-translate-y-0.5
                hover:brightness-95
                cursor-pointer
              "
            >
              Send Message →
            </button>
          </form>
        </div>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />
    </div>
  );
}