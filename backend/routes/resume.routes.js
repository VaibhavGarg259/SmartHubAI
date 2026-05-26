// routes/resume.routes.js

import express from "express";
import { generateResume } from "../controllers/resume.controller.js";
import { authMiddleware } from "../middleware/auth.Middleware.js";

const router = express.Router();

router.post("/generate", authMiddleware, generateResume);

export default router;
