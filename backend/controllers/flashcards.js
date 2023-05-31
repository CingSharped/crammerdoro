const Flashcard = require("../models/Flashcard");

const getFlashcardsById = async (req, res) => {
  const { _id } = req.params;
  
  try {
    const flashcards = await Flashcard.getFlashcardsById(_id)
    res.status(200).json(flashcards)
  } catch (error) {
    res.status(400).json(error.message);
  }
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
  getFlashcardsById,
};
