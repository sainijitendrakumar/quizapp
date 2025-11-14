const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
text: { type: String, required: true },
options: [{ type: String }],
answer: { type: String, required: true },
marks: { type: Number, default: 1 }
}, { timestamps: true });
module.exports = mongoose.model('Question', QuestionSchema);