import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="hero-image"></div>
      <section className="intro-section">
        <div className="intro-card">
          <div className="card-body">
            <h3 className="card-title">
              Good Food
            </h3>
            <p className="card-text">
              Some blurb about the food. Maybe three sentences. Photo of the pizza.
            </p>
            <a className="card-link" href="3">View Menu</a>
          </div>
        </div>
        <div className="intro-card">
          <div className="card-body">
            <h3 className="card-title">
              Good Drinks
            </h3>
            <p className="card-text">
              Some blurb about the beer and drinks. Maybe three sentences. Photo of a beer. Include info about happy hour?
            </p>
            <a className="card-link" href="3">View Drinks</a>
          </div>
        </div>
        <div className="intro-card">
          <div className="card-body">
            <h3 className="card-title">
              Good Times
            </h3>
            <p className="card-text">
              Some blurb about the specials and events. Maybe three sentences. Photo of something, doesn't matter. Link this to the instagram
            </p>
            <a className="card-link" href="3">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;