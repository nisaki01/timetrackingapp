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
      unique: true
    },
    password: String,

    startTime:{
      type: Date
    },
    endTime: {
      type: Date
    },
    isActive: Boolean
  });

  module.exports = mongoose.model('User', UserSchema); 