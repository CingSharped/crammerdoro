import React from 'react';
import { Link } from 'react-router-dom';


const QuizSubjectCard = ({ subject }) => {
  return (
    <Link to={`/quiz/${subject}`}>
      <div className='quizcard'>
        <h2>{subject}</h2>
      </div>
    </Link>
  );
};

export default QuizSubjectCard;
