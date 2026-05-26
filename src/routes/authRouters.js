import express from "express";
import {
  register,
  login,
  getMe,
} from "../controllers/authController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.get("/register", register);
router.get("/login", login);
router.get("/me", protect, getMe);

export default router;
