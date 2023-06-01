import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import ReactFullpage from "@fullpage/react-fullpage";

import './dashboard.css'
import { useAuth } from '../../context';
import Review from '../../components/Review';
import TryThese from '../../components/TryThese';

const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState('Select a subject');

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  const { user } = useAuth()

  return (
    <>
      <div className="dashboard">
        <ReactFullpage
          scrollingSpeed={1000}
          scrollHorizontally={true}
          licenseKey="gplv3-license"
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">

                  <div className='dashboard-container'>
                    <div>
                      <h1 className='text-capitalize'>Welcome, <br /> {user.username}</h1>
                    </div>

                    <div className='dashboard-btns'>
                      <DropdownButton
                        id="dropdown-basic-button"
                        size="lg"
                        title={selectedSubject}
                        className='subject-dropdown'
                      >
                        <Dropdown.Item onClick={() => handleSubjectSelect('Select a subject')}>Reset</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSubjectSelect('All')}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSubjectSelect('Maths')}>Maths</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSubjectSelect('Science')}>Science</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSubjectSelect('History')}>History</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSubjectSelect('Geography')}>Geography</Dropdown.Item>
                      </DropdownButton>

                      <Button variant="outline-primary" size="lg" className='quiz-button'>Quiz</Button>
                      <Button variant="outline-primary" size="lg" className='flashcards-button'>Flashcards</Button>
                    </div>

                  </div>
                </div>

                <div className="section">
                  <TryThese />
                </div>

                <div className="section">
                  <Review />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
}

export default Dashboard;
