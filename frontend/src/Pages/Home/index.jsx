import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ReactFullpage from "@fullpage/react-fullpage";

import './home.css'

const Home = () => {
  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000}
        scrollHorizontally={true}
        licenseKey="gplv3-license"
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section homepage" id='landing'>
                <div className="left-container">
                  <h5 id="intro">
                    {" "}
                    Whether you're a student or a professional we have the
                    perfect tools to expand your mind and master new subjects,
                    with the help of our built-in pomodoro timer feature will
                    help you stay focused and maximise your study or work
                    sessions.{" "}
                  </h5>
                  <div className="btn-holder">
                    <Link to="/register">
                      <button className="landing-btn" id="signup-btn">
                        Sign Up
                      </button>
                    </Link>
                    <HashLink smooth to="#learn-more">
                      <button className="landing-btn" id="learn-btn">
                        Learn More
                      </button>
                    </HashLink>
                  </div>
                </div>
                <div className="right-container">
                  <img src="man-at-desk.jpeg" id="studying-image" />
                </div>
              </div>

              <div className="section" id="learn-more">
                <HashLink smooth to="#landing">

                  <div className="left-container">
                    <div id='timer-screenshot'>
                      <img src="timer.png" id="pomodoro-image" style={{ width: '5rem' }} />
                      <br />
                      <img src="flashcards example.png" id="flashcard-image" style={{ width: '50rem' }} />
                    </div>

                  </div>


                  <div className="right-container">
                    <h5 id="pomodoro-info">
                      {" "}
                      Click on the timer icon in the navbar to activate the Pomodoro timer. Challenge yourself and use this while you're doing the quizzes. {" "}
                    </h5>

                    <h5 id="flashcard-info">
                      {" "}
                      Visit Flashcards from the navbar to view flashcards for different subjects. {" "}
                    </h5>

                  </div>
                  <Button>top</Button>
                </HashLink>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default Home
