const express = require("express");
const user = require("./user");
const shopify = require("./shopify");
const trendyol = require("./trendyol");
const auth = require("./auth");

const router = express.Router();

router.use("/users", user);
router.use("/auth", auth);
router.use("/shopify", shopify);
router.use("/trendyol", trendyol);

module.exports = router;
