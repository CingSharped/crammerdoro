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
  },
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

module.exports = mongoose.model("FlashCard", flashcardSchema);
