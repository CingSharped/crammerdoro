import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../Quiz/quiz.css';


const Quiz = () => {
  
    return (
      <>
        <h1>Quizzes</h1>
        <form>
          <input type="text" />
          <button>Add</button>
          <div className='card-container'>
            <Link to='/quizsubject/math'>
              <div className='flashcard'>
                <h2>Maths</h2>
              </div>
            </Link>
            <Link to='/quizsubject/english'>
              <div className='flashcard'>
                <h2>English</h2>
              </div>
            </Link>
            <Link to='/quizsubject/history'>
              <div className='flashcard'>
                <h2>History</h2>
              </div>
            </Link>
            <div className='flashcard'>
              <h2>Add</h2>
            </div>
          </div>
        </form>
      </>
    )
  }
  
  export default Quiz
