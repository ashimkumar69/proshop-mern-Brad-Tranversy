import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

// @desc Register User
// @route POST  /api/users
// @access public
router
  .route("/")
  .post(registerUser)
  // @desc get all Users
  // @route GET  /api/users
  // @access Protected/admin
  .get(protect, admin, getUsers);
// @desc Delete User
// @route DELETE  /api/users/:id
// @access Protected/admin

// @desc Fetch a User Profile
// @route GET  /api/users/profile
// @access Protected

// @desc User log in
// @route POST  /api/users/login
// @access public
router.route("/login").post(authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  // @desc update a User Profile
  // @route PUT  /api/users/profile
  // @access Protected
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  // @desc get User
  // @route GET  /api/users/:id
  // @access Protected/admin
  .get(protect, admin, getUserById)
  // @desc update a User
  // @route PUT  /api/users/:id
  // @access Protected/Admin
  .put(protect, admin, updateUser);

export default router;
