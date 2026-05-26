import Blog from "../models/blogModel.js";

// export const getBlogs = async (req, res) => {
//   const blogs = await Blog.find();
//   res.render("blog", { blogs, totalPages: 10, currentPage: 1 });
// }

export const getBlog = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.id });
  if (!blog) {
    return res.status(404).send("پست مورد نظر یافت نشد");
  }
  res.render("blog/show", { blog, activePage: 'blog' });
}

export const createBlog = async (req, res) => {
  const newBlog = await new Blog({
    title: req.body.title,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    imgAlt: req.body.imgAlt,
    content: req.body.content,
    slug: req.body.slug
  })
  await newBlog.save();
  res.json({ data: newBlog, status: "success" });
}