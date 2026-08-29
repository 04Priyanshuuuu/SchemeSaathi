import React, { useState } from "react";
import "./UserProfile.css";

export default function UserProfile() {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Priyanshu",
    email: "user@example.com",
    income: "₹3,50,000",
    occupation: "Entrepreneur",
    location: "India"
  });

  const update = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  const go = (path) => (window.location.hash = path);

  return (
    <div className="profile-page">
      <header className="profile-nav">
        <div onClick={() => go("/")} className="profile-logo">
          <b>✓</b> YojnaSetu
        </div>

        <button onClick={() => go("/home")}>Back to Home</button>
      </header>

      <main className="profile-main">
        <div className="profile-head">
          <div className="avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <p>MY PROFILE</p>
            <h1>{user.name}</h1>
            <span>{user.email}</span>
          </div>
        </div>

        <section className="profile-card">
          <div className="profile-card-title">
            <h2>Personal Information</h2>

            <button onClick={() => setEditing(!editing)}>
              {editing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>

          <div className="profile-grid">
            <label>
              Full Name
              <input
                name="name"
                disabled={!editing}
                value={user.name}
                onChange={update}
              />
            </label>

            <label>
              Email
              <input
                name="email"
                disabled={!editing}
                value={user.email}
                onChange={update}
              />
            </label>

            <label>
              Annual Family Income
              <input
                name="income"
                disabled={!editing}
                value={user.income}
                onChange={update}
              />
            </label>

            <label>
              Occupation
              <input
                name="occupation"
                disabled={!editing}
                value={user.occupation}
                onChange={update}
              />
            </label>

            <label>
              Location
              <input
                name="location"
                disabled={!editing}
                value={user.location}
                onChange={update}
              />
            </label>
          </div>
        </section>

        <div className="profile-actions">
          <button onClick={() => go("/recommended")}>
            View Recommended Schemes
          </button>

          <button onClick={() => go("/partners")}>
            Find Channel Partners
          </button>
        </div>
      </main>
    </div>
  );
}