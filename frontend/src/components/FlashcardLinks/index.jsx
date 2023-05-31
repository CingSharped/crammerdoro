import React from 'react';
import { Link } from 'react-router-dom';

const FlashcardLinks = ({ subjects }) => {
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
        <div className='flashcard'>
          <h2>Add</h2>
        </div>
      </div>
    </>
  );
};

export default FlashcardLinks;
