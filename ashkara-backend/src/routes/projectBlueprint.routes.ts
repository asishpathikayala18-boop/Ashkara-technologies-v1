import { Router } from "express";
import { ProjectBlueprintController } from "../controllers/projectBlueprint.controller";
import { protect } from "../middleware/auth";

const router = Router();

// Protected admin routes
router.get("/", protect as any, ProjectBlueprintController.getAll as any);
router.get("/:id", protect as any, ProjectBlueprintController.getById as any);
router.post("/", protect as any, ProjectBlueprintController.create as any);
router.put("/:id", protect as any, ProjectBlueprintController.update as any);
router.delete("/:id", protect as any, ProjectBlueprintController.delete as any);

export default router;
