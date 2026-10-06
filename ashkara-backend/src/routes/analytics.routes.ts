import { Router } from "express";
import { AnalyticsController } from "../controllers/analytics.controller";
import { protect } from "../middleware/auth";

const router = Router();

router.get("/dashboard", protect as any, AnalyticsController.getDashboard);
router.get("/activity", protect as any, AnalyticsController.getActivityLog);
router.get("/search", protect as any, AnalyticsController.globalSearch);

export default router;
