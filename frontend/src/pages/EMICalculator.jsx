import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EMICalculator() {
  const [form, setForm] = useState({
    scheme: "Scheme 1",
    principal: "500000",
    interest: "6.8",
    time: "5",
    moratorium: "0",
    frequency: "Monthly",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const frequencies = {
    Monthly: {
      periodsPerYear: 12,
      monthsPerPayment: 1,
      label: "Monthly",
    },
    Quarterly: {
      periodsPerYear: 4,
      monthsPerPayment: 3,
      label: "Quarterly",
    },
    "Half-Yearly": {
      periodsPerYear: 2,
      monthsPerPayment: 6,
      label: "Half-Yearly",
    },
    Yearly: {
      periodsPerYear: 1,
      monthsPerPayment: 12,
      label: "Yearly",
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateEMI = () => {
    setError("");

    const principal = Number(form.principal);
    const annualInterest = Number(form.interest);
    const tenureYears = Number(form.time);
    const moratoriumMonths = Number(form.moratorium) || 0;

    if (!principal || principal <= 0) {
      setError("Please enter a valid principal amount.");
      return;
    }

    if (annualInterest < 0) {
      setError("Interest rate cannot be negative.");
      return;
    }

    if (!tenureYears || tenureYears <= 0) {
      setError("Please enter a valid loan tenure.");
      return;
    }

    if (moratoriumMonths < 0) {
      setError("Moratorium period cannot be negative.");
      return;
    }

    const frequencyData = frequencies[form.frequency];

    const totalLoanMonths = tenureYears * 12;

    if (moratoriumMonths >= totalLoanMonths) {
      setError(
        "Moratorium period must be shorter than the total loan tenure."
      );
      return;
    }

    /*
      During moratorium:
      Simple interest is calculated on the original principal
      and added to the outstanding amount.
    */
    const annualRateDecimal = annualInterest / 100;

    const moratoriumInterest =
      principal * annualRateDecimal * (moratoriumMonths / 12);

    const outstandingPrincipal = principal + moratoriumInterest;

    const remainingMonths = totalLoanMonths - moratoriumMonths;

    const paymentPeriods = Math.max(
      1,
      Math.ceil(
        remainingMonths / frequencyData.monthsPerPayment
      )
    );

    const periodicRate =
      annualRateDecimal / frequencyData.periodsPerYear;

    let emi;

    if (periodicRate === 0) {
      emi = outstandingPrincipal / paymentPeriods;
    } else {
      emi =
        (outstandingPrincipal *
          periodicRate *
          Math.pow(1 + periodicRate, paymentPeriods)) /
        (Math.pow(1 + periodicRate, paymentPeriods) - 1);
    }

    const totalRepayment =
      emi * paymentPeriods + moratoriumInterest;

    const totalInterest =
      totalRepayment - principal;

    const principalPercentage =
      totalRepayment > 0
        ? (principal / totalRepayment) * 100
        : 0;

    const interestPercentage =
      totalRepayment > 0
        ? (totalInterest / totalRepayment) * 100
        : 0;

    setResult({
      emi,
      principal,
      annualInterest,
      tenureYears,
      moratoriumMonths,
      moratoriumInterest,
      outstandingPrincipal,
      remainingMonths,
      paymentPeriods,
      totalInterest,
      totalRepayment,
      frequency: form.frequency,
      principalPercentage,
      interestPercentage,
    });

    setTimeout(() => {
      document
        .getElementById("emi-result")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  const resetCalculator = () => {
    setForm({
      scheme: "Scheme 1",
      principal: "500000",
      interest: "6.8",
      time: "5",
      moratorium: "0",
      frequency: "Monthly",
    });

    setResult(null);
    setError("");
  };

  const emiPerMonthEquivalent = useMemo(() => {
    if (!result) return 0;

    if (result.frequency === "Monthly") {
      return result.emi;
    }

    const periodsPerYear =
      frequencies[result.frequency].periodsPerYear;

    return (result.emi * periodsPerYear) / 12;
  }, [result]);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#091928] font-['Inter','Segoe_UI',Roboto,Helvetica,Arial,sans-serif] text-[#091928]">
      {/* =========================================================
          NAVBAR
      ========================================================== */}
      <Navbar />

      {/* =========================================================
          HERO + CALCULATOR
      ========================================================== */}
      <section
  className="
    relative w-full overflow-hidden
    bg-[radial-gradient(circle_at_50%_0%,rgba(185,233,47,0.10),transparent_28%),linear-gradient(180deg,#091928_0%,#102b3d_42%,#334952_75%,#eef2eb_100%)]
    px-5 pb-20 pt-24
    sm:px-8
    lg:px-12
  "
>
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-[-100px] top-[220px] h-[300px] w-[300px] rounded-full bg-[#b9e92f]/5 blur-3xl" />
        <div className="pointer-events-none absolute right-[-100px] top-[450px] h-[350px] w-[350px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* =====================================================
              PAGE HEADING
          ====================================================== */}
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div
              className="
                mx-auto mb-4 flex h-12 w-12 items-center justify-center
                rounded-2xl bg-[#b9e92f]/15
                text-2xl
                ring-1 ring-[#b9e92f]/30
              "
            >
              ₹
            </div>

            <h1
              className="
                text-3xl font-extrabold tracking-tight text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              EMI Calculator
            </h1>

            <p
              className="
                mx-auto mt-3 max-w-2xl
                text-sm leading-6 text-slate-200
                sm:text-base
              "
            >
              Calculate your estimated EMI, total interest and
              total repayment amount in a few simple steps.
            </p>
          </div>

          {/* =====================================================
              MAIN CALCULATOR CARD
          ====================================================== */}
          <div
            className="
              mx-auto max-w-5xl overflow-hidden
              rounded-[28px]
              border border-white/30
              bg-white/95
              shadow-[0_25px_70px_rgba(0,0,0,0.22)]
              backdrop-blur-xl
            "
          >
            {/* Card Header */}
            <div
              className="
                border-b border-slate-200
                bg-gradient-to-r from-[#f3fbdc] to-white
                px-6 py-6
                sm:px-8
                lg:px-10
              "
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#789500]">
                    Loan Planning
                  </p>

                  <h2 className="mt-1 text-xl font-extrabold text-[#091928] sm:text-2xl">
                    Enter your loan details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Fill in the details below to calculate your EMI.
                  </p>
                </div>

                <div className="rounded-full bg-[#091928] px-4 py-2 text-xs font-bold text-white">
                  Simple &amp; Quick
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-6 py-7 sm:px-8 lg:px-10">
              <div className="grid gap-5 md:grid-cols-2">
                {/* Scheme */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#091928]">
                    Scheme
                  </label>

                  <select
                    name="scheme"
                    value={form.scheme}
                    onChange={handleChange}
                    className="
                      h-12 w-full rounded-xl
                      border border-slate-300
                      bg-white px-4
                      text-sm font-medium text-slate-700
                      outline-none transition
                      focus:border-[#9bbf20]
                      focus:ring-4 focus:ring-[#b9e92f]/20
                    "
                  >
                    <option>Scheme 1</option>
                    <option>Education Loan Scheme</option>
                    <option>Business Loan Scheme</option>
                    <option>Agriculture Loan Scheme</option>
                    <option>Housing Loan Scheme</option>
                  </select>
                </div>

                {/* Principal */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#091928]">
                    Principal Amount
                  </label>

                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500">
                      ₹
                    </span>

                    <input
                      type="number"
                      min="1"
                      name="principal"
                      value={form.principal}
                      onChange={handleChange}
                      placeholder="Enter loan amount"
                      className="
                        h-12 w-full rounded-xl
                        border border-slate-300
                        bg-white pl-9 pr-4
                        text-sm font-medium text-slate-700
                        outline-none transition
                        focus:border-[#9bbf20]
                        focus:ring-4 focus:ring-[#b9e92f]/20
                      "
                    />
                  </div>

                  <p className="mt-1.5 text-xs text-slate-400">
                    Example: ₹5,00,000
                  </p>
                </div>

                {/* Interest */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#091928]">
                    Annual Interest Rate
                  </label>

                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      placeholder="Enter interest rate"
                      className="
                        h-12 w-full rounded-xl
                        border border-slate-300
                        bg-white px-4 pr-10
                        text-sm font-medium text-slate-700
                        outline-none transition
                        focus:border-[#9bbf20]
                        focus:ring-4 focus:ring-[#b9e92f]/20
                      "
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-500">
                      %
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-slate-400">
                    Enter annual interest rate
                  </p>
                </div>

                {/* Tenure */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#091928]">
                    Loan Tenure
                  </label>

                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      step="1"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      placeholder="Enter tenure"
                      className="
                        h-12 w-full rounded-xl
                        border border-slate-300
                        bg-white px-4 pr-16
                        text-sm font-medium text-slate-700
                        outline-none transition
                        focus:border-[#9bbf20]
                        focus:ring-4 focus:ring-[#b9e92f]/20
                      "
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                      Years
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-slate-400">
                    Example: 5 years
                  </p>
                </div>

                {/* Moratorium */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#091928]">
                    Moratorium Period
                  </label>

                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      step="1"
                      name="moratorium"
                      value={form.moratorium}
                      onChange={handleChange}
                      placeholder="0"
                      className="
                        h-12 w-full rounded-xl
                        border border-slate-300
                        bg-white px-4 pr-20
                        text-sm font-medium text-slate-700
                        outline-none transition
                        focus:border-[#9bbf20]
                        focus:ring-4 focus:ring-[#b9e92f]/20
                      "
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                      Months
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-slate-400">
                    Enter 0 if there is no moratorium
                  </p>
                </div>

                {/* Frequency */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#091928]">
                    Repayment Frequency
                  </label>

                  <select
                    name="frequency"
                    value={form.frequency}
                    onChange={handleChange}
                    className="
                      h-12 w-full rounded-xl
                      border border-slate-300
                      bg-white px-4
                      text-sm font-medium text-slate-700
                      outline-none transition
                      focus:border-[#9bbf20]
                      focus:ring-4 focus:ring-[#b9e92f]/20
                    "
                  >
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Half-Yearly</option>
                    <option>Yearly</option>
                  </select>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div
                  className="
                    mt-5 rounded-xl border border-red-200
                    bg-red-50 px-4 py-3
                    text-sm font-semibold text-red-700
                  "
                >
                  ⚠️ {error}
                </div>
              )}

              {/* Buttons */}
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={calculateEMI}
                  className="
                    h-12 rounded-xl
                    bg-[#091928]
                    px-10
                    text-sm font-extrabold text-white
                    shadow-[0_8px_20px_rgba(9,25,40,0.18)]
                    transition duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#102b3d]
                    hover:shadow-[0_12px_25px_rgba(9,25,40,0.25)]
                    active:translate-y-0
                  "
                >
                  Calculate EMI
                </button>

                <button
                  type="button"
                  onClick={resetCalculator}
                  className="
                    h-12 rounded-xl
                    border border-slate-300
                    bg-white px-8
                    text-sm font-bold text-slate-700
                    transition
                    hover:border-[#9bbf20]
                    hover:bg-[#f5fbdc]
                  "
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* =====================================================
              RESULT SECTION
          ====================================================== */}
          {result && (
            <div
              id="emi-result"
              className="mt-8 scroll-mt-24"
            >
              {/* Main EMI Result */}
              <div
                className="
                  overflow-hidden rounded-[28px]
                  bg-[#091928]
                  shadow-[0_20px_55px_rgba(0,0,0,0.22)]
                  ring-1 ring-white/10
                "
              >
                <div className="px-6 py-7 sm:px-8 lg:px-10">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#b9e92f]/10 px-3 py-1.5 text-xs font-bold text-[#c9f56b]">
                        ✓ Calculation Complete
                      </div>

                      <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                        Your estimated EMI
                      </h2>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                        Based on the details you entered, this is the
                        estimated amount you need to pay for each{" "}
                        {result.frequency.toLowerCase()} repayment.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border border-[#b9e92f]/30
                        bg-[#b9e92f]/10
                        px-6 py-5
                        lg:min-w-[260px]
                      "
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-[#c9f56b]">
                        {result.frequency} EMI
                      </p>

                      <p className="mt-1 text-3xl font-black text-white sm:text-4xl">
                        {formatCurrency(result.emi)}
                      </p>

                      {result.frequency !== "Monthly" && (
                        <p className="mt-2 text-xs text-slate-300">
                          ≈ {formatCurrency(emiPerMonthEquivalent)}
                          /month equivalent
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Summary Cards */}
                  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <SummaryCard
                      title="Loan Amount"
                      value={formatCurrency(result.principal)}
                    />

                    <SummaryCard
                      title="Total Interest"
                      value={formatCurrency(result.totalInterest)}
                    />

                    <SummaryCard
                      title="Total Repayment"
                      value={formatCurrency(result.totalRepayment)}
                    />

                    <SummaryCard
                      title="Loan Tenure"
                      value={`${result.tenureYears} Years`}
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  BREAKDOWN
              ================================================== */}
              <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                {/* Payment Breakdown */}
                <div
                  className="
                    rounded-[25px]
                    border border-slate-200
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                    sm:p-7
                  "
                >
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#789500]">
                      Payment Breakdown
                    </p>

                    <h3 className="mt-1 text-xl font-extrabold text-[#091928]">
                      Where your money goes
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      A simple view of your total repayment.
                    </p>
                  </div>

                  {/* Principal */}
                  <div className="mb-5">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-slate-700">
                        Principal Amount
                      </span>

                      <span className="text-sm font-extrabold text-[#091928]">
                        {formatCurrency(result.principal)}
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-[#091928]"
                        style={{
                          width: `${Math.min(
                            100,
                            Math.max(0, result.principalPercentage)
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Interest */}
                  <div>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-slate-700">
                        Total Interest
                      </span>

                      <span className="text-sm font-extrabold text-[#789500]">
                        {formatCurrency(result.totalInterest)}
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-[#b9e92f]"
                        style={{
                          width: `${Math.min(
                            100,
                            Math.max(0, result.interestPercentage)
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#f5fbdc] p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">💡</span>

                      <div>
                        <p className="text-sm font-extrabold text-[#091928]">
                          In simple words
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          You borrow{" "}
                          <strong>
                            {formatCurrency(result.principal)}
                          </strong>{" "}
                          and, over the complete repayment period,
                          you will repay approximately{" "}
                          <strong>
                            {formatCurrency(result.totalRepayment)}
                          </strong>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loan Details */}
                <div
                  className="
                    rounded-[25px]
                    border border-slate-200
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                    sm:p-7
                  "
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#789500]">
                    Loan Details
                  </p>

                  <h3 className="mt-1 text-xl font-extrabold text-[#091928]">
                    Your calculation
                  </h3>

                  <div className="mt-6 divide-y divide-slate-100">
                    <DetailRow
                      label="Scheme"
                      value={form.scheme}
                    />

                    <DetailRow
                      label="Interest Rate"
                      value={`${result.annualInterest}% p.a.`}
                    />

                    <DetailRow
                      label="Repayment"
                      value={result.frequency}
                    />

                    <DetailRow
                      label="Total Tenure"
                      value={`${result.tenureYears} years`}
                    />

                    <DetailRow
                      label="Moratorium"
                      value={`${result.moratoriumMonths} months`}
                    />

                    <DetailRow
                      label="Payment Periods"
                      value={`${result.paymentPeriods}`}
                    />

                    <DetailRow
                      label="Outstanding After Moratorium"
                      value={formatCurrency(
                        result.outstandingPrincipal
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  MORATORIUM INFORMATION
              ================================================== */}
              {result.moratoriumMonths > 0 && (
                <div
                  className="
                    mt-6 rounded-[25px]
                    border border-amber-200
                    bg-amber-50
                    p-6
                    sm:p-7
                  "
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl">
                      ⏳
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-[#091928]">
                        What happens during the moratorium?
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        You have selected a{" "}
                        <strong>
                          {result.moratoriumMonths}-month
                        </strong>{" "}
                        moratorium. For this estimate, interest
                        during the moratorium is added to the
                        outstanding loan amount.
                      </p>

                      <div className="mt-4 rounded-xl bg-white p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-slate-600">
                            Estimated moratorium interest
                          </span>

                          <span className="text-lg font-extrabold text-[#091928]">
                            {formatCurrency(
                              result.moratoriumInterest
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =================================================
                  HOW EMI WORKS
              ================================================== */}
              <div
                className="
                  mt-6 rounded-[25px]
                  border border-slate-200
                  bg-white
                  p-6
                  shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                  sm:p-8
                "
              >
                <div className="max-w-4xl">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#789500]">
                    Understand Your EMI
                  </p>

                  <h3 className="mt-1 text-2xl font-extrabold text-[#091928]">
                    EMI explained simply
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    EMI stands for{" "}
                    <strong>Equated Monthly Instalment</strong>.
                    It is the amount you generally pay towards a
                    loan at regular intervals until the loan is
                    completely repaid.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  <InfoCard
                    number="01"
                    title="Principal"
                    text="This is the actual amount you borrow from the lender."
                  />

                  <InfoCard
                    number="02"
                    title="Interest"
                    text="This is the additional amount charged by the lender for providing the loan."
                  />

                  <InfoCard
                    number="03"
                    title="Repayment"
                    text="Your EMI gradually covers both the principal and interest over the loan period."
                  />
                </div>

                {/* Formula */}
                <div className="mt-7 rounded-2xl bg-[#091928] p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#c9f56b]">
                    EMI Formula
                  </p>

                  <div className="mt-3 overflow-x-auto">
                    <p className="min-w-max text-lg font-bold text-white sm:text-xl">
                      EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)
                    </p>
                  </div>

                  <div className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
                    <p>
                      <strong className="text-white">P</strong> =
                      Principal
                    </p>

                    <p>
                      <strong className="text-white">r</strong> =
                      Periodic interest rate
                    </p>

                    <p>
                      <strong className="text-white">n</strong> =
                      Number of payments
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  IMPORTANT NOTE
              ================================================== */}
              <div
                className="
                  mt-6 rounded-[22px]
                  border border-[#b9e92f]/30
                  bg-[#f5fbdc]
                  p-5
                  sm:p-6
                "
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">ℹ️</span>

                  <div>
                    <h4 className="text-sm font-extrabold text-[#091928]">
                      Important
                    </h4>

                    <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                      This calculator provides an estimated repayment
                      amount for understanding and planning purposes.
                      Actual EMI may vary depending on the lender,
                      scheme rules, processing charges, interest
                      calculation method, subsidy, and other applicable
                      terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================
              BEFORE CALCULATION - HELPER CARDS
          ====================================================== */}
          {!result && (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <InfoCard
                number="01"
                title="Enter Loan Amount"
                text="Tell us how much money you want to borrow."
              />

              <InfoCard
                number="02"
                title="Add Loan Details"
                text="Enter interest rate, tenure and repayment frequency."
              />

              <InfoCard
                number="03"
                title="Get Your EMI"
                text="We calculate your estimated EMI and total repayment instantly."
              />
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <Footer />
    </main>
  );
}

/* =============================================================
   SMALL REUSABLE COMPONENTS
============================================================= */

function SummaryCard({ title, value }) {
  return (
    <div
      className="
        rounded-2xl
        border border-white/10
        bg-white/5
        px-4 py-4
      "
    >
      <p className="text-xs font-medium text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-lg font-extrabold text-white">
        {value}
      </p>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span className="text-right text-sm font-bold text-[#091928]">
        {value}
      </span>
    </div>
  );
}

function InfoCard({ number, title, text }) {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-[0_8px_25px_rgba(0,0,0,0.06)]
        transition duration-200
        hover:-translate-y-1
        hover:shadow-[0_14px_30px_rgba(0,0,0,0.09)]
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl
            bg-[#091928]
            text-xs font-extrabold text-[#c9f56b]
          "
        >
          {number}
        </div>

        <div>
          <h4 className="text-base font-extrabold text-[#091928]">
            {title}
          </h4>

          <p className="mt-1.5 text-sm leading-6 text-slate-500">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}