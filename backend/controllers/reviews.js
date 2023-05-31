const Review = require('../models/Review')

const getReviewsByUser = async (req, res) => {
  const { _id } = req.params
  try {
    const reviews = Review.find().where('createdBy').equals(_id)
    res.status(200).json(reviews)
  } catch (error) {
    
  }
}