"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const blog_model_1 = require("./blog.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const createBlogIntoDB = (blogData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.create(blogData);
    return result;
});
const getAllBlogsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.Blog.find();
    return blog;
});
const getOneBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findById(id);
    return result;
});
const updateBlogFromDB = (id, updatedBlogData) => __awaiter(void 0, void 0, void 0, function* () {
    const remainingStudentData = __rest(updatedBlogData, []);
    const modifiedUpdatedData = Object.assign({}, remainingStudentData);
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, modifiedUpdatedData, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteOneBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.Blog.findByIdAndDelete(id);
    return result;
});
const bulkDeletedBlogFromDB = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate if itemIds array is provided
    if (!blogId || !Array.isArray(blogId) || blogId.length === 0) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Invalid itemIds in the request body');
    }
    // Perform bulk delete based on the provided itemIds
    const result = yield blog_model_1.Blog.deleteMany({ _id: { $in: blogId } });
    if (result.deletedCount > 0) {
        return result;
    }
});
exports.BlogService = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    getOneBlogFromDB,
    updateBlogFromDB,
    deleteOneBlogFromDB,
    bulkDeletedBlogFromDB,
};
