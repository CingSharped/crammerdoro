import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactFullpage from "@fullpage/react-fullpage";

import studying from '../../assets/studying.png'

const Home = () => {
  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000}
        scrollHorizontally={true}
        render={() => {
          return (
            <ReactFullpage.Wrapper>

              <div className="section homepage">
                <div className='left-container'>
                  <Button className='login-btn' variant="outline-info" size='lg'><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></Button>

                  <Button className='register-btn' variant="outline-info" size='lg'><Link to="/register" style={{ textDecoration: 'none' }}>Register</Link></Button>
                </div>

                <div className='right-container'>
                  <img src={studying} alt="student studying" className="studying" />
                </div>
              </div>

              <div className="section">
                <div className='left-container'>

                  <img src={studying} alt="student studying" className="studying" />

                </div>

                <div className='right-container'>

                </div>
              </div>

              <div className="section">

                <div className='left-container'>

                </div>

                <div className='right-container'>
                  <img src={studying} alt="student studying" className="studying" />
                </div>

              </div>

            </ReactFullpage.Wrapper >
          );
        }}
      />
    </>
  )
}

export default Home
