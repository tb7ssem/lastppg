const express = require("express");
const router = express.Router();
const { getProductById } = require("../controllers/productController");

router.get("/:id", getProductById);

module.exports = router;
