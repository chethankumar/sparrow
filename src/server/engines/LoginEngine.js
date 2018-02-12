const response = require('../utils/Response');
const mongoose = require('mongoose');
const { configureJSON } = require('../jsonserver/JSONServer');
const { log, db } = require('../server');
const { UserSchema } = require('../models/UserModel');

// emailid is the application Id
// password is sent in headers

const User = mongoose.model('User', UserSchema, 'userdb');

module.exports.signup = (req, res) => {
  const user = new User({
    email: req.params.applicationId,
    password: req.headers.password,
  });

  User.find({ email: req.params.applicationId }, (err, userArray) => {
    if (err) {
      response.serverError(req, res, err);
    }
    if (userArray.length === 0) {
      user.save((userErr, userdata) => {
        if (userErr) {
          return response.serverError(req, res, userErr);
        }
        return response.created(req, res, userdata);
      });
    } else {
      return response.conflict(req, res, { message: 'User already exists' });
    }
  });
};

module.exports.login = (req, res) => {
  User.find({ email: req.params.applicationId, password: req.headers.password }, (err, userArray) => {
    if (err) {
      response.serverError(req, res, err);
    }
    if (userArray.length === 0) {
      return response.notFound(req, res, { message: 'User doesnt exist' });
    }
    configureJSON(userArray[0].email);
    return response.ok(req, res, userArray[0]);
  });
};

