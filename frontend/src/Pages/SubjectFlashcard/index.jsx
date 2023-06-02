import React from 'react'
import { Carousel } from 'react-bootstrap';

import { Flashcard } from '../../components'
import { useParams , useNavigate} from 'react-router-dom';

import { useFlashcard } from '../../context';
import './subjectFlashcard.css'

const SubjectFlashcard = () => {
  const { flashcards } = useFlashcard();
  const subject = useParams();

  const navigate = useNavigate();

  const filteredFlashcards = flashcards.filter(
    (flashcard) => flashcard.subject === subject.subject
  );

  return (
    <>
    <div className='page-container'>
      <button className = "__btn white-to-green back-button"onClick={() => navigate("/flashcards")}>Back to Flashcards</button>
      <Carousel variant="dark" interval={null} slide={false}>
        {filteredFlashcards.map((flashcard) => (
          <Carousel.Item key={flashcard.question}>
            <Flashcard question={flashcard.question} answer={flashcard.answer} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </>
  );
};


export default SubjectFlashcard
