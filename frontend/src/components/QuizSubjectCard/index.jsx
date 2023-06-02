import React from 'react';
import { Link } from 'react-router-dom';

import './QuizSubjectCard.css'

const QuizSubjectCard = ({ subjects }) => {

  const subjectImages = {
    english: 'flashcardImg/english.jpeg',
    maths: 'flashcardImg/maths.jpeg',
    history: 'flashcardImg/history123.jpeg',
    science: 'flashcardImg/science.jpeg',
    art: 'flashcardImg/art.jpeg',
    music: 'flashcardImg/music.jpeg',
    geography: 'flashcardImg/geography.jpeg',
    other: 'flashcardImg/other.jpeg'
  }

  return (
    <>
      <div className='card-container'>
        {subjects.map((subject, idx) => (
          <Link key={idx} to={`/quiz/${subject}`}>
            <div
              className='quizcard'
              style={{ backgroundImage: `url(${subjectImages[subject.toLowerCase()]})` }}
            >
              <h2 className='card-title'>{subject}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default QuizSubjectCard;
