import { Router } from "express";
import { NotificationController } from "../controllers/notification.controller";
import { protect } from "../middleware/auth";

const router = Router();

router.use(protect);

router.get("/", NotificationController.getNotifications);

export default router;
