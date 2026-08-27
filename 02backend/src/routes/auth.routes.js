const express = require("express");
const passport = require("../config/passport");

const {
  register,
  login,
  googleCallback,
  getMe,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/api/auth/google/failure",
  }),
  googleCallback,
);

router.get("/google/failure", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Google authentication failed",
  });
});
router.get("/me", authMiddleware, getMe);

module.exports = router;
