import { Schema, model, Document } from 'mongoose';

export interface IProjectBlueprint extends Document {
  client: Schema.Types.ObjectId; // reference to Client
  requirement: Schema.Types.ObjectId; // reference to Requirement
  title: string;
  description: string;
  version: number; // incremental version
  status: 'Draft' | 'Pending Approval' | 'Approved' | 'In Development' | 'Testing' | 'Completed' | 'Archived';
  createdAt: Date;
  updatedAt: Date;
}

const ProjectBlueprintSchema = new Schema<IProjectBlueprint>(
  {
    client: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    requirement: { type: Schema.Types.ObjectId, ref: 'Requirement', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    version: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ['Draft', 'Pending Approval', 'Approved', 'In Development', 'Testing', 'Completed', 'Archived'],
      default: 'Draft',
    },
  },
  { timestamps: true, collection: 'projectBlueprints' }
);

export const ProjectBlueprint = model<IProjectBlueprint>('ProjectBlueprint', ProjectBlueprintSchema);
