import { Request, Response, NextFunction } from "express";
import { CategoryService } from "../services/category.service";
import { sendSuccess, sendError } from "../utils/responseHandler";
import { HTTP_STATUS } from "../constants";
import { AuthRequest } from "../middleware/auth";

export class CategoryController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await CategoryService.getAllCategories();
      sendSuccess(res, categories, "Categories retrieved successfully");
    } catch (error) { next(error); }
  }

  static async getBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const cat = await CategoryService.getCategoryBySlug(req.params.slug as string);
      if (!cat) return sendError(res, "Category not found", HTTP_STATUS.NOT_FOUND) as any;
      sendSuccess(res, cat, "Category retrieved");
    } catch (error) { next(error); }
  }

  static async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const cat = await CategoryService.createCategory(req.body, req.admin!.id, req.admin!.name);
      sendSuccess(res, cat, "Category created", HTTP_STATUS.CREATED);
    } catch (error) { next(error); }
  }

  static async update(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const cat = await CategoryService.updateCategory(req.params.id as string, req.body, req.admin!.id, req.admin!.name);
      if (!cat) return sendError(res, "Category not found", HTTP_STATUS.NOT_FOUND) as any;
      sendSuccess(res, cat, "Category updated");
    } catch (error) { next(error); }
  }

  static async delete(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const cat = await CategoryService.deleteCategory(req.params.id as string, req.admin!.id, req.admin!.name);
      if (!cat) return sendError(res, "Category not found", HTTP_STATUS.NOT_FOUND) as any;
      sendSuccess(res, null, "Category deleted");
    } catch (error) { next(error); }
  }
}
