import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { sendError } from "../utils/responseHandler";
import { HTTP_STATUS } from "../constants";

export interface AuthRequest extends Request {
  admin?: {
    id: string;
    email: string;
    role: string;
    name: string;
  };
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return sendError(res, "Unauthorized: No token provided", HTTP_STATUS.UNAUTHORIZED) as any;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "ashkara-secret") as any;
    req.admin = decoded;
    return next();
  } catch {
    return sendError(res, "Unauthorized: Invalid or expired token", HTTP_STATUS.UNAUTHORIZED) as any;
  }
};

export const requireRole = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.admin || !roles.includes(req.admin.role)) {
      return sendError(res, "Forbidden: Insufficient permissions", HTTP_STATUS.FORBIDDEN) as any;
    }
    return next();
  };
};
