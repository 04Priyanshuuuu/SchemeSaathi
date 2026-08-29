import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  const go = (path) => (window.location.hash = path);

  return (
    <div className="privacy-page">
      <header className="privacy-nav">
        <div onClick={() => go("/")} className="privacy-logo">
          <b>✓</b> YojnaSetu
        </div>

        <button onClick={() => go("/home")}>Home</button>
      </header>

      <main className="privacy-main">
        <div className="privacy-title">
          <p>YOJNASETU</p>
          <h1>Privacy Policy</h1>
          <span>Last updated: August 2026</span>
        </div>

        <article className="privacy-card">
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              YojnaSetu may collect information required to understand your
              financial requirements, eligibility and preferences for scheme
              recommendations.
            </p>
          </section>

          <section>
            <h2>2. How We Use Information</h2>
            <p>
              Information may be used to provide scheme recommendations,
              financial calculations, partner discovery and improve the
              platform experience.
            </p>
          </section>

          <section>
            <h2>3. Data Security</h2>
            <p>
              We take reasonable measures to protect information handled by
              the platform against unauthorized access or misuse.
            </p>
          </section>

          <section>
            <h2>4. Third-Party Services</h2>
            <p>
              Mapping, authentication or other services may be integrated
              into YojnaSetu where required for platform functionality.
            </p>
          </section>

          <section>
            <h2>5. Contact</h2>
            <p>
              For privacy-related questions, please contact the YojnaSetu
              support team.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}