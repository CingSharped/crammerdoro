const mongoose = require("mongoose");

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

module.exports = mongoose.model('Review', reviewSchema)