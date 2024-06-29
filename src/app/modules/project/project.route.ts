import express from 'express';

import validateRequest from '../../middlewares/validateRequest';

import { ProjectControllers } from './project.controller';
import { projectValidationSchema } from './project.validation';

//import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/api/project',
  //auth('user'),
  validateRequest(projectValidationSchema.projectValidation),
  ProjectControllers.createProject,
);

router.get('/api/projects', ProjectControllers.getAllProjects);

router.get('/api/project/:projectId', ProjectControllers.getOneProject);

router.delete('/api/project/:projectId', ProjectControllers.deletedProject);

router.put(
  '/api/project/:projectId',
  //auth('user'),
  validateRequest(projectValidationSchema.projectUpdateValidationSchema),
  ProjectControllers.updateProject,
);

export const SaleRoute = router;
