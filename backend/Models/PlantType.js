const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantTypeSchema = new Schema({
  type: { type: String, required: true },
  image: { type: String },
});
module.exports = mongoose.model("PlantType", plantTypeSchema);
