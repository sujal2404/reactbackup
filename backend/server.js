const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const propertyRoutes = require("./routes/propertyRoutes");
 app.use("/api/properties", propertyRoutes);

app.get("/", (req, res) => {
  res.send("Havyn Backend is Running!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error.message);
  });

 