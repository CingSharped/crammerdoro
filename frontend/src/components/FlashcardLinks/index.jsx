import React from 'react';
import { Link } from 'react-router-dom';

import AddCardModal from '../AddCardModal';
import './FlashcardLinks.css'

const FlashcardLinks = ({ subjects }) => {
  const subjectImages = {
    english: 'flashcardImg/english.jpeg',
    maths: 'flashcardImg/maths.jpeg',
    history: 'flashcardImg/history123.jpeg',
    science:'flashcardImg/science.jpeg',
    art:'flashcardImg/art.jpeg',
    music:'flashcardImg/music.jpeg',
    geography:'flashcardImg/geography.jpeg',
    other:'flashcardImg/other.jpeg'
  }

  // console.log(subjectImages['Maths']);

  return (
    <>
      <div className='card-container'>
        {subjects.map(subject => (
          <Link key={subject} to={`/subjectflashcard/${subject}`}>
            <div
              className='flashcard'
              style={{ backgroundImage: `url(${subjectImages[subject.toLowerCase()]})` }}
            >
              <h2 className='card-title'>{subject}</h2>
            </div>
          </Link>
        ))}
        <AddCardModal />
      </div>
    </>
  );
};

export default FlashcardLinks;
