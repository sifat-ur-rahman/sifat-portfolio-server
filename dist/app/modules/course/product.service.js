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
exports.ProductService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const category_model_1 = require("../category/category.model");
const review_model_1 = require("../review/review.model");
const product_model_1 = require("./product.model");
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(productData);
    return result;
});
const getAllCourseFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 5, sortBy, sortOrder, minPrice, maxPrice, tags, startDate, endDate, language, provider, durationInWeeks, level, } = query;
    const searchTerm = {};
    if (tags) {
        searchTerm['tags.name'] = tags;
    }
    if (minPrice && maxPrice) {
        searchTerm.price = { $gte: minPrice, $lte: maxPrice };
    }
    if (startDate && endDate) {
        searchTerm.startDate = { $gte: startDate, $lte: endDate };
    }
    if (language) {
        searchTerm.language = language;
    }
    if (provider) {
        searchTerm.provider = provider;
    }
    if (durationInWeeks) {
        searchTerm.durationInWeeks = durationInWeeks;
    }
    if (level) {
        searchTerm['details.level'] = level;
    }
    const sort = {};
    if (sortBy) {
        sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
    }
    else {
        sort.startDate = 1;
    }
    const skip = (page - 1) * limit;
    const courses = yield product_model_1.Product.find(searchTerm)
        .populate('createdBy', '_id username email role')
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .exec();
    const total = yield product_model_1.Product.countDocuments(searchTerm);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: courses,
    };
});
const getOneCourseWithReviewFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield product_model_1.Product.findById(id).populate('createdBy', '_id username email role');
    const reviews = yield review_model_1.Review.find({ courseId: id }).populate('createdBy', '_id username email role');
    const result = {
        course,
        reviews,
    };
    return result;
});
const updateCourseFromDB = (id, updatedCourseData) => __awaiter(void 0, void 0, void 0, function* () {
    const { tags, details, categoryId } = updatedCourseData, remainingStudentData = __rest(updatedCourseData, ["tags", "details", "categoryId"]);
    const modifiedUpdatedData = Object.assign({}, remainingStudentData);
    if (details && Object.keys(details).length) {
        for (const [key, value] of Object.entries(details)) {
            modifiedUpdatedData[`details.${key}`] = value;
        }
    }
    if (categoryId) {
        const category = yield category_model_1.Category.findById(categoryId);
        if (!category) {
            throw new AppError_1.default(400, `${categoryId} no category with categoryId`);
        }
    }
    if (tags && tags.length > 0) {
        // filter out the deleted fields
        const deletedTag = tags
            .filter((el) => el.name && el.isDeleted)
            .map((el) => el.name);
        const deletedTags = yield product_model_1.Product.findByIdAndUpdate(id, {
            $pull: {
                tags: { name: { $in: deletedTag } },
            },
        }, {
            new: true,
            runValidators: true,
        });
        // filter out the new course fields
        const newTags = tags === null || tags === void 0 ? void 0 : tags.filter((el) => el.name && !el.isDeleted);
        const newTag = yield product_model_1.Product.findByIdAndUpdate(id, {
            $addToSet: { tags: { $each: newTags } },
        }, {
            new: true,
            runValidators: true,
        });
    }
    const result = yield product_model_1.Product.findByIdAndUpdate(id, modifiedUpdatedData, {
        new: true,
        runValidators: true,
    }).populate('createdBy', '_id username email role');
    return result;
});
exports.ProductService = {
    createProductIntoDB,
    getAllCourseFromDB,
    getOneCourseWithReviewFromDB,
    updateCourseFromDB,
};
