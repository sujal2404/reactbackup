const express = require("express");
const router = express.Router();
const Hero = require("../models/Hero");

// GET the active hero section content
router.get("/", async (req, res) => {
  try {
    // Finds the latest active hero document
    const hero = await Hero.findOne({ isActive: true }).sort({ _id: -1 });
    if (!hero) {
      return res.status(404).json({ message: "No hero content found" });
    }
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hero content", error: error.message });
  }
});

// POST to create/update hero content
router.post("/", async (req, res) => {
  try {
    const newHero = new Hero(req.body);
    const savedHero = await newHero.save();
    res.status(201).json(savedHero);
  } catch (error) {
    res.status(500).json({ message: "Error saving hero content", error: error.message });
  }
});

module.exports = router;