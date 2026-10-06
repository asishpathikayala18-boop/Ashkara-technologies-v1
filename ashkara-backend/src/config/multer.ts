import multer from "multer";
import path from "path";
import fs from "fs";

const UPLOAD_ROOT = path.join(process.cwd(), "uploads");
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/svg+xml", "image/gif"];

// Ensure all subdirectories exist
const subDirs = ["banners", "gallery", "logos", "documents", "temp"];
subDirs.forEach((dir) => {
  const fullPath = path.join(UPLOAD_ROOT, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

const storage = multer.diskStorage({
  destination: (req, _file, cb) => {
    const folder = (req.query.folder as string) || "gallery";
    const validFolders = ["banners", "gallery", "logos", "documents", "temp"];
    const dest = validFolders.includes(folder) ? folder : "gallery";
    cb(null, path.join(UPLOAD_ROOT, dest));
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const name = path.basename(file.originalname, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .slice(0, 40);
    cb(null, `${name}-${Date.now()}${ext}`);
  },
});

const fileFilter = (_req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (ALLOWED_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed (jpg, png, webp, svg, gif)"));
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

export const UPLOAD_ROOT_PATH = UPLOAD_ROOT;
