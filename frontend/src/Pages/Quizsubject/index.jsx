import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./quizsubject.css";


const QuizSubject = () => {
  const [answerOptions, setAnswerOptions] = useState([]) 
 

  // category: "Science: Mathematics";
  // correct_answer: "7";
  // difficulty: "easy";
  // incorrect_answers: (3)[("8", "6", "5")];
  // question: "How many sides does a heptagon have?";
  // type: "multiple";


  const { subject } = useParams();

  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const subjectNumber = { Maths: 19, Science: 17, History: 23 };

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${subjectNumber[subject]}&type=multiple`
        );
        setQuizData(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };
    fetchQuizData();
  }, []);


  useEffect(() => {

    if (quizData) {
      setAnswerOptions([quizData[currentQuestion].correct_answer, ...quizData[currentQuestion].incorrect_answers])
    }
    
    // console.log(quizData[currentQuestion].incorrect_answers)
  }, [quizData]);

 
  
  const handleAnswerOptionClick = (isAnswerOption) => {
    if (isAnswerOption === quizData[currentQuestion].correct_answer) {  {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setAnswerOptions([quizData[currentQuestion].correct_answer, ...quizData[currentQuestion].incorrect_answers])
    } else {
      setShowScore(true);
    }
  };
   console.log(answerOptions)
  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizData.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>
            </div>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption)}
              >
                {answerOption}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
};

export default QuizSubject;
