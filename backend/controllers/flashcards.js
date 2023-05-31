const Flashcard = require("../models/Flashcard");

const getFlashcardsByUser = async (req, res) => {
  const { _id } = req.params;
};

const createFlashcard = async (req, res) => {
  const { subject, question, answer, createdBy } = req.body;

  try {
    const newFlashcard = await Flashcard.createFlashcard(subject, question, answer, createdBy)

    res.status(201).json(newFlashcard)
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error.message)
  }
};

module.exports = {
  createFlashcard,
  getFlashcardsByUser,
};
