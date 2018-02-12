const mongoose = require('mongoose');

module.exports.userModel = {
  email: String,
  password: String,
};

module.exports.UserSchema = mongoose.Schema(this.userModel);

