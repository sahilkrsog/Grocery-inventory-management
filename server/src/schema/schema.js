const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  category: {
    type: String,
    required: true,
    trim: true,
  },

  description: String,

  quantity: {
    type: Number,
    default: 0,
  },

  price: {
    type: Number,
    required: true,
  },

  purchaseDate: Date,
  expirationDate: Date,

  supplier: {
    name: String,
    contactInfo: String,
  },

  location: String,

  createdAt: {
    type: Date,
    default: new Date(),
  },

  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const groceryModel = mongoose.model("groceryItems", grocerySchema);

module.exports = groceryModel;
