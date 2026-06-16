import express from "express";
import {
  register,
  login,
  registerAPI,
  loginAPI,
  logoutAPI,
  updateUser,
  updatePassword,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// router.use(protect);

router.route("/register").get(register).post(registerAPI);
router.route("/login").get(login).post(loginAPI);
router.route("/logout").get(logoutAPI);
router.route("/update").post(protect, updateUser);
router.route("/update-password").post(protect, updatePassword);

export default router;
