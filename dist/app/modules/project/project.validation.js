"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidationSchema = void 0;
const zod_1 = require("zod");
const projectValidation = zod_1.z.object({
    body: zod_1.z.object({
        projectName: zod_1.z.string().min(1),
        type: zod_1.z.string().min(1),
        img01: zod_1.z.string().min(1),
        img02: zod_1.z.string().min(1),
        img03: zod_1.z.string().min(1),
        img04: zod_1.z.string().min(1),
        details: zod_1.z.string().min(1),
        liveUrl: zod_1.z.string().min(1),
        clientCode: zod_1.z.string().min(1),
        serverCode: zod_1.z.string().min(1),
        technology: zod_1.z.string().min(1),
    }),
});
const projectUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        projectName: zod_1.z.string().min(1).optional(),
        type: zod_1.z.string().min(1).optional(),
        img01: zod_1.z.string().min(1).optional(),
        img02: zod_1.z.string().min(1).optional(),
        img03: zod_1.z.string().min(1).optional(),
        img04: zod_1.z.string().min(1).optional(),
        details: zod_1.z.string().min(1).optional(),
        liveUrl: zod_1.z.string().min(1).optional(),
        clientCode: zod_1.z.string().min(1).optional(),
        serverCode: zod_1.z.string().min(1).optional(),
        technology: zod_1.z.string().min(1).optional(),
    }),
});
exports.projectValidationSchema = {
    projectValidation,
    projectUpdateValidationSchema,
};
