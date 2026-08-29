const express = require("express");

const {
  calculateEMIController,
} = require("../controllers/calculator.controller");

const router = express.Router();

router.post("/emi", calculateEMIController);

module.exports = router;