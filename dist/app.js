"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const project_route_1 = require("./app/modules/project/project.route");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const blog_route_1 = require("./app/modules/blog/blog.route");
const user_route_1 = require("./app/modules/user/user.route");
const auth_route_1 = require("./app/modules/auth/auth.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: [
        'https://sifat-portfolio-dashboard.vercel.app',
        'http://localhost:3000',
    ],
    credentials: true,
}));
// app.use(
//   cors({
//     origin: '*',
//   }),
// );
//application route.
app.use('/', blog_route_1.BlogRoute);
app.use('/', project_route_1.ProjectRoute);
app.use('/', user_route_1.UserRoute);
app.use('/', auth_route_1.AuthRoutes);
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
    });
});
//route error handler
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found',
    });
});
app.use(globalErrorHandler_1.default);
exports.default = app;
