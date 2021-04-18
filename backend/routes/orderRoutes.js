import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrder,
  getOrders,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc create new order
// @route POST  /api/orders
// @access private
router
  .route("/")
  .post(protect, addOrderItems)
  // @desc get  order
  // @route GET  /api/orders
  // @access private/admin
  .get(protect, admin, getOrders);
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
// @desc update order to delivered
// @route PUT  /api/orders/:id/deliver
// @access private/admin
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
