import User from '../models/userModel.js';
import Blog from '../models/blogModel.js';

export const getAdminDashboard = async (req, res) => {
  try {
    const users = await User.find();
    const blogs = await Blog.find();

    res.render('admin/dashboard', { activePage: 'dashboard', user: req.user, users, blogs });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getAdminBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.id });
    if (!blog) return res.status(404).send('Blog not found');
    res.render('admin/edit-blog', { activePage: 'blogs', user: req.user, blog });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const createAdminBlog = async (req, res) => {
  try {
    res.render('admin/create-post', { activePage: 'blogs', user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};