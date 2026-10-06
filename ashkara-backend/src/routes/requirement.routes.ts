import { Router } from "express";
import { RequirementController } from "../controllers/requirement.controller";
import { protect } from "../middleware/auth";

const router = Router();

router.get("/", protect as any, RequirementController.getAll as any);
router.get("/:id", protect as any, RequirementController.getById as any);
router.post("/", protect as any, RequirementController.create as any);
router.put("/:id", protect as any, RequirementController.update as any);
router.delete("/:id", protect as any, RequirementController.delete as any);

export default router;
