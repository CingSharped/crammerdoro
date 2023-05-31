import React from 'react'

import { Flashcard } from '../../components'
import { useParams } from 'react-router-dom';

import { useFlashcard } from '../../context';
import './subjectFlashcard.css'

const SubjectFlashcard = () => {
<<<<<<< HEAD
  const {flashcards } = useFlashcard()
  const subject = useParams()
=======
  const flashcardDummy = {
    english: {
      question: "Who is the author of the famous novel 'Pride and Prejudice'?",
      answer: "Jane Austen"
    },
    maths: {
      question: "What is the value of π (pi) to two decimal places?",
      answer: "3.14"
    },
    history: {
      question: "Which year did World War II end?",
      answer: "1945"
    }
  }
>>>>>>> 5995d34079b6114fbd657c24619a1a8e9d796bfa

  
  const filteredFlashcards = flashcards.filter(
    (flashcard) => flashcard.subject === subject.subject
    );
    
    console.log(filteredFlashcards);
  // const { question, answer } = flashcards[subject];

  return (
<<<<<<< HEAD
    <div className='page-container'>
      {filteredFlashcards.map((flashcard) => (
        <Flashcard key={flashcard.question} question={flashcard.question} answer={flashcard.answer}/>
      ))}
    </div>
=======
    <>
      <div className='page-container'>
        <Flashcard question={question} answer={answer} />
      </div>
    </>
>>>>>>> 5995d34079b6114fbd657c24619a1a8e9d796bfa
  )
}

export default SubjectFlashcard
