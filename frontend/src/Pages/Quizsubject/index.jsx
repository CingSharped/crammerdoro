import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ReviewForm } from "../../components";
import "./quizsubject.css";

import { useDifficulty } from '../../context';

const QuizSubject = () => {
  const [answerOptions, setAnswerOptions] = useState([]);
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const { difficulty, setDifficulty } = useDifficulty();

  const { subject } = useParams();

  const subjectNumber = { Maths: 19, Science: 17, History: 23, Art: 25 };

  function filterInput(str) {
    str = str.replace(/&quot;/g, "'");
    str = str.replace(/&Eacute;/g, "E");
    str = str.replace(/&#039;/g, "'");
    str = str.replace(/&deg;C/g, "&#8451;");
    str = str.replace(/&amp;/g, "&");
    str = str.replace(/&rsquo;/g, "'");
    str = str.replace(/&ouml;/g, "ö");
    str = str.replace(/&deg;/g, "º")
    str = str.replace(/&sup2;/g, "^2")
    return str;
  }

  const fetchQuizData = async () => {
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${subjectNumber[subject]
        }&difficulty=${difficulty === 'easy' && subject === 'Maths' ? 'medium' : difficulty}&type=multiple`
      );
      console.log(response.data.results);
      setQuizData(response.data.results);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  useEffect(() => {
    if (quizData && currentQuestion < quizData.length) {
      setAnswerOptions([
        quizData[currentQuestion].correct_answer,
        ...quizData[currentQuestion].incorrect_answers,
      ]);
    }
  }, [quizData, currentQuestion]);

  const handleAnswerOptionClick = (isAnswerOption) => {
    const correctAnswer = quizData[currentQuestion].correct_answer;
    if (isAnswerOption === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <ReviewForm score={score} subject={subject} />
        </div>
      ) : (
        <>
          {quizData && quizData.length > 0 && (
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>
              </div>
              <div className="question-text">
                {filterInput(quizData[currentQuestion].question)}
              </div>
            </div>
          )}
          {answerOptions.length > 0 && (
            <div className="answer-section">
              {answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  className="__btn white-to-green wide-btn text-capitalize"
                  onClick={() => handleAnswerOptionClick(answerOption)}
                >
                  {filterInput(answerOption)}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default QuizSubject;
