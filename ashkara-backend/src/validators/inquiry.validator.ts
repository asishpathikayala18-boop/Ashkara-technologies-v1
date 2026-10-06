import { z } from "zod";

export const inquirySchema = z.object({
  body: z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    engineeringBranch: z.string().min(2, "Engineering Branch is required"),
    category: z.string().min(2, "Category is required"),
    project: z.string().min(2, "Project is required"),
    description: z.string().min(10, "Description must be at least 10 characters"),
  }),
});
