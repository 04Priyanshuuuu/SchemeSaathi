const calculateEMI = require("../utils/emiCalculator");

const calculateEMIController = async (req, res) => {
  try {
    let {
      principal,
      annualRate,
      tenureYears,
      moratoriumMonths = 0,
    } = req.body;

    // Convert string inputs to numbers
    principal = Number(principal);
    annualRate = Number(annualRate);
    tenureYears = Number(tenureYears);
    moratoriumMonths = Number(moratoriumMonths);

    const result = calculateEMI({
      principal,
      annualRate,
      tenureYears,
      moratoriumMonths,
    });

    return res.status(200).json({
      success: true,
      message: "EMI calculated successfully",
      data: result,
    });
  } catch (error) {
    console.error("EMI Calculation Error:", error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  calculateEMIController,
};