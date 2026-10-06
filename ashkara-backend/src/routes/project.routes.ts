import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";
import { protect } from "../middleware/auth";

const router = Router();

// Public routes
router.get("/", ProjectController.getAll);
router.get("/slug/:slug", ProjectController.getBySlug);
router.get("/:id", ProjectController.getById);

// Protected admin routes
router.post("/", protect as any, ProjectController.create as any);
router.put("/:id", protect as any, ProjectController.update as any);
router.delete("/:id", protect as any, ProjectController.delete as any);
router.post("/:id/duplicate", protect as any, ProjectController.duplicate as any);
router.patch("/:id/status", protect as any, ProjectController.updateStatus as any);
router.get("/admin/stats", protect as any, ProjectController.getStats);

export default router;
