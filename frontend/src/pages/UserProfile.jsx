import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UserProfile() {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Priyanshu",
    email: "user@example.com",
    income: "₹3,50,000",
    occupation: "Entrepreneur",
    location: "India",
  });

  const update = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const go = (path) => {
    window.location.hash = path;
  };

  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#091928]">
      {/* =====================================================
          TOP / NAVBAR / PROFILE HERO
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
            PROFILE HERO
        ================================================= */}
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[950px]
            px-6
            lg:px-10
            pt-[145px]
            pb-[65px]
            max-[650px]:pt-[120px]
            max-[650px]:pb-[50px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-5
              max-[650px]:gap-4
            "
          >
            {/* AVATAR */}
            <div
              className="
                flex
                h-[88px]
                w-[88px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-4
                border-white/20
                bg-[#B9E92F]
                text-[32px]
                font-extrabold
                text-[#091928]
                shadow-[0_8px_25px_rgba(0,0,0,0.20)]
                max-[650px]:h-[72px]
                max-[650px]:w-[72px]
                max-[650px]:text-[26px]
              "
            >
              {user.name.charAt(0).toUpperCase()}
            </div>

            {/* USER DETAILS */}
            <div className="min-w-0">
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
                My Profile
              </p>

              <h1
                className="
                  mt-2
                  mb-1
                  truncate
                  text-[36px]
                  font-bold
                  leading-tight
                  text-white
                  max-[650px]:text-[27px]
                "
              >
                {user.name}
              </h1>

              <p className="m-0 truncate text-sm text-white/65 sm:text-base">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN PROFILE AREA
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
        <div className="mx-auto max-w-[950px]">
          {/* =================================================
              PROFILE CARD
          ================================================= */}
          <section
            className="
              rounded-[28px]
              border
              border-[#e0e6d8]
              bg-white
              p-7
              shadow-[0_12px_35px_rgba(9,25,40,0.10)]
              sm:p-8
              lg:p-10
              max-[650px]:p-5
            "
          >
            {/* CARD HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
                max-[500px]:items-start
              "
            >
              <div>
                <p className="m-0 text-sm font-semibold text-[#8daf17]">
                  ACCOUNT DETAILS
                </p>

                <h2
                  className="
                    mt-1
                    text-[25px]
                    font-bold
                    text-[#091928]
                    max-[650px]:text-[21px]
                  "
                >
                  Personal Information
                </h2>

                <p className="mt-1 text-sm text-[#68747b]">
                  Manage your profile information.
                </p>
              </div>

              {/* EDIT / SAVE */}
              <button
                onClick={() => setEditing(!editing)}
                className="
                  shrink-0
                  rounded-full
                  border-0
                  bg-[#091928]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#142d3f]
                  cursor-pointer
                  max-[650px]:px-4
                  max-[650px]:py-2
                  max-[650px]:text-xs
                "
              >
                {editing ? "Save Changes" : "Edit Profile"}
              </button>
            </div>

            {/* =================================================
                FORM GRID
            ================================================= */}
            <div
              className="
                mt-8
                grid
                grid-cols-2
                gap-5
                max-[650px]:grid-cols-1
              "
            >
              {/* FULL NAME */}
              <label
                className="
                  block
                  text-[13px]
                  font-bold
                  text-[#091928]
                "
              >
                Full Name

                <input
                  name="name"
                  disabled={!editing}
                  value={user.name}
                  onChange={update}
                  className="
                    mt-2
                    block
                    w-full
                    rounded-xl
                    border
                    border-[#d5d9d3]
                    bg-[#fafcf7]
                    px-3.5
                    py-3
                    text-sm
                    font-normal
                    text-[#091928]
                    outline-none
                    transition
                    placeholder:text-[#9aa3a7]
                    disabled:cursor-not-allowed
                    disabled:bg-[#f5f6f1]
                    focus:border-[#B9E92F]
                    focus:ring-2
                    focus:ring-[#B9E92F]/30
                  "
                />
              </label>

              {/* EMAIL */}
              <label
                className="
                  block
                  text-[13px]
                  font-bold
                  text-[#091928]
                "
              >
                Email Address

                <input
                  name="email"
                  type="email"
                  disabled={!editing}
                  value={user.email}
                  onChange={update}
                  className="
                    mt-2
                    block
                    w-full
                    rounded-xl
                    border
                    border-[#d5d9d3]
                    bg-[#fafcf7]
                    px-3.5
                    py-3
                    text-sm
                    font-normal
                    text-[#091928]
                    outline-none
                    transition
                    placeholder:text-[#9aa3a7]
                    disabled:cursor-not-allowed
                    disabled:bg-[#f5f6f1]
                    focus:border-[#B9E92F]
                    focus:ring-2
                    focus:ring-[#B9E92F]/30
                  "
                />
              </label>

              {/* ANNUAL INCOME */}
              <label
                className="
                  block
                  text-[13px]
                  font-bold
                  text-[#091928]
                "
              >
                Annual Family Income

                <input
                  name="income"
                  disabled={!editing}
                  value={user.income}
                  onChange={update}
                  className="
                    mt-2
                    block
                    w-full
                    rounded-xl
                    border
                    border-[#d5d9d3]
                    bg-[#fafcf7]
                    px-3.5
                    py-3
                    text-sm
                    font-normal
                    text-[#091928]
                    outline-none
                    transition
                    placeholder:text-[#9aa3a7]
                    disabled:cursor-not-allowed
                    disabled:bg-[#f5f6f1]
                    focus:border-[#B9E92F]
                    focus:ring-2
                    focus:ring-[#B9E92F]/30
                  "
                />
              </label>

              {/* OCCUPATION */}
              <label
                className="
                  block
                  text-[13px]
                  font-bold
                  text-[#091928]
                "
              >
                Occupation

                <input
                  name="occupation"
                  disabled={!editing}
                  value={user.occupation}
                  onChange={update}
                  className="
                    mt-2
                    block
                    w-full
                    rounded-xl
                    border
                    border-[#d5d9d3]
                    bg-[#fafcf7]
                    px-3.5
                    py-3
                    text-sm
                    font-normal
                    text-[#091928]
                    outline-none
                    transition
                    placeholder:text-[#9aa3a7]
                    disabled:cursor-not-allowed
                    disabled:bg-[#f5f6f1]
                    focus:border-[#B9E92F]
                    focus:ring-2
                    focus:ring-[#B9E92F]/30
                  "
                />
              </label>

              {/* LOCATION */}
              <label
                className="
                  block
                  text-[13px]
                  font-bold
                  text-[#091928]
                  max-[650px]:col-span-1
                "
              >
                Location

                <input
                  name="location"
                  disabled={!editing}
                  value={user.location}
                  onChange={update}
                  className="
                    mt-2
                    block
                    w-full
                    rounded-xl
                    border
                    border-[#d5d9d3]
                    bg-[#fafcf7]
                    px-3.5
                    py-3
                    text-sm
                    font-normal
                    text-[#091928]
                    outline-none
                    transition
                    placeholder:text-[#9aa3a7]
                    disabled:cursor-not-allowed
                    disabled:bg-[#f5f6f1]
                    focus:border-[#B9E92F]
                    focus:ring-2
                    focus:ring-[#B9E92F]/30
                  "
                />
              </label>
            </div>
          </section>

          {/* =================================================
              ACTION BUTTONS
          ================================================= */}
          <div
            className="
              mt-6
              grid
              grid-cols-2
              gap-4
              max-[650px]:grid-cols-1
            "
          >
            {/* RECOMMENDED SCHEMES */}
            <button
              onClick={() => go("/recommended")}
              className="
                group
                rounded-[22px]
                border
                border-[#d5ed8d]
                bg-[#effbd9]
                px-5
                py-5
                text-left
                transition
                hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(9,25,40,0.08)]
                cursor-pointer
              "
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="m-0 text-sm font-semibold text-[#7e9f10]">
                    EXPLORE
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#091928]">
                    Recommended Schemes
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-[#68747b]">
                    View financial assistance schemes that may suit your
                    profile.
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B9E92F]
                    text-xl
                    transition
                    group-hover:scale-105
                  "
                >
                  →
                </div>
              </div>
            </button>

            {/* CHANNEL PARTNERS */}
            <button
              onClick={() => go("/partners")}
              className="
                group
                rounded-[22px]
                border
                border-[#d5ed8d]
                bg-[#effbd9]
                px-5
                py-5
                text-left
                transition
                hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(9,25,40,0.08)]
                cursor-pointer
              "
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="m-0 text-sm font-semibold text-[#7e9f10]">
                    CONNECT
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#091928]">
                    Find Channel Partners
                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-[#68747b]">
                    Locate nearby partners who can help with your next step.
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B9E92F]
                    text-xl
                    transition
                    group-hover:scale-105
                  "
                >
                  →
                </div>
              </div>
            </button>
          </div>

          {/* BOTTOM NOTE */}
          <div className="mt-7 text-center">
            <p className="m-0 text-sm text-[#68747b]">
              Keep your information updated to get more relevant scheme
              recommendations.
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