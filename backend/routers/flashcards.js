const express = require('express')

const { createFlashcard, getFlashcardsById } = require('../controllers/flashcards')

const router = express.Router()

// Create flashcard route
router.post('/', createFlashcard)

// Get flashcards route
router.get('/:_id', getFlashcardsById)

module.exports = router