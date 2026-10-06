import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { protect } from "../middleware/auth";

const router = Router();

router.get("/", CategoryController.getAll);
router.get("/:slug", CategoryController.getBySlug);
router.post("/", protect as any, CategoryController.create as any);
router.put("/:id", protect as any, CategoryController.update as any);
router.delete("/:id", protect as any, CategoryController.delete as any);

export default router;
