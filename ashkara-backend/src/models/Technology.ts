import mongoose, { Schema, Document } from "mongoose";

export interface ITechnology extends Document {
  name: string;
  slug: string;
  iconUrl?: string;
}

const TechnologySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    iconUrl: { type: String },
  },
  { timestamps: true }
);

export const Technology = mongoose.model<ITechnology>("Technology", TechnologySchema);
