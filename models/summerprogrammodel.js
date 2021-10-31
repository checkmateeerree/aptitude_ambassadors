var mongoose = require('mongoose');

const SummerProgramSchema = mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String, required: true},
  type: {type: String, required: true},
  link: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.models.SummerProgram || mongoose.model('SummerProgram', SummerProgramSchema);
