const mongoose = require("mongoose");
const { create } = require("./Flashcard");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  log: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: () => Date.now(),
  },
});

reviewSchema.statics.createReview = async function(subject, score, log, createdBy) {
  if (!subject || !score || !log || !createdBy) {
    throw Error('All field required')
  }

  const newReview = await this.create({subject, score, log, createdBy})

  return newReview
}

reviewSchema.statics.getReviewsById = async function(_id) {
    if (!_id) {
      throw Error("User _id required");
    }

    const reviews = await this.find().where("createdBy").equals(_id);
    return reviews;
}

module.exports = mongoose.model('Review', reviewSchema)