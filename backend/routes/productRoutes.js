import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc Fetch All Products
// @route GET  /api/products
// @access public
router
  .route("/")
  .get(getProducts)
  // @desc Create Product
  // @route POST  /api/products
  // @access public/admin
  .post(protect, admin, createProduct);

router
  .route("/:id/reviews")
  // @desc create new Review
  // @route POST  /api/products/:id/reviews
  // @access public
  .post(protect, createProductReview);

// @desc Fetch Single Product
// @route GET  /api/products/:id
// @access public
router
  .route("/:id")
  .get(getProductById)
  // @desc Delete Product
  // @route DELETE  /api/products/:id
  // @access public/admin
  .delete(protect, admin, deleteProduct)
  // @desc Update Product
  // @route PUT  /api/products
  // @access public/admin
  .put(protect, admin, updateProduct);

export default router;
