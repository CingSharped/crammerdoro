import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context'

import axios from 'axios'
import "./style.css";

const ReviewForm = ({ subject, score }) => {
  const [input, setInput] = useState()
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const createReview = async (log) => {
    const newReview = {
      subject,
      score,
      log,
      createdBy: user,
    }
    const review = await axios.post("https://crammerdoro-backend.onrender.com/reviews", newReview);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createReview(input)
    navigate('/dashboard')
  }

  return (
    <>
      <h2>Congratulations!</h2>
      <h5>Your Score: {score}</h5>
      <h5>Subject: {subject}</h5>

      <form className="review-form" onSubmit={handleSubmit}>
        <h3>Your review</h3>
        <label htmlFor="log"></label>
        <textarea
          className="review-log"
          name="log"
          aria-label="Study Review input field"
          placeholder="I struggled with the fraction questions, might need to do some revision on those for next time"
          onChange={handleInput}
          height="400"
        />
        <button
          aria-label='submit button'
          type="submit"
          className="primary-btn __btn"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default ReviewForm
