import React from 'react'

import { Flashcard } from '../../components'
import { useParams } from 'react-router-dom';
import './subjectFlashcard.css'

const SubjectFlashcard = () => {
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

  const { subject } = useParams();
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
