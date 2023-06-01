import React from 'react';
import {QuizSubjectCard} from '../../components';


const QuizPage = () => {
  return (
    <>
      <h1>Quizzes</h1>
      <form>
        <input type="text" />
        <button>Add</button>
        <div className='card-container'>
          <QuizSubjectCard subject='Maths' />
          <QuizSubjectCard subject='English' />
          <QuizSubjectCard subject='History' />
          <div className='quizcard'>
            <h2>Add</h2>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuizPage;

