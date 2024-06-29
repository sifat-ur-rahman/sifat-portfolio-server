import express from 'express';
import { BlogControllers } from './blog.controller';
import validateRequest from '../../middlewares/validateRequest';
import { blogValidation } from './blog.validation';
//import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/api/blog',
  //auth('user'),
  validateRequest(blogValidation.blogValidationSchema),
  BlogControllers.createBlog,
);

router.get('/api/blogs', BlogControllers.getAllBlogs);

router.get('/api/blog/:blogId', BlogControllers.getOneBlog);

router.delete('/api/blog/:blogId', BlogControllers.deletedBlog);
router.delete('/api/bulk-delete', BlogControllers.bulkDeletedBlog);

router.put(
  '/api/Blog/:BlogId',
  //auth('user'),
  validateRequest(blogValidation.blogUpdateValidationSchema),
  BlogControllers.updateBlog,
);

export const BlogRoute = router;
