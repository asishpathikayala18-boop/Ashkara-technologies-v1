import mongoose, { Schema, Document } from "mongoose";

export interface IInquiry extends Document {
  fullName: string;
  email: string;
  phone: string;
  engineeringBranch: string;
  category: string;
  project: string;
  description: string;
  status: "pending" | "reviewed" | "contacted" | "resolved" | "archived";
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema: Schema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    engineeringBranch: { type: String, required: true },
    category: { type: String, required: true },
    project: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "reviewed", "contacted", "resolved", "archived"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Inquiry = mongoose.model<IInquiry>("Inquiry", InquirySchema);
