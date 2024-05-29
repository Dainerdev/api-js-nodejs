import { Router } from "express";
import { methods as experiencesController } from "../controllers/experiences.controller";

const router = Router();

router.get("/", experiencesController.getExperiences);
router.post("/", experiencesController.addExperiences);
router.get("/:id", experiencesController.getExperience);


export default router;