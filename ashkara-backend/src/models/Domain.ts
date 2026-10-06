import mongoose, { Schema, Document } from "mongoose";

export interface IDomain extends Document {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

const DomainSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    icon: { type: String },
  },
  { timestamps: true }
);

export const Domain = mongoose.model<IDomain>("Domain", DomainSchema);
