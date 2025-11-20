require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();


connectDB(process.env.MONGO_URI);
app.use(cors({ origin: "https://quizapp-frontend-smoky.vercel.app" }));
app.use(express.json());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/questions/:subject', require('./routes/questions'));
app.use('/api/results', require('./routes/results'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));