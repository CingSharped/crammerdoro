const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const flashcardRoutes = require('./routers/flashcards')
const userRoutes = require('./routers/users')

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to my Express API template')
})

// User Routes
app.use('/users', userRoutes)

// Flashcard Routes
app.use('/flashcards', flashcardRoutes)


module.exports = app