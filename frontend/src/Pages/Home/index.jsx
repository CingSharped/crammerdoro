import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
              <div className="section homepage" id='landing'>
                <div className='left-container'>
                  <h5 id='intro'> Whether you're a student or a professional we have the perfect tools to expand your mind and master new subjects, with the help of our built-in pomodoro timer feature will help you stay focused and maximise your study or work sessions. </h5>
                  <div className='btn-holder'>
                    <Link to='/register'>
                      <button className='landing-btn' id='signup-btn'>Sign Up</button>
                    </Link>
                    <HashLink smooth to='#section-2'>
                      <button className='landing-btn' id='learn-btn'>Learn More</button>
                    </HashLink>
                  </div>
                </div>
                <div className='right-container'>
                  <img src="man-at-desk.jpeg" id='studying-image' />
                </div>
              </div>

              <div className='section' id='section-2'>

                <HashLink smooth to='#landing'>
                  <Button>top</Button>
                </HashLink>
              </div>


              <div className='section' id='section-3'>

                <div className='left-container'>

                </div>

                <div className='right-container'>

                </div>

              </div>

            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  )
}

export default Home
