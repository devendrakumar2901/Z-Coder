const mongoose = require('mongoose');

const solutionSchema = new mongoose.Schema({
  code: { type: String, required: true },
  comments: [String],
  // Additional fields
});

module.exports = mongoose.model('Solution', solutionSchema);
