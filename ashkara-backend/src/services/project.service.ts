import { Project, IProject } from "../models/Project";
import { ActivityLog } from "../models/ActivityLog";

export class ProjectService {
  static async getAllProjects(query: {
    page?: number;
    limit?: number;
    status?: string;
    category?: string;
    search?: string;
    sort?: string;
  }) {
    const { page = 1, limit = 20, status, category, search, sort = "-createdAt" } = query;
    const skip = (page - 1) * limit;

    const filter: any = {};
    if (status) filter.status = status;
    if (category) filter.category = { $regex: category, $options: "i" };
    if (search) filter.$text = { $search: search };

    const [projects, total] = await Promise.all([
      Project.find(filter).sort(sort).skip(skip).limit(Number(limit)).lean(),
      Project.countDocuments(filter),
    ]);

    return {
      projects,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit)),
      },
    };
  }

  static async getProjectById(id: string) {
    return Project.findById(id).lean();
  }

  static async getProjectBySlug(slug: string) {
    return Project.findOneAndUpdate(
      { slug },
      { $inc: { viewCount: 1 } },
      { new: true }
    ).lean();
  }

  static async createProject(data: Partial<IProject>, adminId: string, adminName: string) {
    // Auto-generate slug if not provided
    if (!data.slug && data.title) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    }
    const project = await Project.create(data);
    await ActivityLog.create({ adminId, adminName, action: "created", resource: "project", resourceId: project._id.toString(), details: project.title });
    return project;
  }

  static async updateProject(id: string, data: Partial<IProject>, adminId: string, adminName: string) {
    const project = await Project.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    if (project) {
      await ActivityLog.create({ adminId, adminName, action: "updated", resource: "project", resourceId: id, details: project.title });
    }
    return project;
  }

  static async deleteProject(id: string, adminId: string, adminName: string) {
    const project = await Project.findByIdAndDelete(id);
    if (project) {
      await ActivityLog.create({ adminId, adminName, action: "deleted", resource: "project", resourceId: id, details: project.title });
    }
    return project;
  }

  static async duplicateProject(id: string, adminId: string, adminName: string) {
    const original = await Project.findById(id).lean();
    if (!original) throw new Error("Project not found");

    const { _id, slug, title, createdAt, updatedAt, ...rest } = original as any;
    const copy = await Project.create({
      ...rest,
      title: `${title} (Copy)`,
      slug: `${slug}-copy-${Date.now()}`,
      status: "draft",
      viewCount: 0,
    });
    await ActivityLog.create({ adminId, adminName, action: "duplicated", resource: "project", resourceId: copy._id.toString(), details: copy.title });
    return copy;
  }

  static async updateStatus(id: string, status: string, adminId: string, adminName: string) {
    const project = await Project.findByIdAndUpdate(
      id,
      { status, isFeatured: status === "featured" },
      { new: true }
    );
    if (project) {
      await ActivityLog.create({ adminId, adminName, action: `status:${status}`, resource: "project", resourceId: id, details: project.title });
    }
    return project;
  }

  static async getStats() {
    const [total, active, draft, archived, featured] = await Promise.all([
      Project.countDocuments(),
      Project.countDocuments({ status: "active" }),
      Project.countDocuments({ status: "draft" }),
      Project.countDocuments({ status: "archived" }),
      Project.countDocuments({ status: "featured" }),
    ]);
    const mostViewed = await Project.find().sort("-viewCount").limit(5).select("title viewCount status").lean();
    return { total, active, draft, archived, featured, mostViewed };
  }
}
