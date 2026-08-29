import React, { useCallback, useState } from "react";

const API_BASE = "http://localhost:5000/api";

const ICONS = {
  user: "M20 21a8 8 0 1 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  mail: "M4 4h16v16H4V4Zm0 0 8 8 8-8",
  lock: "M6 10V8a6 6 0 1 1 12 0v2M5 10h14v10H5V10Z",
};

function FieldIcon({ path }) {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#091928]/45"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

function EyeIcon({ open }) {
  return open ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.3 21.3 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 7 11 7a21.3 21.3 0 0 1-2.63 3.68M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function TextInput({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="flex h-[54px] items-center gap-3 rounded-xl border border-[#091928]/12 bg-white px-4 transition-all focus-within:border-[#c8f229] focus-within:ring-4 focus-within:ring-[#c8f229]/20">
      <FieldIcon path={ICONS[icon]} />

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-sm text-[#091928] outline-none placeholder:text-[#091928]/40"
        autoComplete={type === "password" ? "new-password" : "on"}
      />
    </div>
  );
}

function PasswordInput({
  placeholder,
  value,
  onChange,
  name,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex h-[54px] items-center gap-3 rounded-xl border border-[#091928]/12 bg-white px-4 transition-all focus-within:border-[#c8f229] focus-within:ring-4 focus-within:ring-[#c8f229]/20">
      <FieldIcon path={ICONS.lock} />

      <input
        name={name}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-sm text-[#091928] outline-none placeholder:text-[#091928]/40"
        autoComplete="new-password"
      />

      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-[#091928]/40 hover:text-[#091928]"
      >
        <EyeIcon open={visible} />
      </button>
    </div>
  );
}

function BrandPanel() {
  return (
    <div
      className="relative hidden h-full w-1/2 shrink-0 overflow-hidden bg-[#091928] bg-cover bg-center bg-no-repeat lg:flex"
      style={{
        backgroundImage: 'url("/brand-bg.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-[#091928]/45" />

      <div className="relative z-10 flex h-full w-full items-center px-12 xl:px-16 2xl:px-20">
        <div className="w-full max-w-[520px]">
          <div className="mb-6">
            <img
              src="/favicon.png"
              alt="YojnaSetu"
              className="h-14 w-14 object-contain"
            />
          </div>

          <h1 className="text-[40px] font-bold leading-[1.15] text-[#f4f6ef] xl:text-[46px] 2xl:text-[48px]">
            Welcome to{" "}
            <span className="text-[#c8f229]">
              YojnaSetu
            </span>
            <br />
            Create Excellence
            <br />
            With Us
          </h1>

          <p className="mt-6 max-w-[440px] text-base leading-7 text-white/65">
            Discover government schemes and financial
            assistance designed to make your financial journey
            simpler and easier.
          </p>

          <div className="mt-9 w-[220px]">
            <svg
              className="block h-auto w-full drop-shadow-[4px_6px_8px_rgba(0,0,0,0.45)]"
              viewBox="0 0 320 140"
            >
              <path
                d="M10 45 H230 V15 L305 70 L230 125 V95 H10 Z"
                fill="#c8f229"
              />

              <text
                x="118"
                y="62"
                textAnchor="middle"
                className="fill-[#091928] text-[11px] font-bold"
              >
                Guiding Financial
              </text>

              <text
                x="118"
                y="82"
                textAnchor="middle"
                className="fill-[#091928] text-[11px] font-bold"
              >
                Journeys
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Signup() {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSignup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const goToLogin = () => {
    window.location.hash = "#/login";
  };

  const storeSession = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem(
      "yojnasetuUser",
      JSON.stringify(data.user)
    );

    window.dispatchEvent(new Event("userLogin"));
  };

  const handleRegister = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");

      if (
        !signup.name ||
        !signup.email ||
        !signup.password ||
        !signup.confirmPassword
      ) {
        setError("Please fill in all fields.");
        return;
      }

      if (signup.password !== signup.confirmPassword) {
        setError("Passwords don't match.");
        return;
      }

      setLoading(true);

      try {
        const res = await fetch(`${API_BASE}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: signup.name,
            email: signup.email,
            password: signup.password,
          }),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(
            data.message || "Registration failed."
          );
        }

        storeSession(data);
        window.location.hash = "#/home";
      } catch (err) {
        setError(
          err.message ||
            "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
    [signup]
  );

  return (
    <div className="flex min-h-screen w-full bg-[#eef2e3] font-sans lg:h-screen lg:overflow-hidden">

      {/* LEFT BRAND */}
      <BrandPanel />

      {/* RIGHT FORM */}
      <div className="flex min-h-screen w-full items-center justify-center overflow-y-auto bg-[#eef2e3] px-6 py-10 lg:h-full lg:min-h-0 lg:w-1/2 lg:shrink-0 lg:px-12 xl:px-16">
        <div className="w-full max-w-[430px]">

          {/* Mobile Logo */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <img
              src="/favicon.png"
              alt="YojnaSetu"
              className="h-11 w-11 object-contain"
            />

            <span className="text-xl font-semibold text-[#091928]">
              Yojna
              <span className="text-[#B9E92F]">
                Setu
              </span>
            </span>
          </div>

          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#7e9f10]">
              Get Started
            </p>

            <h2 className="text-3xl font-bold text-[#091928]">
              Create Your Account
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#091928]/60">
              Join YojnaSetu and simplify your financial
              assistance journey.
            </p>
          </div>

          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-4"
          >
            <TextInput
              icon="user"
              name="name"
              placeholder="Full Name"
              value={signup.name}
              onChange={handleChange}
            />

            <TextInput
              icon="mail"
              type="email"
              name="email"
              placeholder="Email Address"
              value={signup.email}
              onChange={handleChange}
            />

            <PasswordInput
              name="password"
              placeholder="Create Password"
              value={signup.password}
              onChange={handleChange}
            />

            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signup.confirmPassword}
              onChange={handleChange}
            />

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 h-[54px] w-full cursor-pointer rounded-xl bg-[#c8f229] text-sm font-bold text-[#091928] transition hover:-translate-y-0.5 hover:brightness-95 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Creating account…"
                : "Create Account"}
            </button>
          </form>

          <div className="mt-7 pb-2 text-center text-sm text-[#091928]/60">
            Already have an account?{" "}
            <button
              type="button"
              onClick={goToLogin}
              className="cursor-pointer border-0 bg-transparent p-0 font-bold text-[#7e9f10] hover:text-[#091928]"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}