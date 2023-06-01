import React from 'react'
import { Carousel } from 'react-bootstrap';

import { Flashcard } from '../../components'
import { useParams } from 'react-router-dom';

import { useFlashcard } from '../../context';
import './subjectFlashcard.css'

const SubjectFlashcard = () => {
  const { flashcards } = useFlashcard();
  const subject = useParams();

  const filteredFlashcards = flashcards.filter(
    (flashcard) => flashcard.subject === subject.subject
  );

  return (
    <div className='page-container'>
      <Carousel variant="dark" interval={null}>
        {filteredFlashcards.map((flashcard) => (
          <Carousel.Item key={flashcard.question}>
            <Flashcard question={flashcard.question} answer={flashcard.answer} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};


export default SubjectFlashcard
