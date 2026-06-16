import Blog from "../models/blogModel.js";

export const getBlogs = async (req, res) => {
  const posts = await Blog.find();
  // throw new Error("Test error");
  res.render("pages/index", { posts, activePage: "home", user: req.user });
};

export const getAbout = async (req, res) => {
  res.render("pages/about", { activePage: "about", user: req.user });
};

export const getContact = async (req, res) => {
  res.render("pages/contact", { activePage: "contact", user: req.user });
};

export const getMe = async (req, res) => {
  // const user = await User.findById(req.user.id);
  res.render("pages/me", { activePage: "me", user: req.user });
};
