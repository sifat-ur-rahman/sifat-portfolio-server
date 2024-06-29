"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogControllers = void 0;
const blog_service_1 = require("./blog.service");
const createBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BlogData = req.body;
        const result = yield blog_service_1.BlogService.createBlogIntoDB(BlogData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Blog created successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllBlogs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog_service_1.BlogService.getAllBlogsFromDB();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Blog retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getOneBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { blogId } = req.params;
        const result = yield blog_service_1.BlogService.getOneBlogFromDB(blogId);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Blog By ID retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.blogId;
        const updatedBlogData = req.body;
        const result = yield blog_service_1.BlogService.updateBlogFromDB(id, updatedBlogData);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Blog updated successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deletedBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { blogId } = req.params;
        const result = yield blog_service_1.BlogService.deleteOneBlogFromDB(blogId);
        if (result) {
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: 'Blog delete successfully',
                data: null,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
const bulkDeletedBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productsId: blogId } = req.body;
        const result = yield blog_service_1.BlogService.bulkDeletedBlogFromDB(blogId);
        if (result) {
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: 'Bulk Deleted Blog delete successfully',
                data: null,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.BlogControllers = {
    createBlog,
    getAllBlogs,
    getOneBlog,
    updateBlog,
    deletedBlog,
    bulkDeletedBlog,
};
