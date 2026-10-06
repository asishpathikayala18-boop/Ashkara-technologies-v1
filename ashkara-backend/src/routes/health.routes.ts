import { Router } from "express";
import { sendSuccess } from "../utils/responseHandler";
import mongoose from "mongoose";

const router = Router();

/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Check system health
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: System is healthy
 */
router.get("/", (req, res) => {
  const isMongoConnected = mongoose.connection.readyState === 1;
  const data = {
    server: "running",
    database: isMongoConnected ? "connected" : "disconnected",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  };

  sendSuccess(res, data, "Health Check Passed");
});

export default router;
