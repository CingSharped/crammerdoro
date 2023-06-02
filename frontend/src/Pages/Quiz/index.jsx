import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { QuizSubjectCard } from '../../components';
import './quiz.css'

const QuizPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const subjects = ['Science', 'Maths', 'History'];

  const filteredSubjects = subjects.filter(subject =>
    subject.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className='flashcard-container d-flex flex-column align-items-center'>
        <Form>
          <Form.Control
            type="text"
            style={{ width: '15rem', justifyItems: 'center' }}
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search subjects"
          />
        </Form>
        <QuizSubjectCard subjects={filteredSubjects} />
      </div>
    </>
  );
};

export default QuizPage;
