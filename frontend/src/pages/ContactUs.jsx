import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  const go = (path) => {
    window.location.hash = path;
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#091928]">
      <Navbar />

      {/* Main */}
      <main className="mx-auto grid max-w-[1050px] grid-cols-2 items-center gap-[50px] px-[25px] py-[70px] max-[750px]:grid-cols-1">
        {/* Contact Information */}
        <section>
          <p className="font-extrabold tracking-[2px] text-[#8daf17]">
            YOJNASETU SUPPORT
          </p>

          <h1 className="my-3 text-[48px] font-bold leading-tight max-md:text-[38px]">
            We're Here to Help.
          </h1>

          <span className="leading-[1.6] text-[#68747b]">
            Have a question about schemes, eligibility or channel partners? Send
            us a message.
          </span>

          {/* Contact Points */}
          <div className="mt-[35px] grid gap-[15px]">
            <div className="rounded-[14px] bg-white p-[18px]">
              <b className="block">✉ Email</b>
              <span className="mt-[5px] block text-[#68747b]">
                support@yojnasetu.in
              </span>
            </div>

            <div className="rounded-[14px] bg-white p-[18px]">
              <b className="block">⌖ Support</b>
              <span className="mt-[5px] block text-[#68747b]">
                Scheme & Partner Assistance
              </span>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <form
          onSubmit={submit}
          className="rounded-[20px] bg-white p-[30px] shadow-[0_8px_30px_rgba(9,25,40,0.08)]"
        >
          <label className="mb-[17px] block text-[13px] font-bold">
            Full Name
            <input
              required
              placeholder="Enter your name"
              className="mt-[7px] block w-full rounded-[9px] border border-[#091928]/15 p-[13px] outline-none transition focus:border-[#b9e92f] focus:ring-2 focus:ring-[#b9e92f]/30"
            />
          </label>

          <label className="mb-[17px] block text-[13px] font-bold">
            Email Address
            <input
              required
              type="email"
              placeholder="Enter your email"
              className="mt-[7px] block w-full rounded-[9px] border border-[#091928]/15 p-[13px] outline-none transition focus:border-[#b9e92f] focus:ring-2 focus:ring-[#b9e92f]/30"
            />
          </label>

          <label className="mb-[17px] block text-[13px] font-bold">
            Message
            <textarea
              required
              placeholder="How can we help?"
              className="mt-[7px] block min-h-[130px] w-full resize-y rounded-[9px] border border-[#091928]/15 p-[13px] outline-none transition focus:border-[#b9e92f] focus:ring-2 focus:ring-[#b9e92f]/30"
            />
          </label>

          {/* Success Message */}
          {sent && (
            <div className="mb-[15px] rounded-lg bg-[#edf7c9] p-2.5 text-[13px] text-[#4e6800]">
              Your message has been submitted successfully.
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-[22px] border-0 bg-[#b9e92f] p-3.5 font-extrabold text-[#091928] transition hover:brightness-95 cursor-pointer"
          >
            Send Message →
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
