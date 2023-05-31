import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useAuth, useFlashcard } from '../../context';
import { FlashcardLinks } from '../../components';

const Flashcards = () => {
  const { user } = useAuth();
  const { flashcards, setFlashcards, subjects, setSubjects } = useFlashcard()

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get(`https://crammerdoro-backend.onrender.com/flashcards/${user._id}`);
        setFlashcards(response.data);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
      }
    };

    fetchFlashcards();
  }, [user]);

  useEffect(() => {
    const uniqueSubjects = Array.from(new Set(flashcards.map(flashcard => flashcard.subject)));
    setSubjects(uniqueSubjects);
    // console.log(flashcards);
  }, [flashcards]);

  return (
    <>
      {`you have these: ${subjects}`}
      <form>
        <input type="text" />
        <button>Add</button>
        <div className='card-container'>
          <Link to='/subjectflashcard/maths'>
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
      <FlashcardLinks subjects={subjects} />
    </>
  );
};

export default Flashcards;
