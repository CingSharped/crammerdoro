import React from 'react';
import { Link } from 'react-router-dom';

import AddCardModal from '../AddCardModal';

const FlashcardLinks = ({ subjects, setFlashcards }) => {
  return (
    <>
      <div className='card-container'>
        {subjects.map(subject => (
          <Link key={subject} to={`/subjectflashcard/${subject}`}>
            <div className='flashcard'>
              <h2>{subject}</h2>
            </div>
          </Link>
        ))}
          <AddCardModal setFlashcards={setFlashcards} />
      </div>
    </>
  );
};

export default FlashcardLinks;
