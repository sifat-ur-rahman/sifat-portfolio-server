import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
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
  },
  { timestamps: true },
);

export const Project = model<TProject>('Project', projectSchema);
