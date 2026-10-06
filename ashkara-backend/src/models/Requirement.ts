// src/models/Requirement.ts
import { Schema, model, Document } from 'mongoose';

export interface IRequirement extends Document {
  clientId: Schema.Types.ObjectId;
  projectName: string;
  engineeringBranch: string;
  description: string;
  requiredModules: string[];
  preferredTechnologies: string[];
  deadline?: Date;
  budgetNotes?: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  attachments: string[]; // URLs to uploads/clients/
  createdAt: Date;
  updatedAt: Date;
}

const RequirementSchema = new Schema<IRequirement>(
  {
    clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    projectName: { type: String, required: true },
    engineeringBranch: { type: String, required: true },
    description: { type: String, required: true },
    requiredModules: [{ type: String }],
    preferredTechnologies: [{ type: String }],
    deadline: { type: Date },
    budgetNotes: { type: String },
    priority: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'], default: 'Medium' },
    attachments: [{ type: String }],
  },
  { timestamps: true }
);

export const Requirement = model<IRequirement>('Requirement', RequirementSchema);
