import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  const go = (path) => (window.location.hash = path);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">
      <header className="contact-nav">
        <div onClick={() => go("/")} className="contact-logo">
          <b>✓</b> YojnaSetu
        </div>

        <button onClick={() => go("/home")}>Home</button>
      </header>

      <main className="contact-main">
        <section className="contact-info">
          <p>YOJNASETU SUPPORT</p>
          <h1>We're Here to Help.</h1>

          <span>
            Have a question about schemes, eligibility or channel partners?
            Send us a message.
          </span>

          <div className="contact-points">
            <div>
              <b>✉ Email</b>
              <span>support@yojnasetu.in</span>
            </div>

            <div>
              <b>⌖ Support</b>
              <span>Scheme & Partner Assistance</span>
            </div>
          </div>
        </section>

        <form className="contact-form" onSubmit={submit}>
          <label>
            Full Name
            <input required placeholder="Enter your name" />
          </label>

          <label>
            Email Address
            <input required type="email" placeholder="Enter your email" />
          </label>

          <label>
            Message
            <textarea required placeholder="How can we help?" />
          </label>

          {sent && (
            <div className="success">
              Your message has been submitted successfully.
            </div>
          )}

          <button type="submit">Send Message →</button>
        </form>
      </main>
    </div>
  );
}