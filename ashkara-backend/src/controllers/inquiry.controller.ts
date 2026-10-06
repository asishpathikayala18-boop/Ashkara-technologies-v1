import { Request, Response, NextFunction } from "express";
import { InquiryService } from "../services/inquiry.service";
import { sendSuccess, sendError } from "../utils/responseHandler";
import { HTTP_STATUS } from "../constants";
import { AuthRequest } from "../middleware/auth";

export class InquiryController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const inquiry = await InquiryService.createInquiry(req.body);
      sendSuccess(res, inquiry, "Inquiry submitted successfully", HTTP_STATUS.CREATED);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await InquiryService.getAllInquiries(req.query as any);
      sendSuccess(res, result, "Inquiries retrieved successfully");
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const inquiry = await InquiryService.getInquiryById(req.params.id as string);
      if (!inquiry) {
        return sendError(res, "Inquiry not found", HTTP_STATUS.NOT_FOUND) as any;
      }
      sendSuccess(res, inquiry, "Inquiry retrieved successfully");
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { status } = req.body;
      const inquiry = await InquiryService.updateInquiryStatus(req.params.id as string, status);
      if (!inquiry) {
        return sendError(res, "Inquiry not found", HTTP_STATUS.NOT_FOUND) as any;
      }
      sendSuccess(res, inquiry, "Inquiry status updated successfully");
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const inquiry = await InquiryService.deleteInquiry(req.params.id as string);
      if (!inquiry) {
        return sendError(res, "Inquiry not found", HTTP_STATUS.NOT_FOUND) as any;
      }
      sendSuccess(res, null, "Inquiry deleted successfully");
    } catch (error) {
      next(error);
    }
  }

  static async exportCsv(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const csv = await InquiryService.exportCsv(req.query.status as string);
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=ashkara-inquiries.csv");
      res.status(200).send(csv);
    } catch (error) {
      next(error);
    }
  }
}
