const express = require("express");
const router = express.Router();
const Team = require("../models/Team");

// GET all team members
router.get("/", async (req, res) => {
  try {
    const teamMembers = await Team.find();
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching team members", error: error.message });
  }
});

// POST a new team member (or array of team members)
router.post("/", async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const savedMembers = await Team.insertMany(req.body);
      return res.status(201).json(savedMembers);
    }

    const newMember = new Team(req.body);
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    res.status(500).json({ message: "Error adding team member", error: error.message });
  }
});

module.exports = router;