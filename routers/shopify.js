const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProductById,
} = require("../controllers/shopify");
const { getAccessToRoute } = require("../middleware/authorization/auth");

const router = express.Router();

router.get("/", getAccessToRoute, getAllProducts);
router.post("/", getAccessToRoute, createProduct);
router.put("/:id/edit", [getAccessToRoute], updateProductById);
router.delete("/:id/delete", [getAccessToRoute], deleteProductById);

module.exports = router;
