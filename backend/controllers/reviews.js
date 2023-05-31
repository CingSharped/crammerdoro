const Review = require('../models/Review')

const getReviewsById = async (req, res) => {
  const { _id } = req.params;

  try {
    const reviews = await Review.getReviewsById(_id);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createReview = async (req, res) => {
  const { subject, score, log, createdBy } = req.body;

  try {
    const newFlashcard = await Review.createReview(
      subject,
      score,
      log,
      createdBy
    );

    res.status(201).json(newFlashcard);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

module.exports = {
  createReview,
  getReviewsById
}