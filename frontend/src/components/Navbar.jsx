import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [language, setLanguage] = useState("EN");
  const [user, setUser] = useState(null);

  const goTo = (path) => {
    window.location.hash = path;
  };

  const handleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "हिं" : "EN"));
  };

  // =========================================================
  // CHECK LOGGED-IN USER
  // =========================================================

  const checkUser = () => {
    try {
      const savedUser =
        localStorage.getItem("yojnasetuUser") ||
        localStorage.getItem("user");

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Unable to read logged-in user:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();

    // Listen for login/signup changes
    const handleUserLogin = () => {
      checkUser();
    };

    window.addEventListener("userLogin", handleUserLogin);
    window.addEventListener("storage", handleUserLogin);

    return () => {
      window.removeEventListener("userLogin", handleUserLogin);
      window.removeEventListener("storage", handleUserLogin);
    };
  }, []);

  // =========================================================
  // USER NAME
  // =========================================================

  const userName =
    user?.name ||
    user?.fullName ||
    user?.username ||
    user?.email?.split("@")[0] ||
    "User";

  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">

      <div className="max-w-[1380px] mx-auto px-6 lg:px-10 py-5">

        <div className="flex items-center justify-between gap-5">

          {/* =================================================
              LOGO
              ================================================= */}

          <button
            onClick={() => goTo("#/")}
            className="flex items-center gap-3 shrink-0 cursor-pointer"
            aria-label="YojnaSetu Home"
          >

            <div className="w-11 h-11 flex items-center justify-center">

              <img
                src="/favicon.png"
                alt="YojnaSetu"
                className="w-11 h-11 object-contain"
              />

            </div>

            <span className="text-xl font-semibold text-white">
              Yojna
              <span className="text-[#B9E92F]">
                Setu
              </span>
            </span>

          </button>


          {/* =================================================
              NAVIGATION
              ================================================= */}

          <nav className="hidden md:flex items-center rounded-full border border-white/70 bg-white/10 backdrop-blur-md p-1">

            <button
              onClick={() => goTo("#/")}
              className="px-6 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition cursor-pointer"
            >
              Home
            </button>

            <button
              onClick={() => goTo("#/schemes")}
              className="px-6 py-2 rounded-full text-white/80 text-sm hover:bg-white/10 hover:text-white transition cursor-pointer"
            >
              Search Schemes
            </button>

            <button
              onClick={() => goTo("#/emi")}
              className="px-6 py-2 rounded-full text-white/80 text-sm hover:bg-white/10 hover:text-white transition cursor-pointer"
            >
              Calculate EMI
            </button>

            <button
              onClick={() => goTo("#/partners")}
              className="px-6 py-2 rounded-full text-white/80 text-sm hover:bg-white/10 hover:text-white transition cursor-pointer"
            >
              Find Partners
            </button>

          </nav>


          {/* =================================================
              RIGHT SIDE
              ================================================= */}

          <div className="flex items-center gap-3">

            {/* LANGUAGE */}

            <button
              onClick={handleLanguage}
              className="hidden sm:flex items-center gap-1 px-2 text-sm text-white hover:text-[#B9E92F] transition cursor-pointer"
              aria-label="Change Language"
            >

              <span className="text-lg">
                文
              </span>

              <span className="text-xs">
                {language}
              </span>

            </button>


            {/* =================================================
                LOGGED-IN USER
                ================================================= */}

            {user ? (

              <button
                onClick={() => goTo("#/profile")}
                className="
                  flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/60
                  bg-white/10
                  px-2
                  py-1.5
                  pr-4
                  text-white
                  transition
                  hover:bg-white/20
                  cursor-pointer
                "
                aria-label="Open Profile"
              >

                {/* PROFILE CIRCLE */}

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B9E92F]
                    text-[#091928]
                    text-sm
                    font-bold
                  "
                >
                  {userInitial}
                </div>

                {/* NAME */}

                <span className="max-w-[120px] truncate text-sm font-semibold">
                  {userName}
                </span>

              </button>

            ) : (

              <>
                {/* SIGN UP */}

                <button
                  onClick={() => goTo("#/signup")}
                  className="
                    px-5
                    py-2.5
                    rounded-full
                    bg-white
                    text-[#091928]
                    text-sm
                    font-semibold
                    hover:bg-[#B9E92F]
                    transition
                    cursor-pointer
                  "
                >
                  Sign up
                </button>


                {/* LOGIN */}

                <button
                  onClick={() => goTo("#/login")}
                  className="
                    px-5
                    py-2.5
                    rounded-full
                    border
                    border-white
                    text-white
                    text-sm
                    font-semibold
                    hover:bg-white
                    hover:text-[#091928]
                    transition
                    cursor-pointer
                  "
                >
                  Log in
                </button>
              </>

            )}

          </div>

        </div>

      </div>

    </header>
  );
}