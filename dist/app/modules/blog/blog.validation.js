"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidation = void 0;
const zod_1 = require("zod");
//Create Validation Schema------
const blogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1),
        img: zod_1.z.string(),
        content: zod_1.z.string().min(1),
    }),
});
//Update Validation Schema------
const blogUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        img: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
    }),
});
exports.blogValidation = {
    blogValidationSchema,
    blogUpdateValidationSchema,
};
