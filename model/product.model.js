const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true, max: 100 },
  price: { type: String, required: true },
  currency: { type: String, required: true },
  image: { type: String, required: false },
  description: { type: String, required: false }
});

module.exports = mongoose.model("Product", productSchema);
