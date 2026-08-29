import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* LEFT SECTION */}
        <div className="footer-left">

          <div className="footer-brand">
            <img
              src="/logo.png"
              alt="YojnaSetu Logo"
              className="footer-logo"
            />

            <span>YojnaSetu</span>
          </div>

          <p className="footer-description">
            Designed to eliminate financial
            <br />
            misrepresentation and opaque approvals
            <br />
            in welfare distribution.
          </p>

        </div>


        {/* RIGHT SECTION */}
        <div className="footer-right">

          <h3>Contact Info</h3>

          <div className="footer-line"></div>

          <div className="footer-contact">

            <div className="footer-contact-row">
              <span className="footer-icon">☎</span>
              <span>
                1800-11-2026 (Toll-Free, 9 AM - 6 PM IST)
              </span>
            </div>

            <div className="footer-contact-row">
              <span className="footer-icon">✉</span>
              <span>
                support@yojnasetu.gov.in
              </span>
            </div>

            <div className="footer-contact-row">
              <span className="footer-icon">♙</span>
              <span>
                Ministry of Social Justice &amp;
                <br />
                Empowerment, New Delhi, India
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © Copyright - YojnaSetu 2026. All Rights Reserved.
      </div>

    </footer>
  );
}