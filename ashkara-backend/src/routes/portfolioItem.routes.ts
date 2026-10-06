import { Router } from "express";
import { PortfolioItemController } from "../controllers/portfolioItem.controller";
import { protect } from "../middleware/auth";

const router = Router();

router.get("/", protect as any, PortfolioItemController.getAll as any);
router.get("/:id", protect as any, PortfolioItemController.getById as any);
router.post("/", protect as any, PortfolioItemController.create as any);
router.put("/:id", protect as any, PortfolioItemController.update as any);
router.delete("/:id", protect as any, PortfolioItemController.delete as any);

export default router;
