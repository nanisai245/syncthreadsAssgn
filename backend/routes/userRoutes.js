const express = require("express");

const router = express.Router();

const { signup, login, logout } = require("../controllers/auth.controller");

const { protect } = require("../middlewares/auth.middleware");
const {
  getDashboardData,
  getMapData,
} = require("../controllers/user.controller");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/dashboard", protect, getDashboardData);
router.get("/map/:id", protect, getMapData);

router.get("/auth/validate", protect, (req, res) => {
  res.status(200).json({ message: "Authenticated" });
});

module.exports = router;
