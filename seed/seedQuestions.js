// require('dotenv').config();
// const connectDB = require('../config/db');
// const Question = require('../models/Question');

 
// const questions = [
//   { text: "What comes next in the series: 2, 4, 8, 16, ?", options: ["18", "24", "32", "30"], answer: "32" },
//   { text: "If CAT = 3120, then DOG = ?", options: ["4157", "4177", "4156", "4167"], answer: "4157" },
//   { text: "Which number is odd one out? 3, 5, 7, 9, 11", options: ["5", "7", "9", "11"], answer: "9" },
//   { text: "What is the next number? 1, 1, 2, 3, 5, ?", options: ["5", "8", "6", "7"], answer: "8" },
//   { text: "Which shape has the most sides?", options: ["Hexagon", "Pentagon", "Triangle", "Square"], answer: "Hexagon" },
//   { text: "Which is the odd one out? Apple, Banana, Carrot, Mango", options: ["Apple", "Banana", "Carrot", "Mango"], answer: "Carrot" },
//   { text: "If A=1, B=2, Z=26, then A+C+E = ?", options: ["6", "9", "8", "5"], answer: "9" },
//   { text: "Find the missing letter: A, D, G, J, M, ?", options: ["N", "P", "Q", "R"], answer: "P" },
//   { text: "Mirror image of 2:15 clock shows?", options: ["9:45", "10:45", "7:45", "8:45"], answer: "9:45" },
//   { text: "If TODAY → YADOT, then WORLD → ?", options: ["DLROW", "DLWOR", "DWROL", "DLOWR"], answer: "DLROW" },
//   { text: "Which number replaces '?': 6, 11, 21, 41, ?", options: ["45", "71", "81", "61"], answer: "81" },
//   { text: "Which is logically related? Bird : Nest :: Dog : ?", options: ["Kennel", "Cage", "Burrow", "Stable"], answer: "Kennel" },
//   { text: "Which can’t be used for seeing?", options: ["Periscope", "Microscope", "Binoculars", "Telescope"], answer: "Microscope" },
//   { text: "If 5 workers finish work in 10 days, 10 workers finish in?", options: ["2 days", "10 days", "5 days", "1 day"], answer: "5 days" },
//   { text: "Which one is NOT a direction?", options: ["East", "North-West", "South-East", "Center"], answer: "Center" },
//   { text: "Which of these is a perfect square?", options: ["18", "25", "27", "30"], answer: "25" },
//   { text: "Find the odd pair: Pen-Paper, Lock-Key, Bird-Sky, Knife-Cut", options: ["Pen-Paper", "Lock-Key", "Bird-Sky", "Knife-Cut"], answer: "Bird-Sky" },
//   { text: "Which number completes: 9, 18, 27, ?", options: ["28", "35", "36", "45"], answer: "36" },
//   { text: "If 1 = 3, 2 = 6, 3 = 9, then 5 = ?", options: ["10", "12", "15", "18"], answer: "15" },
//   { text: "Which is the odd one? Circle, Square, Triangle, Cube", options: ["Circle", "Square", "Triangle", "Cube"], answer: "Cube" }
// ];

// (async () => {
// await connectDB(process.env.MONGO_URI);
// await Question.deleteMany({});
// await Question.insertMany(questions);
// console.log('Seeded');
// process.exit(0);
// })();

require('dotenv').config();
const connectDB = require('../config/db');
const Question = require('../models/Question');

const questions = [
  { subject: "reasoning", text: "What comes next in the series: 2, 4, 8, 16, ?", options: ["18", "24", "32", "30"], answer: "32" },
  { subject: "reasoning", text: "If CAT = 3120, then DOG = ?", options: ["4157", "4177", "4156", "4167"], answer: "4157" },
  { subject: "reasoning", text: "Which number is odd one out? 3, 5, 7, 9, 11", options: ["5", "7", "9", "11"], answer: "9" },
  { subject: "reasoning", text: "What is the next number? 1, 1, 2, 3, 5, ?", options: ["5", "8", "6", "7"], answer: "8" },
  { subject: "reasoning", text: "Which shape has the most sides?", options: ["Hexagon", "Pentagon", "Triangle", "Square"], answer: "Hexagon" },
  { subject: "reasoning", text: "Which is the odd one out? Apple, Banana, Carrot, Mango", options: ["Apple", "Banana", "Carrot", "Mango"], answer: "Carrot" },
  { subject: "reasoning", text: "If A=1, B=2, Z=26, then A+C+E = ?", options: ["6", "9", "8", "5"], answer: "9" },
  { subject: "reasoning", text: "Find the missing letter: A, D, G, J, M, ?", options: ["N", "P", "Q", "R"], answer: "P" },
  { subject: "reasoning", text: "Mirror image of 2:15 clock shows?", options: ["9:45", "10:45", "7:45", "8:45"], answer: "9:45" },
  { subject: "reasoning", text: "If TODAY → YADOT, then WORLD → ?", options: ["DLROW", "DLWOR", "DWROL", "DLOWR"], answer: "DLROW" },
  { subject: "reasoning", text: "Which number replaces '?': 6, 11, 21, 41, ?", options: ["45", "71", "81", "61"], answer: "81" },
  { subject: "reasoning", text: "Which is logically related? Bird : Nest :: Dog : ?", options: ["Kennel", "Cage", "Burrow", "Stable"], answer: "Kennel" },
  { subject: "reasoning", text: "Which can’t be used for seeing?", options: ["Periscope", "Microscope", "Binoculars", "Telescope"], answer: "Microscope" },
  { subject: "reasoning", text: "If 5 workers finish work in 10 days, 10 workers finish in?", options: ["2 days", "10 days", "5 days", "1 day"], answer: "5 days" },
  { subject: "reasoning", text: "Which one is NOT a direction?", options: ["East", "North-West", "South-East", "Center"], answer: "Center" },
  { subject: "reasoning", text: "Which of these is a perfect square?", options: ["18", "25", "27", "30"], answer: "25" },
  { subject: "reasoning", text: "Find the odd pair: Pen-Paper, Lock-Key, Bird-Sky, Knife-Cut", options: ["Pen-Paper", "Lock-Key", "Bird-Sky", "Knife-Cut"], answer: "Bird-Sky" },
  { subject: "reasoning", text: "Which number completes: 9, 18, 27, ?", options: ["28", "35", "36", "45"], answer: "36" },
  { subject: "reasoning", text: "If 1 = 3, 2 = 6, 3 = 9, then 5 = ?", options: ["10", "12", "15", "18"], answer: "15" },
  { subject: "reasoning", text: "Which is the odd one? Circle, Square, Triangle, Cube", options: ["Circle", "Square", "Triangle", "Cube"], answer: "Cube" }
];

(async () => {
  await connectDB(process.env.MONGO_URI);
  await Question.deleteMany({});
  await Question.insertMany(questions);
  console.log('Subject-wise Questions Seeded Successfully!');
  process.exit(0);
})();
