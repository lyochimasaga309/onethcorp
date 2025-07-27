const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: String,
  image: String,
});

module.exports = mongoose.model("House", houseSchema);
