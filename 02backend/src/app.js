const express = require("express");
const cors = require("cors");
const passport = require("./config/passport");

const authRoutes = require("./routes/auth.routes");
const calculatorRoutes = require("./routes/calculator.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "YojnaSetu Backend is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/calculator", calculatorRoutes);

module.exports = app;
