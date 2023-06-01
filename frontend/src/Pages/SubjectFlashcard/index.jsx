import React from 'react'

import { Flashcard } from '../../components'
import { useParams } from 'react-router-dom';

import { useFlashcard } from '../../context';
import './subjectFlashcard.css'

const SubjectFlashcard = () => {
  const {flashcards } = useFlashcard()
  const subject = useParams()

  
  const filteredFlashcards = flashcards.filter(
    (flashcard) => flashcard.subject === subject.subject
    );
    
  return (
    <div className='page-container'>
      {filteredFlashcards.map((flashcard) => (
        <Flashcard key={flashcard.question} question={flashcard.question} answer={flashcard.answer}/>
      ))}
    </div>
  )
}

export default SubjectFlashcard
