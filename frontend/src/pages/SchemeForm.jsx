import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SchemeForm() {
  return (
    <div className="min-h-screen bg-[#091928] text-white">
      <Navbar />
      <div className="scheme-form">{/* Scheme Form Page Content */}</div>
      <Footer />
    </div>
  );
}
