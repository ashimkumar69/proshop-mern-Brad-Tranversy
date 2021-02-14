import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";
import products from "./data/products.js";

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res, next) => {
  res.send("Api Running...");
});
app.get("/api/products", (req, res, next) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res, next) => {
  const product = products.find((product) => +product._id === +req.params.id);
  res.json(product);
});

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `express running in ${process.env.NODE_ENV} mode from ${port} port`.yellow
      .underline
  )
);
