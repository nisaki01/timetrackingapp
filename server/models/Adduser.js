const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    first_name: {
      type: String,
      unique: true
    },
    last_name: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: String,
    startTime: Date,
    endTime: {
      type: Date
    }
  });

  module.exports = mongoose.model('User', UserSchema); 