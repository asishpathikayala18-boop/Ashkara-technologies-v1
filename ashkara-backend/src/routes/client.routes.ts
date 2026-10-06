import { Router } from "express";
import { ClientController } from "../controllers/client.controller";
import { protect } from "../middleware/auth";

const router = Router();

// Protected admin routes
router.get("/", protect as any, ClientController.getAll as any);
router.get("/:id", protect as any, ClientController.getById as any);
router.post("/", protect as any, ClientController.create as any);
router.put("/:id", protect as any, ClientController.update as any);
router.delete("/:id", protect as any, ClientController.delete as any);

export default router;
