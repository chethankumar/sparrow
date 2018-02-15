const response = require('../utils/Response');
const mongoose = require('mongoose');
const { log, db } = require('../server');
const { ProductSchema } = require('../models/ProductModel');


const Product = mongoose.model('Product', ProductSchema, 'productdb');


module.exports.getProductByName = (req, res) => {
// name comes in path - /products/:productName
// this is for single product page
};


module.exports.getProductsByCategory = (req, res) => {
// name comes in path - /category/:categoryName
// number of items will come in query param
};


module.exports.getAllCategories = (req, res) => {
  //  /category/ - returns the list of categories
};

