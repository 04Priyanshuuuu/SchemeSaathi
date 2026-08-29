const calculateEMI = ({
  principal,
  annualRate,
  tenureYears,
  moratoriumMonths = 0,
}) => {
  if (!Number.isFinite(principal) || principal <= 0) {
    throw new Error("Principal amount must be greater than 0");
  }

  if (!Number.isFinite(annualRate) || annualRate < 0 || annualRate > 100) {
    throw new Error("Interest rate must be between 0 and 100");
  }

  if (!Number.isFinite(tenureYears) || tenureYears <= 0) {
    throw new Error("Tenure must be greater than 0");
  }

  if (!Number.isFinite(moratoriumMonths) || moratoriumMonths < 0) {
    throw new Error("Moratorium cannot be negative");
  }

  const totalMonths = Math.round(tenureYears * 12);

  if (moratoriumMonths >= totalMonths) {
    throw new Error(
      "Moratorium must be less than total loan tenure"
    );
  }

  const repaymentMonths = totalMonths - moratoriumMonths;

  const monthlyRate = annualRate / 12 / 100;

  // No-interest case
  if (monthlyRate === 0) {
    const emi = principal / repaymentMonths;

    return {
      principal: round(principal),
      annualRate: round(annualRate),
      tenureYears,
      totalTenureMonths: totalMonths,
      moratoriumMonths,
      repaymentMonths,
      moratoriumInterest: 0,
      principalAfterMoratorium: round(principal),
      emi: round(emi),
      totalInterest: 0,
      totalPayment: round(principal),
      currency: "INR",
    };
  }

  // Interest accumulated during moratorium
  const moratoriumInterest =
    principal *
    (Math.pow(1 + monthlyRate, moratoriumMonths) - 1);

  const principalAfterMoratorium =
    principal + moratoriumInterest;

  // EMI after moratorium
  const emi =
    (principalAfterMoratorium *
      monthlyRate *
      Math.pow(1 + monthlyRate, repaymentMonths)) /
    (Math.pow(1 + monthlyRate, repaymentMonths) - 1);

  const totalPayment = emi * repaymentMonths;

  const totalInterest = totalPayment - principal;

  return {
    principal: round(principal),
    annualRate: round(annualRate),

    tenureYears,
    totalTenureMonths: totalMonths,

    moratoriumMonths,
    repaymentMonths,

    moratoriumInterest: round(moratoriumInterest),
    principalAfterMoratorium: round(principalAfterMoratorium),

    emi: round(emi),
    totalInterest: round(totalInterest),
    totalPayment: round(totalPayment),

    currency: "INR",
  };
};

const round = (value) => {
  return Number(Number(value).toFixed(2));
};

module.exports = calculateEMI;