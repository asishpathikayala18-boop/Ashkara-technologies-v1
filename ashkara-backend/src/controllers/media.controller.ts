import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { UPLOAD_ROOT_PATH } from "../config/multer";
import { sendSuccess, sendError } from "../utils/responseHandler";
import { HTTP_STATUS } from "../constants";
import { AuthRequest } from "../middleware/auth";
import { ActivityLog } from "../models/ActivityLog";

const BASE_URL = process.env.API_URL || "http://localhost:5000";

export class MediaController {
  static async upload(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        return sendError(res, "No file uploaded", HTTP_STATUS.BAD_REQUEST) as any;
      }
      const folder = (req.query.folder as string) || "gallery";
      const relativePath = `/${folder}/${req.file.filename}`;
      const url = `${BASE_URL}/uploads${relativePath}`;

      await ActivityLog.create({
        adminId: req.admin!.id,
        adminName: req.admin!.name,
        action: "uploaded",
        resource: "media",
        details: req.file.filename,
      });

      sendSuccess(res, { filename: req.file.filename, url, folder, size: req.file.size }, "File uploaded successfully", HTTP_STATUS.CREATED);
    } catch (error) {
      next(error);
    }
  }

  static async listFiles(req: Request, res: Response, next: NextFunction) {
    try {
      const folder = (req.query.folder as string) || "";
      const targetDir = folder ? path.join(UPLOAD_ROOT_PATH, folder) : UPLOAD_ROOT_PATH;

      if (!fs.existsSync(targetDir)) {
        return sendSuccess(res, [], "No files found");
      }

      const getFiles = (dir: string, prefix: string = ""): any[] => {
        const items = fs.readdirSync(dir);
        const files: any[] = [];
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !folder) {
            files.push(...getFiles(fullPath, item));
          } else if (stat.isFile()) {
            const relativePath = prefix ? `/${prefix}/${item}` : `/${item}`;
            files.push({
              filename: item,
              folder: prefix || "root",
              url: `${BASE_URL}/uploads${relativePath}`,
              size: stat.size,
              createdAt: stat.birthtime,
            });
          }
        }
        return files;
      };

      const files = getFiles(targetDir, folder);
      sendSuccess(res, files, "Files retrieved");
    } catch (error) {
      next(error);
    }
  }

  static async deleteFile(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { folder, filename } = req.params as { folder: string; filename: string };
      const filePath = path.join(UPLOAD_ROOT_PATH, folder, filename);

      if (!fs.existsSync(filePath)) {
        return sendError(res, "File not found", HTTP_STATUS.NOT_FOUND) as any;
      }

      // Security: ensure path is within uploads
      if (!filePath.startsWith(UPLOAD_ROOT_PATH)) {
        return sendError(res, "Invalid path", HTTP_STATUS.BAD_REQUEST) as any;
      }

      fs.unlinkSync(filePath);
      await ActivityLog.create({
        adminId: req.admin!.id,
        adminName: req.admin!.name,
        action: "deleted",
        resource: "media",
        details: `${folder}/${filename}`,
      });
      sendSuccess(res, null, "File deleted successfully");
    } catch (error) {
      next(error);
    }
  }
}
