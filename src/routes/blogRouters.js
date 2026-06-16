import express from "express";
import { createBlog, getBlog, editBlog, deleteBlog } from "../controllers/blogController.js";
const router = express.Router();

router.route("/").post(createBlog);
router.route("/:id").get(getBlog).post(editBlog).delete(deleteBlog);

export default router;