import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactFullpage from "@fullpage/react-fullpage";

import scroll from '../../assets/scroll down.png'
import './home.css'

const Home = () => {
  return (
    <>

      {/* <ReactFullpage
        scrollingSpeed={1000}
        scrollHorizontally={true}
        render={() => {
          return ( */}
            {/* <ReactFullpage.Wrapper> */}
              <div className="section homepage">
                <div className='landing'>
                  <div className='landing-left' style={{width:'50vw'}}>
                    <img src="Cramodoro.png" id='cramodoro-image'/>
                    <h5 id='intro'> Whether you're a student, a professional seeking to enhance your skills, or simply a curious mind eager to explore new subjects, we have the perfect tools expand your mind and master new subjects.</h5>
                    <div className='btn-holder'>
                      <button className='landing-btn' id='signup-btn'>Sign Up</button>
                      <button className='landing-btn' id='login-btn'>Log in</button>
                    </div>
                  </div>
                  <div className='landing-right' style={{width:'50vw'}}>
                    <img src="AdobeStock_506811114.jpeg" id='studying-image'/>
                  </div>
                </div>
              </div>

              <div className="section">
                <h2>Heroes</h2>
              </div>
              <div className="section">
                <h2>Villains</h2>
              </div>
            {/* </ReactFullpage.Wrapper> */}
          {/* );
        }}
      /> */}
    </>
  )
}

export default Home
