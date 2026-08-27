const express = require("express");
const calculateEMI = require("../utils/emiCalculator");

const router = express.Router();

router.post("/emi", (req, res) => {
  const { principal, annualRate, tenureYears } = req.body;

  if (
    !Number.isFinite(principal) ||
    principal <= 0 ||
    !Number.isFinite(annualRate) ||
    annualRate < 0 ||
    !Number.isFinite(tenureYears) ||
    tenureYears <= 0
  ) {
    return res.status(400).json({
      success: false,
      message:
        "principal must be positive, annualRate cannot be negative, and tenureYears must be positive",
    });
  }

  const result = calculateEMI(principal, annualRate, tenureYears);

  return res.status(200).json({
    success: true,
    ...result,
  });
});

module.exports = router;
