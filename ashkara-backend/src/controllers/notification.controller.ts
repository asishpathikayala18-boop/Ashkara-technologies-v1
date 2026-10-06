import { Request, Response, NextFunction } from "express";
import { Inquiry } from "../models/Inquiry";
import { Reminder } from "../models/Reminder";
import { ProjectBlueprint } from "../models/ProjectBlueprint";
import { sendSuccess } from "../utils/responseHandler";

export class NotificationController {
  static async getNotifications(req: Request, res: Response, next: NextFunction) {
    try {
      const [pendingInquiries, dueReminders, draftBlueprints] = await Promise.all([
        Inquiry.find({ status: "pending" }).sort("-createdAt").limit(5).lean(),
        Reminder.find({ isCompleted: false, dueDate: { $lte: new Date(Date.now() + 24 * 60 * 60 * 1000) } }).sort("dueDate").limit(5).lean(),
        ProjectBlueprint.find({ status: "Draft" }).sort("-createdAt").limit(5).lean(),
      ]);

      const notifications = [];

      for (const inq of pendingInquiries) {
        notifications.push({
          id: `inq-${inq._id}`,
          title: "New Inquiry",
          message: `${inq.fullName} has sent a new inquiry.`,
          type: "inquiry",
          date: inq.createdAt,
          link: "/admin/inquiries"
        });
      }

      for (const rem of dueReminders) {
        notifications.push({
          id: `rem-${rem._id}`,
          title: "Reminder Due",
          message: rem.title,
          type: "reminder",
          date: rem.dueDate,
          link: "/admin/reminders"
        });
      }

      for (const bp of draftBlueprints) {
        notifications.push({
          id: `bp-${bp._id}`,
          title: "Draft Blueprint",
          message: `Blueprint "${bp.title}" is still in draft.`,
          type: "blueprint",
          date: bp.updatedAt || bp.createdAt,
          link: "/admin/project-blueprints"
        });
      }

      // Sort by most recent date (approximate priority)
      notifications.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

      sendSuccess(res, { notifications, unreadCount: notifications.length }, "Notifications retrieved");
    } catch (error) {
      next(error);
    }
  }
}
