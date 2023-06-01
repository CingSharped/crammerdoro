import React, { useState, useEffect } from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../../context';

import './review.css'

const Review = () => {
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

    const sortedReviews = reviews.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn)).slice(0, 8)

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
                <div className='review-border mt-5'>

                    <div className="container mt-4">
                        <h3>Review</h3>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-2 fw-bold fs-3 mt-4 text-white">
                            Score
                        </div>
                        <div className="col-md-4 fw-bold fs-3 mt-4 text-white">
                            Subject
                        </div>
                        <div className="col fw-bold fs-3 mt-4 text-white">
                            Comment
                        </div>
                    </div>

                    {sortedReviews.map((review, index) => (
                        <div className='row align-items-center' key={index}>
                            <div className='col-md-2 mt-4 fs-4 fst-bold text-white'>
                                {review.score} |  {getEmoji(review.score)}
                            </div>
                            <div className='col-md-4 mt-4 fs-4 text-white'>
                                {review.subject}
                            </div>
                            {review.log.length > 50 ? (
                                <OverlayTrigger
                                    placement='top'
                                    overlay={
                                        <Popover>
                                            <Popover.Header as='h3'>{review.subject} : {getEmoji(review.score)}</Popover.Header>
                                            <Popover.Body className='pb-0 fst-italic'>"{review.log}"</Popover.Body>
                                            <Popover.Body className="text-muted fw-lighter" style={{ float: "right" }}>{formatDate(review.createdOn)}</Popover.Body>
                                        </Popover>
                                    }
                                >

                                    <div className='col mt-4 fs-4 fst-italic text-white'>
                                        "{review.log.substring(0, 50)}
                                        <a style={{ color: "red" }}>...</a>"
                                        <a style={{ color: "red", fontSize: "x-small" }}> (hover)</a>
                                    </div>
                                </OverlayTrigger>
                            ) : (
                                <div className='col mt-4 fs-4 fst-italic text-white'>"{review.log}"</div>
                            )}
                        </div>
                    ))}
                </div >
            </div >
        </>
    )
}

export default Review
