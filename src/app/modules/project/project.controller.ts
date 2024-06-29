import { NextFunction, Request, Response } from 'express';
import { ProjectService } from './project.service';

const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ProjectData = req.body;

    const result = await ProjectService.createProjectIntoDB(ProjectData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'project created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProjectService.getAllProjectsFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'project retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getOneProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ProjectService.getOneProjectFromDB(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Project By ID retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.blogId;
    const updatedProjectData = req.body;
    const result = await ProjectService.updateProjectFromDB(
      id,
      updatedProjectData,
    );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Project updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deletedProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await ProjectService.deleteOneProjectFromDB(id);
    if (result) {
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Project delete successfully',
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getOneProject,
  updateProject,
  deletedProject,
};
