import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context';

import './trythese.css';

const TryThese = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `https://crammerdoro-backend.onrender.com/reviews/${user._id}`
                );

                console.log('useEffect', response.data);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    const sortedReviews = reviews.sort((a, b) => a.score - b.score).slice(0, 3);

    function formatDate(dateString) {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options);
    }

    const motivatingMessages = [
        "You're making progress! Keep it up!",
        "Stay focused and keep practicing!",
        "You're on the right track! Keep going!",
        "Great job! Keep pushing yourself!",
        "You're doing amazing! Keep up the excellent work!",
        "Believe in yourself. You've got this!",
        "Every step counts. Keep moving forward!",
        "Your dedication will pay off. Keep going!",
        "You're capable of great things. Keep striving!",
        "Stay positive and keep giving your best!",
    ];

    const getEmoji = (score) => {
        if (score >= 1 && score <= 2) {
            return {
                emoji: String.fromCodePoint(0x1FAE0), // U+1FAE0 - One Star
                message: motivatingMessages[Math.floor(Math.random() * motivatingMessages.length)],
            };
        } else if (score >= 3 && score <= 4) {
            return {
                emoji: String.fromCodePoint(0x1F62A), // U+1F62A - Tired Face
                message: motivatingMessages[Math.floor(Math.random() * motivatingMessages.length)],
            };
        } else if (score >= 5 && score <= 6) {
            return {
                emoji: String.fromCodePoint(0x1F642), // U+1F642 - Slightly Smiling Face
                message: motivatingMessages[Math.floor(Math.random() * motivatingMessages.length)],
            };
        } else if (score >= 7 && score <= 8) {
            return {
                emoji: String.fromCodePoint(0x1F601), // U+1F601 - Grinning Face with Smiling Eyes
                message: motivatingMessages[Math.floor(Math.random() * motivatingMessages.length)],
            };
        } else if (score >= 9 && score <= 10) {
            return {
                emoji: String.fromCodePoint(0x1F929), // U+1F929 - Star-Struck
                message: motivatingMessages[Math.floor(Math.random() * motivatingMessages.length)],
            };
        } else {
            return {
                emoji: String.fromCodePoint(0x274C), // U+274C - Cross Mark
                message: motivatingMessages[Math.floor(Math.random() * motivatingMessages.length)],
            };
        }
    };

    return (
        <>
            <div className='review-container d-flex'>
                <div className='try-these mt-5 align-items-center'>
                    <div className='container mt-4 mb-4'>
                        <h2>Suggestions</h2>
                    </div>
                    <h5 id='suggestions'>
                        Based on your latest score on the quizzes, we recommend you should study with{' '}
                        <b>flashcards</b> for the following subjects:{' '}
                    </h5>
                    <div className='options-container col mx-4 d-flex justify-content-around'>
                        {sortedReviews.map((review, index) => (
                            <div className='try-these-options mt-4 mx-4' key={index}>
                                <div className='mt-2 fs-2 fw-bold text-uppercase justify-content-center'>
                                    {review.subject}
                                </div>
                                <div className='mt-2 fs-5'>Latest Score: {review.score}</div>
                                <div className='mt-2 fs-5 px-2'>
                                    <b>From Cramodoro:</b> "{getEmoji(review.score).message}" { }
                                    {getEmoji(review.score).emoji}
                                </div>
                                <Link to={`/subjectflashcard/${review.subject}`}>
                                    <Button className='mt-2 mb-2' variant='outline-secondary'>
                                        Learn More
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TryThese;
