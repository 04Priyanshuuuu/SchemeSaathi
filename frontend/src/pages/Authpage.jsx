import React, { useState, useCallback, useEffect } from "react";

// ---- Config ----------------------------------------------------------
const API_BASE = "http://localhost:5000/api";

// ---- Auth callback ---------------------------------------------------
const parseAuthCallback = () => {
  const hash = window.location.hash || "";

  const rawQuery = hash.includes("?")
    ? hash.slice(hash.indexOf("?") + 1)
    : window.location.search.slice(1);

  const params = new URLSearchParams(rawQuery);
  const token = params.get("token");
  const encodedUser = params.get("user");

  if (!token) return null;

  try {
    const user = encodedUser
      ? JSON.parse(decodeURIComponent(encodedUser))
      : null;

    return { token, user };
  } catch {
    return { token, user: null };
  }
};

// ---- Icons -----------------------------------------------------------
const ICONS = {
  user: "M20 21a8 8 0 1 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  mail: "M4 4h16v16H4V4Zm0 0 8 8 8-8",
  lock: "M6 10V8a6 6 0 1 1 12 0v2M5 10h14v10H5V10Z",
};

function FieldIcon({ path }) {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-[#091928]/50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

// ---- Eye icon --------------------------------------------------------
function EyeIcon({ open }) {
  return open ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.3 21.3 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 7 11 7a21.3 21.3 0 0 1-2.63 3.68M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

// ---- Text input ------------------------------------------------------
function TextInput({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-[#091928]/15 bg-white px-3 py-2.5 transition-all focus-within:border-[#c8f229] focus-within:ring-4 focus-within:ring-[#c8f229]/35">
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

// ---- Password input --------------------------------------------------
function PasswordInput({ placeholder, value, onChange, name }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center gap-2 rounded-lg border border-[#091928]/15 bg-white px-3 py-2.5 transition-all focus-within:border-[#c8f229] focus-within:ring-4 focus-within:ring-[#c8f229]/35">
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
        aria-label={visible ? "Hide password" : "Show password"}
        className="flex shrink-0 items-center justify-center border-0 bg-transparent p-0 text-[#091928]/45 transition-colors hover:text-[#091928]/80"
      >
        <EyeIcon open={visible} />
      </button>
    </div>
  );
}

// ---- Error text ------------------------------------------------------
function ErrorText({ children }) {
  if (!children) return null;

  return <p className="-mt-1 text-xs text-red-600">{children}</p>;
}

// ---- Brand panel -----------------------------------------------------
function BrandPanel() {
  return (
    <div
      className="relative flex w-1/2 flex-col items-start gap-7 overflow-hidden bg-[#091928] bg-cover bg-center bg-no-repeat p-10 text-white max-md:hidden"
      style={{
        backgroundImage: 'url("/brand-bg.jpg")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-[#091928]/35" />

      {/* Heading */}
      <div className="relative z-10">
        <h1 className="m-0 text-left text-[32px] font-bold leading-[1.25] text-[#f4f6ef]">
          Welcome to <span className="text-[#c8f229]">YojnaSetu</span>
          <br />
          Create Excellence
          <br />
          With Us
        </h1>
      </div>

      {/* Arrow */}
      <div className="relative z-10 w-full max-w-[200px]">
        <svg
          className="block h-auto w-full drop-shadow-[4px_6px_8px_rgba(0,0,0,0.45)]"
          viewBox="0 0 320 140"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M10 45 H230 V15 L305 70 L230 125 V95 H10 Z" fill="#c8f229" />

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
  );
}

// ---- Main Auth Page --------------------------------------------------
export default function Auth() {
  useEffect(() => {
    const authResult = parseAuthCallback();

    if (!authResult?.token) return;

    localStorage.setItem("token", authResult.token);

    if (authResult.user) {
      localStorage.setItem("user", JSON.stringify(authResult.user));
    }

    window.history.replaceState({}, "", "/#/auth");
    window.location.href = "/dashboard";
  }, []);

  // Signup state
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signupError, setSignupError] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);

  // Login state
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Signup input handler
  const handleSignupChange = (e) => {
    setSignup((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

  // Login input handler
  const handleLoginChange = (e) => {
    setLogin((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

  // Store authentication session
  const storeSession = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  // Register
  const handleRegister = useCallback(
    async (e) => {
      e.preventDefault();
      setSignupError("");

      if (!signup.name || !signup.email || !signup.password) {
        setSignupError("Please fill in all fields.");
        return;
      }

      if (signup.password !== signup.confirmPassword) {
        setSignupError("Passwords don't match.");
        return;
      }

      setSignupLoading(true);

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
          throw new Error(data.message || "Registration failed.");
        }

        storeSession(data);

        window.location.href = "/dashboard";
      } catch (err) {
        setSignupError(
          err.message || "Something went wrong. Please try again.",
        );
      } finally {
        setSignupLoading(false);
      }
    },
    [signup],
  );

  // Login
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      setLoginError("");

      if (!login.email || !login.password) {
        setLoginError("Please enter your email and password.");
        return;
      }

      setLoginLoading(true);

      try {
        const res = await fetch(`${API_BASE}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(
            data.message || "Login failed. Check your credentials.",
          );
        }

        storeSession(data);

        window.location.href = "/dashboard";
      } catch (err) {
        setLoginError(err.message || "Something went wrong. Please try again.");
      } finally {
        setLoginLoading(false);
      }
    },
    [login],
  );

  // Google authentication
  const handleGoogleAuth = () => {
    window.location.href = `${API_BASE}/auth/google`;
  };

  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* Left Brand Panel */}
      <BrandPanel />

      {/* Right Form Panel */}
      <div className="flex w-1/2 items-center justify-center bg-[#eef2e3] px-6 py-10 max-md:w-full">
        <div className="flex w-full max-w-[380px] flex-col gap-8">
          {/* ================= SIGN UP ================= */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="m-0 text-xl font-bold text-[#091928]">
                Secure Access
              </h2>

              <p className="mt-1 text-xs text-[#091928]/60">
                Guiding your financial journey to elevate your business destiny
              </p>
            </div>

            <p className="m-0 text-sm font-medium text-[#091928]">
              Sign up / Login
            </p>

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#091928]/15 bg-white py-2.5 text-sm font-medium text-[#091928] transition-colors hover:bg-[#091928]/5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
                />

                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0 0 12 23Z"
                />

                <path
                  fill="#FBBC05"
                  d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.85Z"
                />

                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.05l3.66 2.85C6.71 7.3 9.14 5.38 12 5.38Z"
                />
              </svg>
              Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 text-xs text-[#091928]/40">
              <div className="h-px flex-1 bg-[#091928]/15" />

              <span>or use your email</span>

              <div className="h-px flex-1 bg-[#091928]/15" />
            </div>

            {/* Signup form */}
            <form onSubmit={handleRegister} className="flex flex-col gap-3">
              <TextInput
                icon="user"
                name="name"
                placeholder="Full Name"
                value={signup.name}
                onChange={handleSignupChange}
              />

              <TextInput
                icon="mail"
                type="email"
                name="email"
                placeholder="Email Address"
                value={signup.email}
                onChange={handleSignupChange}
              />

              <PasswordInput
                name="password"
                placeholder="Create Password"
                value={signup.password}
                onChange={handleSignupChange}
              />

              <PasswordInput
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signup.confirmPassword}
                onChange={handleSignupChange}
              />

              <ErrorText>{signupError}</ErrorText>

              <button
                type="submit"
                disabled={signupLoading}
                className="w-full rounded-lg border-0 bg-[#c8f229] py-2.5 text-sm font-semibold text-[#091928] transition-all hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {signupLoading ? "Creating account…" : "Create Account"}
              </button>
            </form>
          </div>

          {/* Section Divider */}
          <div className="h-px w-full bg-[#091928]/10" />

          {/* ================= LOGIN ================= */}
          <div className="flex flex-col gap-4">
            <h3 className="m-0 text-xl font-bold text-[#091928]">Login</h3>

            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <TextInput
                icon="mail"
                type="email"
                name="email"
                placeholder="Email Address"
                value={login.email}
                onChange={handleLoginChange}
              />

              <PasswordInput
                name="password"
                placeholder="Password"
                value={login.password}
                onChange={handleLoginChange}
              />

              <ErrorText>{loginError}</ErrorText>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full rounded-lg border-0 bg-[#c8f229] py-2.5 text-sm font-semibold text-[#091928] transition-all hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loginLoading ? "Logging in…" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
