import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./quizsubject.css";

const QuizSubject = () => {
  // const questions = [
  //     {
  // 		questionText: 'Which is not a type of neuron?',
  //         category: 'Maths',
  // 		answerOptions: [
  // 			{ answerText: 'Relay Neuron', isCorrect: false },
  // 			{ answerText: 'Sensory Neuron', isCorrect: false },
  // 			{ answerText: 'Perceptual Neuron', isCorrect: true },
  // 			{ answerText: 'Motor Neuron', isCorrect: false },
  // 		],
  // 	},

  category: "Science: Mathematics";
  correct_answer: "7";
  difficulty: "easy";
  incorrect_answers: (3)[("8", "6", "5")];
  question: "How many sides does a heptagon have?";
  type: "multiple";
  // 	{
  // 		questionText: 'The element involved in making human blood red is which of the following?',
  //         category: 'Maths',
  // 		answerOptions: [
  // 			{ answerText: 'Copper', isCorrect: false },
  // 			{ answerText: 'Iron', isCorrect: true },
  // 			{ answerText: 'Cobalt', isCorrect: false },
  // 			{ answerText: 'Iridium', isCorrect: false },
  // 		],
  // 	},
  // 	{
  // 		questionText: 'Which vessel pumps oxygenated blood around the body?',
  //         category: 'Maths',
  // 		answerOptions: [
  // 			{ answerText: 'Aorta', isCorrect: true },
  // 			{ answerText: 'Capillaries', isCorrect: false },
  // 			{ answerText: 'Vena Cava', isCorrect: false },
  // 			{ answerText: 'Pulmonary Artery', isCorrect: false },
  // 		],
  // 	},
  // 	{
  // 		questionText: 'Which type of blood vessel has valves inside?',
  //         category: 'Maths',
  // 		answerOptions: [
  // 			{ answerText: 'Artery', isCorrect: false },
  // 			{ answerText: 'Capillary', isCorrect: false },
  // 			{ answerText: 'Aorta', isCorrect: false },
  // 			{ answerText: 'Vein', isCorrect: true },
  // 		],
  // 	},
  // ]

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
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };
    fetchQuizData();
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
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
		  {const answerOptions = [quizData[currentQuestion].correct_answer, ...quizData[currentQuestion].incorrect_answers]}
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizSubject;
