import { Router } from "express";
import { methods as experiencesController } from "../controllers/experiences.controller";

const router = Router();

// Routes

// Find All
router.get("/", experiencesController.getExperiences);
// Create
router.post("/", experiencesController.addExperiences);
// Finfd By Id
router.get("/:id", experiencesController.getExperience);
// Delete
router.delete("/:id", experiencesController.deleteExperience);
// Edit
router.put("/:id", experiencesController.updateExperience);

export default router;