import { Schema, model, Document } from 'mongoose';

export interface ITask extends Document {
  projectId: Schema.Types.ObjectId;
  title: string;
  status: 'Todo' | 'In Progress' | 'Done';
  progress: number; // 0-100
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>(
  {
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    title: { type: String, required: true },
    status: { type: String, enum: ['Todo', 'In Progress', 'Done'], default: 'Todo' },
    progress: { type: Number, min: 0, max: 100, default: 0 },
    dueDate: { type: Date },
  },
  { timestamps: true }
);

export const Task = model<ITask>('Task', TaskSchema);
