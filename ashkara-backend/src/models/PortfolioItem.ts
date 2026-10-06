import { Schema, model, Document } from 'mongoose';

export interface IPortfolioItem extends Document {
  clientId: Schema.Types.ObjectId;
  title: string;
  description?: string;
  technologies: string[];
  images: string[]; // URLs under uploads/portfolio/gallery/
  videos: string[]; // URLs under uploads/portfolio/videos/
  completionDate?: Date;
  clientPermission: boolean;
  status: 'Draft' | 'Published';
  createdAt: Date;
  updatedAt: Date;
}

const PortfolioItemSchema = new Schema<IPortfolioItem>(
  {
    clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    title: { type: String, required: true },
    description: { type: String },
    technologies: [{ type: String }],
    images: [{ type: String }],
    videos: [{ type: String }],
    completionDate: { type: Date },
    clientPermission: { type: Boolean, default: false },
    status: { type: String, enum: ['Draft', 'Published'], default: 'Draft' },
  },
  { timestamps: true }
);

export const PortfolioItem = model<IPortfolioItem>('PortfolioItem', PortfolioItemSchema);
