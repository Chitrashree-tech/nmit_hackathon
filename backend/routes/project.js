const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

  // backend/routes/project.js
  router.post("/", async (req, res) => {
    const project = await Project.create({
      name: req.body.name,
      description: req.body.description,
      members: [req.body.userId],
    });
    res.json(project);
  });

router.get("/", async (req, res) => {
  const projects = await Project.find().populate("members");
  res.json(projects);
});

module.exports = router;
