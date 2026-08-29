import React from "react";

export default function Map() {
  const go = (path) => {
    window.location.hash = path;
  };

  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#091928]">
      
      {/* ================= NAVBAR ================= */}

      <header
        className="
          h-[75px] px-[7%]
          bg-[#091928] text-white
          flex items-center justify-between
        "
      >
        <div
          onClick={() => go("/")}
          className="
            font-extrabold cursor-pointer
            flex items-center
          "
        >
          <b
            className="
              text-[#b9e92f]
              border-2 border-[#b9e92f]
              px-[9px] py-[5px]
              rounded-lg
              mr-2
            "
          >
            ✓
          </b>

          YojnaSetu
        </div>

        <button
          onClick={() => go("/partners")}
          className="
            border-0
            bg-[#b9e92f]
            text-[#091928]
            px-[17px] py-[10px]
            rounded-[22px]
            font-bold
            cursor-pointer
          "
        >
          ← Back to Partners
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main
        className="
          max-w-[1200px]
          mx-auto
          px-[25px]
          py-[50px]
        "
      >
        {/* HEADING */}

        <div>
          <p
            className="
              text-[#8daf17]
              font-extrabold
              tracking-[2px]
              m-0
            "
          >
            PARTNER ROUTER
          </p>

          <h1
            className="
              text-[38px]
              font-bold
              mt-2 mb-8
            "
          >
            Nearby Channel Partners
          </h1>
        </div>

        {/* ================= MAP LAYOUT ================= */}

        <div
          className="
            grid
            grid-cols-[1fr_330px]
            gap-5
            max-[800px]:grid-cols-1
          "
        >
          {/* ================= FAKE MAP ================= */}

          <section
            className="
              h-[520px]
              rounded-[22px]
              overflow-hidden
              relative

              bg-[linear-gradient(35deg,transparent_48%,#fff_49%,#fff_51%,transparent_52%),linear-gradient(-30deg,transparent_47%,#fff_48%,#fff_52%,transparent_53%),#d7dfd0]

              shadow-[0_4px_15px_rgba(0,0,0,0.12)]
            "
          >
            {/* Roads */}

            <div
              className="
                absolute
                bg-[#c2cdbd]
                w-[140%]
                h-[55px]
                top-[45%]
                left-[-20%]
                rotate-[-8deg]
              "
            />

            <div
              className="
                absolute
                bg-[#c2cdbd]
                w-[70%]
                h-[45px]
                top-[10%]
                left-[25%]
                rotate-[55deg]
              "
            />

            <div
              className="
                absolute
                bg-[#c2cdbd]
                w-full
                h-[35px]
                bottom-[18%]
                left-0
                rotate-[20deg]
              "
            />

            {/* PIN 1 */}

            <div
              className="
                absolute
                left-[25%]
                top-[35%]
                w-[45px]
                h-[45px]
                rounded-[50%_50%_50%_0]
                rotate-[-45deg]
                grid
                place-items-center
                bg-[#091928]
                text-[#b9e92f]
                text-[20px]
              "
            >
              <span className="rotate-[45deg]">⌖</span>
            </div>

            {/* PIN 2 */}

            <div
              className="
                absolute
                right-[25%]
                top-[20%]
                w-[45px]
                h-[45px]
                rounded-[50%_50%_50%_0]
                rotate-[-45deg]
                grid
                place-items-center
                bg-[#091928]
                text-[#b9e92f]
                text-[20px]
              "
            >
              <span className="rotate-[45deg]">⌖</span>
            </div>

            {/* PIN 3 */}

            <div
              className="
                absolute
                right-[18%]
                bottom-[25%]
                w-[45px]
                h-[45px]
                rounded-[50%_50%_50%_0]
                rotate-[-45deg]
                grid
                place-items-center
                bg-[#091928]
                text-[#b9e92f]
                text-[20px]
              "
            >
              <span className="rotate-[45deg]">⌖</span>
            </div>

            {/* YOUR LOCATION */}

            <div
              className="
                absolute
                left-[45%]
                top-[50%]
                bg-[#b9e92f]
                text-[#091928]
                px-[15px]
                py-[10px]
                rounded-[20px]
                font-extrabold
              "
            >
              You
            </div>
          </section>

          {/* ================= SIDEBAR ================= */}

          <aside
            className="
              bg-white
              rounded-[20px]
              p-[25px]
              shadow-[0_4px_15px_rgba(0,0,0,0.12)]
            "
          >
            <h2 className="text-[24px] font-bold m-0">
              Eligible Partners
            </h2>

            {/* Partner 1 */}

            <div
              className="
                border-b border-[#d5d9d3]
                py-[18px]
              "
            >
              <b className="block">
                State Channelizing Agency
              </b>

              <span
                className="
                  block
                  text-[#68747b]
                  text-[12px]
                  mt-[5px]
                "
              >
                2.4 km
              </span>
            </div>

            {/* Partner 2 */}

            <div
              className="
                border-b border-[#d5d9d3]
                py-[18px]
              "
            >
              <b className="block">
                Public Sector Bank
              </b>

              <span
                className="
                  block
                  text-[#68747b]
                  text-[12px]
                  mt-[5px]
                "
              >
                3.1 km
              </span>
            </div>

            {/* Partner 3 */}

            <div
              className="
                border-b border-[#d5d9d3]
                py-[18px]
              "
            >
              <b className="block">
                Regional Rural Bank
              </b>

              <span
                className="
                  block
                  text-[#68747b]
                  text-[12px]
                  mt-[5px]
                "
              >
                5.8 km
              </span>
            </div>

            {/* Help */}

            <button
              onClick={() => go("/contact")}
              className="
                w-full
                mt-5
                border-0
                bg-[#091928]
                text-white
                py-[13px]
                rounded-[22px]
                font-bold
                cursor-pointer
                hover:bg-[#10283c]
                transition
              "
            >
              Need Help?
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}