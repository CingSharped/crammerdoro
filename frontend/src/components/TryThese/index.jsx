import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context';

import './trythese.css'

const TryThese = () => {

    const [reviews, setReviews] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`https://crammerdoro-backend.onrender.com/reviews/${user._id}`);

                console.log('useEffect', response.data);
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, [])

    const sortedReviews = reviews.sort((a, b) => a.score - b.score).slice(0, 3);

    function formatDate(dateString) {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options);
    }

    // https://unicode.org/emoji/charts/full-emoji-list.html
    const getEmoji = (score) => {
        if (score >= 1 && score <= 2) {
            return String.fromCodePoint(0x1FAE0); // U+1FAE0 - One Star
        } else if (score >= 3 && score <= 4) {
            return String.fromCodePoint(0x1F62A); // U+1F62A - Tired Face
        } else if (score >= 5 && score <= 6) {
            return String.fromCodePoint(0x1F642); // U+1F642 - Slightly Smiling Face
        } else if (score >= 7 && score <= 8) {
            return String.fromCodePoint(0x1F601); // U+1F601 - Grinning Face with Smiling Eyes
        } else if (score >= 9 && score <= 10) {
            return String.fromCodePoint(0x1F929); // U+1F929 - Star-Struck
        } else {
            return String.fromCodePoint(0x274C); // U+274C - Cross Mark
        }
    };

    return (
        <>
            <div className='review-container d-flex'>
                <div className='try-these mt-5 align-items-center'>

                    <div className="container mt-4 mb-4">
                        <h3>Try These</h3>
                    </div>

                    <div className="options-container col mx-4 d-flex justify-content-around">

                        {sortedReviews.map((review, index) => (
                            <div className='try-these-options mt-4 mx-4' key={index}>
                                <div className='mt-2 fs-2 fw-bold text-uppercase justify-content-center'>
                                    {review.subject}
                                </div>

                                <div className='mt-2 fs-5'>
                                    Latest Score: {review.score}
                                </div>

                                <div className='mt-2 fs-5'>
                                    {getEmoji(review.score)}
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
    )

}

export default TryThese
