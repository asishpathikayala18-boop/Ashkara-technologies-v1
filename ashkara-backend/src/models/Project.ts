import mongoose, { Schema, Document } from "mongoose";

export type ProjectStatus = "draft" | "active" | "archived" | "featured";

export interface IProject extends Document {
  title: string;
  slug: string;
  category: string;
  engineeringBranch: string;
  banner: string;
  description: string;
  technologies: string[];
  features: string[];
  deliverables: string[];
  gallery: string[];
  seoTitle: string;
  seoDescription: string;
  relatedProjects: mongoose.Types.ObjectId[];
  status: ProjectStatus;
  viewCount: number;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, trim: true },
    engineeringBranch: { type: String, required: true, trim: true },
    banner: { type: String, default: "" },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    features: [{ type: String }],
    deliverables: [{ type: String }],
    gallery: [{ type: String }],
    seoTitle: { type: String, default: "" },
    seoDescription: { type: String, default: "" },
    relatedProjects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
    status: {
      type: String,
      enum: ["draft", "active", "archived", "featured"],
      default: "draft",
    },
    viewCount: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

ProjectSchema.index({ title: "text", description: "text", category: "text" });

export const Project = mongoose.model<IProject>("Project", ProjectSchema);
