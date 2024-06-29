/* eslint-disable @typescript-eslint/no-explicit-any */

import mongoose from 'mongoose';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createBlogIntoDB = async (blogData: TBlog) => {
  const result = await Blog.create(blogData);

  return result;
};
const getAllBlogsFromDB = async () => {
  const blog = await Blog.find();
  return blog;
};
const getOneBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);

  return result;
};
const updateBlogFromDB = async (
  id: string,
  updatedBlogData: Partial<TBlog>,
): Promise<TBlog | null> => {
  const { ...remainingStudentData } = updatedBlogData;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Blog.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};
const deleteOneBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);

  return result;
};

const bulkDeletedBlogFromDB = async (blogId: string[]) => {
  // Validate if itemIds array is provided
  if (!blogId || !Array.isArray(blogId) || blogId.length === 0) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Invalid itemIds in the request body',
    );
  }

  // Perform bulk delete based on the provided itemIds
  const result = await Blog.deleteMany({ _id: { $in: blogId } });

  if (result.deletedCount > 0) {
    return result;
  }
};
export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getOneBlogFromDB,
  updateBlogFromDB,
  deleteOneBlogFromDB,

  bulkDeletedBlogFromDB,
};
