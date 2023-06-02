import React, { useState } from 'react';
import { QuizSubjectCard } from '../../components';
import './quiz.css'

const QuizPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const subjects = ['Science', 'Maths', 'History', 'Art'];

  const filteredSubjects = subjects.filter(subject =>
    subject.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className='flashcard-container d-flex flex-column align-items-center'>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search subjects"
          />
        <QuizSubjectCard subjects={filteredSubjects} />
      </div>
    </>
  );
};

export default QuizPage;
