import React from 'react'

import { Flashcard } from '../../components'
import { useParams } from 'react-router-dom';

import { useFlashcard } from '../../context';
import './subjectFlashcard.css'

const SubjectFlashcard = () => {
  const {flashcards, subject} = useFlashcard()

  console.log(flashcards);
  const flashcardDummy = {
    English: {
      question: "Who is the author of the famous novel 'Pride and Prejudice'?",
      answer: "Jane Austen"
    },
    Maths: {
      question: "What is the value of π (pi) to two decimal places?",
      answer: "3.14"
    },
    History: {
      question: "Which year did World War II end?",
      answer: "1945"
    }
  }

  const { question, answer } = flashcardDummy[subject];

  return (
    <>
      <div className='page-container'>
        <Flashcard question={question} answer={answer} />
      </div>
    </>
  )
}

export default SubjectFlashcard
