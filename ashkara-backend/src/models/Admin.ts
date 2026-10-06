import mongoose, { Schema, Document } from "mongoose";

export type AdminRole = "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "SUPPORT";

export interface IAdmin extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: AdminRole;
  mustChangePassword: boolean;
  lastLogin?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: ["SUPER_ADMIN", "ADMIN", "EDITOR", "SUPPORT"],
      default: "ADMIN",
    },
    mustChangePassword: { type: Boolean, default: true },
    lastLogin: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);
