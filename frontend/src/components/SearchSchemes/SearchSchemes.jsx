import React, { useState } from "react";
import "./SearchSchemes.css";

const schemes = [
  {
    title: "Micro Finance Scheme",
    type: "Business",
    amount: "Up to ₹1.40 Lakh",
    rate: "Concessional Interest",
    text: "Suitable for small business and micro-enterprise requirements."
  },
  {
    title: "Term Loan Scheme",
    type: "Business",
    amount: "Up to ₹50 Lakh",
    rate: "Concessional Interest",
    text: "Designed for larger business and project requirements."
  },
  {
    title: "Educational Loan Scheme",
    type: "Education",
    amount: "As per eligibility",
    rate: "Concessional Interest",
    text: "Financial support for eligible higher education requirements."
  }
];

export default function SearchSchemes() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");

  const filtered = schemes.filter((scheme) => {
    const search =
      scheme.title.toLowerCase().includes(query.toLowerCase()) ||
      scheme.text.toLowerCase().includes(query.toLowerCase());

    return search && (type === "All" || scheme.type === type);
  });

  const go = (path) => (window.location.hash = path);

  return (
    <div className="scheme-page">
      <header className="scheme-nav">
        <div className="scheme-logo" onClick={() => go("/")}>
          <b>✓</b> YojnaSetu
        </div>

        <nav>
          <button onClick={() => go("/home")}>Home</button>
          <button className="active">Search Schemes</button>
          <button onClick={() => go("/emi")}>Calculate EMI</button>
          <button onClick={() => go("/partners")}>Find Partners</button>
        </nav>

        <button onClick={() => go("/auth")} className="scheme-login">
          Login
        </button>
      </header>

      <main className="scheme-main">
        <div className="scheme-heading">
          <p>YOJNASETU</p>
          <h1>Find Financial Assistance</h1>
          <span>
            Search and explore schemes according to your financial needs.
          </span>
        </div>

        <div className="scheme-search">
          <input
            placeholder="Search schemes, business, education..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>All</option>
            <option>Business</option>
            <option>Education</option>
          </select>
        </div>

        <div className="scheme-grid">
          {filtered.map((scheme) => (
            <article className="scheme-card" key={scheme.title}>
              <div className="scheme-card-top">
                <span>{scheme.type}</span>
                <b>✓</b>
              </div>

              <h2>{scheme.title}</h2>
              <p>{scheme.text}</p>

              <div className="scheme-info">
                <div>
                  <small>Loan Amount</small>
                  <strong>{scheme.amount}</strong>
                </div>

                <div>
                  <small>Interest</small>
                  <strong>{scheme.rate}</strong>
                </div>
              </div>

              <button onClick={() => go("/recommended")}>
                Check Eligibility →
              </button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}