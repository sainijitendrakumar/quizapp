require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();


const allowedOrigins = [
 "https://quizapp-frontend-smoky.vercel.app",
 "http://localhost:5173",
];

connectDB(process.env.MONGO_URI);
app.use(cors({ origin: function (origin, callback) {
      // Postman ya server requests ke liye origin null ho sakta hai
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, }));
app.use(express.json());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/questions', require('./routes/questions'));
app.use('/api/results', require('./routes/results'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));