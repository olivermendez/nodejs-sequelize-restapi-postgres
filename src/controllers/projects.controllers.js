import { Project } from "../models/Project.js";

export const getProjects = async (req, res) => {
  const projects = await Project.findAll();
  console.log(projects);
  res.send({ sucess: true, projects });
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;
  const newProject = await Project.create({
    name,
    description,
    priority,
  });
  //console.log(newProject);
  res.send({ sucess: true, newProject });
};

export const getSingleProject = async (req, res) => {
  const project = await Project.findByPk(req.params.id);

  if (project === null) {
    console.log("error");
  } else {
    res.send({ sucess: true, project });
  }
};

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
