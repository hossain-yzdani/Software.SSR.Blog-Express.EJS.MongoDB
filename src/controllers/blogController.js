import Blog from "../models/blogModel.js";

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.render("blog", { blogs, totalPages: 10, currentPage: 1 });
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
  res.status(201).redirect('/blog/' + newBlog.slug);
}

export const getBlog = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.id });
  if (!blog) {
    return res.status(404).send("The requested post was not found");
  }
  res.render("blog/show", { blog, activePage: 'blog', user: req.user });
}

export const editBlog = async (req, res) => {
  const {title, description, content} = req.body;
  const blog = await Blog.findOne({ slug: req.params.id });
  if (!blog) {
    return res.status(404).send("The requested post was not found");
  }
  blog.title = title;
  blog.description = description;
  blog.content = content;
  await blog.save();
  res.status(200).redirect('/blog/' + blog.slug);
};


export const deleteBlog = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.id });
  if (!blog) {
    return res.status(404).send("The requested post was not found");
  }
  await Blog.deleteOne({ slug: req.params.id });
  res.status(200).redirect('/admin');
};