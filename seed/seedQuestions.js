require('dotenv').config();
const connectDB = require('../config/db');
const Question = require('../models/Question');

 
const questions = [
{ text: 'What is 2+2?', options: ['3','4','2','5'], answer: '4' },
{ text: 'Which language runs in the browser?', options: ['Python','C++','JavaScript','Java'], answer: 'JavaScript' },
{ text: "What is the capital of France?", options: ["Paris", "London", "Rome", "Berlin"], answer: "Paris"},
{ text: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], answer: "JavaScript"},
{ text: "Who developed React.js?", options: ["Facebook", "Google", "Microsoft", "Twitter"],answer: "Facebook"}
];
(async () => {
await connectDB(process.env.MONGO_URI);
await Question.deleteMany({});
await Question.insertMany(questions);
console.log('Seeded');
process.exit(0);
})();