import { Router } from "express";
import { InquiryController } from "../controllers/inquiry.controller";
import { protect } from "../middleware/auth";

const router = Router();

// Public - submit inquiry
router.post("/", InquiryController.create);

// Protected admin routes
router.get("/", protect as any, InquiryController.getAll);
router.get("/export", protect as any, InquiryController.exportCsv as any);
router.get("/:id", protect as any, InquiryController.getById);
router.patch("/:id/status", protect as any, InquiryController.updateStatus);
router.delete("/:id", protect as any, InquiryController.delete);

export default router;
