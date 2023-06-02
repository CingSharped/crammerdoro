import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { QuizSubjectCard } from '../../components';
import './quiz.css'

import { useDifficulty } from '../../context';

const QuizPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const { difficulty, setDifficulty } = useDifficulty();

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

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

        <div className="difficulty-dropdown mb-3">
          <Form.Label
            className="mx-2">
            Select Difficulty:
          </Form.Label>

          <Form.Control
            as="select"
            value={difficulty}
            onChange={handleDifficultyChange}
          >
            <option value="">Any Difficulty</option>
            {filteredSubjects !== "Maths" && <option value="easy">Easy</option>}
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Control>
        </div>

        <QuizSubjectCard subjects={filteredSubjects} />
      </div>
    </>
  );
};

export default QuizPage;
