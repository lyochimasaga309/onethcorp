const express = require("express");
const router = express.Router();
const houseRoutes = require("../routes/houseRoutes");

// GET all houses
router.get("/", async (req, res) => {
  try {
    const houses = await house.find();
    res.json(houses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// (Optional) POST new house
router.post("/", async (req, res) => {
  try {
    const newHouse = new House(req.body);
    const savedHouse = await newHouse.save();
    res.status(201).json(savedHouse);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
