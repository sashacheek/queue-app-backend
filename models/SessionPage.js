const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const sessionPageSchema = new mongoose.Schema({
  routeId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: 86400 }
})

module.exports = mongoose.model('SessionPage', sessionPageSchema);