import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import path from "path";

const app = express();
dotenv.config();
// mongoDB connection established
connectDB();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Api Running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

// GET PAYPAL CLINT ID
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
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
