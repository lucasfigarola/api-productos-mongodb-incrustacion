const mongoose = require("mongoose");
const categorySchema = require("./Category");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, min: 0, default: 0 },
  category: { type: categorySchema, default: undefined },
});

module.exports = mongoose.model("Product", productSchema);
