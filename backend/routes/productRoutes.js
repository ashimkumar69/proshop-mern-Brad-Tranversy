import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
const router = express.Router();

// @desc Fetch All Products
// @route GET  /api/products
// @access public
router.route("/").get(getProducts);

// @desc Fetch Single Product
// @route GET  /api/products/:id
// @access public
router.route("/:id").get(getProductById);

export default router;
