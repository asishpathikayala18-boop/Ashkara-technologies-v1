import { Router } from "express";
import { ReminderController } from "../controllers/reminder.controller";
import { protect } from "../middleware/auth";

const router = Router();

router.get("/", protect as any, ReminderController.getAll as any);
router.get("/:id", protect as any, ReminderController.getById as any);
router.post("/", protect as any, ReminderController.create as any);
router.put("/:id", protect as any, ReminderController.update as any);
router.delete("/:id", protect as any, ReminderController.delete as any);

export default router;
