import { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/responseHandler";
import { HTTP_STATUS } from "../constants";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);

  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal Server Error";

  sendError(res, message, statusCode, err.errors || []);
};
