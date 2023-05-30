import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import ReactFullpage from "@fullpage/react-fullpage";

import './dashboard.css'
import Review from '../../components/Review';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <ReactFullpage
          scrollingSpeed={1000}
          scrollHorizontally={true}
          render={() => {
            return (
              <ReactFullpage.Wrapper>

                <div className="section">
                  <div className='left-container'>
                    <DropdownButton id="dropdown-basic-button" size="lg" title="Select a subject" className='subject-dropdown'>
                      <Dropdown.Item href="#/action-1">Maths</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Science</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">History</Dropdown.Item>
                      <Dropdown.Item href="#/action-4">Geography</Dropdown.Item>
                    </DropdownButton>

                    <Button variant="outline-primary" size="lg" className='quiz-button'>Quiz</Button>
                    <Button variant="outline-primary" size="lg" className='flashcards-button'>Flashcards</Button>
                  </div>

                  <div className='right-container'>

                  </div>
                </div>

                <div className="section">
                  <div className='left-container'>

                  </div>

                  <div className='right-container'>

                  </div>
                </div>

                <div className="section">
                  <Review />
                </div>

              </ReactFullpage.Wrapper >
            );
          }}
        />
      </div>
    </>
  )
}

export default Dashboard
