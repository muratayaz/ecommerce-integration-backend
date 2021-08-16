const express = require("express");
const {
  getAllProducts,
  createProductById,
  updateProductById,
} = require("../controllers/trendyol");
const { getAccessToRoute } = require("../middleware/authorization/auth");
const router = express.Router();

router.get("/", getAccessToRoute, getAllProducts);
router.post("/", getAccessToRoute, createProductById);
router.put("/", getAccessToRoute, updateProductById);

module.exports = router;
