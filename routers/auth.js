const express = require("express");
const {
  register,
  login,
  getUser,
  logout,
  forgotPassword,
  resetPassword,
  editDetails,
} = require("../controllers/auth");
const { getAccessToRoute } = require("../middleware/authorization/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword", resetPassword);
// router.put("/edit", getAccessToRoute, editDetails);

module.exports = router;
