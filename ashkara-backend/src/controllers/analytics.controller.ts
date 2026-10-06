import { Request, Response, NextFunction } from "express";
import { Project } from "../models/Project";
import { Inquiry } from "../models/Inquiry";
import { Category } from "../models/Category";
import { ActivityLog } from "../models/ActivityLog";
import { Client } from "../models/Client";
import { ProjectBlueprint } from "../models/ProjectBlueprint";
import { Reminder } from "../models/Reminder";
import { PortfolioItem } from "../models/PortfolioItem";
import { Requirement } from "../models/Requirement";
import { Technology } from "../models/Technology";
import { sendSuccess } from "../utils/responseHandler";
import { protect } from "../middleware/auth";
import os from "os";

export class AnalyticsController {
  static async getDashboard(req: Request, res: Response, next: NextFunction) {
    try {
      const now = new Date();
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      const [
        totalClients,
        activeProjects,
        completedProjects,
        draftBlueprints,
        pendingReminders,
        newInquiries,
        totalPortfolioItems,
        recentActivity,
        recentInquiries,
      ] = await Promise.all([
        Client.countDocuments(),
        Project.countDocuments({ status: "active" }),
        ProjectBlueprint.countDocuments({ status: "Completed" }),
        ProjectBlueprint.countDocuments({ status: "Draft" }),
        Reminder.countDocuments({ isCompleted: false }),
        Inquiry.countDocuments({ status: "pending" }),
        PortfolioItem.countDocuments(),
        ActivityLog.find().sort("-createdAt").limit(15).lean(),
        Inquiry.find().sort("-createdAt").limit(5).select("fullName email category status createdAt").lean(),
      ]);

      // System Health Stats
      const systemHealth = {
        server: "Healthy",
        database: "Healthy",
        api: "Healthy",
        uploads: "Healthy",
        storage: "Healthy",
        environment: process.env.NODE_ENV === "production" ? "Healthy" : "Warning",
        memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024, // MB
        uptime: process.uptime()
      };

      // 30-day inquiry trend (group by day)
      const inquiryTrend = await Inquiry.aggregate([
        { $match: { createdAt: { $gte: thirtyDaysAgo } } },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ]);

      // Projects by status
      const projectsByStatus = await Project.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]);

      // Inquiries by source (Lead Source)
      const inquiriesBySource = await Inquiry.aggregate([
        { $group: { _id: "$source", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 8 },
      ]);

      // Inquiries by category
      const inquiriesByCategory = await Inquiry.aggregate([
        { $group: { _id: "$category", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 8 },
      ]);

      sendSuccess(res, {
        overview: {
          totalClients,
          activeProjects,
          completedProjects,
          draftBlueprints,
          pendingReminders,
          newInquiries,
          totalPortfolioItems,
        },
        charts: {
          inquiryTrend,
          projectsByStatus,
          inquiriesByCategory,
          inquiriesBySource,
        },
        systemHealth,
        recentActivity,
        recentInquiries,
      }, "Dashboard data retrieved");
    } catch (error) {
      next(error);
    }
  }

  static async getActivityLog(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 20;
      const skip = (page - 1) * limit;

      const [logs, total] = await Promise.all([
        ActivityLog.find().sort("-createdAt").skip(skip).limit(limit).lean(),
        ActivityLog.countDocuments(),
      ]);
      sendSuccess(res, { logs, total, page, pages: Math.ceil(total / limit) }, "Activity log retrieved");
    } catch (error) {
      next(error);
    }
  }

  static async globalSearch(req: Request, res: Response, next: NextFunction) {
    try {
      const q = (req.query.q as string) || "";
      if (!q || q.length < 2) {
        return sendSuccess(res, { clients: [], blueprints: [], reminders: [], projects: [], inquiries: [], categories: [], portfolio: [], requirements: [] }, "Search results");
      }
      const regex = new RegExp(q, "i");

      const [clients, blueprints, reminders, projects, inquiries, categories, portfolio, requirements, technologies] = await Promise.all([
        Client.find({ $or: [{ fullName: regex }, { email: regex }, { phone: regex }, { college: regex }, { department: regex }] }).limit(5).select("fullName email phone college status").lean(),
        ProjectBlueprint.find({ title: regex }).limit(5).select("title status version").lean(),
        Reminder.find({ title: regex }).limit(5).select("title dueDate isCompleted").lean(),
        Project.find({ $or: [{ title: regex }, { category: regex }, { "technologies.name": regex }] }).limit(5).select("title category status").lean(),
        Inquiry.find({ $or: [{ fullName: regex }, { email: regex }, { project: regex }] }).limit(5).select("fullName email status createdAt").lean(),
        Category.find({ name: regex }).limit(5).select("name slug").lean(),
        PortfolioItem.find({ title: regex }).limit(5).select("title type").lean(),
        Requirement.find({ title: regex }).limit(5).select("title status type").lean(),
        Technology.find({ name: regex }).limit(5).select("name category").lean(),
      ]);

      sendSuccess(res, { clients, blueprints, reminders, projects, inquiries, categories, portfolio, requirements, technologies }, "Search results");
    } catch (error) {
      next(error);
    }
  }
}
