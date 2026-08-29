import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FindPartners() {
  const goTo = (path) => {
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
        <div className="absolute top-16 right-[-80px] h-[420px] w-[420px] rounded-full bg-[#B9E92F]/10 blur-3xl" />

        {/* Decorative dots */}
        <div className="absolute top-[42%] left-[18%] h-1 w-1 rounded-full bg-white/30" />
        <div className="absolute top-[34%] right-[28%] h-1 w-1 rounded-full bg-white/30" />
        <div className="absolute top-[55%] right-[12%] h-1 w-1 rounded-full bg-white/20" />

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
            max-w-[1050px]
            px-6
            pt-[150px]
            pb-[65px]
            lg:px-10
            max-[600px]:px-5
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
            YojnaSetu Partners
          </p>

          <h1
            className="
              mt-3
              text-[42px]
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-[50px]
              lg:text-[56px]
              max-[600px]:text-[34px]
            "
          >
            Find the Nearest Suitable Partner
          </h1>

          <p
            className="
              mt-4
              max-w-[700px]
              text-sm
              leading-relaxed
              text-white/70
              sm:text-base
            "
          >
            Find nearby channel partners who can help you take the next step
            with your financial assistance application.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN PARTNER AREA
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
        <div className="mx-auto max-w-[950px]">
          {/* =================================================
              INTRO / LOCATION CARD
          ================================================= */}
          <section
            className="
              mb-7
              rounded-[26px]
              border
              border-[#d5ed8d]
              bg-[#effbd9]
              p-5
              sm:p-6
            "
          >
            <div className="flex items-start gap-4">
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
                📍
              </div>

              <div>
                <p className="m-0 text-sm font-semibold text-[#7e9f10]">
                  PARTNER DISCOVERY
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#091928] sm:text-2xl">
                  Nearby Channel Partners
                </h2>

                <p className="mt-1 text-sm leading-relaxed text-[#68747b]">
                  We found suitable partners based on your location and
                  requirements.
                </p>
              </div>
            </div>
          </section>

          {/* =================================================
              PARTNER 1
          ================================================= */}
          <PartnerCard
            number="01"
            title="Channel Partner 1"
            address="Address"
            distance="1.5 KM away"
            available={true}
            goTo={goTo}
          />

          {/* =================================================
              PARTNER 2
          ================================================= */}
          <PartnerCard
            number="02"
            title="Channel Partner 2"
            address="Address"
            distance="3 KM away"
            available={false}
            goTo={goTo}
          />

          {/* =================================================
              BOTTOM INFO
          ================================================= */}
          <div
            className="
              mt-8
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
              Check the distance and availability before visiting a channel
              partner.
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

/* ============================================================
   REUSABLE PARTNER CARD
============================================================ */

function PartnerCard({
  number,
  title,
  address,
  distance,
  available,
  goTo,
}) {
  return (
    <article
      className="
        group
        relative
        mb-6
        rounded-[26px]
        border
        border-[#e0e6d8]
        bg-white
        p-6
        shadow-[0_8px_25px_rgba(9,25,40,0.07)]
        transition
        duration-200
        hover:-translate-y-1
        hover:shadow-[0_14px_32px_rgba(9,25,40,0.11)]
        sm:p-7
      "
    >
      <div className="flex items-start gap-5 max-[600px]:gap-4">
        {/* =================================================
            NUMBER
        ================================================= */}
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
            text-sm
            font-extrabold
            text-[#091928]
            sm:h-14
            sm:w-14
            sm:text-base
          "
        >
          {number}
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}
        <div className="min-w-0 flex-1">
          {/* TITLE */}
          <div className="pr-10">
            <span
              className="
                inline-block
                rounded-full
                border
                border-[#d5ed8d]
                bg-[#effbd9]
                px-3
                py-1
                text-[10px]
                font-bold
                uppercase
                tracking-wide
                text-[#63710d]
              "
            >
              Channel Partner
            </span>

            <h2
              className="
                mt-3
                text-[20px]
                font-bold
                leading-snug
                text-[#091928]
                sm:text-[22px]
              "
            >
              {title}
            </h2>

            <p className="mt-1 text-sm text-[#68747b]">
              {address}
            </p>
          </div>

          {/* =================================================
              PARTNER DETAILS
          ================================================= */}
          <div
            className="
              mt-5
              grid
              grid-cols-2
              gap-3
              max-[500px]:grid-cols-1
              sm:max-w-[650px]
              sm:grid-cols-2
            "
          >
            {/* DISTANCE */}
            <button
              onClick={() => goTo("#/map")}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#d5d9d3]
                bg-[#f7f9f3]
                px-4
                py-3
                text-sm
                font-semibold
                text-[#091928]
                transition
                hover:border-[#B9E92F]
                hover:bg-[#effbd9]
                cursor-pointer
              "
            >
              📍 {distance}
            </button>

            {/* AVAILABILITY */}
            {available ? (
              <button
                onClick={() => alert("Applications are being accepted")}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#cfe78a]
                  bg-[#effbd9]
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[#64a900]
                  transition
                  hover:bg-[#B9E92F]
                  hover:text-[#091928]
                  cursor-pointer
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#64a900]" />
                Accepting Applications
              </button>
            ) : (
              <button
                onClick={() => alert("Currently unavailable")}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#f1c9c6]
                  bg-[#fff5f4]
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[#d9342b]
                  transition
                  hover:bg-[#ff3b30]
                  hover:text-white
                  cursor-pointer
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#ff3b30]" />
                Currently Unavailable
              </button>
            )}
          </div>
        </div>

        {/* =================================================
            BOOKMARK
        ================================================= */}
        <button
          onClick={() => alert("Partner saved")}
          className="
            absolute
            right-6
            top-6
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-[#dce3d7]
            bg-[#f7f9f3]
            text-lg
            text-[#68747a]
            transition
            hover:border-[#B9E92F]
            hover:bg-[#effbd9]
            hover:text-[#091928]
            cursor-pointer
          "
          aria-label={`Bookmark ${title}`}
        >
          ♡
        </button>
      </div>
    </article>
  );
}