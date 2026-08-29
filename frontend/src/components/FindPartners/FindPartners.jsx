import React from "react";
import Footer from "../Footer/footer";
import "./FindPartners.css";

export default function FindPartners() {
  const goTo = (path) => {
    window.location.hash = path;
  };

  return (
    <main className="partner-page">

      {/* ================= PARTNER SECTION ================= */}

      <section className="partner-section">

        {/* TOP */}
        <div className="partner-top">

          <button
            className="partner-logo"
            onClick={() => goTo("#/")}
            aria-label="YojnaSetu Home"
          >
            <img
              src="/logo.png"
              alt="YojnaSetu"
            />
          </button>

          <button
            className="partner-language"
            onClick={() => alert("Language selection")}
            aria-label="Change language"
          >
            <span>文</span>
            <span>अ</span>
          </button>

        </div>


        {/* TITLE */}

        <h1 className="partner-title">
          Find the nearest suitable Channel Partner
        </h1>


        {/* ================= PARTNER 1 ================= */}

        <article className="partner-card">

          <div className="partner-number">
            #1
          </div>

          <div className="partner-content">

            <h2>
              Channel Partner 1
            </h2>

            <p>
              Address
            </p>

            <div className="partner-actions">

              <button
                className="partner-distance"
                onClick={() => goTo("#/map")}
              >
                1.5 KM away
              </button>

              <button
                className="partner-availability partner-available"
                onClick={() => alert("Applications are being accepted")}
              >
                Accepting Applications
              </button>

            </div>

          </div>

          <button
            className="partner-bookmark"
            onClick={() => alert("Partner saved")}
            aria-label="Bookmark Channel Partner 1"
          >
            ♧
          </button>

        </article>


        {/* ================= PARTNER 2 ================= */}

        <article className="partner-card">

          <div className="partner-number">
            #2
          </div>

          <div className="partner-content">

            <h2>
              Channel Partner 2
            </h2>

            <p>
              Address
            </p>

            <div className="partner-actions">

              <button
                className="partner-distance"
                onClick={() => goTo("#/map")}
              >
                3 KM away
              </button>

              <button
                className="partner-availability partner-unavailable"
                onClick={() => alert("Currently unavailable")}
              >
                Currently Unavailable
              </button>

            </div>

          </div>

          <button
            className="partner-bookmark"
            onClick={() => alert("Partner saved")}
            aria-label="Bookmark Channel Partner 2"
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