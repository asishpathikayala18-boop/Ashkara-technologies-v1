import { Inquiry, IInquiry } from "../models/Inquiry";

export class InquiryService {
  static async createInquiry(data: Partial<IInquiry>): Promise<IInquiry> {
    const inquiry = new Inquiry(data);
    return await inquiry.save();
  }

  static async getAllInquiries(query: {
    page?: number;
    limit?: number;
    status?: string;
    search?: string;
    sort?: string;
  }) {
    const { page = 1, limit = 20, status, search, sort = "-createdAt" } = query;
    const skip = (Number(page) - 1) * Number(limit);

    const filter: any = {};
    if (status && status !== "all") filter.status = status;
    if (search) {
      const regex = new RegExp(search, "i");
      filter.$or = [{ fullName: regex }, { email: regex }, { phone: regex }, { project: regex }, { category: regex }];
    }

    const [inquiries, total] = await Promise.all([
      Inquiry.find(filter).sort(sort).skip(skip).limit(Number(limit)).lean(),
      Inquiry.countDocuments(filter),
    ]);

    return {
      inquiries,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit)),
      },
    };
  }

  static async getInquiryById(id: string): Promise<IInquiry | null> {
    return await Inquiry.findById(id);
  }

  static async updateInquiryStatus(id: string, status: string): Promise<IInquiry | null> {
    return await Inquiry.findByIdAndUpdate(id, { status }, { new: true });
  }

  static async deleteInquiry(id: string): Promise<IInquiry | null> {
    return await Inquiry.findByIdAndDelete(id);
  }

  static async exportCsv(status?: string): Promise<string> {
    const filter: any = {};
    if (status && status !== "all") filter.status = status;

    const inquiries = await Inquiry.find(filter).sort("-createdAt").lean();

    const headers = ["Name", "Email", "Phone", "Branch", "Category", "Project", "Status", "Date"];
    const rows = inquiries.map((i) => [
      `"${i.fullName}"`,
      `"${i.email}"`,
      `"${i.phone}"`,
      `"${i.engineeringBranch}"`,
      `"${i.category}"`,
      `"${i.project}"`,
      `"${i.status}"`,
      `"${new Date(i.createdAt).toLocaleDateString()}"`,
    ]);

    return [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  }
}
