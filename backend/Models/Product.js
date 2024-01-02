const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  itemsInBox: { type: String, required: true },
  dateAdded: { type: String, required: true },
  dateOfNewStock: { type: String, required: true },
  quantity: { type: Number, required: true },
  discountInPercentage: { type: Number },
  typeOfProduct: { type: String, required: true },
  plantType: { type: String, required: true },
});
module.exports = mongoose.model("Product", productSchema);
