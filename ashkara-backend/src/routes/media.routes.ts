import { Router } from "express";
import { MediaController } from "../controllers/media.controller";
import { protect } from "../middleware/auth";
import { upload } from "../config/multer";

const router = Router();

// All media routes require auth
router.post("/upload", protect as any, upload.single("file"), MediaController.upload as any);
router.get("/", protect as any, MediaController.listFiles);
router.delete("/:folder/:filename", protect as any, MediaController.deleteFile as any);

export default router;
