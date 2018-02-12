const mongoose = require('mongoose');
const userModel = require('../models/UserModel');
const { log, db } = require('../server');

const User = mongoose.model('User', userModel);

module.exports.getDataUsingId = (id, model, callback) => {
};

module.exports.saveData = (data, model, callback) => {

};
