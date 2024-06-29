"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    projectName: { type: String, required: true },
    type: { type: String, required: true },
    img01: { type: String, required: true },
    img02: { type: String, required: true },
    img03: { type: String, required: true },
    img04: { type: String, required: true },
    details: { type: String, required: true },
    liveUrl: { type: String, required: true },
    clientCode: { type: String, required: true },
    serverCode: { type: String, required: true },
    technology: { type: String, required: true },
}, { timestamps: true });
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
