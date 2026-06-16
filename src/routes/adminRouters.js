import express from 'express';
import { getAdminDashboard, getAdminBlog, createAdminBlog } from "../controllers/adminController.js";

const router = express.Router();

router.route('/').get(getAdminDashboard);
router.route('/blogs/new').get(createAdminBlog);
router.route('/blogs/edit/:id').get(getAdminBlog);


export default router;