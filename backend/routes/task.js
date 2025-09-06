const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

router.get("/:projectId", async (req, res) => {
  const tasks = await Task.find({ project: req.params.projectId }).populate("assignee");
  res.json(tasks);
});

module.exports = router;
