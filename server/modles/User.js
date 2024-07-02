const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  bio: String,
  // Additional fields
});

module.exports = mongoose.model('User', userSchema);
