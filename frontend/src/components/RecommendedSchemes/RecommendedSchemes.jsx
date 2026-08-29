import React from "react";
import Footer from "../Footer/footer";
import "./RecommendedSchemes.css";

export default function RecommendedSchemes() {
  const goTo = (path) => {
    window.location.hash = path;
  };

  return (
    <main className="recommended-page">

      {/* ================= SCHEME CONTENT ================= */}

      <section className="recommended-section">

        {/* TOP LOGO + LANGUAGE */}
        <div className="recommended-top">

          <button
            className="recommended-logo"
            onClick={() => goTo("#/")}
            aria-label="YojnaSetu Home"
          >
            <img
              src="/logo.png"
              alt="YojnaSetu"
            />
          </button>

          <button
            className="recommended-language"
            onClick={() => alert("Language selection")}
            aria-label="Change language"
          >
            <span>文</span>
            <span>अ</span>
          </button>

        </div>


        {/* TITLE */}
        <h1 className="recommended-title">
          Recommended Schemes
        </h1>


        {/* COMPARE BUTTON */}
        <div className="compare-wrapper">
          <button
            className="compare-button"
            onClick={() => alert("Compare Schemes")}
          >
            Compare Schemes
          </button>
        </div>


        {/* ================= SCHEME 1 ================= */}

        <article className="scheme-result-card">

          <div className="scheme-number">
            #1
          </div>

          <div className="scheme-result-content">

            <h2>Scheme 1</h2>

            <p>
              Here goes the scheme description.
            </p>

            <div className="scheme-actions">

              <button
                className="scheme-emi-button"
                onClick={() => goTo("#/emi")}
              >
                Calculate EMI
              </button>

              <button
                className="scheme-partner-button"
                onClick={() => goTo("#/partners")}
              >
                Find suitable Channel Partners
              </button>

            </div>

          </div>

          <button
            className="bookmark-button"
            onClick={() => alert("Scheme saved")}
            aria-label="Bookmark Scheme 1"
          >
            ♧
          </button>

        </article>


        {/* ================= SCHEME 2 ================= */}

        <article className="scheme-result-card">

          <div className="scheme-number">
            #2
          </div>

          <div className="scheme-result-content">

            <h2>Scheme 2</h2>

            <p>
              Here goes the scheme description.
            </p>

            <div className="scheme-actions">

              <button
                className="scheme-emi-button"
                onClick={() => goTo("#/emi")}
              >
                Calculate EMI
              </button>

              <button
                className="scheme-partner-button"
                onClick={() => goTo("#/partners")}
              >
                Find suitable Channel Partners
              </button>

            </div>

          </div>

          <button
            className="bookmark-button"
            onClick={() => alert("Scheme saved")}
            aria-label="Bookmark Scheme 2"
          >
            ♧
          </button>

        </article>

      </section>


      {/* ================= REUSABLE FOOTER ================= */}

      <Footer />

    </main>
  );
}