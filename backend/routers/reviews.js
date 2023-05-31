const express = require("express");

const { createReview, getReviewsById } = require('../controllers/reviews')

const router = express.Router();

// Create flashcard route
router.post("/", createReview);

// Get flashcards route
router.get("/:_id", getReviewsById);

module.exports = router;
