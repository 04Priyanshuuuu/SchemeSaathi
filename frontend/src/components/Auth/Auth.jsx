import React, { useState, useCallback } from "react";
import "./Auth.css";

// ---- Config ----------------------------------------------------------
// Point this at your backend. Kept as a constant so it's a one-line change
// when you move from localhost to a deployed API (Render, etc).
const API_BASE = "http://localhost:5000/api";

// ---- Icon paths (kept separate so the JSX below stays readable) ------
const ICONS = {
  user: "M20 21a8 8 0 1 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  mail: "M4 4h16v16H4V4Zm0 0 8 8 8-8",
  lock: "M6 10V8a6 6 0 1 1 12 0v2M5 10h14v10H5V10Z",
};

function FieldIcon({ path }) {
  return (
    <svg
      className="input-icon"
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

// ---- Eye / eye-off icons for password visibility toggle ----------------

function EyeIcon({ open }) {
  return open ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.3 21.3 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 7 11 7a21.3 21.3 0 0 1-2.63 3.68M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function TextInput({ icon, type = "text", placeholder, value, onChange, name }) {
  return (
    <div className="input-wrapper">
      <FieldIcon path={ICONS[icon]} />
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
        autoComplete={type === "password" ? "new-password" : "on"}
      />
    </div>
  );
}

// Password input with a show/hide eye toggle, built on top of TextInput's markup
function PasswordInput({ placeholder, value, onChange, name }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="input-wrapper">
      <FieldIcon path={ICONS.lock} />
      <input
        name={name}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
        autoComplete="new-password"
      />
      <button
        type="button"
        className="eye-toggle"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide password" : "Show password"}
        tabIndex={-1}
      >
        <EyeIcon open={visible} />
      </button>
    </div>
  );
}

function ErrorText({ children }) {
  if (!children) return null;
  return <p className="error-text">{children}</p>;
}

// ---- Decorative left panel ---------------------------------------------
// Stand-in for "left hand side bg is an image" — a connected-dots pattern
// in the brand palette. Swap the <svg> below for a real background image
// whenever the asset is ready (see .brand-panel in AuthPage.css).

function BrandPanel() {
  return (
    <div className="brand-panel">
      {/* Background is now a real image set via CSS (see .brand-panel
          background-image in AuthPage.css) — drop your actual asset into
          the public folder and point the path there. No graphic generated
          in code anymore. */}

      {/* Optional legibility overlay — remove this div (and its CSS rule)
          if your background image is already dark enough for white text. */}
      <div className="brand-panel__overlay" />

      <div className="brand-panel__content">
        <h1 className="brand-panel__heading">
          Welcome to <span className="brand-panel__heading-accent">SchemeSaathi</span>
          <br />
          Create Excellence
          <br />
          With Us
        </h1>
      </div>

      {/* Arrow graphic with the caption written across it, plus the
          checkmark badge sitting at its top-right corner — matches the
          Figma layout instead of the pill-button version from before. */}
      <div className="brand-panel__arrow-block">
        <svg
          className="brand-panel__arrow"
          viewBox="0 0 320 140"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M10 45 H230 V15 L305 70 L230 125 V95 H10 Z"
            fill="#c8f229"
          />
          <text
            x="118"
            y="62"
            textAnchor="middle"
            className="brand-panel__arrow-text"
          >
            Guiding Financial
          </text>
          <text
            x="118"
            y="82"
            textAnchor="middle"
            className="brand-panel__arrow-text"
          >
            Journeys
          </text>
        </svg>
      </div>
    </div>
  );
}

// ---- Main page -----------------------------------------------------------

export default function Auth() {
  // Sign-up state
  const [signup, setSignup] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [signupError, setSignupError] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);

  // Login state
  const [login, setLogin] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const handleSignupChange = (e) =>
    setSignup((s) => ({ ...s, [e.target.name]: e.target.value }));
  const handleLoginChange = (e) =>
    setLogin((s) => ({ ...s, [e.target.name]: e.target.value }));

  const storeSession = (data) => {
    // token + user come back from both register and login per the backend doc
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

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
          headers: { "Content-Type": "application/json" },
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
        window.location.href = "/dashboard"; // adjust to your actual post-signup route
      } catch (err) {
        setSignupError(err.message || "Something went wrong. Please try again.");
      } finally {
        setSignupLoading(false);
      }
    },
    [signup]
  );

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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(login),
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || "Login failed. Check your credentials.");
        }
        storeSession(data);
        window.location.href = "/dashboard"; // adjust to your actual post-login route
      } catch (err) {
        setLoginError(err.message || "Something went wrong. Please try again.");
      } finally {
        setLoginLoading(false);
      }
    },
    [login]
  );

  const handleGoogleAuth = () => {
    // Backend handles the OAuth dance server-side; frontend just redirects.
    window.location.href = `${API_BASE}/auth/google`;
  };

  return (
    <div className="auth-page">
      <BrandPanel />

      <div className="form-panel">
        <div className="form-panel__inner">
          {/* ---- Sign up ---- */}
          <div className="form-section">
            <div>
              <h2 className="form-title">Secure Access</h2>
              <p className="form-subtitle">
                Guiding your financial journey to elevate your business destiny
              </p>
            </div>

            <p className="form-label">Sign up / Login</p>

            <button type="button" onClick={handleGoogleAuth} className="google-button">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0 0 12 23Z" />
                <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.85Z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.05l3.66 2.85C6.71 7.3 9.14 5.38 12 5.38Z" />
              </svg>
              Google
            </button>

            <div className="divider">
              <div className="divider__line" />
              or use your email
              <div className="divider__line" />
            </div>

            <form onSubmit={handleRegister} className="input-group">
              <TextInput icon="user" name="name" placeholder="Full Name" value={signup.name} onChange={handleSignupChange} />
              <TextInput icon="mail" type="email" name="email" placeholder="Email Address" value={signup.email} onChange={handleSignupChange} />
              <PasswordInput name="password" placeholder="Create Password" value={signup.password} onChange={handleSignupChange} />
              <PasswordInput name="confirmPassword" placeholder="Confirm Password" value={signup.confirmPassword} onChange={handleSignupChange} />

              <ErrorText>{signupError}</ErrorText>

              <button type="submit" className="primary-button" disabled={signupLoading}>
                {signupLoading ? "Creating account…" : "Create Account"}
              </button>
            </form>
          </div>

          <div className="section-divider" />

          {/* ---- Login ---- */}
          <div className="form-section">
            <h3 className="form-title">Login</h3>
            <form onSubmit={handleLogin} className="input-group">
              <TextInput icon="mail" type="email" name="email" placeholder="Email Address" value={login.email} onChange={handleLoginChange} />
              <PasswordInput name="password" placeholder="Password" value={login.password} onChange={handleLoginChange} />

              <ErrorText>{loginError}</ErrorText>

              <button type="submit" className="primary-button" disabled={loginLoading}>
                {loginLoading ? "Logging in…" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}