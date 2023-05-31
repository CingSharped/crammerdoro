import React from 'react'

const Review = () => {

    const reviews = [
        {
            subject: "English",
            score: 8,
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
            subject: "Science",
            score: 8,
            log: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis quidem dolorum ipsum quasi hic ex repellendus assumenda sequi odio! Maxime nemo fugit at reiciendis molestiae eveniet veniam eos in!",
        },
    ];

    return (
        <>
            <div className='review-container'>
                <div className='review-border mt-2'>
                    <h3>Review</h3>

                    <div className="row align-items-center">
                        <div className="col fw-bold mb-2">
                            Subject
                        </div>
                        <div className="col fw-bold mb-2">
                            Score
                        </div>
                        <div className="col fw-bold mb-2">
                            Log
                        </div>
                    </div>

                    {reviews.map((review, index) => (
                        <div className='row align-items-center' key={index}>
                            <div className='col mb-3'>
                                {review.subject}
                            </div>
                            <div className='col mb-3'>
                                {review.score}
                            </div>
                            <div className='col mb-3'>

                                {review.log.length > 50 ? (
                                    review.log.substring(0, 50)
                                ) : (
                                    review.log
                                )}

                                {review.log.length > 50 && (
                                    <a>
                                        ...
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Review
