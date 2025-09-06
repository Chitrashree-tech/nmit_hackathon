const express = require("express");
const router = express.Router();

let projects = []; // temporary in-memory storage

// Get all projects
router.get("/", (req, res) => {
  res.json(projects);
});

// Create new project
router.post("/", (req, res) => {
  const { name, description } = req.body;
  const newProject = {
    id: projects.length + 1,
    name,
    description,
    createdAt: new Date(),
  };
  projects.push(newProject);
  res.json(newProject);
});

module.exports = router;
