const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// 1. GET ALL TESTIMONIALS
// URL: http://localhost:5000/api/testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ 
      message: "Error fetching testimonials", 
      error: error.message 
    });
  }
});

// 2. CREATE A NEW TESTIMONIAL
// URL: http://localhost:5000/api/testimonials
router.post("/", async (req, res) => {
  try {
    const { name, role, review, rating } = req.body;

    // Validate required fields
    if (!name || !role || !review) {
      return res.status(400).json({ 
        message: "Please provide name, role, and review fields." 
      });
    }

    // Create a new document using the Mongoose model
    const newTestimonial = new Testimonial({
      name,
      role,
      review,
      rating: rating ? Number(rating) : 5
    });

    // Save to MongoDB
    const savedTestimonial = await newTestimonial.save();
    
    // Return the created document with 201 status
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(500).json({ 
      message: "Error creating testimonial", 
      error: error.message 
    });
  }
});

module.exports = router;