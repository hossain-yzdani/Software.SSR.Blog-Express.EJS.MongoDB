import express from "express";
import { getBlogs, getAbout } from "../controllers/pageController.js";
const router = express.Router();

router.route("/").get(getBlogs);
router.route("/about").get(getAbout)

export default router;
