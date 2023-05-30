import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="_card" onClick={handleCardFlip}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h3>Question:</h3>
          <p>{question}</p>
        </div>
        <div className="card-back">
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
