import React from 'react'
import { OverlayTrigger, Popover } from 'react-bootstrap';

const Review = () => {

    const reviews = [
        {
            subject: "English",
            score: 8,
            log: "I felt great about this quiz",
            createdOn: "2023-01-01"
        },
        {
            subject: "Maths",
            score: 5,
            log: "I felt great about this quiz too",
            createdOn: "2022-01-01"
        },
        {
            subject: "Science",
            score: 1,
            log: "Could have done better",
            createdOn: "2021-01-01"
        },
        {
            subject: "Science",
            score: 7,
            log: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis quidem dolorum ipsum quasi hic ex repellendus assumenda sequi odio! Maxime nemo fugit at reiciendis molestiae eveniet veniam eos in!",
            createdOn: "2021-02-01"
        },
        {
            subject: "English",
            score: 3,
            log: "I felt great about this quiz",
            createdOn: "2021-02-01"
        },
        {
            subject: "Maths",
            score: 9,
            log: "I felt great about this quiz too",
            createdOn: "2021-01-02"
        },
        {
            subject: "Science",
            score: 4,
            log: "Could have done better",
            createdOn: "2021-01-02"
        },
        {
            subject: "Science",
            score: 0,
            log: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis quidem dolorum ipsum quasi hic ex repellendus assumenda sequi odio! Maxime nemo fugit at reiciendis molestiae eveniet veniam eos in!",
            createdOn: "2022-02-02"
        },
        {
            subject: "English",
            score: 3,
            log: "I felt great about this quiz",
            createdOn: "2023-03-03"
        },
        {
            subject: "Maths",
            score: 9,
            log: "I felt great about this quiz too",
            createdOn: "2023-01-01"
        },
        {
            subject: "Science",
            score: 4,
            log: "Could have done better",
            createdOn: "2022-01-01"
        },
        {
            subject: "Science",
            score: 0,
            log: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis quidem dolorum ipsum quasi hic ex repellendus assumenda sequi odio! Maxime nemo fugit at reiciendis molestiae eveniet veniam eos in!",
            createdOn: "2021-01-01"
        }
    ];

    const sortedReviews = reviews.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn)).slice(0, 10)

    function formatDate(dateString) {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options);
    }

    return (
        <>
            <div className='review-container d-flex'>
                <div className='review-border mt-5'>

                    <div className="container mt-4">
                        <h3>Review</h3>
                    </div>

                    <div className="row align-items-center">
                        <div className="col fw-bold mt-4">
                            Subject
                        </div>
                        <div className="col fw-bold mt-4">
                            Score
                        </div>
                        <div className="col fw-bold mt-4">
                            Comment
                        </div>
                    </div>

                    {sortedReviews.map((review, index) => (
                        <div className='row align-items-center' key={index}>
                            <div className='col mt-4'>
                                {review.subject}
                            </div>
                            <div className='col mt-4'>
                                {review.score}
                            </div>
                            {review.log.length > 50 ? (
                                <OverlayTrigger
                                    placement='top'
                                    overlay={
                                        <Popover>
                                            <Popover.Header as='h3'>{review.subject}</Popover.Header>
                                            <Popover.Body className='pb-0 fst-italic'>"{review.log}"</Popover.Body>
                                            <Popover.Body className="text-muted fw-lighter" style={{ float: "right" }}>{formatDate(review.createdOn)}</Popover.Body>
                                        </Popover>
                                    }
                                >

                                    <div className='col mt-4 fst-italic'>
                                        "{review.log.substring(0, 50)}
                                        <a style={{ color: "red" }}>...</a>"
                                        <a style={{ color: "red", fontSize: "x-small" }}> (hover)</a>
                                    </div>
                                </OverlayTrigger>
                            ) : (
                                <div className='col mt-4 fst-italic'>"{review.log}"</div>
                            )}
                        </div>
                    ))}
                </div >
            </div >
        </>
    )
}

export default Review
