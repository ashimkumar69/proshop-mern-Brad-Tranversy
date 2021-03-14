import express from "express";
import {
  authUser,
  userProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc Register User
// @route POST  /api/users
// @access public
router.route("/").post(registerUser);
// @desc User log in
// @route POST  /api/users/login
// @access public
router.route("/login").post(authUser);

// @desc Fetch a User Profile
// @route GET  /api/users/profile
// @access Protected
router.route("/profile").get(protect, userProfile);

export default router;
