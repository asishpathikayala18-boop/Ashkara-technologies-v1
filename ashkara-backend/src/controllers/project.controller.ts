import { Request, Response, NextFunction } from "express";
import { ProjectService } from "../services/project.service";
import { sendSuccess, sendError } from "../utils/responseHandler";
import { HTTP_STATUS } from "../constants";
import { AuthRequest } from "../middleware/auth";

export class ProjectController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await ProjectService.getAllProjects(req.query as any);
      sendSuccess(res, result, "Projects retrieved successfully");
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await ProjectService.getProjectById(req.params.id as string);
      if (!project) return sendError(res, "Project not found", HTTP_STATUS.NOT_FOUND) as any;
      sendSuccess(res, project, "Project retrieved successfully");
    } catch (error) {
      next(error);
    }
  }

  static async getBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const project = await ProjectService.getProjectBySlug(req.params.slug as string);
      if (!project) return sendError(res, "Project not found", HTTP_STATUS.NOT_FOUND) as any;
      sendSuccess(res, project, "Project retrieved successfully");
    } catch (error) {
      next(error);
    }
  }

  static async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const project = await ProjectService.createProject(req.body, req.admin!.id, req.admin!.name);
      sendSuccess(res, project, "Project created successfully", HTTP_STATUS.CREATED);
    } catch (error) {
      next(error);
    }
  }

  static async update(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const project = await ProjectService.updateProject(req.params.id as string, req.body, req.admin!.id, req.admin!.name);
      if (!project) return sendError(res, "Project not found", HTTP_STATUS.NOT_FOUND) as any;
      sendSuccess(res, project, "Project updated successfully");
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const project = await ProjectService.deleteProject(req.params.id as string, req.admin!.id, req.admin!.name);
      if (!project) return sendError(res, "Project not found", HTTP_STATUS.NOT_FOUND) as any;
      sendSuccess(res, null, "Project deleted successfully");
    } catch (error) {
      next(error);
    }
  }

  static async duplicate(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const project = await ProjectService.duplicateProject(req.params.id as string, req.admin!.id, req.admin!.name);
      sendSuccess(res, project, "Project duplicated successfully", HTTP_STATUS.CREATED);
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const { status } = req.body;
      const project = await ProjectService.updateStatus(req.params.id as string, status, req.admin!.id, req.admin!.name);
      if (!project) return sendError(res, "Project not found", HTTP_STATUS.NOT_FOUND) as any;
      sendSuccess(res, project, "Project status updated");
    } catch (error) {
      next(error);
    }
  }

  static async getStats(req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await ProjectService.getStats();
      sendSuccess(res, stats, "Project stats retrieved");
    } catch (error) {
      next(error);
    }
  }
}
