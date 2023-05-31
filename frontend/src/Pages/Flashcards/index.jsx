import React from 'react'
import { Link } from 'react-router-dom';

import { useAuth } from '../../context';


const Flashcards = () => {
  return (
    <>
      <h1>Flashcards</h1>
      <form>
        <input type="text" />
        <button>Add</button>
        <div className='card-container'>
          <Link to='/subjectflashcard/math'>
            <div className='flashcard'>
              <h2>Maths</h2>
            </div>
          </Link>
          <Link to='/subjectflashcard/english'>
            <div className='flashcard'>
              <h2>English</h2>
            </div>
          </Link>
          <Link to='/subjectflashcard/history'>
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

export default Flashcards