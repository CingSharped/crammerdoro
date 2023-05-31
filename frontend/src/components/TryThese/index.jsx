import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TryThese = () => {

    const reviews = [
        {
            subject: "English",
            score: 8,
            log: "I felt great about this quiz",
        },
        {
            subject: "Maths",
            score: 5,
            log: "I felt great about this quiz too",
        },
        {
            subject: "History",
            score: 1,
            log: "Could have done better",
        },
        {
            subject: "Science",
            score: 7,
            log: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis quidem dolorum ipsum quasi hic ex repellendus assumenda sequi odio! Maxime nemo fugit at reiciendis molestiae eveniet veniam eos in!",
        },
        {
            subject: "English",
            score: 3,
            log: "I felt great about this quiz",
        },
        {
            subject: "Maths",
            score: 9,
            log: "I felt great about this quiz too",
        },
        {
            subject: "Science",
            score: 4,
            log: "Could have done better",
        },
        {
            subject: "English",
            score: 0,
            log: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis quidem dolorum ipsum quasi hic ex repellendus assumenda sequi odio! Maxime nemo fugit at reiciendis molestiae eveniet veniam eos in!",
        },
        {
            subject: "Maths",
            score: 0,
            log: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis quidem dolorum ipsum quasi hic ex repellendus assumenda sequi odio! Maxime nemo fugit at reiciendis molestiae eveniet veniam eos in!",
        }
    ];

    const sortedReviews = reviews.sort((a, b) => a.score - b.score).slice(0, 3);

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

                    <div className="container mt-4">
                        <h3>Try These</h3>
                    </div>

                    <div className="options-container row mx-4 d-flex justify-content-around">

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

                                <Link to={`/subjectflashcard/${review.subject.toLowerCase()}`}>
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
