/* eslint-disable @typescript-eslint/no-explicit-any */

import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (Data: TProject) => {
  const result = await Project.create(Data);

  return result;
};
const getAllProjectsFromDB = async () => {
  const project = await Project.find();
  return project;
};
const getOneProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);

  return result;
};
const updateProjectFromDB = async (
  id: string,
  updatedProjectData: Partial<TProject>,
): Promise<TProject | null> => {
  const { ...remainingStudentData } = updatedProjectData;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  const result = await Project.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};
const deleteOneProjectFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);

  return result;
};

export const ProjectService = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getOneProjectFromDB,
  updateProjectFromDB,
  deleteOneProjectFromDB,
};
