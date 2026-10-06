import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { sendSuccess, sendError } from "../utils/responseHandler";
import { HTTP_STATUS } from "../constants";
import { AuthRequest } from "../middleware/auth";

export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      sendSuccess(res, result, "Login successful");
    } catch (error: any) {
      sendError(res, error.message || "Login failed", HTTP_STATUS.UNAUTHORIZED);
    }
  }

  static async getMe(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const admin = await AuthService.getMe(req.admin!.id);
      sendSuccess(res, admin, "Admin profile retrieved");
    } catch (error) {
      next(error);
    }
  }

  static async changePassword(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { currentPassword, newPassword } = req.body;
      const result = await AuthService.changePassword(req.admin!.id, currentPassword, newPassword);
      sendSuccess(res, result, "Password changed successfully");
    } catch (error: any) {
      sendError(res, error.message || "Password change failed", HTTP_STATUS.BAD_REQUEST);
    }
  }
}
