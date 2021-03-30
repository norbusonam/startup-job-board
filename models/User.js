const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

})

module.exports = mongoose.model('user', userSchema);