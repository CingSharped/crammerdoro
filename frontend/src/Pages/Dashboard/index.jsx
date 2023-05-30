import React from 'react'
import { Row, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import scroll from '../../assets/scroll down.png'

const Dashboard = () => {
  return (
    <>
      <div className='dashboard'>
        <h1>Welcome 'user'</h1>

        <DropdownButton id="dropdown-basic-button" size="lg" title="Select a subject" className='subject-dropdown'>
          <Dropdown.Item href="#/action-1">Maths</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Science</Dropdown.Item>
          <Dropdown.Item href="#/action-3">History</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Geography</Dropdown.Item>
        </DropdownButton>

        <Button variant="outline-primary" size="lg" className='quiz-button'>Quiz</Button>
        <Button variant="outline-primary" size="lg" className='flashcards-button'>Flashcards</Button>

        <div className='review-section'>
          <h3>Review</h3>
          <div className='review-container'>
            <div className='review-border'>

            </div>
          </div>
        </div>

        <img src={scroll} alt="scroll-down" style={{ width: '1.5%', transform: 'translate(0vw, 75vh)', justifyContent: 'center' }} />

      </div>
    </>
  )
}

export default Dashboard

export default Dashboard