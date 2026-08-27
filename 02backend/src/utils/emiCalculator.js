const calculateEMI = (principal, annualRate, tenureYears) => {
  const months = tenureYears * 12;
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    const emi = principal / months;

    return {
      emi,
      totalPayment: principal,
      totalInterest: 0,
    };
  }

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  return {
    emi: Number(emi.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
  };
};

module.exports = calculateEMI;
