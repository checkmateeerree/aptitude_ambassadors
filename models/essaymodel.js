var mongoose = require('mongoose');

const EssaySchema = mongoose.Schema({
  prompt: {type: String, required: true},
  text: {type: String, required: true},
  type: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.models.Essay || mongoose.model('Essay', EssaySchema);
