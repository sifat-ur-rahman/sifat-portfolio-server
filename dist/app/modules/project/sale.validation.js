"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const saleValidationSchema = zod_1.z.object({
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
exports.default = saleValidationSchema;
