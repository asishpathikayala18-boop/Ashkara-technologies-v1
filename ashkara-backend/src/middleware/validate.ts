import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";
import { sendError } from "../utils/responseHandler";
import { HTTP_STATUS } from "../constants";

export const validateRequest = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error: any) {
      if (error instanceof ZodError || error.name === "ZodError") {
        const errorMessages = error.errors.map((err: any) => ({
          field: err.path.join("."),
          message: err.message,
        }));
        return sendError(res, "Validation Error", HTTP_STATUS.BAD_REQUEST, errorMessages) as any;
      }
      return next(error);
    }
  };
};
