import React, { useState } from 'react';
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Mark from '../components/mark'
import Card from '../components/card'
import Accordion from '../components/accordion'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import Review from '../components/review'
import Article from '../components/article'
import FAQ from '../components/faq'
import Timer from '../components/timer'
import ToDoList from '../components/todo'; // Adjust the path as necessary if your file structure is different
import PomodoroTimer from '../components/pomodoro'; // Adjust the path as necessary
import TaskInput from '../components/task'; // Make sure the path matches your file structure

import './home.css'

const Home = (props) => {

  const [activeFeature, setActiveFeature] = useState('customizable');

  // Function to handle feature click
  const handleFeatureClick = (feature) => {
    setActiveFeature(feature);
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <section className="home-section">
        <h1 className="home-heading">
          <span className="home-text">Productivity</span>
          <br className="home-text01"></br>
          <span className="home-text02">      Hacks</span>
          <br></br>
        </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label className="home-caption">
          Your hub for all things productivity
        </label>
      </section>
      <section className="home-section01">
        <h2 className="home-text04">Interactive Timer</h2>
        <div className="home-features">
      <header className={`feature ${activeFeature === 'customizable' ? 'feature-active' : ''}`} onClick={() => handleFeatureClick('customizable')}>
        <h3>Customizable</h3>
        <p>Input your desired task</p>
      </header>
      <header className={`feature ${activeFeature === 'suggestions' ? 'feature-active' : ''}`} onClick={() => handleFeatureClick('suggestions')}>
        <h3>Suggestions</h3>
        <p>Receive timely reminders</p>
      </header>
      <header className={`feature ${activeFeature === 'soft-tone' ? 'feature-active' : ''}`} onClick={() => handleFeatureClick('soft-tone')}>
        <h3>Soft Tone</h3>
        <p>Receive your alarm differently</p>
      </header>


      <div className={`home-indicator ${activeFeature}`}></div>
    </div>
        <div className="home-note">
          <div className="home-content1">
            <main className="home-main1">
              <h2 className="home-heading01">
                Task
              </h2>
              <p className="home-paragraph">
              <TaskInput />
              </p>
            </main>
      
          </div>
          <div className="home-image02">
            <Timer/>
          </div>
          
        </div>
      </section>
      <section className="home-section02">
        <header className="home-header01">
          <h2 className="home-text17">To Do List</h2>
          <span className="home-text18">
            Add whatever you want to do. Prioritize, Complete, Improve.
            <ToDoList/>
          </span>
        </header>
        <section className="home-note1">
          <div className="home-image03">

          </div>
          <div className="home-content2">
            <div className="home-main2">
              <div className="home-caption1">
              </div>
            </div>

          </div>
        </section>
        <section className="home-note2">
          <div className="home-content3">
            <main className="home-main3">
              <header className="home-caption2">
              </header>
              <main className="home-heading04">
                <header className="home-header02">
                  <h2 className="section-heading">
                    Pomodoro Timer
                  </h2>
                  <p className="section-description">
                    The most renowned time management technique. Try it below.
                  </p>
                  <PomodoroTimer />
                </header>

              </main>
            </main>
          </div>
        </section>
      </section>
      <footer className="home-footer">
        <div className="home-content6">
          <main className="home-main-content">
            <div className="home-content7">
              <header className="home-main4">
                <div className="home-header14">
                  <span className="home-text44">
                    We hope you had a productive session!
                  </span>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category">
                  <div className="home-header15">
                    <span className="footer-header">Features</span>
                  </div>
                  <div className="home-links">
                    <span className="footer-link">Interactive Timer</span>
                    <span className="footer-link">List Tracking</span>
                    <span className="footer-link">Pomodoro</span>
                    <span className="footer-link">More Coming Soon!</span>
                  </div>
                </div>
                <div className="home-category1">
                  <div className="home-header16">
                    <span className="footer-header">Explore More</span>
                  </div>
                  <div className="home-links1">
                  <div class="explore-more">
  <a href="https://zenhabits.net/" class="white-link" target="_blank" rel="noopener noreferrer">
    ZenHabits
  </a>
</div>
<div class="explore-more">
  <a href="https://www.productivity501.com/" class="white-link" target="_blank" rel="noopener noreferrer">
    ProductivityHabits
  </a>
</div>
<div class="explore-more">
  <a href="https://www.jamesclear.com" class="white-link" target="_blank" rel="noopener noreferrer">
    Atomic Habits
  </a>
</div>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright">
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main5">
              <h1 className="home-heading18">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy3 button">
                  <span className="home-text59">-&gt;</span>
                  <span className="home-text60">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
        </div>
      </footer>
      <div>
        <div className="home-container5">
          

        </div>
      </div>
    </div>
  )
}

export default Home
