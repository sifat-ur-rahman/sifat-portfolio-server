"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectControllers = void 0;
const project_service_1 = require("./project.service");
const createProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ProjectData = req.body;
        const result = yield project_service_1.ProjectService.createProjectIntoDB(ProjectData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'project created successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllProjects = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_service_1.ProjectService.getAllProjectsFromDB();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'project retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getOneProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield project_service_1.ProjectService.getOneProjectFromDB(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Project By ID retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.blogId;
        const updatedProjectData = req.body;
        const result = yield project_service_1.ProjectService.updateProjectFromDB(id, updatedProjectData);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Project updated successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deletedProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield project_service_1.ProjectService.deleteOneProjectFromDB(id);
        if (result) {
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: 'Project delete successfully',
                data: null,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.ProjectControllers = {
    createProject,
    getAllProjects,
    getOneProject,
    updateProject,
    deletedProject,
};
