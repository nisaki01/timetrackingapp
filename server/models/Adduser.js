const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: String,
    loginDates: {
      startTime: Date,
      endTime: Date
    },
    isActive: Boolean
  });

  module.exports = mongoose.model('User', UserSchema); 