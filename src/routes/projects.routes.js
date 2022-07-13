import { Router } from "express";
import {
  getProjects,
  createProject,
  getSingleProject,
  deleteSingleProject,
  updateSingleProject,
} from "../controllers/projects.controllers.js";

const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateSingleProject);
router.delete("/projects/:id", deleteSingleProject);
router.get("/projects/:id", getSingleProject);

export default router;
