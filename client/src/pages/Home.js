import React from 'react';
import Fade from 'react-reveal';
import Bounce from 'react-reveal';

const Home = () => {
  return (
    <div>
      <div className="hero-image"></div>
      <Fade up><div className="intro-headline">
        Every night's a good night at Wildwood's original brick oven pizza and tap house. 
      </div></Fade>
      
      <div className="intro-sections">
        <section className="intro-row" id="good-eats">
          <Bounce>
            <div className="intro-image image-left" id="intro-image--good-eats"></div>
          </Bounce>
          <Fade right>
            <div className="intro-text text-right">
              <h1 className="intro-text--heading">Good Eats</h1>
              <p className="intro-text--body">Some blurb about the food. Maybe three sentences. Photo of the pizza.</p>
              <a className="intro-text--link">View Menu</a>
            </div>
          </Fade>
        </section>
        <section className="intro-row" id="good-drinks">
          <Fade left>
            <div className="intro-text text-left">
              <h1 className="intro-text--heading">Good Drinks</h1>
              <p className="intro-text--body">Some blurb about the beer and drinks. Maybe three sentences. Photo of a beer. Include info about happy hour?</p>
              <a className="intro-text--link">View Drinks</a>
            </div>
          </Fade>
          <div className="intro-image image-right" id="intro-image--good-drinks"></div>
        </section>
        <section className="intro-row" id="good-times">
          <div className="intro-image image-left" id="intro-image--good-times"></div>
          <Fade right>
            <div className="intro-text text-right">
              <h1 className="intro-text--heading">Good Times</h1>
              <p className="intro-text--body">Some blurb about the specials and events. Maybe three sentences. Photo of something, doesn't matter. Link this to the instagram</p>
              <a className="intro-text--link">Learn More</a>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  )
}

export default Home;