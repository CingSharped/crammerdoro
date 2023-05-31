const express = require('express')

const { createFlashcard } = require('../controllers/flashcards')

const router = express.Router()

// Create flashcard route
router.post('/', createFlashcard)

module.exports = router