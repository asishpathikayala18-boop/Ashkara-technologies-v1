import { Category, ICategory } from "../models/Category";
import { Project } from "../models/Project";
import { ActivityLog } from "../models/ActivityLog";

export class CategoryService {
  static async getAllCategories() {
    const categories = await Category.find().sort("order").lean();
    // Attach project counts
    const withCounts = await Promise.all(
      categories.map(async (cat) => {
        const count = await Project.countDocuments({ category: cat.slug });
        return { ...cat, projectCount: count };
      })
    );
    return withCounts;
  }

  static async getCategoryBySlug(slug: string) {
    return Category.findOne({ slug }).lean();
  }

  static async createCategory(data: Partial<ICategory>, adminId: string, adminName: string) {
    if (!data.slug && data.name) {
      data.slug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    }
    const category = await Category.create(data);
    await ActivityLog.create({ adminId, adminName, action: "created", resource: "category", resourceId: category._id.toString(), details: category.name });
    return category;
  }

  static async updateCategory(id: string, data: Partial<ICategory>, adminId: string, adminName: string) {
    const category = await Category.findByIdAndUpdate(id, data, { new: true });
    if (category) {
      await ActivityLog.create({ adminId, adminName, action: "updated", resource: "category", resourceId: id, details: category.name });
    }
    return category;
  }

  static async deleteCategory(id: string, adminId: string, adminName: string) {
    const category = await Category.findByIdAndDelete(id);
    if (category) {
      await ActivityLog.create({ adminId, adminName, action: "deleted", resource: "category", resourceId: id, details: category.name });
    }
    return category;
  }
}
