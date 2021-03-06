import React from 'react';
import Fade from 'react-reveal';
import Bounce from 'react-reveal';
import MenuPDF from '../MenuPDF/menu.pdf';
import './style.css';
import { Link } from 'react-router-dom';

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
              <p className="intro-text--body">We serve up specialty brick oven pizzas and classic favorites with a creative twist. Be sure to check out our daily specials!</p>
              <a className="intro-text--link" href={MenuPDF} target="_blank" rel="noreferrer">View Menu</a>
            </div>
          </Fade>
        </section>
        <section className="intro-row" id="good-drinks">
          <Fade left>
            <div className="intro-text text-left">
              <h1 className="intro-text--heading">Good Drinks</h1>
              <p className="intro-text--body">We have the largest selection of craft beer you'll find on the island, with 46 beers on tap. Not a beer drinker? We also serve craft cocktails and wine</p>
              <Link className="intro-text--link" to="beer">View Drinks</Link>
            </div>
          </Fade>
          <div className="intro-image image-right" id="intro-image--good-drinks"></div>
        </section>
        <section className="intro-row" id="good-times">
          <div className="intro-image image-left" id="intro-image--good-times"></div>
          <Fade right>
            <div className="intro-text text-right">
              <h1 className="intro-text--heading">Good Times</h1>
              <p className="intro-text--body">Stop by for Happy Hour from open 'til 7, Monday through Friday, and live music every weekend. Dogs and kids welcome!</p>
              <a className="intro-text--link" href="https://www.instagram.com/goodnightirenes/">Learn More</a>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  )
}

export default Home;