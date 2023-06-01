import React, { useState } from 'react'
import { useAuth } from '../../context'
import "./style.css";

const ReviewForm = ({subject, score}) => {
  const [input, setInput] = useState()
  const [submitValue, setSubmitValue] = useState()
  const { user } = useAuth()

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
    console.log(review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createReview(input)
  }

  return (
    <form className='review-form'>
      <label htmlFor="log"></label>
      <input 
        className='review-log'
        name='log'
        aria-label='Study Review input field'
        type="text" 
        placeholder='I struggled with the fraction questions, might need to do some revision on those for next time'
        onChange={handleInput}
        height='400'
      />
      <button
        type='submit'
        className='btn review-btn'
        onSubmit={handleSubmit}
      ></button>
    </form>
  )
}

export default ReviewForm