import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactFullpage from "@fullpage/react-fullpage";

import scroll from '../../assets/scroll down.png'
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
                <h2>Home</h2>

                <div className='left-container'>
                  <Button className='login-btn' variant="outline-info" size='lg'><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></Button>

                  <Button className='register-btn' variant="outline-info" size='lg'><Link to="/register" style={{ textDecoration: 'none' }}>Register</Link></Button>
                </div>

                <div className='right-container'>
                  <img src={studying} alt="student studying" className="studying" />
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

      {/* <div className='homepage'>


        <div>
          <img src={scroll} alt="scroll-down" style={{ width: '1.5%', transform: 'translate(0vh, 32vh)', justifyContent: 'center' }} />
        </div>
      </div> */}
    </>
  )
}

export default Home
