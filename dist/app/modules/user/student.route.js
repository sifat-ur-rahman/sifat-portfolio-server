"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/create-student', user_controller_1.StudentControllers.createStudent);
router.get('/', user_controller_1.StudentControllers.getAllStudent);
router.get('/:studentId', user_controller_1.StudentControllers.getOneStudent);
exports.StudentRoute = router;
