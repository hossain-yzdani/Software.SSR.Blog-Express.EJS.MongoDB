import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { getBlogs, getAbout, getContact, getMe } from "../controllers/pageController.js";
const router = express.Router();

router.use(protect);

router.route("/").get(getBlogs);
router.route("/about").get(getAbout);
router.route("/contact").get(getContact);
router.route("/me").get(getMe);

export default router;