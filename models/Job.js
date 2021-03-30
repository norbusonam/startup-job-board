const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({

  title: {
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

module.exports = mongoose.model('job', jobSchema);