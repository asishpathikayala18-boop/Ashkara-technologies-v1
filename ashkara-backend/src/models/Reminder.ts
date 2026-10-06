import { Schema, model, Document } from 'mongoose';

export interface IReminder extends Document {
  clientId?: Schema.Types.ObjectId;
  projectId?: Schema.Types.ObjectId;
  title: string;
  dueDate: Date;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ReminderSchema = new Schema<IReminder>(
  {
    clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project' },
    title: { type: String, required: true },
    dueDate: { type: Date, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Reminder = model<IReminder>('Reminder', ReminderSchema);
