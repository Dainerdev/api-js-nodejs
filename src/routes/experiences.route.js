import { Router } from "express";
import { methods as experiencesController } from "../controllers/experiences.controller";

const router = Router();

router.get("/", experiencesController.getExperiences);

export default router;