import { Response } from "express";
import { HTTP_STATUS } from "../constants";

export const sendSuccess = (res: Response, data: any, message = "Success", statusCode = HTTP_STATUS.OK) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (res: Response, message = "An error occurred", statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR, errors: any[] = []) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors: errors.length > 0 ? errors : undefined,
  });
};
