import Blog from "../models/blogModel.js";

export const getBlogs = async (req, res) => {
  const posts = await Blog.find();
  res.render("pages/index", { posts ,activePage: 'home' });
};

export const getAbout = async (req, res) => {
  res.render("pages/about", { activePage: 'about'});
}