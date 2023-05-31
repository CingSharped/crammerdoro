import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactFullpage from "@fullpage/react-fullpage";

import scroll from '../../assets/scroll down.png'
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
                <div className='landing'>
                  <div className='landing-left' style={{width:'50vw'}}>
                    <img src="Cramodoro.png" id='cramodoro-image'/>
                    <h5 id='intro'> Whether you're a student or a professional we have the perfect tools to expand your mind and master new subjects, with the help of our built-in pomodoro timer feature will help you stay focused and maximize your study or work sessions. </h5>
                    <div className='btn-holder'>
                      <Link to='/register'>
                        <button className='landing-btn' id='signup-btn'>Sign Up</button>
                      </Link>
                      <Link to='/login'>
                        <button className='landing-btn' id='login-btn'>Login</button>
                      </Link>
                    </div>
                  </div>
                  <div className='landing-right' style={{width:'50vw'}}>
                    <img src="man-at-desk.jpeg" id='studying-image'/>
                  </div>
                </div>
              </div>

              <div className="section">
                <h2>Heroes</h2>
              </div>
              <div className="section">
                <h2>Villains</h2>
              </div>
            </ReactFullpage.Wrapper>
           );
        }}
      /> 
    </>
  )
}

export default Home
