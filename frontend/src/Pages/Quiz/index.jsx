import React, { useState } from 'react';
import { QuizSubjectCard } from '../../components';
import './quiz.css'

const QuizPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <>
      <div className='flashcard-container'>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search subjects"
        />
        <div className='card-container'>
          <QuizSubjectCard subject='Science' />
          <QuizSubjectCard subject='Maths' />
          <QuizSubjectCard subject='History' />
        </div>
      </div>
    </>
  );
};

export default QuizPage;

