import { NextFunction, Request, Response } from 'express';
import { BlogService } from './blog.service';

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const BlogData = req.body;

    const result = await BlogService.createBlogIntoDB(BlogData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Blog created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BlogService.getAllBlogsFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Blog retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getOneBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { blogId } = req.params;
    const result = await BlogService.getOneBlogFromDB(blogId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Blog By ID retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.blogId;
    const updatedBlogData = req.body;
    const result = await BlogService.updateBlogFromDB(id, updatedBlogData);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Blog updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deletedBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { blogId } = req.params;
    const result = await BlogService.deleteOneBlogFromDB(blogId);
    if (result) {
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Blog delete successfully',
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};
const bulkDeletedBlog = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productsId: blogId } = req.body;

    const result = await BlogService.bulkDeletedBlogFromDB(blogId);
    if (result) {
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Bulk Deleted Blog delete successfully',
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getOneBlog,
  updateBlog,
  deletedBlog,
  bulkDeletedBlog,
};
