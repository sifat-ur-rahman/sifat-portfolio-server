"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoute = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blog_validation_1 = require("./blog.validation");
//import auth from '../../middlewares/auth';
const router = express_1.default.Router();
router.post('/api/blog', 
//auth('user'),
(0, validateRequest_1.default)(blog_validation_1.blogValidation.blogValidationSchema), blog_controller_1.BlogControllers.createBlog);
router.get('/api/blogs', blog_controller_1.BlogControllers.getAllBlogs);
router.get('/api/blog/:blogId', blog_controller_1.BlogControllers.getOneBlog);
router.delete('/api/blog/:blogId', blog_controller_1.BlogControllers.deletedBlog);
router.delete('/api/bulk-delete', blog_controller_1.BlogControllers.bulkDeletedBlog);
router.put('/api/Blog/:BlogId', 
//auth('user'),
(0, validateRequest_1.default)(blog_validation_1.blogValidation.blogUpdateValidationSchema), blog_controller_1.BlogControllers.updateBlog);
exports.BlogRoute = router;
