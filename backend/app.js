const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const userRoutes = require('./routers/users')
const flashcardRoutes = require('./routers/flashcards')
const reviewRoutes = require('./routers/reviews')

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

// Review Routes
app.use('/reviews', reviewRoutes)


module.exports = app