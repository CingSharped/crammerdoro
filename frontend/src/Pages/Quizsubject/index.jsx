import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './quizsubject.css'





const QuizSubject = () => {
    const questions = [
        {
			questionText: 'Which is not a type of neuron?',
            category: 'Maths',
			answerOptions: [
				{ answerText: 'Relay Neuron', isCorrect: false },
				{ answerText: 'Sensory Neuron', isCorrect: false },
				{ answerText: 'Perceptual Neuron', isCorrect: true },
				{ answerText: 'Motor Neuron', isCorrect: false },
			],
		},
		{
			questionText: 'The element involved in making human blood red is which of the following?',
            category: 'Maths',
			answerOptions: [
				{ answerText: 'Copper', isCorrect: false },
				{ answerText: 'Iron', isCorrect: true },
				{ answerText: 'Cobalt', isCorrect: false },
				{ answerText: 'Iridium', isCorrect: false },
			],
		},
		{
			questionText: 'Which vessel pumps oxygenated blood around the body?',
            category: 'Maths',
			answerOptions: [
				{ answerText: 'Aorta', isCorrect: true },
				{ answerText: 'Capillaries', isCorrect: false },
				{ answerText: 'Vena Cava', isCorrect: false },
				{ answerText: 'Pulmonary Artery', isCorrect: false },
			],
		},
		{
			questionText: 'Which type of blood vessel has valves inside?',
            category: 'Maths',
			answerOptions: [
				{ answerText: 'Artery', isCorrect: false },
				{ answerText: 'Capillary', isCorrect: false },
				{ answerText: 'Aorta', isCorrect: false },
				{ answerText: 'Vein', isCorrect: true },
			],
		},
	]


    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    
    const { subject } = useParams();
   


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
        		<div className='quiz-container'>
        			{showScore ? (
        				<div className='score-section'>
        					You scored {score} out of {questions.length}
        				</div>
        			) : (
        				<>
        					<div className='question-section'>
        						<div className='question-count'>
        							<span>Question {currentQuestion + 1}</span>/{questions.length}
        						</div>
        						<div className='question-text'>{questions[currentQuestion].questionText}</div>
        					</div>
        					<div className='answer-section'>
        						{questions[currentQuestion].answerOptions.map((answerOption) => (
        							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
        						))}
        					</div>
        				</>
        			)}
        		</div>
        	);

        



}


export default QuizSubject
