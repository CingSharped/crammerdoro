import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="_card" onClick={handleCardFlip} data-testid="flashcard">
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`} data-testid="inner-flashcard">
        <div className="card-front">
          <p> <strong>Question:</strong> {question}</p>
        </div>
        <div className="card-back">
          <p> <strong>Answer:</strong> {answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
