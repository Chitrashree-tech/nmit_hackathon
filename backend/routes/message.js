const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

router.post("/", async (req, res) => {
  const msg = await Message.create(req.body);
  res.json(msg);
});

router.get("/:projectId", async (req, res) => {
  const msgs = await Message.find({ project: req.params.projectId }).populate("user");
  res.json(msgs);
});

module.exports = router;
