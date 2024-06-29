"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const review_controller_1 = require("./review.controller");
const review_validation_1 = __importDefault(require("./review.validation"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/api/reviews', (0, auth_1.default)('user'), (0, validateRequest_1.default)(review_validation_1.default), review_controller_1.ReviewControllers.createReview);
router.get('/api/course/best', review_controller_1.ReviewControllers.getBestReview);
exports.ReviewRoute = router;
