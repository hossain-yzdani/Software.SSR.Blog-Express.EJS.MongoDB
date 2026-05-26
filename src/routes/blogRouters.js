import express from "express";
import { createBlog, getBlog } from "../controllers/blogController.js";
const router = express.Router();

router.route("/").post(createBlog);
router.route("/:id").get(getBlog);

export default router;