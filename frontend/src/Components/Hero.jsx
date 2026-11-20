
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-label">
          THE NEW SEASON COLLECTION
        </p>

        <h1>
          Style is a way
          <br />
          to express <em>yourself.</em>
        </h1>

        <p className="hero-description">
          Discover timeless silhouettes and modern
          western fashion designed for every moment.
        </p>

        <a href="#categories" className="hero-button">
          EXPLORE COLLECTION
        </a>

      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200"
          alt="Women's luxury fashion collection"
        />
      </div>

    </section>
  );
};

export default Hero;
