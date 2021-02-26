import express from "express";
import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";
const router = express.Router();

// @desc Fetch All Products
// @route GET  /api/products
// @access public
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const products = await Product.find({});
    // res.status(401);
    // throw new Error("an error occure custom");
    res.json(products);
  })
);

// @desc Fetch Single Product
// @route GET  /api/products/:id
// @access public
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      // res.status(401);
      // throw new Error("an error occure custom");
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default router;
