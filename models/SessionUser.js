const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const sessionUserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["owner", "moderator", "member"], default: "member"},
  pageId: { type: mongoose.Schema.Types.ObjectId, ref: "SessionPage", required: true },
});

sessionUserSchema.index({ username: 1, pageId: 1 }, { unique: true });

sessionUserSchema.methods.comparePassword = function (input) {
  return bcrypt.compare(input, this.password);
};

module.exports = mongoose.model("SessionUser", sessionUserSchema);