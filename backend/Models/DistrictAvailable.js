const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const districtAvailableSchema = new Schema({
  district: { type: String, required: true, unique: true },
});
districtAvailableSchema.plugin(uniqueValidator);
module.exports = mongoose.model("District", districtAvailableSchema);
