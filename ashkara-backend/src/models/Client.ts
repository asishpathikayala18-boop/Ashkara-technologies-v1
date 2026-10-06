// src/models/Client.ts
import { Schema, model, Document } from 'mongoose';

export interface IClient extends Document {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  academicYear: string;
  expectedSubmissionDate?: Date;
  guideName?: string;
  location: string;
  notes?: string;
  source: 'Website' | 'Instagram' | 'WhatsApp' | 'Referral';
  status:
    | 'New Lead'
    | 'Contacted'
    | 'Requirement Gathering'
    | 'Proposal Sent'
    | 'Project Started'
    | 'Development'
    | 'Testing'
    | 'Completed'
    | 'Archived';
  createdAt: Date;
  updatedAt: Date;
}

const ClientSchema = new Schema<IClient>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    college: { type: String, required: true },
    department: { type: String, required: true },
    academicYear: { type: String, required: true },
    expectedSubmissionDate: { type: Date },
    guideName: { type: String },
    location: { type: String, required: true },
    notes: { type: String },
    source: { type: String, enum: ['Website', 'Instagram', 'WhatsApp', 'Referral'], required: true },
    status: {
      type: String,
      enum: [
        'New Lead',
        'Contacted',
        'Requirement Gathering',
        'Proposal Sent',
        'Project Started',
        'Development',
        'Testing',
        'Completed',
        'Archived',
      ],
      default: 'New Lead',
    },
  },
  { timestamps: true }
);

export const Client = model<IClient>('Client', ClientSchema);
