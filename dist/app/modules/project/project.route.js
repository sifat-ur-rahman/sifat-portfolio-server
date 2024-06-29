"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const project_controller_1 = require("./project.controller");
const project_validation_1 = require("./project.validation");
//import auth from '../../middlewares/auth';
const router = express_1.default.Router();
router.post('/api/project', 
//auth('user'),
(0, validateRequest_1.default)(project_validation_1.projectValidationSchema.projectValidation), project_controller_1.ProjectControllers.createProject);
router.get('/api/projects', project_controller_1.ProjectControllers.getAllProjects);
router.get('/api/project/:projectId', project_controller_1.ProjectControllers.getOneProject);
router.delete('/api/project/:projectId', project_controller_1.ProjectControllers.deletedProject);
router.put('/api/project/:projectId', 
//auth('user'),
(0, validateRequest_1.default)(project_validation_1.projectValidationSchema.projectUpdateValidationSchema), project_controller_1.ProjectControllers.updateProject);
exports.SaleRoute = router;
