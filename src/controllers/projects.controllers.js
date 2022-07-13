import asyncHandler from "../middleware/async.js";
import { Project } from "../models/Project.js";
import ErrorResponse from "../utils/errorResponse.js";

/**
 * * Get all projects from db
 * @route GET /projects/
 * @param req
 * @param  res
 * TODO: This code can be improve.
 */

export const getProjects = asyncHandler(async (req, res, next) => {
  const projects = await Project.findAll();
  if (!projects) {
    return next(new ErrorResponse("No projects found!", 400));
  }
  res.status(201).json({ success: true, projects: projects });
});

/**
 * * Create a single project to db
 * @route POST /projects/
 * @param req
 * @param  res
 * TODO: This code can be improve.
 */
export const createProject = asyncHandler(async (req, res, next) => {
  try {
    const { name, priority, description } = req.body;
    const newProject = await Project.create({
      name,
      description,
      priority,
    });
    res.status(201).json({ success: true, projectCreated: newProject });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * * Get single project from db
 * @route GET /projects/:id
 * @param req
 * @param  res
 * TODO: This code can be improve.
 */
export const getSingleProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByPk(req.params.id);

  if (!project) {
    return res.status(404).json({ sucess: false, message: "Project no found" });
  }

  res.status(201).json({ sucess: true, projectCreated: project });
});

/**
 * * Delete a single project from postgress
 * @route DELETE /projects/:id
 * @param req
 * @param  res
 * TODO: This code can be improve.
 */

export const deleteSingleProject = async (req, res) => {
  const project = await Project.destroy({
    where: { id: req.params.id },
  });

  const projects = await Project.findAll();
  res.send({
    sucess: true,
    projects,
  });
};

/**
 * * Update a single project from postgress
 * @route PUT /projects/:id
 * @param req
 * @param  res
 * TODO: This code can be improve.
 */

export const updateSingleProject = async (req, res) => {
  const { name, priority, description } = req.body;
  const project = await Project.update(
    { name, priority, description },
    {
      where: { id: req.params.id },
    }
  );

  const projects = await Project.findAll();
  res.send({
    sucess: true,
    projects,
  });
};
