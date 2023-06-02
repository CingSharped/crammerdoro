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
          <h2>Question:</h2> <br />
          <p>{question}</p>
        </div>
        <div className="card-back">
          <h2>Answer:</h2> <br />
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
