import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { protect } from "../middleware/auth";

const router = Router();

// POST /api/v1/auth/login
router.post("/login", AuthController.login);

// GET /api/v1/auth/me
router.get("/me", protect as any, AuthController.getMe as any);

// PUT /api/v1/auth/change-password
router.put("/change-password", protect as any, AuthController.changePassword as any);

export default router;
