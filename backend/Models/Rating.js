const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  plantId: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
  date: { type: String, required: true },
  images: [{ type: String }],
});
module.exports = mongoose.model("Rating", ratingSchema);
