const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  subtitle: { type: String, default: "FIND YOUR PERFECT HOME" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  buttonText: { type: String, default: "Browse Properties →" },
  image: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model("Hero", heroSchema);