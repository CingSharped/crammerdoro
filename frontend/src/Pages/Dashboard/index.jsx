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
                    <div><h1 className='text-capitalize'>Welcome, {user.username} :)</h1></div>
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
