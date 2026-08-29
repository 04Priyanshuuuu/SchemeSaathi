import React from "react";
import "./Map.css";

export default function Map() {
  const go = (path) => (window.location.hash = path);

  return (
    <div className="map-page">
      <header className="map-nav">
        <div onClick={() => go("/")} className="map-logo">
          <b>✓</b> YojnaSetu
        </div>

        <button onClick={() => go("/partners")}>
          ← Back to Partners
        </button>
      </header>

      <main className="map-main">
        <div className="map-heading">
          <p>PARTNER ROUTER</p>
          <h1>Nearby Channel Partners</h1>
        </div>

        <div className="map-layout">
          <section className="fake-map">
            <div className="road road-one"></div>
            <div className="road road-two"></div>
            <div className="road road-three"></div>

            <div className="map-pin pin-one">⌖</div>
            <div className="map-pin pin-two">⌖</div>
            <div className="map-pin pin-three">⌖</div>

            <div className="your-location">You</div>
          </section>

          <aside className="map-sidebar">
            <h2>Eligible Partners</h2>

            <div className="map-partner">
              <b>State Channelizing Agency</b>
              <span>2.4 km</span>
            </div>

            <div className="map-partner">
              <b>Public Sector Bank</b>
              <span>3.1 km</span>
            </div>

            <div className="map-partner">
              <b>Regional Rural Bank</b>
              <span>5.8 km</span>
            </div>

            <button onClick={() => go("/contact")}>
              Need Help?
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}