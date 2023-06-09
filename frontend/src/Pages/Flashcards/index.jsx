import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useAuth, useFlashcard } from '../../context';
import { FlashcardLinks } from '../../components';

import './flashcards.css';

const Flashcards = () => {
  const { user } = useAuth();
  const { flashcards, setFlashcards, subjects, setSubjects } = useFlashcard()
  const [searchValue, setSearchValue] = useState('');

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
  }, [flashcards]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredSubjects = subjects.filter(subject =>
    subject.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className='flashcard-container'>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search subjects"
        />
        <FlashcardLinks subjects={filteredSubjects} />
      </div>
    </>
  );
};

export default Flashcards;
