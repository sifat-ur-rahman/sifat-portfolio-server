import { Schema, model } from 'mongoose';
import { BlogMethods, BlogModel, TBlog } from './blog.interface';

const BlogSchema = new Schema<TBlog, BlogModel, BlogMethods>(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

BlogSchema.methods.isBlogExits = async function (id: string) {
  const existingBlog = await Blog.findById(id);
  return existingBlog;
};

export const Blog = model<TBlog, BlogModel>('Blog', BlogSchema);
