const mongoose = require('mongoose');

const companySchema = mongoose.Schema({

  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(), 
  }

})

module.exports = mongoose.model('company', companySchema);