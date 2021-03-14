import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Api Running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// not found url
app.use(notFound);
// global error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(
    `express running in ${process.env.NODE_ENV} mode from ${port} port`.yellow
      .underline
  )
);
