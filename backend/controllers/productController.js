import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch All Products
// @route GET  /api/products
// @access public
const getProducts = asyncHandler(async (req, res, next) => {
  const pageSize = 2;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .sort({ createdAt: 1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
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

// @desc create new Review
// @route POST  /api/products/:id/reviews
// @access public
const createProductReview = asyncHandler(async (req, res, next) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already Reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201);
    res.json({ message: "Review Added" });
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

// @desc get Top Rated Product
// @route GET  /api/products/toprated
// @access public
const getTopRatedProduct = asyncHandler(async (req, res, next) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.json(products);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopRatedProduct,
};
