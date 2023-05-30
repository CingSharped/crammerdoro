import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`__card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h3>{question}</h3>
        </div>
        <div className="card-back">
          <h3>{answer}</h3>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;