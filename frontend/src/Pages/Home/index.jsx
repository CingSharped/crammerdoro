import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactFullpage from "@fullpage/react-fullpage";

import studying from '../../assets/studying.png'
import './home.css'

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
                  {/* <Button className='login-btn' variant="outline-info" size='lg'><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></Button>

                  <Button className='register-btn' variant="outline-info" size='lg'><Link to="/register" style={{ textDecoration: 'none' }}>Register</Link></Button> */}

                  <h5 id='intro'> Whether you're a student or a professional we have the perfect tools to expand your mind and master new subjects, with the help of our built-in pomodoro timer feature will help you stay focused and maximise your study or work sessions. </h5>
                  <div className='btn-holder'>
                    <Link to='/register'>
                      <button className='landing-btn' id='signup-btn'>Sign Up</button>
                    </Link>
                    <Link to='/login'>
                      <button className='landing-btn' id='login-btn'>Login</button>
                    </Link>
                  </div>
                </div>

                <div className='right-container'>
                  <img src="man-at-desk.jpeg" id='studying-image' />
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
