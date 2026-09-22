const express = require("express");
const Property = require("../models/Property");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const property = new Property(req.body);

    const savedProperty = await property.save();

    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({
      message: "Error adding property",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();

    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching properties",
      error: error.message,
    });
  }
});

module.exports = router;