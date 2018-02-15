const mongoose = require('mongoose');

module.exports.productModel = {
  productId: String,
  name: String,
  colors: [String],
  finish: [String],
  images: [String], // array of image urls
  price: Number,
  discount: Number,
  dimentionsImages: [String], // array if image urls
  deliveryCost: Number,
  details: {
    features: [String],
    warranty: [String],
    returns: [String],
    care: [String],
  },
  category: String,
};

module.exports.ProductSchema = mongoose.Schema(this.productModel);

