import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import JWT from "jsonwebtoken";

// @desc Fetch a User Profile
// @route GET  /api/users/profile
// @access Protected
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = JWT.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized ,Token Failed");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized ,No Token");
  }
});

export { protect };
