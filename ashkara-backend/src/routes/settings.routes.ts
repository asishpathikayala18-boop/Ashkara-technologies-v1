import { Router } from "express";
import { SettingsController } from "../controllers/settings.controller";
import { protect } from "../middleware/auth";

const router = Router();

// Public read (for frontend to consume company info)
router.get("/", SettingsController.getAll);
// Protected write
router.put("/", protect as any, SettingsController.update as any);

export default router;
