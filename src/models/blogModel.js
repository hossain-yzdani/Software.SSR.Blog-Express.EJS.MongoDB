import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [50, "Title must be at least 50 characters"],
      maxlength: [80, "Title cannot exceed 80 characters"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [80, "Description must be at least 80 characters"],
      maxlength: [160, "Description cannot exceed 160 characters"],
      trim: true,
    },
    imgUrl: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
    imgAlt: {
      type: String,
      required: [true, "Image alt text is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  },
);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
export default BlogPost;
