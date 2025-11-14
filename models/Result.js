const mongoose = require('mongoose');
const ResultSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
score: Number,
total: Number,
answers: [{ question: String, selected: String, correct: String }],
timeTaken: Number
}, { timestamps: true });
module.exports = mongoose.model('Result', ResultSchema);