import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { protect } from "../middleware/auth";

const router = Router();

router.get("/", protect as any, TaskController.getAll as any);
router.get("/:id", protect as any, TaskController.getById as any);
router.post("/", protect as any, TaskController.create as any);
router.put("/:id", protect as any, TaskController.update as any);
router.delete("/:id", protect as any, TaskController.delete as any);

export default router;
