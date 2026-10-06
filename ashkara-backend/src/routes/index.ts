import { Router } from "express";
import healthRoutes from "./health.routes";
import inquiryRoutes from "./inquiry.routes";
import authRoutes from "./auth.routes";
import projectRoutes from "./project.routes";
import projectBlueprintRoutes from "./projectBlueprint.routes";
import categoryRoutes from "./category.routes";
import mediaRoutes from "./media.routes";
import settingsRoutes from "./settings.routes";
import analyticsRoutes from "./analytics.routes";

import clientRoutes from "./client.routes";

import requirementRoutes from "./requirement.routes";
import taskRoutes from "./task.routes";
import reminderRoutes from "./reminder.routes";
import portfolioItemRoutes from "./portfolioItem.routes";
import notificationRoutes from "./notification.routes";

const router = Router();

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/inquiries", inquiryRoutes);
router.use("/clients", clientRoutes);
router.use("/requirements", requirementRoutes);
router.use("/tasks", taskRoutes);
router.use("/reminders", reminderRoutes);
router.use("/portfolio-items", portfolioItemRoutes);
router.use("/projects", projectRoutes);
router.use("/categories", categoryRoutes);
router.use("/media", mediaRoutes);
router.use("/settings", settingsRoutes);
router.use("/analytics", analyticsRoutes);
router.use("/notifications", notificationRoutes);

router.use("/project-blueprints", projectBlueprintRoutes);
export default router;
