import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrder,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc create new order
// @route POST  /api/orders
// @access private
router.route("/").post(protect, addOrderItems);
// @desc get logged in user order
// @route GET  /api/orders/myorders
// @access private
router.route("/myorders").get(protect, getMyOrder);
// @desc Fetch  order
// @route GET  /api/orders/:id
// @access private
router.route("/:id").get(protect, getOrderById);
// @desc update order to paid
// @route GET  /api/orders/:id/pay
// @access private
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
