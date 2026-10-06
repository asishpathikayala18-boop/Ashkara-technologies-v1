import { Request, Response, NextFunction } from "express";
import { SettingsService } from "../services/settings.service";
import { sendSuccess } from "../utils/responseHandler";
import { AuthRequest } from "../middleware/auth";
import { ActivityLog } from "../models/ActivityLog";

export class SettingsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const settings = await SettingsService.getAll();
      sendSuccess(res, settings, "Settings retrieved");
    } catch (error) { next(error); }
  }

  static async update(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const settings = await SettingsService.bulkSet(req.body);
      await ActivityLog.create({
        adminId: req.admin!.id,
        adminName: req.admin!.name,
        action: "updated",
        resource: "settings",
        details: `Updated ${Object.keys(req.body).join(", ")}`,
      });
      sendSuccess(res, settings, "Settings updated successfully");
    } catch (error) { next(error); }
  }
}
