const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
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
  }
});

flashcardSchema.statics.createFlashcard = async function (
  subject,
  question,
  answer,
  createdBy
) {
  if (!subject || !question || !answer || !createdBy) {
    throw Error("All fields required");
  }
  const newFlashcard = await this.create({subject, question, answer, createdBy});

  return newFlashcard
};

flashcardSchema.statics.getFlashcardsById = async function(_id) {
  if (!_id) {
    throw Error('User _id required')
  }

  const flashcards = await this.find().where('createdBy').equals(_id)
  console.log(flashcards)
  return flashcards
}

module.exports = mongoose.model("FlashCard", flashcardSchema);
