import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch All Products
// @route GET  /api/products
// @access public
const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch Single Product
// @route GET  /api/products/:id
// @access public
const getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

// @desc Delete Product
// @route DELETE  /api/products/:id
// @access public/admin
const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.deleteOne();
    res.json({ message: "Product Delete Successfully" });
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

// @desc Create Product
// @route POST  /api/products
// @access public/admin
const createProduct = asyncHandler(async (req, res, next) => {
  const product = new Product({
    name: "Sample Name",
    image: "/images/airpods.jpg",
    description: "Sample description",
    brand: "Sample Brand",
    category: "Sample category",
    user: req.user._id,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc Update Product
// @route PUT  /api/products
// @access public/admin
const updateProduct = asyncHandler(async (req, res, next) => {
  const {
    name,
    price,
    image,
    description,
    brand,
    category,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.image = image;
    product.description = description;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
