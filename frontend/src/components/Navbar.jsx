import React, { useState } from "react";

export default function Navbar() {
  const [language, setLanguage] = useState("EN");

  const goTo = (path) => {
    window.location.hash = path;
  };

  const handleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "हिं" : "EN"));
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-10 py-5">
        <div className="flex items-center justify-between gap-5">

          {/* LOGO */}
          <button
            onClick={() => goTo("#/")}
            className="flex items-center gap-3 shrink-0"
            aria-label="YojnaSetu Home"
          >
            <div className="w-11 h-11 flex items-center justify-center">

              <svg
                viewBox="0 0 48 48"
                className="w-10 h-10"
                fill="none"
              >
                <path
                  d="M24 4L41 13.5V34.5L24 44L7 34.5V13.5L24 4Z"
                  stroke="#B9E92F"
                  strokeWidth="2.2"
                />

                <path
                  d="M15 25.5L20.5 31L33.5 17.5"
                  stroke="#B9E92F"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M13 15L24 9L35 15"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <circle
                  cx="24"
                  cy="24"
                  r="4"
                  fill="#091928"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              </svg>

            </div>

            <span className="text-xl font-semibold text-white">
              Yojna<span className="text-[#B9E92F]">Setu</span>
            </span>
          </button>


          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center rounded-full border border-white/70 bg-white/10 backdrop-blur-md p-1">

            <button
              onClick={() => goTo("#/")}
              className="px-6 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition"
            >
              Home
            </button>

            <button
              onClick={() => goTo("#/schemes")}
              className="px-6 py-2 rounded-full text-white/80 text-sm hover:bg-white/10 hover:text-white transition"
            >
              Search Schemes
            </button>

            <button
              onClick={() => goTo("#/emi")}
              className="px-6 py-2 rounded-full text-white/80 text-sm hover:bg-white/10 hover:text-white transition"
            >
              Calculate EMI
            </button>

            <button
              onClick={() => goTo("#/partners")}
              className="px-6 py-2 rounded-full text-white/80 text-sm hover:bg-white/10 hover:text-white transition"
            >
              Find Partners
            </button>

          </nav>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            <button
              onClick={handleLanguage}
              className="hidden sm:flex items-center gap-1 px-2 text-sm text-white hover:text-[#B9E92F] transition"
              aria-label="Change Language"
            >
              <span className="text-lg">文</span>

              <span className="text-xs">
                {language}
              </span>
            </button>


            <button
              onClick={() => goTo("#/auth")}
              className="px-5 py-2.5 rounded-full bg-white text-[#091928] text-sm font-semibold hover:bg-[#B9E92F] transition"
            >
              Sign up
            </button>


            <button
              onClick={() => goTo("#/auth")}
              className="px-5 py-2.5 rounded-full border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#091928] transition"
            >
              Log in
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}