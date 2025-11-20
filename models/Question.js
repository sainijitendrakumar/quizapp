// const mongoose = require('mongoose');
// const QuestionSchema = new mongoose.Schema({
// text: { type: String, required: true },
// options: [{ type: String }],
// answer: { type: String, required: true },
// marks: { type: Number, default: 1 }
// }, { timestamps: true });
// module.exports = mongoose.model('Question', QuestionSchema);

const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true, 
  },

  topic: {
    type: String,
    required: false, // optional
  },

  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "easy"
  },

  text: {
    type: String,
    required: true
  },

  options: [
    { type: String }
  ],

  answer: {
    type: String,
    required: true
  },

  marks: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);
