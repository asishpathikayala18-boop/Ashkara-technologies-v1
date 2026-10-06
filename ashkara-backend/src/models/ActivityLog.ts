import mongoose, { Schema, Document } from "mongoose";

export interface IActivityLog extends Document {
  adminId: mongoose.Types.ObjectId;
  adminName: string;
  action: string;
  resource: string;
  resourceId?: string;
  details?: string;
  createdAt: Date;
}

const ActivityLogSchema: Schema = new Schema(
  {
    adminId: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
    adminName: { type: String, required: true },
    action: { type: String, required: true }, // e.g. "created", "updated", "deleted"
    resource: { type: String, required: true }, // e.g. "project", "inquiry"
    resourceId: { type: String },
    details: { type: String },
  },
  { timestamps: true }
);

export const ActivityLog = mongoose.model<IActivityLog>("ActivityLog", ActivityLogSchema);
