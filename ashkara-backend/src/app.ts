import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
// @ts-ignore

import path from "path";
import { setupSwagger } from "./config/swagger";
import routes from "./routes";
import { errorHandler } from "./middleware/error";
import { API_VERSION } from "./constants";
import { UPLOAD_ROOT_PATH } from "./config/multer";
import fs from "fs";

// Ensure upload directories exist on server start
const uploadSubfolders = [
  "clients",
  "portfolio",
  "documents",
  "logos",
  "gallery",
  "temp",
];
uploadSubfolders.forEach((folder) => {
  const fullPath = path.join(UPLOAD_ROOT_PATH, folder);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created upload folder: ${fullPath}`);
  }
});

const app = express();

// Security Middleware
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(mongoSanitize());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});
app.use(API_VERSION, limiter);

// Parsing & Compression
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Logging
app.use(morgan("dev"));

// Serve uploaded files as static with caching
app.use("/uploads", express.static(UPLOAD_ROOT_PATH, { maxAge: '1d' }));

// Swagger Documentation
setupSwagger(app);

// API Routes
app.use(API_VERSION, routes);

// Centralized Error Handling
app.use(errorHandler);

export default app;
