import React, { useState } from "react";

export default function UserProfile() {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Priyanshu",
    email: "user@example.com",
    income: "₹3,50,000",
    occupation: "Entrepreneur",
    location: "India",
  });

  const update = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  const go = (path) => {
    window.location.hash = path;
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#eef2e3]
        text-[#091928]
      "
    >
      {/* ================= NAVBAR ================= */}

      <header
        className="
          h-[75px]
          px-[7%]
          bg-[#091928]
          text-white
          flex
          items-center
          justify-between
        "
      >
        <div
          onClick={() => go("/")}
          className="
            font-extrabold
            cursor-pointer
            flex
            items-center
          "
        >
          <b
            className="
              text-[#b9e92f]
              border-2
              border-[#b9e92f]
              px-[9px]
              py-[5px]
              rounded-lg
              mr-2
            "
          >
            ✓
          </b>
          YojnaSetu
        </div>

        <button
          onClick={() => go("/home")}
          className="
            border-0
            bg-[#b9e92f]
            text-[#091928]
            px-[17px]
            py-[10px]
            rounded-[22px]
            font-bold
            cursor-pointer
            hover:brightness-95
            transition
          "
        >
          Back to Home
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main
        className="
          max-w-[950px]
          mx-auto
          px-[25px]
          py-[55px]

          max-[650px]:px-5
          max-[650px]:py-10
        "
      >
        {/* ================= PROFILE HEADER ================= */}

        <div
          className="
            flex
            items-center
            gap-5
            mb-[35px]

            max-[650px]:gap-4
          "
        >
          {/* AVATAR */}

          <div
            className="
              w-[85px]
              h-[85px]
              shrink-0
              rounded-full
              bg-[#b9e92f]
              grid
              place-items-center
              text-[32px]
              font-extrabold
            "
          >
            {user.name.charAt(0).toUpperCase()}
          </div>

          {/* USER DETAILS */}

          <div>
            <p
              className="
                m-0
                text-[#8daf17]
                font-extrabold
              "
            >
              MY PROFILE
            </p>

            <h1
              className="
                text-[32px]
                font-bold
                my-[5px]

                max-[650px]:text-[26px]
              "
            >
              {user.name}
            </h1>

            <span className="text-[#68747b]">{user.email}</span>
          </div>
        </div>

        {/* ================= PROFILE CARD ================= */}

        <section
          className="
            bg-white
            rounded-[20px]
            p-[30px]
            shadow-[0_4px_15px_rgba(0,0,0,0.12)]

            max-[650px]:p-5
          "
        >
          {/* CARD TITLE */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <h2
              className="
                m-0
                text-[24px]
                font-bold

                max-[650px]:text-[20px]
              "
            >
              Personal Information
            </h2>

            <button
              onClick={() => setEditing(!editing)}
              className="
                border-0
                bg-[#091928]
                text-white
                px-[18px]
                py-[10px]
                rounded-[20px]
                font-semibold
                cursor-pointer
                whitespace-nowrap
                hover:bg-[#10283c]
                transition

                max-[650px]:px-[13px]
                max-[650px]:py-2
                max-[650px]:text-[12px]
              "
            >
              {editing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>

          {/* ================= FORM GRID ================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-5
              mt-[25px]

              max-[650px]:grid-cols-1
            "
          >
            {/* FULL NAME */}

            <label
              className="
                font-bold
                text-[13px]
              "
            >
              Full Name
              <input
                name="name"
                disabled={!editing}
                value={user.name}
                onChange={update}
                className="
                  w-full
                  block
                  mt-[7px]
                  px-3
                  py-3
                  border
                  border-[#d5d9d3]
                  rounded-[9px]
                  outline-none
                  font-normal

                  disabled:bg-[#f5f6f1]

                  focus:border-[#91b91b]
                  focus:ring-2
                  focus:ring-[#b9e92f]/30
                "
              />
            </label>

            {/* EMAIL */}

            <label
              className="
                font-bold
                text-[13px]
              "
            >
              Email
              <input
                name="email"
                disabled={!editing}
                value={user.email}
                onChange={update}
                className="
                  w-full
                  block
                  mt-[7px]
                  px-3
                  py-3
                  border
                  border-[#d5d9d3]
                  rounded-[9px]
                  outline-none
                  font-normal

                  disabled:bg-[#f5f6f1]

                  focus:border-[#91b91b]
                  focus:ring-2
                  focus:ring-[#b9e92f]/30
                "
              />
            </label>

            {/* INCOME */}

            <label
              className="
                font-bold
                text-[13px]
              "
            >
              Annual Family Income
              <input
                name="income"
                disabled={!editing}
                value={user.income}
                onChange={update}
                className="
                  w-full
                  block
                  mt-[7px]
                  px-3
                  py-3
                  border
                  border-[#d5d9d3]
                  rounded-[9px]
                  outline-none
                  font-normal

                  disabled:bg-[#f5f6f1]

                  focus:border-[#91b91b]
                  focus:ring-2
                  focus:ring-[#b9e92f]/30
                "
              />
            </label>

            {/* OCCUPATION */}

            <label
              className="
                font-bold
                text-[13px]
              "
            >
              Occupation
              <input
                name="occupation"
                disabled={!editing}
                value={user.occupation}
                onChange={update}
                className="
                  w-full
                  block
                  mt-[7px]
                  px-3
                  py-3
                  border
                  border-[#d5d9d3]
                  rounded-[9px]
                  outline-none
                  font-normal

                  disabled:bg-[#f5f6f1]

                  focus:border-[#91b91b]
                  focus:ring-2
                  focus:ring-[#b9e92f]/30
                "
              />
            </label>

            {/* LOCATION */}

            <label
              className="
                font-bold
                text-[13px]
              "
            >
              Location
              <input
                name="location"
                disabled={!editing}
                value={user.location}
                onChange={update}
                className="
                  w-full
                  block
                  mt-[7px]
                  px-3
                  py-3
                  border
                  border-[#d5d9d3]
                  rounded-[9px]
                  outline-none
                  font-normal

                  disabled:bg-[#f5f6f1]

                  focus:border-[#91b91b]
                  focus:ring-2
                  focus:ring-[#b9e92f]/30
                "
              />
            </label>
          </div>
        </section>

        {/* ================= ACTION BUTTONS ================= */}

        <div
          className="
            flex
            gap-[15px]
            mt-[25px]

            max-[650px]:flex-col
          "
        >
          <button
            onClick={() => go("/recommended")}
            className="
              flex-1
              border-0
              px-4
              py-[14px]
              rounded-[25px]
              bg-[#b9e92f]
              text-[#091928]
              font-extrabold
              cursor-pointer
              hover:brightness-95
              transition
            "
          >
            View Recommended Schemes
          </button>

          <button
            onClick={() => go("/partners")}
            className="
              flex-1
              border-0
              px-4
              py-[14px]
              rounded-[25px]
              bg-[#b9e92f]
              text-[#091928]
              font-extrabold
              cursor-pointer
              hover:brightness-95
              transition
            "
          >
            Find Channel Partners
          </button>
        </div>
      </main>
    </div>
  );
}
