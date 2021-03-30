import express from "express";
import { addOrederItems } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc create new order
// @route POST  /api/orders
// @access private
router.route("/").post(protect, addOrederItems);

export default router;
