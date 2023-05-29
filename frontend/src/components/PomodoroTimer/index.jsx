import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = (countdownMinutes) => {
    if (countdownMinutes <= 0) return;

    const totalSeconds = countdownMinutes * 60;

    setTotalSeconds(totalSeconds);

    setTimer(setInterval(() => {
      setTotalSeconds(prevSeconds => prevSeconds - 1);
    }, 1000));

    setShowStartButton(false);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setMinutes(0);
    setSeconds(0);
    setTotalSeconds(0);
    setShowStartButton(true);
  };

  useEffect(() => {
    if (totalSeconds === 0) {
      clearInterval(timer);
    }

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    setMinutes(minutes);
    setSeconds(seconds);
  }, [totalSeconds, timer]);

  const handleButtonClick = () => {
    if (totalSeconds > 0) {
      resetTimer();
    } else {
      setShowPopup(true);
    }
  };

  const handlePopupSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.minutesInput;
    const parsedMinutes = parseInt(value, 10);
    setMinutes(parsedMinutes);
    setSeconds(0);
    setShowPopup(false);
    startTimer(parsedMinutes);
  };

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <form onSubmit={handlePopupSubmit}>
            <label>
              Minutes:
              <input type="number" name="minutesInput" min="1" max="60" required />
            </label>
            <button type="submit">Start</button>
          </form>
        </div>
      )}

      {!showPopup && (
        <div>
          {totalSeconds > 0 ? (
            <div>
              <div>Timer: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>
              <button onClick={handleButtonClick}>Reset</button>
            </div>
          ) : (
            <div>
              {showStartButton ? (
                <button onClick={handleButtonClick}>Start Timer</button>
              ) : (
                <button onClick={handleButtonClick}>Reset</button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
